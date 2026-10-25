/* Cuts the worklists into small, self-contained tasks for a local model.
   A model with an 8k window will spend all of it reasoning; each file here is
   sized so that the reasoning and the answer both fit. */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const ROWS = 20;                       // tasks per file
const tasks = root + "unsloth/tasks/";

mkdirSync(tasks, { recursive: true });
for (const f of readdirSync(tasks)) unlinkSync(tasks + f);

const cut = (src, prefix, cols) => {
  const lines = readFileSync(root + src, "utf8").split("\n").filter((l) => l && !l.startsWith("الاسم") && !l.startsWith("الكلمة"));
  let n = 0;
  for (let i = 0; i < lines.length; i += ROWS) {
    const chunk = lines.slice(i, i + ROWS);
    const body = chunk.map((l) => l.split("\t").slice(0, cols).join("\t")).join("\n");
    const name = `${prefix}-${String(++n).padStart(3, "0")}.txt`;
    writeFileSync(tasks + name,
      `أجب عن ${chunk.length} سطراً. لا تشرح. لا تفكّر بصوت عالٍ.\n` +
      `لكل سطر: أعِد الأعمدة كما هي، ثم TAB ثم الإجابة، ثم TAB ثم رابط المصدر.\n` +
      `إن لم تعرف: اتركه فارغاً ولا تخمّن.\n\n` +
      body + "\n", "utf8");
  }
  return n;
};

const a = cut("research/autoclaw-people.tsv", "people", 3);
const b = cut("research/autoclaw-words.tsv", "words", 2);
console.log("people tasks:", a, "| word tasks:", b, "| rows per task:", ROWS);
