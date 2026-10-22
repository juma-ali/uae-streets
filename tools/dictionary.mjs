#!/usr/bin/env node
/**
 * Builds data/dictionary.js: Arabic head-noun → English gloss, for streets named
 * after a word.
 *
 *   node tools/dictionary.mjs
 *
 * Source: Wiktionary's Arabic entries, through the kaikki.org extract (CC BY-SA
 * 4.0). The first run downloads ~830 MB into .cache/; later runs reuse it.
 *
 * Only lexical senses are kept. Wiktionary is full of grammatical notes —
 * "plural of", "elative degree of", "verbal noun of" — and a street named الأربح
 * does not mean "elative degree of ربح". Those are dropped, along with proper
 * nouns (a street called العقبة is a pass, not the Jordanian port).
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, createWriteStream } from "node:fs";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const cacheDir = root + ".cache";
const src = cacheDir + "/kaikki-arabic.jsonl";
const out = root + "data/dictionary.js";
const EXTRACT = "https://kaikki.org/dictionary/Arabic/kaikki.org-dictionary-Arabic.jsonl";

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/^ال/, "")
    .replace(/\s+/g, " ")
    .trim();

/* Grammatical notes and proper nouns masquerading as senses. */
const NOISE = /(elative|degree of|construct state|participle|verbal noun|masculine|feminine|plural|singular|dual|form [IVX]+\b|romanization|transliteration|inflection|conjugation|obsolete|archaic|nonstandard|misspelling|abbreviation|initialism|acronym)/i;
const TRANSLIT = /\([a-zāēīōūʾʿʔʕ ]+\)/i;
const PLACE = /\b(city|town|village|port|capital|governorate|province|region|country|island|river|sea)\b/i;
const STOP = new Set(["ابو", "ابن", "ابي", "في", "من", "ال", "ذو", "بنت", "بن", "ام"]);

async function ensureExtract() {
  if (existsSync(src)) return;
  mkdirSync(cacheDir, { recursive: true });
  console.log("downloading the Arabic Wiktionary extract (~830 MB uncompressed)…");
  const r = await fetch(EXTRACT, { headers: { "user-agent": "uae-streets-kb/1.0" }, signal: AbortSignal.timeout(1800000) });
  if (!r.ok || !r.body) throw new Error("download failed: HTTP " + r.status);
  const file = createWriteStream(src);
  let bytes = 0;
  for await (const chunk of r.body) {
    bytes += chunk.length;
    if (!file.write(Buffer.from(chunk))) await new Promise((res) => file.once("drain", res));
  }
  await new Promise((res) => file.end(res));
  console.log("  downloaded", (bytes / 1048576).toFixed(0), "MB");
}

await ensureExtract();

/* Landform and landmark terms. Wiktionary rarely covers Gulf toponyms, so these
   are curated: standard Arabic meanings, plus the three sourced from the UAE
   sources — نقا / عرقوب (لهجتنا المحلية: الكثبان الرملية) and هور / هيرات (NLA
   glossary). Terms whose Gulf sense I cannot vouch for are deliberately absent:
   بدع, محضر, غيط, وعبة. */
