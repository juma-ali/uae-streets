#!/usr/bin/env node
/**
 * Arabic quality linter for data/streets.js
 *
 * It cannot judge style — it catches the mechanical failures that make an
 * Arabic entry read like translated English, so a human only has to read the
 * entries this flags.
 *
 *   node tools/arabic-lint.mjs          # report
 *   node tools/arabic-lint.mjs --fail   # exit 1 if anything is flagged
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const dataPath = fileURLToPath(new URL("../data/streets.js", import.meta.url));
const src = readFileSync(dataPath, "utf8");

const sandbox = {};
new Function("window", src)(sandbox);
const streets = sandbox.STREETS;

if (!Array.isArray(streets) || !streets.length) {
  console.error("Could not read window.STREETS from data/streets.js");
  process.exit(2);
}

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/\s+/g, " ")
    .trim();

const findings = [];
const flag = (id, rule, detail) => findings.push({ id, rule, detail });

/* Constructions that usually enter Arabic through translation. Each is a
   prompt to read the sentence, not a verdict. */
const CALQUES = [
  [/يقوم\s+ب/, "يقوم بـ + masdar (use the verb)"],
  [/قام\s+ب/, "قام بـ + masdar (use the verb)"],
  [/بشكل\s+/, "بشكل + adjective (often a calque of 'in a … way')"],
  [/على\s+مستوى/, "على مستوى (literal 'at the level of')"],
  [/في\s+إطار/, "في إطار (literal 'within the framework of')"],
  [/من\s+حيث/, "من حيث (literal 'from the standpoint of')"],
  [/الجدير\s+بالذكر/, "الجدير بالذكر (news-copy filler)"],
  [/يجدر\s+بالذكر/, "يجدر بالذكر (news-copy filler)"],
];

const arabicFields = (s) => [
  ["story.ar", s.story && s.story.ar],
  ["meaning.ar", s.meaning && s.meaning.ar],
];

const seenStories = new Map();

for (const s of streets) {
  for (const [field, text] of arabicFields(s)) {
    if (!text) {
      flag(s.id, "missing", `${field} is empty`);
      continue;
    }
    const where = `${field}`;

    // Latin words smuggled into Arabic prose (proper nouns are handled by the
    // allowlist below; anything else usually means a half-translated phrase).
    const latin = text.match(/[A-Za-z]{2,}/g) || [];
    const allowed = ["E11", "Khan", "Expo"];
    const bad = latin.filter((w) => !allowed.includes(w));
    if (bad.length) flag(s.id, "latin", `${where}: ${bad.join(", ")}`);

    if (text.includes(",")) flag(s.id, "comma", `${where}: ASCII comma, use ،`);

    if (text.includes('"')) flag(s.id, "quote", `${where}: use « » not " "`);

    if (/\s{2,}/.test(text)) flag(s.id, "space", `${where}: double space`);

    if (text !== text.trim()) flag(s.id, "space", `${where}: leading/trailing space`);

    // "تم + verbal noun" is the classic translationese construction.
    const tamma = text.match(/(^|\s)(تم|يتم|تتم)(\s|$)/);
    if (tamma) flag(s.id, "tamma", `${where}: prefer a direct verb over ${tamma[2]} …`);

    // Other constructions that usually arrive by translating English word for
    // word. Not always wrong — that is why they are flagged, not rewritten.
    for (const [re, label] of CALQUES) {
      if (re.test(text)) flag(s.id, "calque", `${where}: ${label}`);
    }

    if (field === "story.ar" && !/[.؟!]$/.test(text.trim())) {
      flag(s.id, "terminal", `${where}: does not end with . ؟ or !`);
    }
  }

  // Length balance. Arabic runs shorter than English, but a large gap usually
  // means one side was summarised, truncated, or padded.
  const ar = s.story && s.story.ar;
  const en = s.story && s.story.en;
  if (ar && en) {
    const ratio = ar.length / en.length;
    if (ratio < 0.5 || ratio > 1.4) {
      flag(s.id, "length", `story ar/en ratio ${ratio.toFixed(2)} (expected 0.5–1.4)`);
    }
  }

  // Meaning should add information, not restate the name.
  if (s.meaning && s.meaning.ar && s.ar && norm(s.meaning.ar) === norm(s.ar)) {
    flag(s.id, "meaning", "meaning.ar just repeats the street name");
  }

  // Identical stories across entries usually mean a copy-paste slip.
  if (ar) {
    const key = norm(ar);
    if (seenStories.has(key)) {
      flag(s.id, "duplicate", `story.ar is identical to ${seenStories.get(key)}`);
    } else {
      seenStories.set(key, s.id);
    }
  }
}

/* ---------- report ---------- */
if (!findings.length) {
  console.log(`Arabic lint: ${streets.length} entries, no findings.`);
  process.exit(0);
}

const byRule = findings.reduce((acc, f) => {
  acc[f.rule] = (acc[f.rule] || 0) + 1;
  return acc;
}, {});

console.log(`Arabic lint: ${streets.length} entries, ${findings.length} findings\n`);
for (const f of findings) {
  console.log(`  ${f.id.padEnd(34)} ${f.rule.padEnd(10)} ${f.detail}`);
}
console.log("\nBy rule: " + Object.entries(byRule).map(([k, v]) => `${k}=${v}`).join("  "));

if (process.argv.includes("--fail")) process.exit(1);
