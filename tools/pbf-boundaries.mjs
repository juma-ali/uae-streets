#!/usr/bin/env node
/**
 * Extracts administrative boundaries from the local PBF, stitching member ways
 * into closed rings (Overpass only gives fragments; a PBF has everything).
 *
 *   node tools/pbf-boundaries.mjs --inspect
 *   node tools/pbf-boundaries.mjs --bbox "24.26,54.30,24.56,54.78;…" --out .cache/admin-abu-dhabi.json
 *
 * Data © OpenStreetMap contributors, ODbL 1.0.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { inflateSync } from "node:zlib";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const arg = (n, d) => {
  const i = args.indexOf(n);
  return i > -1 && args[i + 1] ? args[i + 1] : d;
};
const inspect = args.includes("--inspect");
const bboxArg = arg("--bbox", "");
const outPath = arg("--out", "");

const root = fileURLToPath(new URL("..", import.meta.url));
const pbfPath = arg("--pbf", root + ".cache/uae-latest.osm.pbf");
if (!existsSync(pbfPath)) {
  console.error("No PBF at " + pbfPath);
  process.exit(2);
}

/* ---------- protobuf ---------- */
function varint(buf, p) {
  let r = 0, s = 0;
  for (;;) {
    const b = buf[p++];
    r += (b & 0x7f) * Math.pow(2, s);
    if (!(b & 0x80)) break;
    s += 7;
  }
  return [r, p];
}
const zigzag = (n) => (n % 2 === 0 ? n / 2 : -(n + 1) / 2);
function fields(buf, start, end) {
  const out = [];
  let p = start;
  while (p < end) {
    let key;
    [key, p] = varint(buf, p);
    const field = key >>> 3, wire = key & 7;
    if (wire === 0) { let v; [v, p] = varint(buf, p); out.push({ field, wire, value: v }); }
    else if (wire === 2) { let l; [l, p] = varint(buf, p); out.push({ field, wire, start: p, end: p + l }); p += l; }
    else if (wire === 5) { out.push({ field, wire, start: p, end: p + 4 }); p += 4; }
    else if (wire === 1) { out.push({ field, wire, start: p, end: p + 8 }); p += 8; }
    else throw new Error("wire " + wire);
  }
  return out;
}
function packed(buf, start, end) {
  const a = [];
  let p = start;
  while (p < end) { let v; [v, p] = varint(buf, p); a.push(v); }
  return a;
}
function* blocks(buf) {
  let p = 0;
  while (p + 4 <= buf.length) {
    const hl = buf.readUInt32BE(p); p += 4;
    const he = p + hl;
    let type = "", datasize = 0;
    for (const f of fields(buf, p, he)) {
      if (f.field === 1) type = buf.toString("utf8", f.start, f.end);
      if (f.field === 3) datasize = f.value;
    }
    p = he;
    const be = p + datasize;
    let data = null;
    for (const f of fields(buf, p, be)) {
      if (f.field === 1) data = buf.subarray(f.start, f.end);
      else if (f.field === 3) data = inflateSync(buf.subarray(f.start, f.end));
    }
    p = be;
    if (type === "OSMData" && data) yield data;
  }
}
function* groups(block) {
  let st = [], gran = 100, latOff = 0, lonOff = 0;
  const gs = [];
  for (const f of fields(block, 0, block.length)) {
    if (f.field === 1) {
      st = [];
      for (const s of fields(block, f.start, f.end)) if (s.field === 1) st.push(block.toString("utf8", s.start, s.end));
    } else if (f.field === 2) gs.push([f.start, f.end]);
    else if (f.field === 17) gran = f.value;
    else if (f.field === 19) latOff = zigzag(f.value);
    else if (f.field === 20) lonOff = zigzag(f.value);
  }
  const scale = 1e-9 * gran;
  for (const [s, e] of gs) yield { block, s, e, st, scale, latOff: latOff * 1e-9, lonOff: lonOff * 1e-9 };
}
function* relations(g, start, end) {
  // Relation: id=1, keys=2, vals=3, roles_sid=8 (packed), memids=9 (packed sint64,
  // delta-encoded), types=10 (packed enum: 0 node, 1 way, 2 relation).
  let id = 0, keys = [], vals = [], roleIdx = [], memids = [], types = [];
  for (const f of fields(g.block, start, end)) {
    if (f.field === 1) id = f.value;
    else if (f.field === 2) keys = packed(g.block, f.start, f.end);
    else if (f.field === 3) vals = packed(g.block, f.start, f.end);
    else if (f.field === 8) roleIdx = packed(g.block, f.start, f.end);
    else if (f.field === 9) memids = packed(g.block, f.start, f.end).map(zigzag);
    else if (f.field === 10) types = packed(g.block, f.start, f.end);
  }
  const tags = {};
  for (let i = 0; i < keys.length; i++) {
    const k = g.st[keys[i]];
    const v = g.st[vals[i]];
    if (k !== undefined && v !== undefined) tags[k] = v;
  }
  const members = [];
  let mid = 0;
  for (let i = 0; i < memids.length; i++) {
    mid += memids[i];
    members.push({
      type: types[i] === undefined ? 1 : types[i],
      ref: mid,
      role: g.st[roleIdx[i]] || "",
    });
  }
  yield { id, tags, members };
}