const CURATED = {
  "دمثه": "soft ground",
  "ظهره": "ridge, back",
  "جرن": "basin, hollow",
  "فريج": "neighbourhood (Gulf Arabic)",
  "عيدان": "branches, sticks",
  "رملات": "sandy patches",
  "حاره": "quarter, lane",
  "حدائق": "gardens",
  "سلام": "peace",
  "ساروق": "low passage between two dunes",
  "بو": "“father of …” — place-name prefix (colloquial)",
  "ابو": "“father of …” — a place-name prefix",
  "ام": "“mother of …” — a place-name prefix",
  "شرف": "ridge, crest",
  "ذيد": "Al Dhaid, a town in Sharjah",
  "بطحاء": "wide valley, flat ground",
  "مدينه": "city, town",
  "ميدان": "square, esplanade",
  "تل": "hill, mound",
  "جبال": "mountains",
  "قرون": "peaks, horns of hills",
  "نخيل": "palm trees",
  "غابات": "forests",
  "غافات": "ghaf trees",
  "غافه": "a ghaf tree",
  "غاف": "ghaf tree",
  "برق": "stony ground",
  "برقا": "stony ground",
  "جبل": "mountain",
  "وادي": "valley, dry riverbed",
  "طوي": "waterhole, pool",
  "سيح": "open plain, flood plain",
  "غليل": "small valley, watercourse",
  "رملة": "sand, sandy ground",
  "نقا": "sand dune",
  "نكود": "sand dune",
  "دعثور": "sand dune",
  "عرقوب": "ridge, dune",
  "عرق": "sand ridge",
  "سبخة": "salt flat",
  "شعبة": "ravine, gully",
  "خور": "creek, inlet",
  "هور": "lagoon, deep pit",
  "هيرات": "pearl-diving shallows",
  "رأس": "headland, cape",
  "قرن": "peak, horn of a hill",
  "ثنية": "mountain pass",
  "حدبة": "hill, ridge",
  "جزيرة": "island",
  "برج": "tower",
  "دوار": "roundabout",
  "قصر": "palace",
  "حصن": "fort",
  "سوق": "market",
  "بستان": "orchard, garden",
  "فلج": "irrigation channel",
  "عين": "spring, water source",
  "بير": "well",
  "ميناء": "port",
  "كورنيش": "waterfront road",
  "جسر": "bridge",
  "نفق": "tunnel",
  "مطار": "airport",
  "حديقة": "garden, park",
  "ساحة": "square",
  "محطة": "station",
  "مصلى": "prayer ground",
  "شاطئ": "beach",
  "خليج": "gulf",
  "بحيرة": "lagoon, lake",
  "كهف": "cave",
  "مغارة": "cave",
  "صخرة": "rock",
  "هضبة": "plateau",
  "سهل": "plain",
  "روضة": "meadow",
  "حوض": "basin",
  "جرف": "cliff, bank",
  "قاع": "flat ground",
  "مفرق": "junction",
  "تقاطع": "intersection",
  "مدخل": "entrance",
  "مخرج": "exit",
  "دحل": "sinkhole, cave",
  "رقعة": "patch of ground"
};

const dict = new Map();
let lines = 0;
const rl = createInterface({ input: createReadStream(src, { encoding: "utf8" }), crlfDelay: Infinity });
for await (const line of rl) {
  lines++;
  if (!line.trim()) continue;
  let j;
  try { j = JSON.parse(line); } catch { continue; }
  if (j.lang_code !== "ar" || !j.word || !/[\u0600-\u06FF]/.test(j.word)) continue;
  if (!/^(noun|adj|adv)$/.test(j.pos || "")) continue;
  /* Take the first *clean* sense, not merely the first: a lemma's opening sense
     is often a grammatical note ("plural of …"), while a usable one sits below. */
  const firstCleanGloss = (j.senses || [])
    .flatMap((s) => s.glosses || [])
    .map((x) => String(x).replace(/\s+/g, " ").trim())
    .find((g) => g.length >= 3 && g.length <= 70 && !NOISE.test(g) && !TRANSLIT.test(g) && !PLACE.test(g));
  if (!firstCleanGloss) continue;
  const g = firstCleanGloss;
  const k = norm(j.word);
  if (!k || STOP.has(k)) continue;
  if (!dict.has(k) || g.length < dict.get(k).length) dict.set(k, g);
}

// curated meanings win over dictionary ones for landform terms
for (const [k, v] of Object.entries(CURATED)) dict.set(norm(k), v);

writeFileSync(
  out,
  "/* Arabic head-noun glosses for streets named after a word.\n" +
    "   Source: Wiktionary (Arabic entries), CC BY-SA 4.0, via kaikki.org.\n" +
    "   Generated by tools/dictionary.mjs — do not edit by hand. */\n" +
    "window.STREET_GLOSSES = " + JSON.stringify(Object.fromEntries(dict)) + ";\n"
);

console.log(`lines: ${lines} | glosses kept: ${dict.size} | wrote data/dictionary.js`);
