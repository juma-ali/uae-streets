#!/usr/bin/env node
/**
 * Mines the cached Wiktionary extract for street-name words the main dictionary
 * builder dropped: entries whose only senses are proper nouns, place names, or
 * POS classes the first pass excluded.
 *
 *   node tools/mine-glosses.mjs
 *
 * Writes data/glosses-extra.js as window.STREET_EXTRA. cards-build merges it
 * after data/dictionary.js, so curated glosses still win.
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

const NOISE = /(elative|degree of|construct state|participle|verbal noun|masculine|feminine|plural|singular|dual|form [IVX]+\b|romanization|transliteration|inflection|conjugation|obsolete|archaic|nonstandard|misspelling|abbreviation|initialism|acronym|instance noun|singulative|alternative form|alternative spelling|diminutive|nisba|collective noun|unit noun)/i;
const PERSONAL = /(given name|surname|patronymic|male name|female name|personal name|family name|tribal name|spelling of|form of|synonym of|see |alternative spelling)/i;

/* Words from streets whose name is a place or a word — never person streets. */
const want = new Set();
for (const s of KB.streets) {
  const cat = CATS[s.osm] || "word";
  if (cat !== "place" && cat !== "word") continue;
  const core = String(s.name_ar || "").replace(/^(شارع|طريق|جادة|ممر|حارة|زقاق|درب|نهج)\s+/, "");
  for (const w of norm(core).split(" ")) {
    if (w.length >= 3 && !HAVE[w]) want.add(w);
  }
}
console.error("words wanted:", want.size);

const found = new Map();
const src = root + ".cache/kaikki-arabic.jsonl";
if (!existsSync(src)) { console.error("no cached extract"); process.exit(1); }
const rl = createInterface({ input: createReadStream(src, { encoding: "utf8" }), crlfDelay: Infinity });
let scanned = 0;
for await (const line of rl) {
  if (++scanned % 200000 === 0) console.error("…", scanned, "found", found.size);
  if (!line.trim()) continue;
  let j; try { j = JSON.parse(line); } catch { continue; }
  if (j.lang_code !== "ar" || !j.word) continue;
  const k = norm(j.word);
  if (!want.has(k)) continue;
  const pos = j.pos || "";
  if (!/^(noun|adj|adv|prop|name)$/.test(pos)) continue;
  const glosses = (j.senses || []).flatMap((s) => s.glosses || []).map((g) => String(g).replace(/\s+/g, " ").trim());
  for (const g of glosses) {
    if (g.length < 3 || g.length > 72) continue;
    if (NOISE.test(g) || PERSONAL.test(g)) continue;
    if (!found.has(k)) found.set(k, g);
    break;
  }
}
console.error("mined:", found.size, "of", want.size);
writeFileSync(root + "data/glosses-extra.js",
  "/* Mined by tools/mine-glosses.mjs from Wiktionary (kaikki.org), CC BY-SA 4.0.\n" +
  "   Place-name and word streets only; personal names are excluded. */\n" +
  "window.STREET_EXTRA = " + JSON.stringify(Object.fromEntries(found)) + ";\n");
console.log("wrote data/glosses-extra.js:", found.size);