/* ---------- pass 1: relations ---------- */
const buf = readFileSync(pbfPath);
const t0 = Date.now();
const rels = [];
const wanted = new Set();

for (const block of blocks(buf)) {
  for (const g of groups(block)) {
    for (const f of fields(block, g.s, g.e)) {
      if (f.field !== 4) continue;
      for (const r of relations(g, f.start, f.end)) {
        const lvl = Number(r.tags.admin_level);
        if (r.tags.boundary !== "administrative" || !Number.isFinite(lvl) || lvl < 4) continue;
        rels.push({ id: r.id, level: lvl, tags: r.tags, members: r.members.filter((m) => m.type === 1) });
        for (const m of r.members) if (m.type === 1) wanted.add(m.ref);
      }
    }
  }
}
console.log(`relations: ${rels.length} administrative (${Math.round((Date.now() - t0) / 1000)}s)`);
const byLevel = {};
for (const r of rels) byLevel[r.level] = (byLevel[r.level] || 0) + 1;
console.log("by admin_level:", JSON.stringify(byLevel));

if (inspect) {
  const sample = rels
    .filter((r) => [4, 6, 7, 8, 9, 10].includes(r.level) && r.tags.name)
    .slice(0, 40)
    .map((r) => `  L${r.level} ${r.tags["name:en"] || r.tags.name} | ${r.tags["name:ar"] || ""} | members ${r.members.length}`);
  console.log(sample.join("\n"));
  process.exit(0);
}

/* ---------- pass 2: member ways ---------- */
const wayRefs = new Map();
for (const block of blocks(buf)) {
  for (const g of groups(block)) {
    for (const f of fields(block, g.s, g.e)) {
      if (f.field !== 3) continue;
      // ways
      for (const w of (function* () {
        let id = 0, refs = [];
        for (const wf of fields(block, f.start, f.end)) {
          if (wf.field === 1) id = wf.value;
          else if (wf.field === 8) {
            // refs are delta-encoded — cumulate to absolute node ids
            let prev = 0;
            refs = packed(block, wf.start, wf.end).map(zigzag).map((d) => (prev += d));
          }
        }
        yield { id, refs };
      })()) {
        if (wanted.has(w.id)) wayRefs.set(w.id, w.refs);
      }
    }
  }
}
console.log(`ways: ${wayRefs.size} of ${wanted.size} resolved (${Math.round((Date.now() - t0) / 1000)}s)`);

/* ---------- pass 3: node coordinates ---------- */
const neededNodes = new Set();
for (const refs of wayRefs.values()) for (const r of refs) neededNodes.add(r);

