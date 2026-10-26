/* Builds the tasks for the local model.

   The first attempt failed for three reasons, all of which are fixed here:

   1. Twenty rows per task. The model echoed the input and then ran out of output
      tokens mid-row, so the batch produced nothing. Five rows now.
   2. The task asked it to repeat the input before answering. That doubled the
      output for no gain, and a weak model drops columns while copying. It now
      answers only: one line per row, in order.
   3. The instruction lived in a separate system prompt. A small model follows an
      example in the same message far more reliably, so the example travels with
      every task.

   Rows that are not names are dropped: numeric labels ("7b") and the palm-frond
   plot codes of the Liwa farms ("آل أنوان - السعفة J"), which are plot
   designations rather than street names. */
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const OUT = root + "unsloth/tasks/";
const ROWS = 5;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const isHeader = (l) => /^(الاسم|الكلمة)(\s|\t)/.test(l.replace(/^\uFEFF/, ""));
const usable = (l) => {
  const ar = (l.split("\t")[0] || "").trim();
  return ar && /[\u0600-\u06FF]/.test(ar) && !/[A-Za-z0-9]/.test(ar);
};

function build({ src, prefix, cols, question, exampleIn, exampleOut }) {
  const rows = readFileSync(root + src, "utf8").split("\n").filter((l) => l.trim() && !isHeader(l) && usable(l));
  let n = 0;
  for (let i = 0; i < rows.length; i += ROWS) {
    const chunk = rows.slice(i, i + ROWS);
    const body = chunk.map((l) => l.split("\t").slice(0, cols).join("\t")).join("\n");
    const head = [
      question,
      "",
      "مثال على مدخل واحد:",
      exampleIn,
      "الخرج: " + exampleOut,
      "",
      "اكتب الآن " + chunk.length + " أسطر فقط، سطراً لكل مدخل بالترتيب نفسه:",
      "الإجابة بالعربية، ثم TAB، ثم رابط المصدر.",
      "إن لم تعرف فاكتب سطراً فارغاً — الفراغ إجابة صحيحة.",
      "لا تُعِد كتابة المدخل، ولا تشرح، ولا ترقّم.",
      ""
    ].join("\n");
    writeFileSync(OUT + prefix + "-" + String(++n).padStart(3, "0") + ".txt", head + body + "\n", "utf8");
  }
  return n;
}

const people = build({
  src: "research/autoclaw-people.tsv",
  prefix: "people",
  cols: 3,
  question: "أمامك أسماء أشخاص وأسماء شوارع إماراتية. المطلوب: من هو الشخص في سطر واحد.",
  exampleIn: "عبدالله بن الزبير\tAbdullah Bin Al Zubair Street\tالشارقة",
  exampleOut: "صحابي، ابن الزبير بن العوام وأسماء بنت أبي بكر\thttps://ar.wikipedia.org/wiki/عبد_الله_بن_الزبير"
});

const words = build({
  src: "research/autoclaw-words.tsv",
  prefix: "words",
  cols: 2,
  question: "أمامك كلمات عربية وردت في أسماء شوارع إماراتية. المطلوب: معنى الكلمة في سطر واحد.",
  exampleIn: "الجِرناس\tAl Jirnas Street",
  exampleOut: "الصقر الذي أكمل عاماً من عمره\thttps://shamela.ws/book/12286"
});

console.log("people tasks: " + people + " | word tasks: " + words + " | rows per task: " + ROWS);
console.log("files: " + readdirSync(OUT).length);
