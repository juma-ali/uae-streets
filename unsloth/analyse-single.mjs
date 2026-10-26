/* Sorts the single-item answers into: substantive, echo, refusal, blank — then
   shows a spread of the substantive ones for reading. */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const T = root + "unsloth/tasks-single/", A = root + "unsloth/answers-single/";

const norm = (s) => String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/\s+/g, " ").trim();

const buckets = { substantive: [], echo: [], refusal: [], blank: [] };
for (const f of readdirSync(T).sort()) {
  const task = readFileSync(T + f, "utf8").trim().split("\n").pop();
  const [ar, en, emirate] = task.split("\t");
  const answer = readFileSync(A + f, "utf8").trim().replace(/^\s+|\s+$/g, "");
  const first = (answer.split("\t")[0] || "").trim();

  if (!first) { buckets.blank.push({ ar, en, emirate, answer: "" }); continue; }
  if (/^لا أعرف|^لا اعرف|^لا أملك|غير معروف/.test(first)) { buckets.refusal.push({ ar, en, emirate, answer: first }); continue; }
  if (norm(first) === norm(ar) || norm(first).startsWith(norm(ar)) && first.length < ar.length + 12 && !/[.،:]/.test(first)) {
    buckets.echo.push({ ar, en, emirate, answer: first }); continue;
  }
  if (norm(first).replace(/\s/g, "").length <= norm(ar).replace(/\s/g, "").length + 3) { buckets.echo.push({ ar, en, emirate, answer: first }); continue; }
  buckets.substantive.push({ ar, en, emirate, answer: first });
}

const total = Object.values(buckets).reduce((s, b) => s + b.length, 0);
console.log("total: " + total);
for (const [k, v] of Object.entries(buckets)) console.log("  " + k.padEnd(12) + v.length + "  (" + Math.round((v.length / total) * 100) + "%)");

writeFileSync(root + ".tmp/people-answers.json", JSON.stringify(buckets, null, 1), "utf8");

const s = buckets.substantive;
const lens = s.map((x) => x.answer.length).sort((a, b) => a - b);
if (lens.length) console.log("substantive length: min " + lens[0] + " median " + lens[Math.floor(lens.length / 2)] + " max " + lens[lens.length - 1]);

console.log("\n--- twenty substantive answers ---");
const step = Math.max(1, Math.floor(s.length / 20));
for (let i = 0; i < s.length; i += step) {
  const x = s[i];
  console.log(x.ar.padEnd(26) + " → " + x.answer.slice(0, 105));
}