const nodeCoord = new Map();
for (const block of blocks(buf)) {
  for (const g of groups(block)) {
    for (const f of fields(block, g.s, g.e)) {
      if (f.field === 2) {
        // dense nodes: id/lat/lon are delta-encoded packed arrays
        let ids = [], lats = [], lons = [];
        for (const df of fields(block, f.start, f.end)) {
          if (df.field === 1) ids = packed(block, df.start, df.end).map(zigzag);
          else if (df.field === 8) lats = packed(block, df.start, df.end).map(zigzag);
          else if (df.field === 9) lons = packed(block, df.start, df.end).map(zigzag);
        }
        let id = 0, lat = 0, lon = 0;
        for (let i = 0; i < ids.length; i++) {
          id += ids[i]; lat += lats[i] || 0; lon += lons[i] || 0;
          if (neededNodes.has(id)) nodeCoord.set(id, [lat * g.scale + g.latOff, lon * g.scale + g.lonOff]);
        }
      }
    }
  }
  if (nodeCoord.size === neededNodes.size) break;
}
console.log(`nodes: ${nodeCoord.size}/${neededNodes.size} (${Math.round((Date.now() - t0) / 1000)}s)`);

/* ---------- stitch rings ---------- */
function stitch(wayIds) {
  const pool = wayIds.slice();
  const rings = [];
  while (pool.length) {
    const first = pool.shift();
    let ring = (wayRefs.get(first) || []).slice();
    if (!ring.length) continue;
    let progress = true;
    while (progress && ring[0] !== ring[ring.length - 1]) {
      progress = false;
      for (let i = 0; i < pool.length; i++) {
        const refs = wayRefs.get(pool[i]) || [];
        if (!refs.length) continue;
        if (refs[0] === ring[ring.length - 1]) {
          ring = ring.concat(refs.slice(1));
        } else if (refs[refs.length - 1] === ring[ring.length - 1]) {
          ring = ring.concat(refs.slice(0, -1).reverse());
        } else if (refs[refs.length - 1] === ring[0]) {
          ring = refs.slice(0, -1).concat(ring);
        } else if (refs[0] === ring[0]) {
          ring = refs.slice(1).reverse().concat(ring);
        } else continue;
        pool.splice(i, 1);
        progress = true;
        break;
      }
    }
    if (ring.length > 2) rings.push(ring);
  }
  return rings;
}

const boxes = bboxArg
  ? bboxArg.split(";").map((b) => b.split(",").map(Number))
  : [];
const inAnyBox = (lat, lon) =>
  !boxes.length || boxes.some(([s, w, n, e]) => lat >= s && lat <= n && lon >= w && lon <= e);

const out = [];
let skipped = 0;
for (const r of rels) {
  if (!r.members.length) { skipped++; continue; }
  const rings = stitch(r.members.map((m) => m.ref)).filter((ring) => ring[0] === ring[ring.length - 1]);
  if (!rings.length) { skipped++; continue; }
  const coords = rings.map((ring) =>
    ring.map((nid) => nodeCoord.get(nid)).filter(Boolean).map(([lat, lon]) => [Number(lat.toFixed(6)), Number(lon.toFixed(6))])
  ).filter((c) => c.length > 2);
  if (!coords.length) { skipped++; continue; }

  let latSum = 0, lonSum = 0, count = 0;
  for (const ring of coords) for (const [lat, lon] of ring) { latSum += lat; lonSum += lon; count++; }
  const clat = latSum / count, clon = lonSum / count;
  if (!inAnyBox(clat, clon)) continue;

  out.push({
    osm: "relation/" + r.id,
    level: r.level,
    name_en: r.tags["name:en"] || r.tags.name || "",
    name_ar: r.tags["name:ar"] || "",
    centroid: [Number(clat.toFixed(6)), Number(clon.toFixed(6))],
    rings: coords,
  });
}

console.log(`rings built: ${out.length} boundaries · ${skipped} without usable geometry`);
if (!outPath) { process.exit(0); }
writeFileSync(outPath, JSON.stringify(out));
console.log(`wrote ${outPath.replace(root, "")} (${Math.round(readFileSync(outPath).length / 1024)} KB)`);
