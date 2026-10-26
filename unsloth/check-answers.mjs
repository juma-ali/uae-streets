/* Grades the local model's answers against the task that produced them.

   The answer file must hold one line per task row, in order: ANSWER<TAB>URL.
   Anything else — echoed input, prose, a missing line — is reported rather than
   silently merged, because the whole point of the exercise is that only checked
   answers reach the site.

     node unsloth/check-answers.mjs unsloth/tasks/words-001.txt unsloth/words-001out.txt
     node unsloth/check-answers.mjs --all
*/
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dir = root + "unsloth/";

/* the header lines of a task file end at the first blank line */
function readTask(file) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const start = lines.findIndex((l) => l.includes("\t"));
  return lines.slice(start).filter((l) => l.trim()).map((l) => l.split("\t"));
}

const hasArabic = (s) => /[\u0600-\u06FF]/.test(s || "");
const looksEchoed = (answer, input) =>
  answer && input && (answer.trim() === input[0].trim() || answer.trim() === (input[1] || "").trim());

function grade(taskFile, outFile) {
  const rows = readTask(taskFile);
  if (!existsSync(outFile)) return { taskFile, rows: rows.length, answered: 0, empty: rows.length, problems: ["no output file"] };
  /* a blank line means "I do not know" — dropping it would shift every row after it */
  const raw = readFileSync(outFile, "utf8").replace(/\r/g, "").split("\n");
  while (raw.length && raw[raw.length - 1] === "") raw.pop();
  const out = raw;
  const problems = [];
  if (out.length !== rows.length) problems.push(`${out.length} answer lines for ${rows.length} rows`);
  let answered = 0, empty = 0, suspicious = 0;
  const merged = [];
  rows.forEach((r, i) => {
    const parts = (out[i] || "").split("\t");
    const answer = (parts[0] || "").trim();
    const url = (parts[1] || "").trim();
    if (!answer) { empty++; merged.push([...r, "", ""]); return; }
    answered++;
    if (looksEchoed(answer, r)) { suspicious++; problems.push(`row ${i + 1} repeats the input: ${answer.slice(0, 40)}`); }
    if (!hasArabic(answer)) { suspicious++; problems.push(`row ${i + 1} answer is not Arabic: ${answer.slice(0, 40)}`); }
    if (!/^https?:\/\//.test(url)) problems.push(`row ${i + 1} has no source link`);
    merged.push([...r, answer, url]);
  });
  return { taskFile, rows: rows.length, answered, empty, suspicious, problems, merged };
}

const args = process.argv.slice(2);
if (args[0] === "--all") {
  const files = readdirSync(dir + "tasks").filter((f) => f.endsWith(".txt")).sort();
  let totalRows = 0, totalAnswered = 0, badFiles = 0;
  const all = [];
  for (const f of files) {
    const outFile = dir + f.replace(/\.txt$/, "out.txt");
    if (!existsSync(outFile)) continue;
    const g = grade(dir + "tasks/" + f, outFile);
    totalRows += g.rows; totalAnswered += g.answered;
    if (g.problems.length) badFiles++;
    all.push(...(g.merged || []));
    console.log(`${f.padEnd(18)} rows ${String(g.rows).padStart(2)}  answered ${String(g.answered).padStart(2)}  ${g.problems.length ? "⚠ " + g.problems.slice(0, 2).join("; ") : "ok"}`);
  }
  writeFileSync(dir + "graded.tsv", all.map((r) => r.join("\t")).join("\n") + "\n", "utf8");
  console.log(`\nfiles with problems: ${badFiles} | answered ${totalAnswered} of ${totalRows} | wrote unsloth/graded.tsv`);
} else if (args.length === 2) {
  const g = grade(args[0], args[1]);
  console.log(`rows ${g.rows} | answered ${g.answered} | empty ${g.empty} | flagged ${g.suspicious}`);
  g.problems.forEach((p) => console.log("  ⚠ " + p));
  g.merged.forEach((r, i) => console.log(`  ${String(i + 1).padStart(2)}. ${r[0].slice(0, 24).padEnd(24)} → ${(r[3] || "—").slice(0, 60)}`));
} else {
  console.log("usage: node unsloth/check-answers.mjs <task.txt> <output.txt>   |   --all");
}
