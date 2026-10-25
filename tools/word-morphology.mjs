/* Recovers glosses for unglossed street words by morphology: the dictionary we
   already have is keyed on lemmas, while the signs carry plurals and nisbas
   (الأعشاب، الفوارس، الغدران). Only patterns where the plural is unambiguous
   are accepted — everything else is written to a review file instead. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const D = {};
new Function("window", readFileSync(root + "data/dictionary.js", "utf8"))(D);
const G = D.STREET_GLOSSES || {};
const keys = new Set(Object.keys(G));

const cards = {};
new Function("window", readFileSync(root + "data/cards.js", "utf8"))(cards);

const norm = (s) =>
  String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/\s+/g, " ").trim();

const rows = cards.ROADS.rows.filter((r) => !r[6] && r[3] === "word");
const words = [...new Set(rows.map((r) => String(r[1] || "").replace(/^(شارع|طريق|جادة)\s+/, "").trim()).filter(Boolean))];

/* each rule returns [lemma, confidence] */
function lemmas(word) {
  const b = norm(word).replace(/^ال/, "");
  const out = [];
  const push = (lemma, conf) => { if (lemma && lemma.length >= 3 && keys.has(lemma) && G[lemma]) out.push([lemma, conf]); };

  // فواعل → فاعل : الفوارس → فارس
  let m = /^([\u0621-\u064A])و([\u0621-\u064A])ا([\u0621-\u064A])$/.exec(b);
  if (m) push(m[1] + "ا" + m[2] + m[3], "solid");

  // أفعال → فعل : الأجناد → جند ، الأعشاب → عشب
  m = /^ا([\u0621-\u064A])([\u0621-\u064A])ا([\u0621-\u064A])$/.exec(b);
  if (m) push(m[1] + m[2] + m[3], "solid");

  // فعال → فعل : الغدران → غدر
  m = /^([\u0621-\u064A])([\u0621-\u064A])ا([\u0621-\u064A])$/.exec(b);
  if (m) push(m[1] + m[2] + m[3], "likely");

  // جمع مؤنث : العدلات → العدلة → عدل
  if (/ات$/.test(b)) { const s = b.replace(/ات$/, ""); push(s, "likely"); push(s.replace(/ه$/, ""), "likely"); }

  // جمع مذكر : المسلمون → مسلم
  if (/(ين|ون)$/.test(b)) { const s = b.replace(/(ين|ون)$/, ""); push(s, "likely"); }

  // ة : العامرة → عامر
  if (/ه$/.test(b)) push(b.replace(/ه$/, ""), "weak");

  // ياء النسبة : العقربي → عقرب
  if (/ي$/.test(b)) push(b.replace(/ي$/, ""), "weak");
  if (/يه$/.test(b)) push(b.replace(/يه$/, ""), "weak");

  return out;
}

const accepted = {};
const review = [];
for (const w of words) {
  const found = lemmas(w);
  if (!found.length) continue;
  const solid = found.find(([, c]) => c === "solid") || found.find(([, c]) => c === "likely");
  if (solid) accepted[w] = { lemma: solid[0], gloss: G[solid[0]], conf: solid[1] };
  else review.push({ word: w, lemma: found[0][0], gloss: G[found[0][0]], conf: "weak" });
}
writeFileSync(root + ".tmp/word-accepted.json", JSON.stringify(accepted, null, 1), "utf8");
writeFileSync(root + ".tmp/word-review.json", JSON.stringify(review, null, 1), "utf8");
console.log("unglossed:", words.length, "| accepted by solid/likely morphology:", Object.keys(accepted).length, "| weak, for review:", review.length);
Object.entries(accepted).slice(0, 18).forEach(([w, v]) => console.log("   " + w + "  →  " + v.lemma + " = " + v.gloss + "  (" + v.conf + ")"));
