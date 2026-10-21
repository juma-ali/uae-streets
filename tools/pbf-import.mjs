#!/usr/bin/env node
/**
 * Reads a country extract (.osm.pbf) and emits the same JSON shape the other
 * collectors produce, so tools/kb-build.mjs needs no changes.
 *
 *   node tools/pbf-import.mjs --bbox 24.26,54.30,24.56,54.78 --name abu-dhabi-city
 *
 * Two passes: the first collects named highways and their node refs; the second
 * looks up only those node coordinates, so memory stays bounded by the streets we
 * keep, not by the size of the planet file.
 *
 * Data © OpenStreetMap contributors, ODbL 1.0.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, createWriteStream } from "node:fs";
import { createHash } from "node:crypto";
import { inflateSync } from "node:zlib";
import { fileURLToPath } from "node:url";

const EXTRACT = "https://download.openstreetmap.fr/extracts/asia/united_arab_emirates.osm.pbf";

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(name);
  return i > -1 && args[i + 1] ? args[i + 1] : fallback;
};
const bboxArg = arg("--bbox", "");
const name = arg("--name", "");
// One or more boxes, separated by ";" — an emirate is rarely one rectangle
// (Al Ain and the Al Dhafra towns sit far apart).
const boxes = bboxArg.split(";").map((s) => s.split(",").map(Number));
if (
  !name ||
  !boxes.length ||
  boxes.some((b) => b.length !== 4 || b.some((n) => !Number.isFinite(n)))
) {
  console.error('Usage: node tools/pbf-import.mjs --name abu-dhabi --bbox "s,w,n,e[;s,w,n,e…]"');
  process.exit(2);
}
const insideAny = (lat, lon) =>
  boxes.some(([s, w, n, e]) => lat >= s && lat <= n && lon >= w && lon <= e);

const root = fileURLToPath(new URL("..", import.meta.url));
const cacheDir = root + ".cache";
const pbfPath = cacheDir + "/uae-latest.osm.pbf";
const outPath =
  cacheDir + "/emirate-" + name + "-" +
  createHash("sha1").update(bboxArg).digest("hex").slice(0, 8) + ".json";

/* ---------------- protobuf primitives ---------------- */
function varint(buf, p) {
  let result = 0;
  let shift = 0;
  for (;;) {
    const b = buf[p++];
    result += (b & 0x7f) * Math.pow(2, shift);
    if (!(b & 0x80)) break;
    shift += 7;
  }
  return [result, p];
}
const zigzag = (n) => (n % 2 === 0 ? n / 2 : -(n + 1) / 2);

function fields(buf, start, end) {
  const out = [];
  let p = start;
  while (p < end) {
    let key;
    [key, p] = varint(buf, p);
    const field = key >>> 3;
    const wire = key & 7;
    if (wire === 0) {
      let v;
      [v, p] = varint(buf, p);
      out.push({ field, wire, value: v });
    } else if (wire === 2) {
      let len;
      [len, p] = varint(buf, p);
      out.push({ field, wire, start: p, end: p + len });
      p += len;
    } else if (wire === 5) {
      out.push({ field, wire, start: p, end: p + 4 });
      p += 4;
    } else if (wire === 1) {
      out.push({ field, wire, start: p, end: p + 8 });
      p += 8;
    } else {
      throw new Error("wire type " + wire);
    }
  }
  return out;
}

function packed(buf, start, end) {
  const arr = [];
  let p = start;
  while (p < end) {
    let v;
    [v, p] = varint(buf, p);
    arr.push(v);
  }
  return arr;
}

/* ---------------- block reader ---------------- */
function* blocks(buf) {
  let p = 0;
  while (p + 4 <= buf.length) {
    const headerLen = buf.readUInt32BE(p);
    p += 4;
    const headerEnd = p + headerLen;
    let type = "";
    let datasize = 0;
    for (const f of fields(buf, p, headerEnd)) {
      if (f.field === 1) type = buf.toString("utf8", f.start, f.end);
      if (f.field === 3) datasize = f.value;
    }
    p = headerEnd;
    const blobEnd = p + datasize;
    let data = null;
    for (const f of fields(buf, p, blobEnd)) {
      if (f.field === 1) data = buf.subarray(f.start, f.end); // raw
      else if (f.field === 3) data = inflateSync(buf.subarray(f.start, f.end)); // zlib
    }
    p = blobEnd;
    if (type === "OSMData" && data) yield data;
  }
}

/* ---------------- primitives ---------------- */
function* primitiveGroups(block) {
  let stringTable = [];
  let granularity = 100;
  let latOffset = 0;
  let lonOffset = 0;
  const groups = [];

  for (const f of fields(block, 0, block.length)) {
    if (f.field === 1) {
      stringTable = [];
      for (const s of fields(block, f.start, f.end)) {
        if (s.field === 1) stringTable.push(block.toString("utf8", s.start, s.end));
      }
    } else if (f.field === 2) groups.push([f.start, f.end]);
    else if (f.field === 17) granularity = f.value;
    else if (f.field === 19) latOffset = zigzag(f.value);
    else if (f.field === 20) lonOffset = zigzag(f.value);
  }

  const scale = 1e-9 * granularity;
  for (const [gs, ge] of groups) {
    yield { block, gs, ge, stringTable, scale, latOffset: latOffset * 1e-9, lonOffset: lonOffset * 1e-9 };
  }
}

