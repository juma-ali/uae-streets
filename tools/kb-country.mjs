#!/usr/bin/env node
/**
 * Builds data/kb.js for the whole country: every road assigned to the emirate,
 * city and district that contain it.
 *
 *   node tools/pbf-import.mjs --name uae
 *   node tools/pbf-boundaries.mjs --out .cache/admin-uae.json
 *   node tools/kb-country.mjs
 *
 * Data © OpenStreetMap contributors, ODbL 1.0.
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const kbPath = root + "data/kb.js";

const roadsFile = readdirSync(root + ".cache").find((f) => f.startsWith("emirate-uae-"));
if (!roadsFile) {
  console.error("No .cache/emirate-uae-*.json — run tools/pbf-import.mjs --name uae");
  process.exit(1);
}
const roads = JSON.parse(readFileSync(root + ".cache/" + roadsFile, "utf8")).elements;
const admin = JSON.parse(readFileSync(root + ".cache/admin-uae.json", "utf8"));

/* ---------- helpers ---------- */
const slug = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "");

const EMIRATE_NAMES = {
  "abu dhabi": "abu-dhabi",
  dubai: "dubai",
  sharjah: "sharjah",
  ajman: "ajman",
  "umm al quwain": "umm-al-quwain",
  "ras al khaimah": "ras-al-khaimah",
  fujairah: "fujairah",
};

/* A name is "numeric" when the English side carries nothing but a road word, a
   number, and at most single-letter qualifiers: "10a Street", "108/1 Road",
   "1 R/A", "42nd Street". The Arabic side is ignored for this test — "شارع 10أ"
   leaves a letter behind and would defeat the check. */
