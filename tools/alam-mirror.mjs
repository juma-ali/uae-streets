/* Mirrors الأعلام للزركلي from Shamela, one record per printed page.
   Each page's <title> names the entry it begins with:
     "ج1 - ص66 - كتاب الأعلام للزركلي - العصام الأسفراييني - المكتبة الشاملة"
   so the name, the volume and the printed page all come from the title, and the
   body is the text inside <div class="nass">. */
import { appendFileSync, existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const OUT = root + ".cache/alam-pages.jsonl";
const UA = { "user-agent": "Mozilla/5.0 (compatible; uae-streets-kb/1.0; street-name research)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const LAST = 7775;

const done = new Set();
if (existsSync(OUT)) {
  for (const line of readFileSync(OUT, "utf8").split("\n")) {
    if (line.trim()) { try { done.add(JSON.parse(line).p); } catch {} }
  }
}

const strip = (seg) =>
  seg
    .replace(/<span[^>]*class="anchor"[^>]*><\/span>/g, "")
    .replace(/<a [^>]*class="btn_tag[^>]*>[\s\S]*?<\/a>/g, "")
    .replace(/<\/(p|div|h\d|li)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();

let n = 0;
for (let p = 5; p <= LAST; p++) {
  if (done.has(p)) continue;
  let ok = false;
  for (let a = 0; a < 3 && !ok; a++) {
    try {
      const r = await fetch(`https://shamela.ws/book/12286/${p}`, { headers: UA, signal: AbortSignal.timeout(30000) });
      if (r.status !== 200) { await sleep(1200 * (a + 1)); continue; }
      const html = await r.text();
      const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
      const parts = title.split(" - ").map((s) => s.trim());
      const vm = /^ج(\d+)$/.exec(parts[0] || "");
      const pm = /^ص(\d+)$/.exec(parts[1] || "");
      const name = parts[3] || "";
      const i = html.indexOf('class="nass');
      const end = html.indexOf("تحميل الصفحة", i);
      const seg = i > 0 ? html.slice(i, end > i ? end : i + 14000) : "";
      const text = strip(seg);
      if (!name || !text) { ok = true; continue; }
      appendFileSync(OUT, JSON.stringify({
        p, vol: vm ? Number(vm[1]) : 0, page: pm ? Number(pm[1]) : 0, name,
        text: text.replace(/\n+/g, " ").replace(/\s+/g, " ").trim().slice(0, 5000),
      }) + "\n", "utf8");
      ok = true;
      n++;
    } catch (e) { await sleep(1200 * (a + 1)); }
  }
  if (n && n % 250 === 0) console.log("pages", n, "| at", p);
  await sleep(140);
}
console.log("DONE | new:", n, "| total:", done.size + n);
