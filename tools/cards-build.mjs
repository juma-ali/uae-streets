#!/usr/bin/env node
/**
 * Builds data/cards.js — a compact index of every road, for the card grid.
 *
 *   node tools/cards-build.mjs
 *
 * The page must not load data/kb.js (4.7 MB). This file carries only what a card
 * shows: both names, district, category, route, former name, gloss, and the id of
 * a curated story if one exists. Districts are factored into a table so the rows
 * stay short.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const load = (f, g) => {
  const box = {};
  new Function("window", readFileSync(root + f, "utf8"))(box);
  return box[g];
};

const KB = load("data/kb.js", "KB");
const CATS = load("data/categories.js", "STREET_CATEGORIES");
const GLOSSES = (() => { try { return load("data/dictionary.js", "STREET_GLOSSES"); } catch { return {}; } })();
const CURATED_SET = (() => { try { return new Set(load("data/dictionary.js", "STREET_CURATED") || []); } catch { return new Set(); } })();
const GLOSSES_EXTRA = (() => { try { return load("data/glosses-extra.js", "STREET_EXTRA") || {}; } catch { return {}; } })();
const ALL_GLOSSES = Object.assign({}, GLOSSES_EXTRA, GLOSSES);
const EDITORIAL = load("data/streets.js", "STREETS");
const LOCALITIES = (() => { try { return load("data/localities.js", "LOCALITIES"); } catch { return {}; } })();

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
    .replace(/^ال/, "").replace(/\s+/g, " ").trim();

/* Names like "ظهرة الرِّمث" carry two elements: the landform and what grows on it.
   Glossing only the head word drops the half that identifies the place. */
function glossOf(name, GLOSSES) {
  const whole = norm(String(name || "").replace(/^(شارع|طريق|جادة|ممر|حارة|زقاق|درب|نهج)\s+/, ""));
  if (!whole) return "";
  if (GLOSSES[whole]) return GLOSSES[whole];
  const words = whole.split(" ").filter(Boolean);
  const look = (w) => GLOSSES[w] || GLOSSES[w.replace(/^ال/, "")] || "";
  const headGloss = look(words[0]);
  const tail = words.length > 1 ? words[words.length - 1] : "";
  const tailGloss = tail && tail !== words[0] && CURATED_SET.has(tail.replace(/^ال/, "")) ? look(tail) : "";
  const headName = headGloss.split(",")[0];
  const tailName = tailGloss.split(",")[0].split("(")[0].trim();
  if (headGloss && tailGloss) return headName + " of " + tailName;
  return headGloss || tailGloss || "";
}

const head = (s) =>
  norm(String(s.name_ar || "").replace(/^(شارع|طريق|جادة|ممر|حارة|زقاق|درب|نهج)\s+/, "").split(" ")[0] || "");


/* A former name that was only a number says nothing: "1st Street" → "Amr Bin Al 'As
   Street" is a rename, not a story. The same policy that excludes numeric names from
   the directory applies to the names they replaced. */
const GENERIC_FORMER = /^(\d+\s*(st|nd|rd|th)?\s*(street|road|st|rd)?|(street|road)\s*#?\d+[a-z]?|(شارع|طريق)\s*[\d\u0660-\u0669]+|unnamed.*|no name|track|service road)\.?$/i;
const formerName = (s) => (s && !GENERIC_FORMER.test(String(s).trim()) ? s : "");

const nameKey = (s) =>
  String(s || "").toLowerCase().replace(/\b(street|road|st|rd|avenue)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ").trim();

/* One person, several spelling or length variants on different signs. */
const SYNONYMS = {
  "Hafsa Bint Omar Street": ["Hafsa Bint Omar Bin Al Khattab Street"],
};

/* Curated entries: match by name, so a road can carry its story. */
const storyByName = new Map();
for (const e of EDITORIAL) {
  storyByName.set(nameKey(e.en), e.id);
  if (e.former) storyByName.set(nameKey(e.former.en), e.id);
}

const areaById = new Map(KB.areas.map((a) => [a.id, a]));
const districts = [];
const districtIndex = new Map();
const districtFor = (areaId, emirate, osm) => {
  /* no admin district? use the nearest OSM place node (towns/suburbs, see tools/localities.mjs) */
  const loc = !areaId && LOCALITIES[osm];
  /* A road outside any district still has an emirate — keep it, so the emirate
     filters can reach it. These rows share one synthetic entry per emirate. */
  const key = areaId || (loc ? "loc:" + loc[0] : "em:" + emirate);
  if (districtIndex.has(key)) return districtIndex.get(key);
  const a = areaId ? areaById.get(areaId) : null;
  districts.push([a ? a.path[3] : (loc ? loc[0] : ""), (a && a.name_ar) || (loc ? loc[1] : "") || "", emirate, areaId || "", loc ? "approx" : ""]);
  districtIndex.set(key, districts.length - 1);
  return districts.length - 1;
};

const rows = [];
for (const s of KB.streets) {
  const en = s.name_en || "";
  const ar = s.name_ar || "";
  if (!en && !ar) continue;
  const cat = CATS[s.osm] || "word";
  const gloss = cat === "place" || cat === "word" ? glossOf(s.name_ar, ALL_GLOSSES) : "";
  let story = storyByName.get(nameKey(en)) || storyByName.get(nameKey(s.old_name_en)) || "";
  if (!story) {
    for (const [canon, alts] of Object.entries(SYNONYMS)) {
      if (alts.some((a) => nameKey(a) === nameKey(en))) { story = storyByName.get(nameKey(canon)) || ""; break; }
    }
  }
  rows.push([
    en,
    ar,
    districtFor(s.area, s.emirate, s.osm),
    cat,
    s.ref || "",
    formerName(s.old_name_en),
    gloss,
    story,
  ]);
}

const payload = {
  emirates: {
    "abu-dhabi": ["Abu Dhabi", "أبو ظبي"],
    dubai: ["Dubai", "دبي"],
    sharjah: ["Sharjah", "الشارقة"],
    ajman: ["Ajman", "عجمان"],
    "umm-al-quwain": ["Umm Al Quwain", "أم القيوين"],
    "ras-al-khaimah": ["Ras Al Khaimah", "رأس الخيمة"],
    fujairah: ["Fujairah", "الفجيرة"],
  },
  districts,
  rows,
};

const header =
  "/* Every road, compact enough to render as cards.\n" +
  "   Generated by tools/cards-build.mjs — do not edit by hand.\n" +
  "   Names and coordinates © OpenStreetMap contributors, ODbL 1.0. */\n";

writeFileSync(root + "data/cards.js", header + "window.ROADS = " + JSON.stringify(payload) + ";\n");

const bytes = readFileSync(root + "data/cards.js").length;
console.log(`roads: ${rows.length} | districts: ${districts.length} | data/cards.js: ${Math.round(bytes / 1024)} KB`);
console.log(`with a story: ${rows.filter((r) => r[7]).length} | with a gloss: ${rows.filter((r) => r[6]).length} | with a route: ${rows.filter((r) => r[4]).length}`);
