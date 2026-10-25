/* Indexes الأعلام by probing pages across the whole book: each page's sidebar
   lists the entries near it, so a probe every 80 pages covers every letter. */
import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const OUT = root + ".cache/alam-index.json";
const UA = { "user-agent": "Mozilla/5.0 (compatible; uae-streets-kb/1.0; street-name research)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const index = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const startSize = Object.keys(index).length;
const STEP = 80;

let probes = 0;
for (let p = 10; p <= 7775; p += STEP) {
  let got = 0;
  for (let a = 0; a < 2 && !got; a++) {
    try {
      const r = await fetch(`https://shamela.ws/book/12286/${p}`, { headers: UA, signal: AbortSignal.timeout(40000) });
      if (r.status !== 200) { await sleep(1500); continue; }
      const t = await r.text();
      for (const m of t.matchAll(/<a[^>]+href="[^"]*book\/12286\/(\d+)[^"]*"[^>]*>([^<]{2,70})<\/a>/g)) {
        const name = m[2].replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
        if (!name || !/^[\u0600-\u06FF]/.test(name)) continue;
        if (/حرف|الرئيسية|المقدمات|خاتمة|فهرس|المجلد/.test(name)) continue;
        if (!(name in index)) { index[name] = Number(m[1]); got++; }
      }
    } catch (e) { await sleep(1200); }
  }
  probes++;
  if (probes % 10 === 0) {
    writeFileSync(OUT, JSON.stringify(index), "utf8");
    console.log("probes", probes, "| entries", Object.keys(index).length);
  }
  await sleep(320);
}
writeFileSync(OUT, JSON.stringify(index), "utf8");
console.log("DONE | probes:", probes, "| entries:", Object.keys(index).length, "(was", startSize + ")");
