/* Turns several models' answers into one meaning, by agreement.

   A single model saying «بارجيل = قارب» is a guess. Three models trained
   separately producing the same sense is evidence — and that is the rule the
   project now works to: agreement, not a single voice.

   Input: one folder per model, each holding w0001.txt … with the answer line.
   Output: .tmp/consensus-words.json — every word with its senses, how many
   models backed each, and the links they offered.

     node unsloth/consensus.mjs
*/
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const TASKS = root + "unsloth/tasks-words/";

const norm = (s) =>
  String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ").trim();

/* stop words that carry no sense and would create false agreement */
const STOP = new Set("هو هي في من على عن الى إلى الذي التي هذا هذه كلمة معنى تعني وهو وهي أن ان أو او ثم قد كان يكون نوع اسم شيء الشيء بمعنى المصطلح".split(" "));
const keyOf = (answer) => {
  const w = norm(answer).split(" ").filter((x) => x.length >= 3 && !STOP.has(x));
  return w.slice(0, 4).join(" ");
};
const jaccard = (a, b) => {
  const A = new Set(a.split(" ")), B = new Set(b.split(" "));
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  return inter / (A.size + B.size - inter);
};

/* which model folders exist */
const dirs = readdirSync(root + "unsloth").filter((d) => {
  const p = root + "unsloth/" + d;
  if (!d.startsWith("words-") || !existsSync(p)) return false;
  try { return statSync(p).isDirectory() && readdirSync(p).length > 0; } catch { return false; }
});
console.log("model folders:", dirs.join(", "));
if (!dirs.length) { console.log("no per-model word answers yet"); process.exit(0); }

const models = dirs.map((d) => ({
  name: d.replace(/^words-/, ""),
  dir: root + "unsloth/" + d + "/"
}));

const words = readdirSync(TASKS).filter((f) => f.endsWith(".txt")).sort();
console.log("words:", words.length);

const out = [];
for (const f of words) {
  const task = readFileSync(TASKS + f, "utf8").trim().split("\n").pop();
  const [ar] = task.split("\t");
  const answers = [];
  for (const m of models) {
    const p = m.dir + f.replace(/\.txt$/, ".txt");
    if (!existsSync(p)) continue;
    const raw = readFileSync(p, "utf8").trim();
    if (!raw) continue;
    const [ans, url] = raw.split("\t");
    const a = (ans || "").trim();
    if (!a) continue;
    if (norm(a) === norm(ar) || norm(a).includes(norm(ar))) continue;   /* the model handed the word back */
    answers.push({ model: m.name, text: a, url: (url || "").trim(), key: keyOf(a) });
  }
  if (!answers.length) { out.push({ word: ar, senses: [], consensus: null }); continue; }

  /* group answers that say substantially the same thing */
  const groups = [];
  for (const a of answers) {
    let g = groups.find((g) => g.some((b) => jaccard(b.key, a.key) >= 0.34));
    if (g) g.push(a); else groups.push([a]);
  }
  const senses = groups
    .map((g) => ({
      text: g[0].text,
      models: [...new Set(g.map((x) => x.model))],
      links: [...new Set(g.map((x) => x.url).filter((u) => /^https?:\/\//.test(u)))],
      count: new Set(g.map((x) => x.model)).size
    }))
    .sort((a, b) => b.count - a.count);

  const best = senses[0];
  out.push({
    word: ar,
    senses,
    consensus: best && best.count >= 2 ? { text: best.text, models: best.models, links: best.links } : null
  });
}

writeFileSync(root + ".tmp/consensus-words.json", JSON.stringify(out, null, 1), "utf8");
const withConsensus = out.filter((o) => o.consensus);
const single = out.filter((o) => !o.consensus && o.senses.length);
const none = out.filter((o) => !o.senses.length);
console.log("words with a source answer : " + (withConsensus.length + single.length));
console.log("  two or more models agree : " + withConsensus.length + "  ← usable under the new rule");
console.log("  only one model answered  : " + single.length);
console.log("  no model answered        : " + none.length);

console.log("\n--- first twelve agreements ---");
withConsensus.slice(0, 12).forEach((o) => console.log("  " + o.word.padEnd(12) + " → " + o.consensus.text.slice(0, 70) + "   [" + o.consensus.models.join(" + ") + "]"));
