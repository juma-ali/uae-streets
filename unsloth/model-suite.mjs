/* Runs the 20-item calibration across many models, loading and unloading each
   through LM Studio's CLI — no clicking, no watching.

     node unsloth/model-suite.mjs --list
     node unsloth/model-suite.mjs jais-3-mova-36b-a4b google/gemma-4-31b aya-expanse-32b

   Choices baked in from earlier failures:
   - max_tokens 900, because Jais spent its allowance and returned nothing at 300;
   - 8k context, because 24 GB of VRAM shared by two cards cannot hold more;
   - one item per prompt, because the 7B models echo the input when given five. */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const CAL = root + "unsloth/calibration/";
const key = JSON.parse(readFileSync(CAL + "key.json", "utf8"));
const LMS = process.env.LMS_CLI || process.env.USERPROFILE + "\\.lmstudio\\bin\\lms.exe";
const BASE = (process.env.UNSULOTH_URL || "http://127.0.0.1:1234/v1").replace(/\/chat\/completions$/, "").replace(/\/$/, "");

const args = process.argv.slice(2);
const argOf = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const CONTEXT = Number(argOf("--context", "8192"));
const MAXTOK = Number(argOf("--max-tokens", "900"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (args.includes("--list") || args.length === 0) {
  console.log(execFileSync(LMS, ["ls"], { encoding: "utf8" }));
  process.exit(0);
}
const models = args.filter((a) => !a.startsWith("--") && ![argOf("--context", ""), argOf("--max-tokens", "")].includes(a));

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

async function served() {
  try {
    const r = await fetch(BASE + "/models", { signal: AbortSignal.timeout(8000) });
    const j = await r.json();
    return (j.data || []).map((m) => m.id);
  } catch { return []; }
}

async function waitFor(id, seconds) {
  const until = Date.now() + seconds * 1000;
  while (Date.now() < until) {
    const ids = await served();
    if (ids.includes(id)) return id;
    await sleep(3000);
  }
  return (await served())[0] || null;
}

async function ask(model, prompt) {
  const r = await fetch(BASE + "/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ model, messages: [{ role: "user", content: prompt }], temperature: 0, max_tokens: MAXTOK, stream: false }),
    signal: AbortSignal.timeout(300000)
  });
  if (!r.ok) throw new Error("HTTP " + r.status);
  const j = await r.json();
  return (j.choices?.[0]?.message?.content || "").replace(/\r/g, "").trim();
}

const table = [];
for (const id of models) {
  console.log("\n=== " + id + " ===");
  const dir = CAL + "answers/" + id.replace(/[^\w.-]+/g, "_") + "/";
  if (existsSync(dir) && readdirCount(dir) === 20) { console.log("  already done, skipping"); continue; }

  try { execFileSync(LMS, ["unload", "--all"], { encoding: "utf8", timeout: 120000 }); } catch {}
  await sleep(1500);
  let loadOk = true;
  try {
    execFileSync(LMS, ["load", id, "--gpu", "max", "-c", String(CONTEXT), "--identifier", id], {
      encoding: "utf8", timeout: 900000, stdio: ["ignore", "pipe", "pipe"]
    });
  } catch (e) { loadOk = false; console.log("  load failed: " + String(e.message).split("\n")[0].slice(0, 140)); }

  if (!loadOk) { table.push({ model: id, answered: 0, correct: 0, note: "load failed" }); continue; }
  const s = await waitFor(id, 180);
  if (!s) { console.log("  never served"); table.push({ model: id, answered: 0, note: "not served" }); continue; }

  mkdirSync(dir, { recursive: true });
  let answered = 0, links = 0, score = 0, n = 0, people = 0, wordsOK = 0;
  const t0 = Date.now();
  for (const it of items) {
    let line = "";
    try {
      const raw = await ask(s, promptFor(it));
      line = raw.split("\n").map((l) => l.trim()).filter(Boolean).find((l) => !/^(الخرج|الإجابة|مثال)/.test(l)) || "";
    } catch {}
    writeFileSync(dir + it.id + ".txt", line + "\n", "utf8");
    const [ans, url] = line.split("\t");
    if (ans && ans.trim()) {
      answered++;
      if (/^https?:\/\//.test((url || "").trim())) links++;
      const ov = overlap(ans, it.expected);
      score += ov; n++;
      if (ov >= 40) { if (it.kind === "people") people++; else wordsOK++; }
    }
  }
  const avg = n ? Math.round(score / n) : 0;
  const mins = ((Date.now() - t0) / 60000).toFixed(1);
  table.push({ model: id, answered, links, avg, people, wordsOK, mins });
  console.log("  answered " + answered + "/20 | links " + links + " | overlap " + avg + "% | people ok " + people + " | words ok " + wordsOK + " | " + mins + " min");
  try { execFileSync(LMS, ["unload", "--all"], { encoding: "utf8", timeout: 120000 }); } catch {}
}

function readdirCount(d) { try { return readFileSync(d + "p01.txt") && 20; } catch { return 0; } }

const out = CAL + "suite.json";
const prev = existsSync(out) ? JSON.parse(readFileSync(out, "utf8")) : [];
const merged = [...prev.filter((p) => !table.some((t) => t.model === p.model)), ...table];
writeFileSync(out, JSON.stringify(merged, null, 1), "utf8");

console.log("\n" + "model".padEnd(32) + "ans  links  overlap  people  words");
for (const r of merged.sort((a, b) => (b.people + b.wordsOK) - (a.people + a.wordsOK))) {
  console.log(String(r.model).slice(0, 30).padEnd(32) + String(r.answered).padStart(3) + String(r.links).padStart(7) + String(r.avg + "%").padStart(9) + String(r.people || 0).padStart(8) + String(r.wordsOK || 0).padStart(7));
}
console.log("\nwrote unsloth/calibration/suite.json");
