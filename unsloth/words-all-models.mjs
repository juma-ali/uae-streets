/* Runs the whole word list through several models, one model at a time,
   loading and unloading each through the LM Studio CLI.

   PowerShell refused to run the equivalent script (execution policy), so the
   driver lives here instead. Each model writes to unsloth/words-<model>/, which
   is what consensus.mjs reads. Existing answers are never overwritten, so an
   interrupted run resumes.

     node unsloth/words-all-models.mjs allam-plus-7b mawrooth-allam-7b
*/
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const TASKS = root + "unsloth/tasks-words/";
const LMS = process.env.LMS_CLI || process.env.USERPROFILE + "\\.lmstudio\\bin\\lms.exe";
const BASE = (process.env.UNSULOTH_URL || "http://127.0.0.1:1234/v1").replace(/\/chat\/completions$/, "").replace(/\/$/, "");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const models = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!models.length) { console.log("usage: node unsloth/words-all-models.mjs <model> [model…]"); process.exit(1); }

async function served() {
  try {
    const r = await fetch(BASE + "/models", { signal: AbortSignal.timeout(8000) });
    return ((await r.json()).data || []).map((m) => m.id);
  } catch { return []; }
}

async function ask(model, prompt) {
  const r = await fetch(BASE + "/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ model, messages: [{ role: "user", content: prompt }], temperature: 0, max_tokens: 260, stream: false }),
    signal: AbortSignal.timeout(180000)
  });
  if (!r.ok) throw new Error("HTTP " + r.status);
  const j = await r.json();
  return (j.choices?.[0]?.message?.content || "").replace(/\r/g, "").trim();
}

const files = readdirSync(TASKS).filter((f) => f.endsWith(".txt")).sort();
console.log("words:", files.length, "| models:", models.join(", "));

for (const model of models) {
  console.log("\n==================== " + model + " ====================");
  const dir = root + "unsloth/words-" + model.replace(/[^\w.-]+/g, "_") + "/";
  mkdirSync(dir, { recursive: true });

  try { execFileSync(LMS, ["unload", "--all"], { encoding: "utf8", timeout: 120000 }); } catch {}
  await sleep(1500);
  try {
    execFileSync(LMS, ["load", model, "--gpu", "max", "-c", "8192", "--identifier", model], {
      encoding: "utf8", timeout: 900000, stdio: ["ignore", "pipe", "pipe"]
    });
  } catch (e) {
    console.log("  load failed: " + String(e.message).split("\n")[0].slice(0, 120));
    continue;
  }
  await sleep(3000);
  const ids = await served();
  const servedId = ids.includes(model) ? model : ids[0];
  if (!servedId) { console.log("  not served"); continue; }
  console.log("  serving as:", servedId);

  let done = 0, answered = 0, skipped = 0;
  const t0 = Date.now();
  for (const f of files) {
    const out = dir + f;
    if (existsSync(out) && readFileSync(out, "utf8").trim()) { skipped++; continue; }
    const task = readFileSync(TASKS + f, "utf8").trim().split("\n").pop().split("\t")[0];
    const prompt =
      "ما معنى هذه الكلمة في اللهجة الإماراتية؟ سطر واحد بالعربية، ثم TAB، ثم رابط مصدر إن عرفته.\n" +
      "إن لم تعرف فاكتب سطراً فارغاً.\n\n" + task;
    let line = "";
    try {
      const raw = await ask(servedId, prompt);
      line = raw.split("\n").map((l) => l.trim()).filter(Boolean).find((l) => !/^(الخرج|الإجابة)/.test(l)) || "";
    } catch { line = ""; }
    writeFileSync(out, line + "\n", "utf8");
    if (line) answered++;
    done++;
    if (done % 100 === 0) {
      const mins = ((Date.now() - t0) / 60000).toFixed(1);
      console.log("  " + done + " new (" + answered + " with text) | skipped " + skipped + " | " + mins + " min");
    }
  }
  const mins = ((Date.now() - t0) / 60000).toFixed(1);
  console.log("  model done: " + answered + " answered, " + skipped + " already had answers, " + mins + " min");
  try { execFileSync(LMS, ["unload", "--all"], { encoding: "utf8", timeout: 120000 }); } catch {}
}
console.log("\nall models finished — run: node unsloth/consensus.mjs");
