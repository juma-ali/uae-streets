/* Grades the model's answers against the task that produced them.

   A blank line is an answer ("I do not know") and must be kept: dropping it
   shifts every row after it, which silently pairs answers with the wrong names.
   That bug was in the first version of this file.

     node unsloth/grade-answers.mjs <task.txt> <answer.txt>
     node unsloth/grade-answers.mjs --all
*/
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const DIR = root + "unsloth/";

/* the input rows: the lines carrying a TAB that follow the instruction block */
function readInputs(file) {
  const lines = readFileSync(file, "utf8").split("\n");
  let start = 0;
  for (let i = 0; i < lines.length; i++) {
    if (/^اكتب الآن|^الخرج:/.test(lines[i])) start = i;
  }
  return lines
    .slice(start + 1)
    .filter((l) => l.includes("\t") && !/^(الخرج|الاسم|الكلمة)/.test(l))
    .map((l) => l.split("\t"));
}

const hasArabic = (s) => /[\u0600-\u06FF]/.test(s || "");

function grade(taskFile, answerFile) {
  const rows = readInputs(taskFile);
  const result = { rows: rows.length, answered: 0, blank: 0, flagged: 0, problems: [], merged: [] };
  if (!existsSync(answerFile)) { result.problems.push("no answer file"); return result; }

  const raw = readFileSync(answerFile, "utf8").replace(/\r/g, "").split("\n");
  while (raw.length && raw[raw.length - 1] === "") raw.pop();
  if (raw.length !== rows.length) result.problems.push(raw.length + " answer lines for " + rows.length + " rows");

  rows.forEach((r, i) => {
    const parts = (raw[i] || "").split("\t");
    const answer = (parts[0] || "").trim();
    const url = (parts[1] || "").trim();
    if (!answer) { result.blank++; result.merged.push([...r, "", ""]); return; }
    result.answered++;
    if (answer === (r[0] || "").trim() || answer === (r[1] || "").trim()) {
      result.flagged++; result.problems.push("row " + (i + 1) + " repeats the input");
    } else if (!hasArabic(answer)) {
      result.flagged++; result.problems.push("row " + (i + 1) + " is not Arabic: " + answer.slice(0, 40));
    }
    if (!/^https?:\/\//.test(url)) result.problems.push("row " + (i + 1) + " has no source link");
    result.merged.push([...r, answer, url]);
  });
  return result;
}

const args = process.argv.slice(2);
if (args[0] === "--all") {
  let files = 0, rowsTotal = 0, answeredTotal = 0;
  const merged = [];
  for (const f of readdirSync(DIR + "tasks").filter((x) => x.endsWith(".txt")).sort()) {
    const ans = DIR + "answers/" + f;
    if (!existsSync(ans)) continue;
    const g = grade(DIR + "tasks/" + f, ans);
    files++; rowsTotal += g.rows; answeredTotal += g.answered;
    merged.push(...g.merged);
    console.log(f.padEnd(16) + " rows " + String(g.rows).padStart(2) + "  answered " + String(g.answered).padStart(2) + "  " + (g.problems.length ? "! " + g.problems.slice(0, 2).join("; ") : "ok"));
  }
  writeFileSync(DIR + "graded.tsv", merged.map((r) => r.join("\t")).join("\n") + "\n", "utf8");
  console.log("\nfiles graded: " + files + " | answered " + answeredTotal + " of " + rowsTotal + " | wrote unsloth/graded.tsv");
} else if (args.length === 2) {
  const g = grade(args[0], args[1]);
  console.log("rows " + g.rows + " | answered " + g.answered + " | blank " + g.blank + " | flagged " + g.flagged);
  g.problems.forEach((p) => console.log("  ! " + p));
  g.merged.forEach((r, i) => console.log("  " + String(i + 1).padStart(2) + ". " + (r[0] || "").slice(0, 22).padEnd(22) + " → " + (r[3] || "—").slice(0, 58)));
} else {
  console.log("usage: node unsloth/grade-answers.mjs <task.txt> <answer.txt>   |   --all");
}
