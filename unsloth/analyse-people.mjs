/* Separates the answers that can be trusted from those that cannot.

   The model sometimes returns four lines for five rows, or adds a preamble, and
   then every answer below the gap belongs to the wrong name. Those files are
   quarantined rather than merged: a biography attached to the wrong man is
   exactly the failure this project keeps deleting.

     node unsloth/analyse-people.mjs
*/
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const TASKS = root + "unsloth/tasks/";
const ANSWERS = root + "unsloth/answers/";

function inputs(file) {
  const lines = readFileSync(file, "utf8").split("\n");
  let start = 0;
  for (let i = 0; i < lines.length; i++) if (/^اكتب الآن|^الخرج:/.test(lines[i])) start = i;
  return lines.slice(start + 1).filter((l) => l.includes("\t") && !/^(الخرج|الاسم|الكلمة)/.test(l)).map((l) => l.split("\t"));
}

const files = readdirSync(TASKS).filter((f) => f.startsWith("people-") && f.endsWith(".txt")).sort();
const clean = [], misaligned = [];
let answered = 0, blank = 0;

for (const f of files) {
  const rows = inputs(TASKS + f);
  const ansFile = ANSWERS + f;
  if (!existsSync(ansFile)) continue;
  const raw = readFileSync(ansFile, "utf8").replace(/\r/g, "").split("\n");
  while (raw.length && raw[raw.length - 1] === "") raw.pop();

  const bad = [];
  if (raw.length !== rows.length) bad.push(`${raw.length} lines for ${rows.length} rows`);
  rows.forEach((r, i) => {
    const a = (raw[i] || "").split("\t")[0].trim();
    if (a && (a === r[0].trim() || a === (r[1] || "").trim())) bad.push(`row ${i + 1} echoes the input`);
  });

  if (bad.length) { misaligned.push({ file: f, why: bad.join("; ") }); continue; }

  rows.forEach((r, i) => {
    const a = (raw[i] || "").split("\t")[0].trim();
    if (!a) { blank++; return; }
    answered++;
    clean.push({ name: r[0], en: r[1], emirate: r[2], answer: a, file: f, row: i + 1 });
  });
}

writeFileSync(root + ".tmp/people-clean.json", JSON.stringify(clean, null, 1), "utf8");
writeFileSync(root + ".tmp/people-bad.json", JSON.stringify(misaligned, null, 1), "utf8");

console.log("files:", files.length);
console.log("clean files:", files.length - misaligned.length, "| quarantined:", misaligned.length);
console.log("usable answers:", clean.length, "| blank:", blank);
const lens = clean.map((c) => c.answer.length).sort((a, b) => a - b);
console.log("answer length: min " + lens[0] + " median " + lens[Math.floor(lens.length / 2)] + " max " + lens[lens.length - 1]);

console.log("\n--- a sample of twelve ---");
const step = Math.max(1, Math.floor(clean.length / 12));
for (let i = 0; i < clean.length; i += step) {
  const c = clean[i];
  console.log(c.name.padEnd(24) + " → " + c.answer.slice(0, 110));
}
