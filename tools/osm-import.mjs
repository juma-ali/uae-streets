#!/usr/bin/env node
/**
 * Builds data/index.js — the "basic information" table (name, osm id, coordinates)
 * from OpenStreetMap via Nominatim.
 *
 *   node tools/osm-import.mjs
 *
 * Data © OpenStreetMap contributors, ODbL 1.0
 * https://www.openstreetmap.org/copyright
 *
 * Nominatim asks for max 1 request/second and a real User-Agent; both are honoured
 * below. This is for seeding, not for bulk scraping — for thousands of streets use
 * a Geofabrik extract instead.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const UA = "UAE-Streets/0.1 (street index; https://github.com/juma-ali/uae-streets)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const streetsPath = fileURLToPath(new URL("../data/streets.js", import.meta.url));
const outPath = fileURLToPath(new URL("../data/index.js", import.meta.url));

const sandbox = {};
new Function("window", readFileSync(streetsPath, "utf8"))(sandbox);
const streets = sandbox.STREETS || [];

const norm = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N} ]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

async function lookup(name, emirate) {
  const params = new URLSearchParams({
    format: "jsonv2",
    limit: "5",
    namedetails: "1",
    addressdetails: "1",
    countrycodes: "ae",
    q: `${name}, ${emirate}, United Arab Emirates`,
  });
  const res = await fetch("https://nominatim.openstreetmap.org/search?" + params, {
    headers: { "User-Agent": UA, "Accept-Language": "en" },
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

const normAr = (s) =>
  norm(
    String(s || "")
      .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
      .replace(/[أإآٱ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .replace(/^(شارع|طريق)\s+/, "")
  );

/** Every name a feature carries, in either language. */
function featureNames(hit) {
  const nd = hit.namedetails || {};
  return [hit.name, hit.name_en, nd["name:en"], nd["name:ar"], nd.name]
    .filter(Boolean)
    .map((n) => norm(n))
    .concat([].concat([hit.name, nd["name:ar"]].filter(Boolean).map(normAr)));
}

function score(hit, street) {
  const names = featureNames(hit);
  const en = norm(street.en);
  const ar = normAr(street.ar);
  let s = 0;
  if (names.includes(en) || names.includes(ar)) s += 6;
  if (hit.category === "highway") s += 3;
  if (hit.osm_type === "way") s += 1;
  const display = norm(hit.display_name);
  if (display.includes(norm(street.emirate.replace(/-/g, " ")))) s += 1;
  return s;
}

/** Exact or near-exact name agreement, on a highway feature. */
function verdict(hit, street) {
  if (hit.category !== "highway") return null;
  const names = featureNames(hit);
  const en = norm(street.en);
  const ar = normAr(street.ar);
  if (names.includes(en) || names.includes(ar)) return "exact";
  if (names.some((n) => n && (n.includes(en) || en.includes(n)))) return "probable";
  return null;
}

const rows = [];
const misses = [];

for (const [i, st] of streets.entries()) {
  process.stdout.write(`[${i + 1}/${streets.length}] ${st.en} … `);
  try {
    const hits = await lookup(st.en, st.emirate.replace(/-/g, " "));
    const usable = hits
      .map((h) => ({ hit: h, how: verdict(h, st) }))
      .filter((x) => x.how)
      .sort((a, b) => score(b.hit, st) - score(a.hit, st));

    if (!usable.length) {
      console.log("no confident match");
      misses.push({ id: st.id, reason: "no confident match" });
    } else {
      const { hit: best, how } = usable[0];
      if (how !== "exact") {
        // A "probable" match can carry a different Arabic name from its English
        // one — e.g. name:en "Khalifa Street" but name "شارع محمد بن خليفة".
        // Not trustworthy enough for an index of coordinates.
        console.log("only a probable match — skipped");
        misses.push({ id: st.id, reason: "only a probable match" });
      } else {
        const details = best.namedetails || {};
        const arTag = details["name:ar"] || "";
        // Some features carry a Latin string in name:ar — ignore those.
        const nameAr = /[\u0600-\u06FF]/.test(arTag) ? arTag : "";
        rows.push({
          id: st.id,
          osm: best.osm_type + "/" + best.osm_id,
          name_en: details["name:en"] || best.name || "",
          name_ar: nameAr,
          emirate: st.emirate,
          lat: Number(best.lat),
          lon: Number(best.lon),
          match: how,
        });
        const arFlag = nameAr ? (nameAr === st.ar ? "=ar" : "≠ar") : "no-ar";
        console.log(`${best.osm_type}/${best.osm_id} ${how} ${arFlag}`);
      }
    }
  } catch (e) {
    console.log("ERROR", e.message);
    misses.push({ id: st.id, reason: e.message });
  }
  await sleep(1100); // Nominatim: max 1 request per second
}

const header =
  "/* Basic street index — name, OSM id and coordinates.\n" +
  "   Data © OpenStreetMap contributors, ODbL 1.0\n" +
  "   https://www.openstreetmap.org/copyright\n" +
  "   Generated by tools/osm-import.mjs — do not edit by hand. */\n\n";

writeFileSync(
  outPath,
  header + "window.STREET_INDEX = " + JSON.stringify(rows, null, 2) + ";\n"
);

console.log(`\nmatched ${rows.length}/${streets.length}`);
const withAr = rows.filter((r) => r.name_ar).length;
const arAgrees = rows.filter((r) => {
  const st = streets.find((s) => s.id === r.id);
  return r.name_ar && st && r.name_ar === st.ar;
}).length;
console.log(`with name:ar tagged : ${withAr}`);
console.log(`name:ar matches ours : ${arAgrees}`);
if (misses.length) {
  console.log("\nunmatched:");
  for (const m of misses) console.log(`  ${m.id} — ${m.reason}`);
}
