/* One word per task, same shape that worked for the people.

   The five-row batch was ignored by this model (it echoed the input), so every
   prompt carries a single word. 2,851 words at about 3.6 s each is roughly three
   hours, which is what the idle GPU can do while Jais downloads.

   What comes back is a LEAD, not a gloss: the calibration showed ALLaM is right
   about half the time on dialect words and confident when wrong. */
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const OUT = root + "unsloth/tasks-words/";
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const isHeader = (l) => /^(الاسم|الكلمة)(\s|\t)/.test(l.replace(/^\uFEFF/, ""));
const usable = (l) => {
  const ar = (l.split("\t")[0] || "").trim();
  return ar && /[\u0600-\u06FF]/.test(ar) && !/[A-Za-z0-9]/.test(ar);
};

const rows = readFileSync(root + "research/autoclaw-words.tsv", "utf8")
  .split("\n")
  .filter((l) => l.trim() && !isHeader(l) && usable(l));

let n = 0;
for (const line of rows) {
  const [ar, en] = line.split("\t");
  const prompt =
    "ما معنى هذه الكلمة في اللهجة الإماراتية؟ سطر واحد بالعربية، ثم TAB، ثم رابط مصدر إن عرفته.\n" +
    "إن لم تعرف فاكتب سطراً فارغاً.\n" +
    "لا تُعِد كتابة الكلمة في الجواب.\n\n" +
    ar + "\t" + (en || "");
  writeFileSync(OUT + "w" + String(++n).padStart(4, "0") + ".txt", prompt + "\n", "utf8");
}
console.log("single-word tasks:", n, "| files:", readdirSync(OUT).length);
