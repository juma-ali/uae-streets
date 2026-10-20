#!/usr/bin/env node
/**
 * List the named streets inside a bounding box, so you can choose what to write
 * about next. Filters out purely numeric street names ("7 Street", "30c Street"),
 * which carry no naming story.
 *
 *   node tools/osm-district.mjs --bbox 25.25,55.30,25.29,55.34 --label deira
 *
 * Data © OpenStreetMap contributors, ODbL 1.0.
 * Results are cached in .cache/ (gitignored) — Overpass is slow and rate-limited.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const i = args.indexOf(name);
  return i > -1 && args[i + 1] ? args[i + 1] : fallback;
};

const bbox = getArg("--bbox", "");
if (!/^-?\d+(\.\d+)?(,-?\d+(\.\d+)?){3}$/.test(bbox)) {
  console.error("Usage: node tools/osm-district.mjs --bbox lat1,lon1,lat2,lon2 [--label name]");
  process.exit(2);
}
const label = getArg("--label", "area");

const root = fileURLToPath(new URL("..", import.meta.url));
const cacheDir = root + ".cache";
const cacheFile = cacheDir + "/" + label.replace(/[^\w-]+/g, "_") + "-" +
  createHash("sha1").update(bbox).digest("hex").slice(0, 8) + ".json";

const query =
  '[out:json][timeout:120];' +
  'way["highway"~"^(primary|secondary|tertiary|residential|trunk)$"]["name"](' +
  bbox + ");out tags center 400;";

const MIRRORS = [
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.osm.ch/api/interpreter",
  "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
  "https://overpass-api.de/api/interpreter",
];

async function fetchOverpass() {
  for (const m of MIRRORS) {
    const t0 = Date.now();
    try {
      const r = await fetch(m, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "UAE-Streets/0.1 (district listing; https://github.com/juma-ali/uae-streets)",
        },
        body: "data=" + encodeURIComponent(query),
        signal: AbortSignal.timeout(120000),
      });
      if (!r.ok) {
        console.log(`  ${m} -> HTTP ${r.status}`);
        continue;
      }
      const j = await r.json();
      console.log(`  ${m} -> ${j.elements.length} ways in ${Math.round((Date.now() - t0) / 1000)}s`);
      return j;
    } catch (e) {
      console.log(`  ${m} -> ${e.message.slice(0, 50)}`);
    }
  }
  return null;
}

/* A name with no words in it — "7 Street", "30c Street", "شارع 4" — has no story. */
const numericOnly = (en, ar) => {
  const strip = (s) => String(s || "").replace(/[\d\s.\-–]/g, "");
  const words = (s) =>
    String(s || "")
      .replace(/\b(street|road|st\.?)\b/gi, "")
      .replace(/شارع|طريق/g, "")
      .replace(/[\d\s.\-–]/g, "");
  return words(en).length === 0 && words(ar).length === 0;
};

(async () => {
  let data;
  if (existsSync(cacheFile)) {
    console.log(`Using cache ${cacheFile.replace(root, "")}`);
    data = JSON.parse(readFileSync(cacheFile, "utf8"));
  } else {
    console.log(`Querying Overpass for ${bbox} (${label})…`);
    data = await fetchOverpass();
    if (!data) {
      console.error("All Overpass mirrors failed. Try again later, or narrow the bbox.");
      process.exit(1);
    }
    mkdirSync(cacheDir, { recursive: true });
    writeFileSync(cacheFile, JSON.stringify(data));
  }

  // Collapse to one row per distinct name, preferring one that carries name:ar.
  const byName = new Map();
  for (const el of data.elements) {
    const t = el.tags || {};
    const en = t["name:en"] || t.name || "";
    const ar = t["name:ar"] || "";
    if (!en && !ar) continue;
    const key = (en || ar).toLowerCase();
    const prev = byName.get(key);
    if (!prev || (!prev.ar && ar)) {
      byName.set(key, { en: en || ar, ar, kind: t.highway || "", osm: "way/" + el.id });
    }
  }

  const all = [...byName.values()];
  const story = all.filter((s) => !numericOnly(s.en, s.ar));

  // Cross-reference our editorial dataset.
  const w = {};
  new Function("window", readFileSync(root + "data/streets.js", "utf8"))(w);
  const have = new Set(
    w.STREETS.filter((s) => s.emirate).map((s) => s.en.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim())
  );

  console.log(`\n${label}: ${all.length} distinct named ways, ${story.length} with a real name\n`);
  for (const s of story.sort((a, b) => (b.ar ? 1 : 0) - (a.ar ? 1 : 0) || a.en.localeCompare(b.en))) {
    const ours = have.has(s.en.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim()) ? " ✓have" : "";
    console.log(`  ${s.en.slice(0, 42).padEnd(42)} ${s.ar.slice(0, 30).padEnd(30)} ${s.kind.padEnd(11)}${ours}`);
  }
})();