const numericOnly = (en) => {
  const raw = String(en || "").trim();
  // plot codes: "RA02", "OBR06", "Plot No. M-26" — identifiers, not names
  if (/\bplot\s*(?:no\.?)?\s*[-#]?\s*[a-z]?[- ]?\d+/i.test(raw)) return true;
  if (/^(unit|villa|building|flat)\s*[-#]?\s*[a-z]?\d+/i.test(raw)) return true;
  if (/^[a-z]{1,4}[- ]?\d{1,4}[a-z]?$/i.test(raw)) return true;
  const rest = String(en || "")
    .toLowerCase()
    .replace(/\b(street|road|st|rd|ave|avenue|lane|sikka|roundabout|court|drive|boulevard|close|terrace|circle|square|plaza)\b/g, " ")
    .replace(/\d+\s*(st|nd|rd|th)\b/g, " ")
    .replace(/[0-9]+[a-z]?/g, " ")
    .replace(/[^\p{L}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
  const toks = rest.split(" ").filter(Boolean);
  return toks.length === 0 || toks.every((t) => t.length <= 1);
};
/* Normalise a raw OSM name to the street's actual name:
   - "13b Street (Yamoor Street)" → "Yamoor Street"   (parenthetical alias wins)
   - "1 Saheel Street" / "49 Al Wasl Road" → drop a leading plot number when a
     multi-word name follows ("2020 Boulevard" keeps its number: one word follows)
   - "Al Aqhuwanah 4 Street" → drop the trailing stretch number                       */
const baseName = (s) => {
  let name = String(s || "").trim();
  const plot = /^(?:court|street|road|avenue|lane|villa|plot|unit|building|flat)\s+\d+[a-z]?\s*,\s*(.+)$/i.exec(name);
  if (plot) name = plot[1].trim();
  const paren = /\(([^)]{3,})\)/.exec(name);
  if (paren) name = paren[1].trim();
  const lead = /^(\d+[a-z]?)\s+(.+)$/i.exec(name);
  if (lead && lead[2].split(/\s+/).length >= 2) name = lead[2].trim();
  return name
    .replace(/\s+\d+[a-z]?\s*(street|road)\s*$/i, " $1")
    .replace(/\s+\d+[a-z]?\s*$/i, "")
    .trim();
};

const inRing = (lat, lon, ring) => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [yi, xi] = ring[i];
    const [yj, xj] = ring[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};

const bounds = (b) => {
  let s = 90, n = -90, w = 180, e = -180;
  for (const ring of b.rings) for (const [lat, lon] of ring) {
    if (lat < s) s = lat; if (lat > n) n = lat;
    if (lon < w) w = lon; if (lon > e) e = lon;
  }
  return [s, w, n, e];
};

const prepared = admin.map((b) => ({ ...b, bb: bounds(b), tight: b.rings.reduce((n, r) => n + r.length, 0) }));

function containing(list, lat, lon) {
  let best = null;
  for (const b of list) {
    const [s, w, n, e] = b.bb;
    if (lat < s || lat > n || lon < w || lon > e) continue;
    if (!b.rings.some((r) => inRing(lat, lon, r))) continue;
    if (!best || b.tight < best.tight) best = b;
  }
  return best;
}

const L4 = prepared.filter((b) => b.level === 4 && EMIRATE_NAMES[(b.name_en || "").toLowerCase().replace(/ emirate$/, "").replace(/-/g, " ").trim()]);
const L5 = prepared.filter((b) => b.level === 5);
const L6 = prepared.filter((b) => b.level === 6);
const L8 = prepared.filter((b) => b.level === 8);
const L10 = prepared.filter((b) => b.level === 10);

console.log(`boundaries: ${L4.length} emirates, ${L5.length} L5, ${L6.length} L6, ${L8.length} L8, ${L10.length} L10`);

/* ---------- assign ---------- */
const emirates = new Map();   // id -> {id, osm, name_en, name_ar, street_count}
const areas = new Map();      // id -> {id, path, osm, bbox, street_count}
const byEmirateName = new Map(); // emirateId -> Map(baseName -> row)
const outside = { count: 0 };
let skippedNumeric = 0;

for (const el of roads) {
  const t = el.tags || {};
  // OSM wiki (UAE): name is the Arabic name by default, name:ar mirrors it, and
  // name:en is optional. So never treat an untagged name as English.
  const rawName = t.name || "";
  const nameIsArabic = /[\u0600-\u06FF]/.test(rawName);
  const enTag = t["name:en"] || "";
  const enIsArabic = /[\u0600-\u06FF]/.test(enTag);
  const rawEn = !enIsArabic && enTag ? enTag : nameIsArabic || enIsArabic ? "" : rawName;
  const rawAr = t["name:ar"] || (nameIsArabic ? rawName : enIsArabic ? enTag : "");

  // OSM records renames in old_name / old_name:en / old_name:ar — read them.
  const oldTag = t.old_name || "";
  const oldIsArabic = /[\u0600-\u06FF]/.test(oldTag);
  // Keep previous names only for significant roads. OSM records a rename on
  // 4,889 streets, but most are plot numbers ("13th Street"); 89 renames sit on
  // motorway/trunk/primary/secondary, which is the set worth carrying.
  const majorRoad = /^(motorway|trunk|primary|secondary)$/.test(t.highway || "");
  const oldEn = t["old_name:en"] || (oldTag && !oldIsArabic ? oldTag : "");
  const oldAr = t["old_name:ar"] || (oldTag && oldIsArabic ? oldTag : "");
  if (!rawEn && !rawAr) continue;

  // Normalise first, then judge: "1 Saheel Street" is Saheel Street, not a number.
  const en = baseName(rawEn);
  const ar = baseName(rawAr);

  const c = el.center;
  if (!c) continue;
  const em = containing(L4, c.lat, c.lon);
  if (!em) { outside.count++; continue; }
  const emKey = (em.name_en || "").toLowerCase().replace(/ emirate$/, "").replace(/-/g, " ").trim();
  const emId = EMIRATE_NAMES[emKey];
  if (!emId) { outside.count++; continue; }

  // Per-emirate counters, so the directory can explain why a page is thin
  // rather than just being thin.
  if (!emirates.has(emId)) {
    emirates.set(emId, {
      id: emId, osm: em.osm, name_en: em.name_en, name_ar: em.name_ar,
      street_count: 0, roads_total: 0, numeric_skipped: 0,
    });
  }
  const emRec = emirates.get(emId);
  emRec.roads_total++;

  if (en && numericOnly(en)) { emRec.numeric_skipped++; skippedNumeric++; continue; }
  if (!en && !ar) { emRec.numeric_skipped++; skippedNumeric++; continue; }

  const key = (en || ar).toLowerCase();

  if (!byEmirateName.has(emId)) byEmirateName.set(emId, new Map());
  const RANK = { motorway: 6, trunk: 5, primary: 4, secondary: 3, tertiary: 2, unclassified: 1, residential: 0, living_street: 0 };
  const bucket = byEmirateName.get(emId);
  const prev = bucket.get(key);
  if (prev) {
    if (rawEn !== en || rawAr !== ar) prev.variants = (prev.variants || 1) + 1;
    if (!prev.name_ar && ar) prev.name_ar = ar;
    // a road made of many segments takes its highest class, not its first one
    if ((RANK[t.highway] || 0) > (RANK[prev.kind] || 0)) prev.kind = t.highway || prev.kind;
    // fill the rename whenever we learn it, not only when the class rises
    if (!prev.old_name_en && oldEn && (majorRoad || (RANK[prev.kind] || 0) >= 3)) {
      prev.old_name_en = oldEn;
      prev.old_name_ar = oldAr || null;
    }
    continue;
  }

  // Some emirates (notably Dubai) have no admin_level 8; level 10 is the
  // neighbourhood boundary there, so it serves as the district fallback.
  let d8 = containing(L8, c.lat, c.lon) || containing(L10, c.lat, c.lon);
  if (d8 && !d8.name_en && !d8.name_ar) d8 = null; // unnamed polygon → no district
  const l6 = containing(L6, c.lat, c.lon);
  const l5 = containing(L5, c.lat, c.lon);

  const emName = em.name_en || emId;
  const emShort = emName.replace(/ Emirate$/i, "");
  const path = d8
    ? [emName, (l5 && l5.name_en) || emShort, (l6 && l6.name_en) || emShort, d8.name_en || d8.name_ar]
    : null;

  let areaId = null;
  if (d8) {
    areaId = slug(path[3]) + "-" + d8.osm.split("/")[1];
    if (!areas.has(areaId)) {
      areas.set(areaId, { id: areaId, path, name_ar: d8.name_ar || "", osm: d8.osm, bbox: bounds(d8), street_count: 0 });
    }
    areas.get(areaId).street_count++;
  }

  bucket.set(key, {
    id: emId + "/" + slug(en || ar),
    area: areaId,
    emirate: emId,
    name_en: en,
    name_ar: ar,
    osm: "way/" + el.id,
    kind: t.highway || "",
    lat: Number(c.lat.toFixed(6)),
    lon: Number(c.lon.toFixed(6)),
    old_name_en: majorRoad ? oldEn || null : null,
    old_name_ar: majorRoad ? oldAr || null : null,
    variants: 1,
  });
}


/* Two rows can carry one Arabic name in two transliterations ("'Ain Al Faydah"
   and "Ain Al Faydah"). Merge them only when they are also the same place: same
   emirate, same normalised Arabic name, centres within 2 km. */
const arKey = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[\u0623\u0625\u0622\u0671]/g, "\u0627")
    .replace(/\u0649/g, "\u064A")
    .replace(/\u0629/g, "\u0647")
    .replace(/^(شارع|طريق|جادة|ممر|حارة|زقاق|درب|نهج)\s+/, "")
    .replace(/\s+/g, " ")
    .trim();

const kmApart = (a, b) => {
  const dy = (a.lat - b.lat) * 111;
  const dx = (a.lon - b.lon) * 111 * Math.cos((a.lat * Math.PI) / 180);
  return Math.hypot(dx, dy);
};

function sameNameWithin2km(rows) {
  const byKey = new Map();
  const passthrough = [];
  for (const s of rows) {
    if (!arKey(s.name_ar)) { passthrough.push(s); continue; }
    const k = s.emirate + "|" + arKey(s.name_ar);
    if (!byKey.has(k)) byKey.set(k, []);
    byKey.get(k).push(s);
  }
  const out = [];
  let merged = 0;
  const seen = new Set();
  for (const [k, group] of byKey) {
    if (!group.length) continue;
    if (group.length === 1) { out.push(group[0]); seen.add(group[0].id); continue; }
    // greedy clustering by proximity
    const clusters = [];
    for (const s of group) {
      const c = clusters.find((cl) => cl.some((x) => kmApart(x, s) <= 2));
      if (c) c.push(s); else clusters.push([s]);
    }
    for (const cl of clusters) {
      if (cl.length === 1) { out.push(cl[0]); seen.add(cl[0].id); continue; }
      const base = cl.slice().sort((a, b) => (b.name_en || "").length - (a.name_en || "").length)[0];
      const row = { ...base };
      row.variants = cl.reduce((n, x) => n + (x.variants || 1), 0);
      row.merged_from = cl.length;
      if (!row.name_en) row.name_en = cl.find((x) => x.name_en)?.name_en || "";
      if (!row.old_name_en) row.old_name_en = cl.find((x) => x.old_name_en)?.old_name_en || null;
      if (!row.old_name_ar) row.old_name_ar = cl.find((x) => x.old_name_ar)?.old_name_ar || null;
      if (!row.area) row.area = cl.find((x) => x.area)?.area || null;
      out.push(row);
      merged += cl.length - 1;
      seen.add(row.id);
    }
  }
  console.log(`merged: ${merged} rows sharing an Arabic name within 2 km`);
  return out.concat(passthrough);
}

/* ---------- write ---------- */
let streets = [];
for (const [emId, bucket] of byEmirateName) {
  const rows = [...bucket.values()];
  emirates.get(emId).street_count = rows.length;
  streets.push(...rows);
}
streets = sameNameWithin2km(streets);
for (const rec of emirates.values()) rec.street_count = 0;
for (const s of streets) emirates.get(s.emirate).street_count++;
streets.sort((a, b) => a.emirate.localeCompare(b.emirate) || (a.name_en || a.name_ar).localeCompare(b.name_en || b.name_ar));

const kb = {
  meta: {
    license: "ODbL 1.0",
    attribution: "© OpenStreetMap contributors — https://www.openstreetmap.org/copyright",
    note:
      "Generated by tools/pbf-import.mjs + tools/pbf-boundaries.mjs + tools/kb-country.mjs. " +
      "Each street sits in the tightest OSM boundary that contains it; districts are admin_level 8.",
  },
  emirates: [...emirates.values()].sort((a, b) => a.id.localeCompare(b.id)),
  areas: [...areas.values()].filter((a) => a.street_count > 0).sort((a, b) => a.path.join("/").localeCompare(b.path.join("/"))),
  streets,
};

writeFileSync(kbPath, "window.KB = " + JSON.stringify(kb, null, 2) + ";\n");

console.log(`\nstreets : ${streets.length}`);
console.log(`emirates: ${kb.emirates.map((e) => e.id + " " + e.street_count).join(" · ")}`);
console.log(`areas   : ${kb.areas.length} districts`);
console.log(`skipped : ${skippedNumeric} numeric-only · ${outside.count} outside any emirate`);
console.log(`with ar : ${streets.filter((s) => s.name_ar).length} | no district: ${streets.filter((s) => !s.area).length}`);
console.log(`file    : data/kb.js ${Math.round(readFileSync(kbPath).length / 1048576 * 10) / 10} MB`);
