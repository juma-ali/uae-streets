/* Cleans the model's answers and checks each name against the local al-A'lam
   index, so we know how many can be verified from a printed source today.

   "شارع الأبهري" is not an answer, it is the input handed back — those go.
   What survives is a lead, not a fact; the index check says which leads have a
   biography waiting in the dictionary. */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const buckets = JSON.parse(readFileSync(root + ".tmp/people-answers.json", "utf8"));

const norm = (s) =>
  String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ").trim();

/* an echo repeats the street or the name and adds nothing */
const isEcho = (x) => {
  const a = norm(x.answer), n = norm(x.ar);
  if (a === n) return true;
  if (a.startsWith("شارع " + n) || a.startsWith(n + " شارع")) return true;
  if (a.includes("شارع " + n)) return true;
  if (a.replace(/ /g, "") === n.replace(/ /g, "")) return true;
  return false;
};

const clean = buckets.substantive.filter((x) => !isEcho(x));
const echoes = buckets.substantive.length - clean.length;

/* the dictionary index, built earlier from Shamela */
let index = {};
const idxFile = root + ".cache/alam-index.json";
if (existsSync(idxFile)) index = JSON.parse(readFileSync(idxFile, "utf8"));

const indexKeys = new Map();
for (const name of Object.keys(index)) {
  const k = norm(name).replace(/^ال/, "");
  if (!indexKeys.has(k)) indexKeys.set(k, name);
}

const inDictionary = [], notInDictionary = [];
for (const x of clean) {
  const base = norm(x.ar).replace(/^(شارع|طريق|جادة|دوار)\s+/, "").replace(/^ال/, "");
  /* try the name as written, then without the family prefix, then the first two words */
  const tries = [base, base.replace(/^(ابن|بن)\s+/, ""), base.split(" ").slice(0, 2).join(" ")];
  const hit = tries.map((t) => indexKeys.get(t)).find(Boolean);
  if (hit) inDictionary.push({ ...x, dictionaryEntry: hit, page: index[hit] });
  else notInDictionary.push(x);
}

writeFileSync(root + ".tmp/people-clean.json", JSON.stringify({ clean, inDictionary, notInDictionary }, null, 1), "utf8");

console.log("model answers classed substantive : " + buckets.substantive.length);
console.log("  of which echoes (input returned) : " + echoes);
console.log("  real answers                     : " + clean.length);
console.log("    name found in the A'lam index   : " + inDictionary.length + "  ← verifiable from a printed page");
console.log("    name not in the index           : " + notInDictionary.length);

console.log("\n--- leads that already have a dictionary page ---");
inDictionary.slice(0, 15).forEach((x) => console.log("  " + x.ar.padEnd(24) + " → ج" + "?" + "  " + x.answer.slice(0, 70)));
