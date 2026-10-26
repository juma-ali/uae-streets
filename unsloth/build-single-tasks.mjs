/* One person per task, because that is the only shape this model actually answers.

   The five-row batch failed: ALLaM returned the input instead of a biography
   ("إبراهيم البغدادي\tشارع إبراهيم البغدادي، الشارقة"). The calibration worked
   because each prompt held a single name, so the tasks are rebuilt the same way
   and the prompt is copied from the calibration verbatim. */
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const OUT = root + "unsloth/tasks-single/";
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const isHeader = (l) => /^(الاسم|الكلمة)(\s|\t)/.test(l.replace(/^\uFEFF/, ""));
const usable = (l) => {
  const ar = (l.split("\t")[0] || "").trim();
  return ar && /[\u0600-\u06FF]/.test(ar) && !/[A-Za-z0-9]/.test(ar);
};

const rows = readFileSync(root + "research/autoclaw-people.tsv", "utf8")
  .split("\n")
  .filter((l) => l.trim() && !isHeader(l) && usable(l));

let n = 0;
for (const line of rows) {
  const [ar, en, emirate] = line.split("\t");
  const prompt =
    "من هو هذا الشخص؟ اكتب سطراً واحداً بالعربية، ثم TAB، ثم رابط مصدر إن عرفته.\n" +
    "إن لم تعرف فاكتب سطراً فارغاً.\n" +
    "لا تُعِد كتابة الاسم في الجواب.\n\n" +
    ar + "\t" + en + "\t" + (emirate || "");
  writeFileSync(OUT + "p" + String(++n).padStart(3, "0") + ".txt", prompt + "\n", "utf8");
}
console.log("single-person tasks:", n, "| files:", readdirSync(OUT).length);
