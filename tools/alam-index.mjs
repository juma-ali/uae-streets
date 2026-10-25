/* Builds a name → page index for الأعلام from Shamela.
   One entry page per letter carries that letter's full TOC in its sidebar, so
   the whole dictionary is indexed with a few dozen requests instead of 7,775. */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const UA = { "user-agent": "Mozilla/5.0 (compatible; uae-streets-kb/1.0; street-name research)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// where each letter begins (from the book's own table of contents)
const LETTER_STARTS = [5, 22, 1046, 1170, 1214, 1232, 1376, 1794, 1901, 1947, 1956, 2046,
  2128, 2374, 2475, 2555, 2570, 2626, 2634, 4294, 4333, 4468, 4589, 4670, 4709, 6959, 7149, 7296, 7361, 7772];

const index = new Map();
for (const start of LETTER_STARTS) {
  for (const probe of [start + 30, start + 90]) {
    if (probe > 7775) continue;
    try {
      const r = await fetch(`https://shamela.ws/book/12286/${probe}`, { headers: UA, signal: AbortSignal.timeout(40000) });
      if (r.status !== 200) continue;
      const t = await r.text();
      const links = [...t.matchAll(/<a[^>]+href="[^"]*book\/12286\/(\d+)[^"]*"[^>]*>([^<]{2,70})<\/a>/g)];
      let added = 0;
      for (const m of links) {
        const name = m[2].replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
        if (!name || /^[\s<>&]|حرف|الرئيسية|المقدمات|خاتمة|^\d+$/.test(name)) continue;
        if (!/^[\u0600-\u06FF]/.test(name)) continue;
        const p = Number(m[1]);
        if (!index.has(name)) { index.set(name, p); added++; }
      }
      if (index.size > 0 && added > 0) console.log("letter at", start, "| probe", probe, "| +" + added, "| total", index.size);
      if (added > 300) break;          // that probe carried the letter's index
    } catch (e) { console.log("probe", probe, "err", e.message.slice(0, 40)); }
    await sleep(700);
  }
  await sleep(400);
}

const obj = Object.fromEntries(index);
writeFileSync(root + ".cache/alam-index.json", JSON.stringify(obj, null, 0), "utf8");
console.log("DONE | entries indexed:", index.size);
