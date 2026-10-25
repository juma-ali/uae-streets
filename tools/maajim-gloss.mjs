/* Pulls a short Arabic definition for an unglossed street word.
   almaany.com blocks automated requests (Cloudflare 403); maajim.com serves the
   same classical dictionaries as plain HTML, with each entry in
   <div id="definition-NNN"> … <div>text</div>. Nothing is guessed: a word with
   no entry simply yields nothing. */
import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36", "accept-language": "ar" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const OUT = root + ".tmp/maajim-glosses.json";
const seen = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};

const cards = {};
new Function("window", readFileSync(root + "data/streets.js", "utf8"))(cards);
const ROADS = {};
new Function("window", readFileSync(root + "data/cards.js", "utf8"))(ROADS);

const words = new Map();
for (const r of ROADS.ROADS.rows) {
  if (r[6] || r[3] !== "word") continue;
  const ar = String(r[1] || "").trim();
  if (!ar) continue;
  const bare = ar.replace(/^(شارع|طريق|جادة)\s+/, "").trim();
  if (!bare || words.has(bare)) continue;
  words.set(bare, String(r[0]));
}
const list = [...words.keys()];
console.log("unglossed words:", list.length, "| already fetched:", Object.keys(seen).length);

const extract = (html) => {
  const m = /<div id="definition-\d+">[\s\S]{0,400}?<div[^>]*>\s*<div>([\s\S]*?)<\/div>/i.exec(html);
  if (!m) return "";
  return m[1]
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
};

let done = 0, hits = 0;
for (const w of list.slice(0, 260)) {
  if (seen[w]) continue;
  try {
    const r = await fetch("https://www.maajim.com/dictionary/" + encodeURIComponent(w), { headers: UA, signal: AbortSignal.timeout(30000) });
    if (r.status === 200) {
      const html = await r.text();
      const def = extract(html);
      if (def) { seen[w] = def.slice(0, 260); hits++; } else seen[w] = "";
    }
  } catch (e) {}
  done++;
  await sleep(650);
}
writeFileSync(OUT, JSON.stringify(seen, null, 1), "utf8");
console.log("fetched:", done, "| with a definition:", hits);
for (const [w, d] of Object.entries(seen).slice(-8)) console.log("\n" + w + ":\n   " + (d ? d.slice(0, 150) : "— none"));
