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
  const rawEn = t["name:en"] || t.name || "";
  const rawAr = t["name:ar"] || "";
  if (!rawEn && !rawAr) continue;

  // Normalise first, then judge: "1 Saheel Street" is Saheel Street, not a number.
  const en = baseName(rawEn);
  const ar = baseName(rawAr);
  if (numericOnly(en)) { skippedNumeric++; continue; }
  if (!en && !ar) { skippedNumeric++; continue; }

  const c = el.center;
  if (!c) continue;
  const em = containing(L4, c.lat, c.lon);
  if (!em) { outside.count++; continue; }
  const emKey = (em.name_en || "").toLowerCase().replace(/ emirate$/, "").replace(/-/g, " ").trim();
  const emId = EMIRATE_NAMES[emKey];
  if (!emId) { outside.count++; continue; }

  const key = (en || ar).toLowerCase();

  if (!byEmirateName.has(emId)) { byEmirateName.set(emId, new Map()); emirates.set(emId, { id: emId, osm: em.osm, name_en: em.name_en, name_ar: em.name_ar, street_count: 0 }); }
  const bucket = byEmirateName.get(emId);
  const prev = bucket.get(key);
  if (prev) {
    if (rawEn !== en || rawAr !== ar) prev.variants = (prev.variants || 1) + 1;
    if (!prev.name_ar && ar) prev.name_ar = ar;
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
      areas.set(areaId, { id: areaId, path, osm: d8.osm, bbox: bounds(d8), street_count: 0 });
    }
    areas.get(areaId).street_count++;
  }

  bucket.set(key, {
    id: emId + "/" + slug(en || ar),
    area: areaId,
    emirate: emId,
    name_en: en || ar,
    name_ar: ar,
    osm: "way/" + el.id,
    kind: t.highway || "",
    lat: Number(c.lat.toFixed(6)),
    lon: Number(c.lon.toFixed(6)),
    variants: 1,
  });
}

/* ---------- write ---------- */
const streets = [];
for (const [emId, bucket] of byEmirateName) {
  const rows = [...bucket.values()];
  emirates.get(emId).street_count = rows.length;
  streets.push(...rows);
}
streets.sort((a, b) => a.emirate.localeCompare(b.emirate) || a.name_en.localeCompare(b.name_en));

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
