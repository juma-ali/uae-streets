/* mrsae.com publishes an Emirati dialect glossary as one post per word.
   Walks the category pages, then each post, and keeps word → definition. */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36", "accept-language": "ar" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const CAT = "https://mrsae.com/category/%D8%B1%D9%85%D8%B3%D8%AA%D9%86%D8%A7-%D9%85%D8%B9%D8%AC%D9%85-%D9%85%D8%B5%D8%B7%D9%84%D8%AD%D8%A7%D8%AA-%D8%A7%D9%84%D9%84%D9%87%D8%AC%D8%A9-%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%D9%8A/";

const isPost = (u) =>
  /^https:\/\/mrsae\.com\/[^/]+\/?$/.test(u) &&
  !/\/(category|tag|author|page|feed|downloads|xmlrpc|wp-|about|contact|privacy)/.test(u);

const posts = new Set();
for (let p = 1; p <= 40; p++) {
  const u = p === 1 ? CAT : CAT + "page/" + p + "/";
  try {
    const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(45000) });
    if (r.status !== 200) break;
    const t = await r.text();
    const before = posts.size;
    for (const m of t.matchAll(/href="(https:\/\/mrsae\.com\/[^"]*)"/g)) {
      const link = decodeURIComponent(m[1]);
      if (isPost(link)) posts.add(link.replace(/\/$/, "") + "/");
    }
    console.log("page " + p + " → posts so far: " + posts.size + (posts.size === before ? " (no new links, stopping)" : ""));
    if (posts.size === before) break;
  } catch (e) { console.log("page " + p + " err " + e.message.slice(0, 40)); break; }
  await sleep(600);
}

writeFileSync(root + ".tmp/mrsae-posts.json", JSON.stringify([...posts], null, 1), "utf8");
const out = [];
let n = 0;
for (const u of posts) {
  n++;
  if (n % 20 === 0) {
    writeFileSync(root + ".tmp/mrsae-glossary.json", JSON.stringify(out, null, 1), "utf8");
    console.log("posts", n, "/", posts.size, "| definitions:", out.length);
  }
  try {
    const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(20000) });
    if (r.status !== 200) continue;
    const t = await r.text();
    const title = ((t.match(/<h1[^>]*>([\s\S]{2,120}?)<\/h1>/) || [])[1] || (t.match(/<title>([^<]{2,120})/) || [])[1] || "")
      .replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    const art = t.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ");
    const body = art.replace(/<br\s*\/?>/gi, "\n").replace(/<\/(p|div|li|h\d)>/gi, "\n").replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ").replace(/[ \t]+/g, " ").replace(/\n{2,}/g, "\n").trim();
    const lines = body.split("\n").map((l) => l.trim()).filter((l) => l.length > 25 && /[\u0600-\u06FF]/.test(l));
    const def = lines.find((l) => !/^(الرئيسية|موقع|اتصل|سياسة|جميع الحقوق)/.test(l)) || "";
    if (title && def) out.push({ word: title.split("|")[0].trim(), def: def.slice(0, 400), url: u });
  } catch (e) {}
  await sleep(250);
}
writeFileSync(root + ".tmp/mrsae-glossary.json", JSON.stringify(out, null, 1), "utf8");
console.log("posts collected:", posts.size, "| with a definition:", out.length);
out.slice(0, 12).forEach((o) => console.log("   " + o.word + " : " + o.def.slice(0, 90)));
