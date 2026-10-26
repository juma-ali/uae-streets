/* Runs every task against a local OpenAI-compatible server and saves the answers.

   This replaces pasting files into a notebook one at a time. It works with any
   server that speaks /v1/chat/completions — Ollama, llama.cpp's server, vLLM,
   LM Studio, Unsloth's own inference endpoint.

     set UNSULOTH_URL=http://127.0.0.1:11434/v1/chat/completions
     set UNSULOTH_MODEL=qwen2.5:7b-instruct
     node unsloth/run-local.mjs                 # all tasks without an answer yet
     node unsloth/run-local.mjs people-001      # one file
     node unsloth/run-local.mjs --limit 5       # the first five, to test

   Answers land in unsloth/answers/ with the same name as the task, so
   grade-answers.mjs can pair them. A file is never overwritten unless --force. */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const TASKS_DIR = process.env.UNSULOTH_TASKS || "tasks";
const TASKS = root + "unsloth/" + TASKS_DIR + "/";
const ANSWERS_DIR = process.env.UNSULOTH_ANSWERS || "answers";
const ANSWERS = root + "unsloth/" + ANSWERS_DIR + "/";
mkdirSync(ANSWERS, { recursive: true });

const URL_ = process.env.UNSULOTH_URL || "http://127.0.0.1:11434/v1/chat/completions";
const MODEL = process.env.UNSULOTH_MODEL || "";
const KEY = process.env.UNSULOTH_KEY || "";
const args = process.argv.slice(2);
const force = args.includes("--force");
const limitAt = args.indexOf("--limit");
const limit = limitAt >= 0 ? Number(args[limitAt + 1] || 0) : 0;
const only = args.filter((a) => !a.startsWith("--") && a !== String(limit));

async function ask(prompt) {
  const body = {
    model: MODEL || undefined,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
    max_tokens: 1024,
    stream: false
  };
  const r = await fetch(URL_, {
    method: "POST",
    headers: Object.assign({ "content-type": "application/json" }, KEY ? { authorization: "Bearer " + KEY } : {}),
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(180000)
  });
  if (!r.ok) throw new Error("HTTP " + r.status + " " + (await r.text()).slice(0, 200));
  const j = await r.json();
  return (j.choices?.[0]?.message?.content || "").replace(/\r/g, "").trim();
}

/* keep only the answer lines: the model sometimes adds a preamble or a title */
function cleanAnswer(text, expectedRows) {
  let lines = text.split("\n").map((l) => l.replace(/\s+$/, ""));
  const looksLikeAnswer = (l) => l === "" || /^[^\t]*\t\s*\S*/.test(l) || !/^(الخرج|مثال|أمامك|اكتب)/.test(l);
  lines = lines.filter((l) => !/^(الخرج|مثال|أمامك|اكتب|الإجابة)/.test(l));
  while (lines.length > expectedRows) lines.shift();
  return lines.slice(0, expectedRows).join("\n");
}

const rowsOf = (file) =>
  readFileSync(file, "utf8").split("\n").filter((l) => l.includes("\t") && !/^(الخرج|الاسم|الكلمة)/.test(l)).length;

let files = readdirSync(TASKS).filter((f) => f.endsWith(".txt")).sort();
if (only.length) files = files.filter((f) => only.some((o) => f.startsWith(o)));
if (limit) files = files.slice(0, limit);

console.log("server:", URL_, "| model:", MODEL || "(server default)", "| tasks:", files.length);
let done = 0, skipped = 0, failed = 0;
for (const f of files) {
  const out = ANSWERS + f;
  if (existsSync(out) && !force) { skipped++; continue; }
  const task = readFileSync(TASKS + f, "utf8");
  try {
    const reply = await ask(task);
    const clean = cleanAnswer(reply, rowsOf(TASKS + f));
    writeFileSync(out, clean + "\n", "utf8");
    done++;
    if (done % 10 === 0) console.log("answered", done, "| skipped", skipped, "| failed", failed, "| current:", f);
  } catch (e) {
    failed++;
    console.log("failed", f, "-", String(e.message).slice(0, 90));
  }
}
console.log("\nanswered:", done, "| skipped (already had an answer):", skipped, "| failed:", failed);
console.log("next: node unsloth/grade-answers.mjs --all");
