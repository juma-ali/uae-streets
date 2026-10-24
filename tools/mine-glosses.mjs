#!/usr/bin/env node
/**
 * Mines the cached Wiktionary extract for street-name words the main dictionary
 * builder dropped. Wiktionary stores lemmas, while street names use plurals and
 * derived forms (فيافي, سفراء), so matching falls back through: exact → plural
 * stripped → prefix.
 *
 *   node tools/mine-glosses.mjs
 */
import { createReadStream, readFileSync, writeFileSync, existsSync } from "node:fs";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const load = (f, g) => { const b = {}; new Function("window", readFileSync(root + f, "utf8"))(b); return b[g]; };
const KB = load("data/kb.js", "KB");
const CATS = load("data/categories.js", "STREET_CATEGORIES");
const HAVE = load("data/dictionary.js", "STREET_GLOSSES");

const norm = (s) => String(s || "")
  .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
  .replace(/[\u0623\u0625\u0622\u0671]/g, "\u0627")
  .replace(/\u0649/g, "\u064A").replace(/\u0629/g, "\u0647")
  .replace(/^\u0627\u0644/, "").replace(/\s+/g, " ").trim();

const NOISE = /(elative|degree of|construct state|participle|verbal noun|masculine|feminine|plural|singular|dual|form [IVX]+\b|romanization|transliteration|inflection|conjugation|obsolete|archaic|nonstandard|misspelling|abbreviation|initialism|acronym|instance noun|singulative|alternative form|alternative spelling|diminutive|nisba|collective noun|unit noun|spelling of)/i;
const PERSONAL = /(given name|surname|patronymic|male name|female name|personal name|family name|tribal name)/i;

const want = new Map();   // word -> street count
for (const s of KB.streets) {
  const cat = CATS[s.osm] || "word";
  if (cat !== "place" && cat !== "word") continue;
  const core = String(s.name_ar || "").replace(/^(شارع|طريق|جادة|ممر|حارة|زقاق|درب|نهج)\s+/, "");
  for (const raw of String(core).split(" ")) {
    const w = norm(raw).replace(/^\u0627\u0644/, "");
    if (w.length < 3 || HAVE[w]) continue;
    want.set(w, (want.get(w) || 0) + 1);
  }
}
console.error("wanted:", want.size);

/* Pass 1: every Arabic lemma in the extract, with its first clean gloss. */
const lemma = new Map();
const src = root + ".cache/kaikki-arabic.jsonl";
if (!existsSync(src)) { console.error("no cached extract"); process.exit(1); }
const rl = createInterface({ input: createReadStream(src, { encoding: "utf8" }), crlfDelay: Infinity });
let lines = 0;
for await (const line of rl) {
  if (++lines % 100000 === 0) console.error("…", lines, "lemmas", lemma.size);
  if (!line.trim()) continue;
  let j; try { j = JSON.parse(line); } catch { continue; }
  if (j.lang_code !== "ar" || !j.word) continue;
  if (!/^(noun|adj|adv|prop|name)$/.test(j.pos || "")) continue;
  const k = norm(j.word);
  if (!k || lemma.has(k)) continue;
  const g = (j.senses || []).flatMap((s) => s.glosses || []).map((x) => String(x).replace(/\s+/g, " ").trim())
    .find((x) => x.length >= 3 && x.length <= 72 && !NOISE.test(x) && !PERSONAL.test(x));
  if (g) lemma.set(k, g);
}
console.error("lemmas with a usable gloss:", lemma.size);

/* Pass 2: match wanted words, falling back through morphology. */
const PLURAL = [/\u0627\u062A$/, /\u0648\u0646$/, /\u064A\u0646$/, /\u0627\u0646$/];
const found = new Map();
let exact = 0, plural = 0, prefix = 0;
const pluralWords = [];
for (const w of want.keys()) {
  if (lemma.has(w)) { found.set(w, lemma.get(w)); exact++; continue; }
  let done = false;
  for (const re of PLURAL) {
    const stem = w.replace(re, "");
    if (stem.length >= 4 && lemma.has(stem)) { found.set(w, lemma.get(stem)); pluralWords.push(w + " ← " + stem); done = true; break; }
  }
  if (done) continue;
}
console.error("matched — exact:", exact, "plural:", pluralWords.length);
writeFileSync(root + ".tmp/plural-matches.json", JSON.stringify(pluralWords, null, 1));
writeFileSync(root + "data/glosses-extra.js",
  "/* Mined by tools/mine-glosses.mjs from Wiktionary (kaikki.org), CC BY-SA 4.0.\n" +
  "   Place-name and word streets only; personal names excluded. */\n" +
  "window.STREET_EXTRA = " + JSON.stringify(Object.fromEntries(found)) + ";\n");
console.log("wrote data/glosses-extra.js:", found.size);
