/* Runs the 20-item calibration against every model the local server offers, then
   scores them side by side.

   The point is to answer one question with evidence: which of the Arabic models
   on this machine is worth pointing at 3,520 unknown names? Twenty items whose
   answers we already hold, the same prompt for each model, one table.

     node unsloth/calibration/compare.mjs
     node unsloth/calibration/compare.mjs --models qwen,aya      (substring filter)
     node unsloth/calibration/compare.mjs --url http://127.0.0.1:1234/v1

   Answers are kept per model under calibration/answers/<model>/ so a model can be
   re-scored without being re-run. */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../", import.meta.url));
const CAL = root + "unsloth/calibration/";
const key = JSON.parse(readFileSync(CAL + "key.json", "utf8"));

const args = process.argv.slice(2);
const argOf = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : fallback;
};
const BASE = argOf("--url", process.env.UNSULOTH_URL || "http://127.0.0.1:1234/v1").replace(/\/chat\/completions$/, "").replace(/\/$/, "");
const filter = (argOf("--models", "") || "").split(",").filter(Boolean);
const KEY = argOf("--key", process.env.UNSULOTH_KEY || "");
const auth = KEY ? { authorization: "Bearer " + KEY } : {};

const norm = (s) =>
  String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ").trim();
const words = (s) => new Set(norm(s).split(" ").filter((w) => w.length >= 4));
const overlap = (a, b) => {
  const A = words(a), B = words(b);
  if (!A.size || !B.size) return 0;
  let hit = 0;
  for (const w of A) if (B.has(w)) hit++;
  return Math.round((hit / Math.min(A.size, B.size)) * 100);
};

/* the twenty calibration items, each with the answer we already verified */
const items = [];
for (const p of key.people) items.push({ id: "p" + String(items.length + 1).padStart(2, "0"), kind: "people", input: p.input, en: "", expected: p.expected });
for (const w of key.words) items.push({ id: "w" + String(items.length - key.people.length + 1).padStart(2, "0"), kind: "words", input: w.input, en: "", expected: w.expected });

async function models() {
  const r = await fetch(BASE + "/models", { headers: auth, signal: AbortSignal.timeout(15000) });
  const j = await r.json();
  let ids = (j.data || []).map((m) => m.id);
  if (filter.length) ids = ids.filter((id) => filter.some((f) => id.toLowerCase().includes(f.toLowerCase())));
  return ids;
}

async function ask(model, prompt) {
  const r = await fetch(BASE + "/chat/completions", {
    method: "POST",
    headers: Object.assign({ "content-type": "application/json" }, KEY ? { authorization: "Bearer " + KEY } : {}),
    body: JSON.stringify({ model, messages: [{ role: "user", content: prompt }], temperature: 0, max_tokens: 300, stream: false }),
    signal: AbortSignal.timeout(240000)
  });
  if (!r.ok) throw new Error("HTTP " + r.status + " " + (await r.text()).slice(0, 120));
  const j = await r.json();
  return (j.choices?.[0]?.message?.content || "").replace(/\r/g, "").trim();
}

const promptFor = (it) =>
  it.kind === "people"
    ? "من هو هذا الشخص؟ اكتب سطراً واحداً بالعربية، ثم TAB، ثم رابط مصدر إن عرفته.\nإن لم تعرف فاكتب سطراً فارغاً.\n\n" + it.input
    : "ما معنى هذه الكلمة في اللهجة الإماراتية؟ سطر واحد بالعربية، ثم TAB، ثم رابط مصدر إن عرفته.\nإن لم تعرف فاكتب سطراً فارغاً.\n\n" + it.input;

const clean = (t) => {
  const line = t.split("\n").map((l) => l.trim()).find((l) => l && !/^(الخرج|الإجابة|مثال)/.test(l)) || "";
  return line;
};

const list = await models();
if (!list.length) { console.log("no models at " + BASE + " — is the server running?"); process.exit(1); }
console.log("server: " + BASE + "\nmodels: " + list.length + "\n");

const table = [];
for (const model of list) {
  const safe = model.replace(/[^\w.-]+/g, "_");
  const dir = CAL + "answers/" + safe + "/";
  mkdirSync(dir, { recursive: true });
  let answered = 0, linked = 0, score = 0, n = 0;
  const t0 = Date.now();
  for (const it of items) {
    const f = dir + it.id + ".txt";
    let line;
    try {
      line = clean(await ask(model, promptFor(it)));
      writeFileSync(f, line + "\n", "utf8");
    } catch (e) {
      line = "";
      writeFileSync(f, "", "utf8");
    }
    const [ans, url] = line.split("\t");
    if (ans && ans.trim()) answered++;
    if (/^https?:\/\//.test((url || "").trim())) linked++;
    if (ans && ans.trim()) { score += overlap(ans, it.expected); n++; }
  }
  const avg = n ? Math.round(score / n) : 0;
  const mins = ((Date.now() - t0) / 60000).toFixed(1);
  table.push({ model: safe, answered, linked, avg, mins });
  console.log(model.padEnd(44) + " answered " + String(answered).padStart(2) + "/20  links " + String(linked).padStart(2) + "  overlap " + String(avg).padStart(3) + "%  " + mins + " min");
}

writeFileSync(CAL + "compare.json", JSON.stringify(table, null, 1), "utf8");
console.log("\nwrote unsloth/calibration/compare.json");
console.log("overlap is a reading aid, not a verdict — read the answers before trusting any model.");
