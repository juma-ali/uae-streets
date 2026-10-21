#!/usr/bin/env node
/**
 * Collects every named road in an administrative area from OpenStreetMap.
 *
 * Why this shape: filtering by the area polygon inside Overpass is far too slow for
 * a region the size of Abu Dhabi (504s at the gateway). So it works in two passes —
 * fetch the boundary once, then query cheap bbox tiles and discard every road whose
 * centre falls outside the polygon, locally.
 *
 *   node tools/kb-collect.mjs --name abu-dhabi --osm relation/3766481 \
 *     --bbox 22.63,51.42,25.36,56.02 --tiles 4
 *
 * Data © OpenStreetMap contributors, ODbL 1.0.
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(name);
  return i > -1 && args[i + 1] ? args[i + 1] : fallback;
};

const name = arg("--name", "");
const osm = arg("--osm", "");
const bboxArg = arg("--bbox", "");
const tiles = Math.max(1, Math.min(6, Number(arg("--tiles", "4")) || 4));
// Overpass returns boundary members as *segments*, not closed rings; stitching them
// is a job of its own. For a bbox that already sits inside the emirate, skip it.
const bboxOnly = args.includes("--bbox-only");

const m = /^(relation|way)\/(\d+)$/.exec(osm);
const bb = bboxArg.split(",").map(Number);
if (!name || !m || bb.length !== 4 || bb.some((n) => !Number.isFinite(n))) {
  console.error('Usage: node tools/kb-collect.mjs --name abu-dhabi --osm relation/3766481 --bbox s,w,n,e [--tiles 4]');
  process.exit(2);
}

const root = fileURLToPath(new URL("..", import.meta.url));
const cacheDir = root + ".cache";
const cacheFile =
  cacheDir + "/emirate-" + name + "-" +
  createHash("sha1").update(osm + bboxArg + tiles).digest("hex").slice(0, 8) + ".json";

if (existsSync(cacheFile)) {
  const j = JSON.parse(readFileSync(cacheFile, "utf8"));
  console.log(`cached: ${j.elements.length} ways (${cacheFile.replace(root, "")})`);
  process.exit(0);
}

const MIRRORS = [
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass-api.de/api/interpreter",
  "https://overpass.osm.ch/api/interpreter",
];

async function overpass(query, timeoutMs) {
  for (const mirror of MIRRORS) {
    try {
      const r = await fetch(mirror, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "UAE-Streets/0.1 (kb collection; https://github.com/juma-ali/uae-streets)",
        },
        body: "data=" + encodeURIComponent(query),
        signal: AbortSignal.timeout(timeoutMs),
      });
      if (!r.ok) continue;
      return r.json();
    } catch {
      /* next mirror */
    }
  }
  return null;
}

/* ---------- boundary → rings ---------- */
async function boundaryRings() {
  const j = await overpass(`[out:json][timeout:180];rel(${m[2]});out geom;`, 210000);
  if (!j || !j.elements || !j.elements.length) return null;
  const rings = [];
  for (const el of j.elements) {
    for (const mem of el.members || []) {
      if (mem.type !== "way" || mem.role === "inner" || !mem.geometry) continue;
      rings.push(mem.geometry.map((p) => [p.lat, p.lon]));
    }
  }
  return rings.length ? rings : null;
}

const inRing = (lat, lon, ring) => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [yi, xi] = ring[i];
    const [yj, xj] = ring[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};

(async () => {
  let rings = null;
  if (!bboxOnly) {
    console.log("fetching emirate boundary …");
    rings = await boundaryRings();
    console.log(rings ? `  ${rings.length} ring(s)` : "  boundary unavailable — keeping all results");
  } else {
    console.log("bbox-only mode: no boundary filter");
  }

  const [s, w, n, e] = bb;
  const dLat = (n - s) / tiles;
  const dLon = (e - w) / tiles;

  const seen = new Map();
  let failed = 0;
  let outside = 0;
  let t = 0;

  for (let i = 0; i < tiles; i++) {
    for (let j = 0; j < tiles; j++) {
      t++;
      const tileBbox = [
        (s + i * dLat).toFixed(4),
        (w + j * dLon).toFixed(4),
        (s + (i + 1) * dLat).toFixed(4),
        (w + (j + 1) * dLon).toFixed(4),
      ].join(",");
      process.stdout.write(`[${t}/${tiles * tiles}] ${tileBbox} … `);
      const j1 = await overpass(
        '[out:json][timeout:120];way["highway"~"^(primary|secondary|tertiary|residential|trunk|unclassified)$"]["name"]' +
          `(${tileBbox});out tags center;`,
        150000
      );
      if (!j1) {
        console.log("FAILED");
        failed++;
        continue;
      }
      const els = j1.elements || [];
      let kept = 0;
      for (const el of els) {
        const c = el.center;
        if (!c) continue;
        if (rings && !rings.some((ring) => inRing(c.lat, c.lon, ring))) {
          outside++;
          continue;
        }
        seen.set(el.id, el);
        kept++;
      }
      console.log(`${els.length} ways → ${kept} inside`);
    }
  }

  const elements = [...seen.values()];
  if (!elements.length) {
    console.error("Nothing collected — nothing cached.");
    process.exit(1);
  }
  mkdirSync(cacheDir, { recursive: true });
  writeFileSync(cacheFile, JSON.stringify({ elements }));
  console.log(
    `\ntotal ${elements.length} ways · discarded ${outside} outside the boundary · ` +
      `${failed} tile(s) failed · ${Math.round(readFileSync(cacheFile).length / 1048576)} MB cached`
  );
  if (failed) console.log("Partial: re-running later replaces the cache.");
})();
