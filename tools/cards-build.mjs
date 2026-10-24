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


/* Sub-regions: the areas people name when they say where they are. Assigning by
   nearest centre keeps the directory's own vocabulary out of it. */
const REGIONS = [
  ["abu-dhabi","Abu Dhabi city","مدينة أبوظبي",24.4539,54.3773],
  ["abu-dhabi","Al Ain","العين",24.2075,55.7447],
  ["abu-dhabi","Al Dhafra Region","منطقة الظفرة",23.6489,53.7050],
  ["dubai","Dubai city","مدينة دبي",25.2048,55.2708],
  ["dubai","Hatta","حتا",24.8000,56.1167],
  ["sharjah","Sharjah city","مدينة الشارقة",25.3463,55.4209],
  ["sharjah","Al Dhaid","الذيد",25.2833,55.8833],
  ["sharjah","Khor Fakkan","خورفكان",25.3392,56.3571],
  ["sharjah","Kalba","كلباء",25.0167,56.3667],
  ["sharjah","Dibba Al Hisn","دبا الحصن",25.6167,56.2667],
  ["sharjah","Mleiha","مليحة",25.1167,55.8667],
  ["ajman","Ajman city","مدينة عجمان",25.4052,55.5136],
  ["ajman","Manama","المنامة",25.3167,56.0333],
  ["ajman","Masfout","مصفوت",24.9333,56.0500],
  ["umm-al-quwain","Umm Al Quwain city","مدينة أم القيوين",25.5647,55.5552],
  ["umm-al-quwain","Falaj Al Mualla","فلج المعلا",25.3667,55.8667],
  ["ras-al-khaimah","Ras Al Khaimah city","مدينة رأس الخيمة",25.7895,55.9432],
  ["ras-al-khaimah","Al Rams","الرمس",25.8833,55.9833],
  ["fujairah","Fujairah city","مدينة الفجيرة",25.1288,56.3265],
  ["fujairah","Dibba Al Fujairah","دبا الفجيرة",25.5833,56.2833]
];
const regionOf = (s) => {
  if (typeof s.lat !== "number" || typeof s.lon !== "number") return -1;
  let best = -1, bd = Infinity;
  for (let i = 0; i < REGIONS.length; i++) {
    const r = REGIONS[i];
    if (r[0] !== s.emirate) continue;
    const p1 = s.lat * Math.PI / 180, p2 = r[3] * Math.PI / 180;
    const dp = (r[3] - s.lat) * Math.PI / 180, dl = (r[4] - s.lon) * Math.PI / 180;
    const x = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
    const d = 2 * 6371 * Math.asin(Math.sqrt(x));
    if (d < bd) { bd = d; best = i; }
  }
  return best;
};

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
    .replace(/^ال/, "").replace(/\s+/g, " ").trim();

/* Names like "ظهرة الرِّمث" carry two elements: the landform and what grows on it.
   Glossing only the head word drops the half that identifies the place. */
/* These read as suffixes, not as a second element: "Adham Boulevard" is not
   "shady of boulevard". */
const NO_JOIN = new Set(["بوليفارد", "كورنيش", "شارع", "طريق", "ميدان", "دوار", "نفق", "ساحه", "حديقه"]);

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
  if (tailGloss && NO_JOIN.has(tail.replace(/^\u0627\u0644/, ""))) return tailGloss;
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


/* OSM sometimes carries a label rather than a name ("Connections", "Service Road").
   A card that says only that is noise, so it stays out of the index. */
const NOT_A_NAME = /^(service road|service|connection|connections|connector|coast road|free short\w*|track|unnamed.*|road|street|way|path|bike path|footpath|pedestrian.*|parking|roundabout|junction|bridge|tunnel|exit|entry|main street|new street|local road|access road|internal road|link road)\s*\d*$/i;


/* Some person streets arrive from OSM tagged as something else (typically the
   "named after a word" bucket). These are people, so they get the person card. */
