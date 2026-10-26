/* Runs the calibration across several models, loading and unloading each one
   automatically through LM Studio's CLI.

   This is the whole comparison as one command: unload everything, load a model,
   wait for the API to offer it, ask the twenty questions whose answers we hold,
   save and score, then move to the next. No clicking, no watching.

     node unsloth/run-suite.mjs allam-plus-7b mawrooth-allam-7b gemma-4-31b
     node unsloth/run-suite.mjs --list          (show what can be loaded)
     node unsloth/run-suite.mjs --url http://127.0.0.1:1234/v1 allam-plus-7b

   Context is pinned to 8192 because the two cards give 24 GB: a 20 GB model with
   a 32k context spills into system RAM and crawls. */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const CAL = root + "unsloth/calibration/";
const key = JSON.parse(readFileSync(CAL + "key.json", "utf8"));
const LMS = process.env.LMS_CLI || process.env.USERPROFILE + "\\.lmstudio\\bin\\lms.exe";

const args = process.argv.slice(2);
const argOf = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const BASE = argOf("--url", process.env.UNSULOTH_URL || "http://127.0.0.1:1234/v1").replace(/\/chat\/completions$/, "").replace(/\/$/, "");
const CONTEXT = Number(argOf("--context", "8192"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (args.includes("--list") || args.length === 0) {
  console.log(execFileSync(LMS, ["ls"], { encoding: "utf8" }));
  process.exit(0);
}

const models = args.filter((a) => !a.startsWith("--") && a !== argOf("--url", "") && a !== argOf("--context", ""));

const norm = (s) => String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
  .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ").trim();
const words = (s) => new Set(norm(s).split(" ").filter((w) => w.length >= 4));
const overlap = (a, b) => {
  const A = words(a), B = words(b);
  if (!A.size || !B.size) return 0;
  let hit = 0;
  for (const w of A) if (B.has(w)) hit++;
  return Math.round((hit / Math.min(A.size, B.size)) * 100);
};

const items = [];
key.people.forEach((p, i) => items.push({ id: "p" + String(i + 1).padStart(2, "0"), kind: "people", input: p.input, expected: p.expected }));
key.words.forEach((w, i) => items.push({ id: "w" + String(i + 1).padStart(2, "0"), kind: "words", input: w.input, expected: w.expected }));

const promptFor = (it) =>
  it.kind === "people"
    ? "من هو هذا الشخص؟ اكتب سطراً واحداً بالعربية، ثم TAB، ثم رابط مصدر إن عرفته.\nإن لم تعرف فاكتب سطراً فارغاً.\n\n" + it.input
    : "ما معنى هذه الكلمة في اللهجة الإماراتية؟ سطر واحد بالعربية، ثم TAB، ثم رابط مصدر إن عرفته.\nإن لم تعرف فاكتب سطراً فارغاً.\n\n" + it.input;

async function loadedModels() {
  try {
    const r = await fetch(BASE + "/models", { signal: AbortSignal.timeout(8000) });
    const j = await r.json();
    return (j.data || []).map((m) => m.id);
  } catch { return []; }
}

async function waitFor(identifier, seconds) {
  const until = Date.now() + seconds * 1000;
  while (Date.now() < until) {
    const ids = await loadedModels();
    if (ids.some((id) => id.includes(identifier) || identifier.includes(id))) return ids.find((id) => id.includes(identifier)) || ids[0];
    await sleep(3000);
  }
  return null;
}

async function ask(model, prompt) {
  const r = await fetch(BASE + "/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ model, messages: [{ role: "user", content: prompt }], temperature: 0, max_tokens: 300, stream: false }),
    signal: AbortSignal.timeout(240000)
  });
  if (!r.ok) throw new Error("HTTP " + r.status);
  const j = await r.json();
  return (j.choices?.[0]?.message?.content || "").replace(/\r/g, "").trim();
}

const table = [];
for (const identifier of models) {
  console.log("\n=== " + identifier + " ===");
  try { execFileSync(LMS, ["unload", "--all"], { encoding: "utf8", timeout: 120000 }); } catch {}
  await sleep(2000);
  try {
    execFileSync(LMS, ["load", identifier, "--gpu", "max", "-c", String(CONTEXT), "--identifier", identifier], {
      encoding: "utf8", timeout: 900000, stdio: ["ignore", "pipe", "pipe"]
    });
  } catch (e) {
    console.log("  load failed: " + String(e.message).slice(0, 160));
    table.push({ model: identifier, answered: 0, links: 0, avg: 0, note: "load failed" });
    continue;
  }
  const served = await waitFor(identifier, 180);
  if (!served) { console.log("  model never appeared on the API"); table.push({ model: identifier, answered: 0, avg: 0, note: "not served" }); continue; }
  console.log("  serving as: " + served);

  const dir = CAL + "answers/" + identifier.replace(/[^\w.-]+/g, "_") + "/";
  mkdirSync(dir, { recursive: true });
  let answered = 0, links = 0, score = 0, n = 0;
  const t0 = Date.now();
  for (const it of items) {
    let line = "";
    try { line = (await ask(served, promptFor(it))).split("\n").find((l) => l.trim() && !/^(الخرج|الإجابة)/.test(l)) || ""; } catch {}
    writeFileSync(dir + it.id + ".txt", line + "\n", "utf8");
    const [ans, url] = line.split("\t");
    if (ans && ans.trim()) { answered++; if (/^https?:\/\//.test((url || "").trim())) links++; score += overlap(ans, it.expected); n++; }
  }
  const avg = n ? Math.round(score / n) : 0;
  const mins = ((Date.now() - t0) / 60000).toFixed(1);
  table.push({ model: identifier, answered, links, avg, mins });
  console.log("  answered " + answered + "/20 | links " + links + " | overlap " + avg + "% | " + mins + " min");
  try { execFileSync(LMS, ["unload", "--all"], { encoding: "utf8", timeout: 120000 }); } catch {}
}

writeFileSync(CAL + "suite.json", JSON.stringify(table, null, 1), "utf8");
console.log("\nmodel".padEnd(30) + "answered  links  overlap");
for (const r of table.sort((a, b) => b.avg - a.avg)) {
  console.log(String(r.model).slice(0, 28).padEnd(30) + String(r.answered + "/20").padStart(6) + String(r.links).padStart(7) + String(r.avg + "%").padStart(8) + (r.note ? "  " + r.note : ""));
}
console.log("\nwrote unsloth/calibration/suite.json");
