#!/usr/bin/env node
/**
 * Editorial policy lint: cards must be neutral, respectful and factual.
 *
 *   node tools/editorial-lint.mjs           → report
 *   node tools/editorial-lint.mjs --fail    → exit 1 on any finding (CI)
 *
 * The rule, applied to every street entry: entries about public figures state
 * who the street is named after and their title and dates. They do not evaluate,
 * editorialise, or touch controversy, and they do not frame the naming in
 * political terms. Arabic and English are checked alike.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const box = {};
new Function("window", readFileSync(root + "data/streets.js", "utf8"))(box);
const STREETS = box.STREETS;

const RULES = [
  {
    id: "controversy",
    why: "controversy and dispute are not facts about a name",
    re: /\b(controvers\w*|disput\w*|alleg\w*|scandal\w*|criticis\w*|backlash|outcry)\b|مثير للجدل|الجدل|جدلاً|انتقادات|مزاعم|خلافات| scandal/gi,
  },
  {
    id: "politics",
    why: "no political framing",
    re: /\b(regime|dictator\w*|coup|opposition|protest\w*|politic\w*|ideolog\w*|rival\w*|feud|faction\w*|alliance\w*)\b|نظام حاكم|انقلاب|معارضة|احتجاج|سياسي|أيديولوجي|صراع|تحالف|ولاء/gi,
  },
  {
    id: "corruption-rights",
    why: "allegations and rights record belong outside a street card",
    re: /\b(corrupt\w*|sanction\w*|exile\w*|jailed|arrest\w*|human rights|detention)\b|فساد|عقوبات|منفى|معتقل|حقوق الإنسان/gi,
  },
  {
    id: "evaluative",
    why: "state the naming, do not praise it",
    re: /\b(honou?rs?|honou?red|pays tribute|celebrates|commemorates|greatest|beloved|visionary|legendary)\b|يكرّم|تكريماً|يحتفي|يخلّد|الأعظم|الملهم|الأسطوري/gi,
  },
  {
    id: "editorialising",
    why: "colourful asides are not facts",
    re: /\b(more camels than cars|rebuilt with oil money|helped modernise|good example of|which is why|that is why)\b|أعاد بناءها بعائدات النفط|مثال جيد على|ولذلك|ولهذا السبب/gi,
  },
];

const text = (v) => (typeof v === "string" ? v : v ? [v.en, v.ar].filter(Boolean).join(" ") : "");

let failures = 0;
const report = [];

for (const entry of STREETS) {
  const body = [text(entry.story), text(entry.meaning), text(entry.now), text(entry.former)]
    .filter(Boolean)
    .join("  ");
  for (const rule of RULES) {
    const hits = body.match(rule.re);
    if (!hits) continue;
    failures++;
    report.push({
      id: entry.id,
      rule: rule.id,
      why: rule.why,
      found: [...new Set(hits.map((h) => h.trim()))].join(", "),
    });
  }
}

if (report.length) {
  console.error(`Editorial policy findings: ${report.length}\n`);
  for (const r of report) console.error(`  ✗ ${r.id} [${r.rule}] “${r.found}” — ${r.why}`);
} else {
  console.log(`Editorial policy: ${STREETS.length} entries, no findings.`);
}

if (process.argv.includes("--fail") && report.length) process.exit(1);