const PERSON_NAMES = new Set([
  "ابو جعفر المدني",
  "ابو ادريس الخولاني",
  "ابو ايوب الانصاري",
  "ابو بكر الصديق",
  "ابو بكر الرازي",
  "ابو الدرداء الانصاري",
  "ابو ذر الغفاري",
  "ابو سعيد الخدري",
  "ابو طلحه",
  "ابو العلاء المعري",
  "ابو عمرو الشيباني",
  "ابو فراس الحمداني",
  "ابو قتاده الانصاري",
  "ابو مالك الاشعري",
  "ابو محجن الثقافي",
  "ابو موسي الاشعري",
  "ابو هريره",
  "ابو حنيفه النعمان",
  "ابو الاسود الدؤلي",
  "ابو البختري الطائي",
  "ابو اسحاق السبيعي",
  "ابو حميد الساعدي",
  "ابو بكر بن عياش",
  "ابو بكر بن المنكدر",
  "ذهبي",
  "بخاري",
  "فارابي",
  "حسن البصري",
  "امام الشافعي",
  "امام مسلم",
  "رازي",
  "مختار مالك",
  "زهراوي",
  "ابهري",
  "عسقلاني",
  "باقلاني",
  "دار قطني",
  "ادرسي",
  "حجاج النضري",
  "هيثم الشيباني",
  "جبرتي",
  "قزويني",
  "مقدسي",
  "مسيب الرياحي",
  "قشيري",
  "رحبي",
  "سائب الثقفي",
  "عامر البجلي",
  "عمرو العماوي",
  "طبري",
  "عبدلله عاي اهمد المصوري",
  "ابو ايوب اك انيم",
  "ابو محجن الثقفي",
]);


/* OSM also carries development and facility labels from Dubai's master
   communities — "Frond C", "Zone A", "Villas 1-11", "Terminal 03 Arrival".
   They are places, but they are not street names, so no card is built. */
const NOT_A_STREET = /(^|\s)(service|tertiary|secondary|access|industrial|minor|natural|coast|ring|depot|connection|connector|light vehicles|main avenue|taxi queue|park drive|no name|oaisis|^oasis$)(\s|$)|(^(zone|frond|villas?|villa|block|cluster|townhouses?|residence|tower|complex|terminal|district|sector)\b)|((^|\s)(villas?|blocks?|townhouses?|residence|cluster|terminal|zone)\s*[0-9a-z])|(\d+\s*(st|street|road|rd|stret|rou?ndabout))|(akoya|jumeirah islands|al badia|arabian ranches|mudon|expo village|nadd al sheba|\bjvt\b|\bmbr\b|calida|under ?pass|junction|eagle square|rock crushers|stone crush|group|welded|arrival|departure)/i;


/* Arabic names that OpenStreetMap does not carry. Keys are the English name as
   OSM spells it; values are the Arabic as it appears on the sign or in use. */
const AR_OVERRIDES = new Map([
  ["abi al adarham al zamani street", "شارع أبي الأدرهم الزماني"],
  ["abu ja'far al madani street", "شارع أبي جعفر المدني"],
]);


/* Names that are places elsewhere: a street called القاهرة is named for Cairo. */
const PLACE_NAMES = new Set([
  "دمشق",
  "بغداد",
  "بيروت",
  "قاهره",
  "رياض",
  "مكه",
  "مدينه",
  "قدس",
  "عمان",
  "تونس",
  "جزائر",
  "رباط",
  "طرابلس",
  "خرطوم",
  "صنعاء",
  "مسقط",
  "كويت",
  "دوحه",
  "منامه",
  "حلب",
  "حمص",
  "بصره",
  "موصل",
  "كربلاء",
  "نجف",
  "غزه",
  "نابلس",
  "خليل",
  "اريحا",
  "بخاري",
  "سمرقند",
  "اصفهان",
  "شيراز",
  "استانبول",
  "انقره",
  "طهران",
  "باريز",
  "لندن",
  "روما",
  "مدريد",
  "برلين",
  "فيينا",
  "موسكو",
  "ابها",
  "جميرا",
  "زعبيل",
  "خورفكان",
  "مليحه",
]);

const rows = [];
for (const s of KB.streets) {
  const en = s.name_en || "";
  const ar = s.name_ar || AR_OVERRIDES.get(String(en).trim().toLowerCase()) || "";
  if (!en && !ar) continue;
  if (NOT_A_NAME.test(String(en).trim())) continue;
  if (NOT_A_STREET.test(String(en).trim())) continue;
  let cat = CATS[s.osm] || "word";
  const bare = String(norm(String(ar).replace(/^(شارع|طريق|جادة)\s+/, "")).replace(/^\u0627\u0644/, ""));
  if (PERSON_NAMES.has(bare)) cat = "person";
  else if (PLACE_NAMES.has(bare)) cat = "place";
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
    regionOf(s),
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
  regions: REGIONS.map((r) => [r[1], r[2], r[0]]),
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
