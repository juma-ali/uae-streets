/* Build the browse hierarchy: emirate › city › town › district.
   District centroids come from the street coordinates; cities and towns come
   from OSM place nodes, assigned by proximity. Nothing is invented: a district
   with no town nearby simply hangs under its city. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const load = (file, name) => {
  const box = {};
  new Function("window", readFileSync(root + file, "utf8"))(box);
  return box[name];
};

const KB = load("data/kb.js", "KB");
const ROADS = load("data/cards.js", "ROADS");
const places = JSON.parse(readFileSync(root + ".cache/places.json", "utf8"));

const R = 6371;
const km = (a, b, c, d) => {
  const dLat = ((c - a) * Math.PI) / 180;
  const dLon = ((d - b) * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a * Math.PI) / 180) * Math.cos((c * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};

// district key → index, and a centroid from its streets
const keyToIdx = new Map(ROADS.districts.map((d, i) => [d[3], i]));
const sum = new Map();
for (const s of KB.streets) {
  if (typeof s.lat !== "number" || typeof s.lon !== "number") continue;
  const idx = keyToIdx.get(s.area || "");
  if (idx === undefined) continue;
  const cur = sum.get(idx) || { lat: 0, lon: 0, n: 0 };
  cur.lat += s.lat; cur.lon += s.lon; cur.n++;
  sum.set(idx, cur);
}
const centroid = new Map();
for (const [idx, v] of sum) centroid.set(idx, [v.lat / v.n, v.lon / v.n]);
console.log("districts with a centroid:", centroid.size, "of", ROADS.districts.length);

// keep only places inside the Emirates: within 120 km of some district centroid
const inside = places.filter((p) => {
  if (typeof p.lat !== "number") return false;
  for (const [lat, lon] of centroid.values()) if (km(p.lat, p.lon, lat, lon) < 40) return true;
  return false;
});
console.log("places inside the Emirates:", inside.length, "of", places.length);

const pick = (type) => inside.filter((p) => p.place === type && p.name);
const citiesRaw = pick("city").concat(pick("town").filter((t) => t.population && Number(t.population) > 20000));
const townsRaw = pick("town").concat(pick("village").filter((v) => Number(v.population) > 5000));
console.log("cities:", citiesRaw.length, "| towns:", townsRaw.length);

// emirate of a point = emirate of the nearest district
const districtEmirate = ROADS.districts.map((d) => d[2]);
function emirateAt(lat, lon) {
  let best = null, bd = Infinity;
  for (const [idx, [la, lo]] of centroid) {
    const d = km(lat, lon, la, lo);
    if (d < bd) { bd = d; best = idx; }
  }
  return best === null ? null : districtEmirate[best];
}

const cities = [];
const cityIndex = new Map();
const addCity = (p) => {
  const key = p.name + "|" + (p.name_ar || "");
  if (cityIndex.has(key)) return cityIndex.get(key);
  const em = emirateAt(p.lat, p.lon);
  const i = cities.length;
  cities.push([p.name, p.name_ar || p.name, em || "abu-dhabi", p.lat, p.lon]);
  cityIndex.set(key, i);
  return i;
};
for (const p of citiesRaw) addCity(p);

const towns = [];
const townIndex = new Map();
const addTown = (p) => {
  const key = p.name + "|" + (p.name_ar || "");
  if (townIndex.has(key)) return townIndex.get(key);
  const i = towns.length;
  towns.push([p.name, p.name_ar || p.name, p.lat, p.lon, p.place, emirateAt(p.lat, p.lon) || ""]);
  townIndex.set(key, i);
  return i;
};
/* A town that sits on the city centre is the city, not a parent of it. */
for (const p of townsRaw) {
  const near = cities.some((c) => km(p.lat, p.lon, c[3], c[4]) < 5);
  if (near) continue;
  addTown(p);
}

// assign each district to its nearest city, and to a town only if one is close
const dCity = new Array(ROADS.districts.length).fill(-1);
const dTown = new Array(ROADS.districts.length).fill(-1);
for (const [idx, [lat, lon]] of centroid) {
  const em = districtEmirate[idx];
  let bc = -1, bcd = Infinity;
  cities.forEach((c, i) => {
    if (c[2] !== em) return;                       // a city of another emirate is not a parent
    const d = km(lat, lon, c[3], c[4]);
    if (d < bcd) { bcd = d; bc = i; }
  });
  dCity[idx] = bc;
  /* A town is only the parent when the district sits nearer to it than to the
     city itself; otherwise the district hangs straight under the city, which
     is what a reader expects inside a metropolis. */
  let bt = -1, btd = 20;
  towns.forEach((t, i) => {
    if (t[5] !== em) return;
    const d = km(lat, lon, t[2], t[3]);
    if (d < btd) { btd = d; bt = i; }
  });
  dTown[idx] = bt >= 0 && bcd !== Infinity && btd < bcd ? bt : -1;
}
const withTown = dTown.filter((x) => x >= 0).length;
console.log("districts assigned a city:", dCity.filter((x) => x >= 0).length, "| with a town:", withTown);

/* The city tier is the app's region index (rows[8]) so the town chips follow
   whatever area the reader has chosen. */
const regionOfDistrict = new Array(ROADS.districts.length).fill(-1);
for (const r of ROADS.rows) {
  if (r[2] >= 0 && regionOfDistrict[r[2]] < 0 && typeof r[8] === "number") regionOfDistrict[r[2]] = r[8];
}
const out = `/* Generated by tools/hierarchy-build.mjs — emirate › city › town › district. */
window.HIERARCHY = ${JSON.stringify({
  cities,
  towns,
  districtCity: regionOfDistrict,
  districtTown: dTown,
})};
`;
writeFileSync(root + "data/hierarchy.js", out, "utf8");
console.log("wrote data/hierarchy.js", Math.round(out.length / 1024) + " KB");
