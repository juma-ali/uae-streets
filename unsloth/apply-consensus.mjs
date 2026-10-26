/* Turns the consensus into dictionary entries and card glosses.

   Only words where two models independently agree are applied, at the provenance
   the project now allows: an agreed meaning without a printed source is recorded
   as an account, not as documented fact.

   English side: if the agreed Arabic meaning already exists in GLOSS_AR (the
   Arabic half of a gloss we wrote before), its English wording is reused.
   Everything else is listed for hand translation — the one part a model should
   not do for us, because a wrong English gloss is as visible as a wrong Arabic one.

     node unsloth/apply-consensus.mjs            (dry run, writes .tmp/apply-plan.json)
     node unsloth/apply-consensus.mjs --write    (applies the ones with English ready)
*/
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const WRITE = process.argv.includes("--write");

const consensus = JSON.parse(readFileSync(root + ".tmp/consensus-words.json", "utf8"));
const dict = {};
new Function("window", readFileSync(root + "data/dictionary.js", "utf8"))(dict);
const glossAr = {};
new Function("window", readFileSync(root + "data/glosses-ar.js", "utf8"))(glossAr);

const norm = (s) =>
  String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ").trim();

/* Arabic gloss → English, from the pairs we already hold */
const ar2en = new Map();
for (const [en, ar] of Object.entries(glossAr.GLOSS_AR || {})) ar2en.set(norm(ar), en);

/* and from the dictionary itself, whose Arabic side may equal the head word */
for (const [head, en] of Object.entries(dict.STREET_GLOSSES || {})) {
  if (!ar2en.has(norm(head))) ar2en.set(norm(head), en);
}

const ready = [], needEnglish = [], weak = [];
for (const row of consensus) {
  if (!row.consensus) {
    if (row.senses.length) weak.push(row);
    continue;
  }
  const text = row.consensus.text;
  const en = ar2en.get(norm(text));
  if (en) ready.push({ word: row.word, ar: text, en, models: row.consensus.models, links: row.consensus.links });
  else needEnglish.push({ word: row.word, ar: text, models: row.consensus.models, links: row.consensus.links });
}

writeFileSync(root + ".tmp/apply-plan.json", JSON.stringify({ ready, needEnglish }, null, 1), "utf8");

console.log("consensus words          : " + (ready.length + needEnglish.length));
console.log("  English already known  : " + ready.length + "  ← can be applied now");
console.log("  need an English gloss  : " + needEnglish.length);
console.log("single-model only        : " + weak.length + "  (not applied under the agreement rule)");

if (!WRITE) {
  console.log("\n--- would apply (first 15) ---");
  ready.slice(0, 15).forEach((r) => console.log("  " + r.word.padEnd(14) + " → " + r.en.slice(0, 60) + "   [" + r.models.join(" + ") + "]"));
  console.log("\n--- waiting on English (first 15) ---");
  needEnglish.slice(0, 15).forEach((r) => console.log("  " + r.word.padEnd(14) + " → " + r.ar.slice(0, 70)));
  process.exit(0);
}

/* write into tools/dictionary.mjs, the map the build reads */
let d = readFileSync(root + "tools/dictionary.mjs", "utf8");
let added = 0;
const fresh = ready.filter((r) => {
  const key = norm(r.word).replace(/^ال/, "");
  return !new RegExp(`"${key}":`).test(d);
});
if (fresh.length) {
  const block = fresh.map((r) => `  ${JSON.stringify(norm(r.word).replace(/^ال/, ""))}: ${JSON.stringify(r.en)},`).join("\n");
  d = d.replace("const CURATED = {\n", "const CURATED = {\n  /* agreed by two local models; no printed source — recorded as an account */\n" + block + "\n");
  writeFileSync(root + "tools/dictionary.mjs", d, "utf8");
  added = fresh.length;
}

let g = readFileSync(root + "data/glosses-ar.js", "utf8");
const box = {};
new Function("window", g)(box);
for (const r of fresh) box.GLOSS_AR[r.en] = r.ar;
writeFileSync(root + "data/glosses-ar.js", "/* Arabic side of the most common glosses… */\nwindow.GLOSS_AR = " + JSON.stringify(box.GLOSS_AR) + ";\n", "utf8");

console.log("\napplied: " + added);
