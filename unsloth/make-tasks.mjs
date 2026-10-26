/* Cuts the worklists into small tasks for a local model.

   Two lessons from the first run are built in here:

   1. Twenty rows was too many. The model echoed the whole input and then ran out
      of output tokens mid-row, so the batch produced nothing usable. Five rows
      leaves room for five answers.
   2. Asking the model to repeat the input doubled the output for no gain, and a
      weak model drops columns when it copies. The task now asks for the answers
      only, one line per row, in the same order — so line 3 of the answer belongs
      to line 3 of the input and nothing has to be echoed.

   A blank line is the correct answer for a name the model does not know. */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const ROWS = 5;
const tasks = root + "unsloth/tasks/";

mkdirSync(tasks, { recursive: true });
for (const f of readdirSync(tasks)) unlinkSync(tasks + f);

/* the header row of the worklist, in either language */
const isHeader = (l) => /^(الاسم|الكلمة|name|word)\b/i.test(l) || l.startsWith("\u0627\u0644\u0627\u0633\u0645") || l.startsWith("\u0627\u0644\u0643\u0644\u0645\u0629");

const HEAD = (n, what) =>
`أمامك ${n} أسطر. في كل سطر ${what}.
اكتب ${n} أسطر فقط، سطراً واحداً لكل سطر بالترتيب نفسه:
الإجابة، ثم TAB، ثم رابط المصدر.
إن لم تعرف الاسم فاكتب سطراً فيه TAB وحده — الفراغ مطلوب ولا يُعدّ خطأ.
لا تُعِد كتابة الأسماء، ولا تشرح، ولا ترقّم الأسطر.

`;

const cut = (src, prefix, cols, what) => {
  const lines = readFileSync(root + src, "utf8")
    .split("\n")
    .filter((l) => l.trim() && !isHeader(l))
    /* a leading row number is noise the model may copy back */
    .map((l) => l.replace(/^\d+\s+/, ""))
    /* drop what is not a name at all: numeric labels ("7b") and the palm-frond
       plot codes of the Liwa farms ("آل أنوان - السعفة J"), which carry Latin
       letters and digits because they are plot designations, not street names */
    .filter((l) => !/[A-Za-z0-9]/.test(l.split("\t")[0] || ""));
  let n = 0;
  for (let i = 0; i < lines.length; i += ROWS) {
    const chunk = lines.slice(i, i + ROWS);
    const body = chunk.map((l) => l.split("\t").slice(0, cols).join("\t")).join("\n");
    const name = `${prefix}-${String(++n).padStart(3, "0")}.txt`;
    writeFileSync(tasks + name, HEAD(chunk.length, what) + body + "\n", "utf8");
  }
  return n;
};

const a = cut("research/autoclaw-people.tsv", "people", 3, "اسم شخص ثم اسم الشارع بالإنجليزية ثم الإمارة، والمطلوب: من هو هذا الشخص في سطر واحد");
const b = cut("research/autoclaw-words.tsv", "words", 2, "كلمة عربية ثم اسم الشارع بالإنجليزية، والمطلوب: معنى الكلمة في سطر واحد");
console.log("people tasks:", a, "| word tasks:", b, "| rows per task:", ROWS);