function* denseNodes(g, start, end) {
  let ids = [];
  let lats = [];
  let lons = [];
  for (const f of fields(g.block, start, end)) {
    if (f.field === 1) ids = packed(g.block, f.start, f.end).map(zigzag);
    else if (f.field === 8) lats = packed(g.block, f.start, f.end).map(zigzag);
    else if (f.field === 9) lons = packed(g.block, f.start, f.end).map(zigzag);
  }
  let id = 0;
  let lat = 0;
  let lon = 0;
  for (let i = 0; i < ids.length; i++) {
    id += ids[i];
    lat += lats[i] || 0;
    lon += lons[i] || 0;
    yield [id, lat * g.scale + g.latOffset, lon * g.scale + g.lonOffset];
  }
}

function* ways(g, start, end) {
  let id = 0;
  let keys = [];
  let vals = [];
  let refs = [];
  for (const f of fields(g.block, start, end)) {
    if (f.field === 1) id = f.value;
    else if (f.field === 2) keys = packed(g.block, f.start, f.end);
    else if (f.field === 3) vals = packed(g.block, f.start, f.end);
    else if (f.field === 8) refs = packed(g.block, f.start, f.end).map(zigzag);
  }
  const tags = {};
  for (let i = 0; i < keys.length; i++) {
    const k = g.stringTable[keys[i]];
    const v = g.stringTable[vals[i]];
    if (k !== undefined && v !== undefined) tags[k] = v;
  }
  yield { id, tags, refs };
}

/* ---------------- download ---------------- */
async function ensurePbf() {
  if (existsSync(pbfPath)) {
    console.log(`using ${pbfPath.replace(root, "")} (${Math.round(readFileSync(pbfPath).length / 1048576)} MB)`);
    return;
  }
  mkdirSync(cacheDir, { recursive: true });
  console.log("downloading UAE extract (~84 MB) …");
  const r = await fetch(EXTRACT, { signal: AbortSignal.timeout(900000) });
  if (!r.ok || !r.body) throw new Error("download failed: HTTP " + r.status);
  const out = createWriteStream(pbfPath);
  const reader = r.body.getReader();
  let bytes = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.length;
    if (!out.write(Buffer.from(value))) {
      await new Promise((res) => out.once("drain", res));
    }
    if (bytes % (10 * 1048576) < value.length) process.stdout.write(`  ${Math.round(bytes / 1048576)} MB\n`);
  }
  await new Promise((res) => out.end(res));
  console.log(`  done: ${Math.round(bytes / 1048576)} MB`);
}

/* ---------------- two-pass walk ---------------- */
const HIGHWAY = /^(primary|secondary|tertiary|residential|trunk|unclassified|living_street)$/;

function wanted(tags) {
  return HIGHWAY.test(tags.highway || "") && (tags["name:en"] || tags.name || tags["name:ar"]);
}

(async () => {
  await ensurePbf();
  const buf = readFileSync(pbfPath);
  const t0 = Date.now();

  const found = [];
  const needed = new Set();
  for (const block of blocks(buf)) {
    for (const g of primitiveGroups(block)) {
      for (const f of fields(block, g.gs, g.ge)) {
        if (f.field === 3) {
          for (const w of ways(g, f.start, f.end)) {
            if (!wanted(w.tags)) continue;
            found.push(w);
            for (const r of w.refs) needed.add(r);
          }
        }
      }
    }
  }
  console.log(`pass 1: ${found.length} named roads, ${needed.size} node refs (${Math.round((Date.now() - t0) / 1000)}s)`);

  const coords = new Map();
  for (const block of blocks(buf)) {
    for (const g of primitiveGroups(block)) {
      for (const f of fields(block, g.gs, g.ge)) {
        if (f.field === 2) {
          for (const [id, lat, lon] of denseNodes(g, f.start, f.end)) {
            if (needed.has(id)) coords.set(id, [lat, lon]);
          }
        } else if (f.field === 1) {
          let id = 0, lat = 0, lon = 0;
          for (const nf of fields(block, f.start, f.end)) {
            if (nf.field === 1) id = zigzag(nf.value);
            else if (nf.field === 8) lat = zigzag(nf.value);
            else if (nf.field === 9) lon = zigzag(nf.value);
          }
          if (needed.has(id)) coords.set(id, [lat * g.scale + g.latOffset, lon * g.scale + g.lonOffset]);
        }
      }
    }
    if (coords.size === needed.size) break;
  }
  console.log(`pass 2: ${coords.size} coordinates resolved (${Math.round((Date.now() - t0) / 1000)}s)`);

  const elements = [];
  let outside = 0;
  let noCoord = 0;
  for (const w of found) {
    let lat = 0, lon = 0, n = 0;
    for (const r of w.refs) {
      const c = coords.get(r);
      if (c) { lat += c[0]; lon += c[1]; n++; }
    }
    if (!n) { noCoord++; continue; }
    lat /= n; lon /= n;
    if (!insideAny(lat, lon)) { outside++; continue; }
    elements.push({ id: w.id, tags: w.tags, center: { lat: Number(lat.toFixed(6)), lon: Number(lon.toFixed(6)) } });
  }

  writeFileSync(outPath, JSON.stringify({ elements }));
  console.log(
    `kept ${elements.length} roads inside the bbox · ${outside} outside · ${noCoord} without coordinates`
  );
  console.log(`cached → ${outPath.replace(root, "")} (${Math.round(readFileSync(outPath).length / 1048576)} MB)`);
})();
