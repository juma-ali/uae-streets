/* Look up each unsourced street name inside the two dictionaries. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\u0600-\u06FF\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const flat = (s) => norm(s).replace(/ /g, "");

const books = {
  alam: norm(readFileSync(root + ".tmp/books/alam.txt", "utf8")),
  asad: norm(readFileSync(root + ".tmp/books/asad.txt", "utf8")),
};
console.log("alam:", Math.round(books.alam.length / 1024), "KB | asad:", Math.round(books.asad.length / 1024), "KB");

const box = {};
new Function("window", readFileSync(root + "data/streets.js", "utf8"))(box);
const names = box.STREETS.filter((c) => c.origin === "unsourced")
  .map((c) => ({ id: c.id, en: c.en, ar: String(c.ar).replace(/^(شارع|طريق|جادة)\s+/, "").trim() }))
  .filter((c) => /(^|\s)(بن|بنت|ابن)(\s|$)/.test(c.ar));
console.log("names to look up:", names.length);

/* Arabic numerals and OCR noise make a loose match necessary, so we search the
   name without spaces and take the following text as the entry. */
const results = [];
let found = 0;
for (const n of names) {
  const key = flat(n.ar);
  if (key.length < 8) continue;
  const hit = { ...n, book: "", snippet: "" };
  for (const [label, text] of Object.entries(books)) {
    const flatText = text.replace(/ /g, "");
    const at = flatText.indexOf(key);
    if (at < 0) continue;
    // map the flat position back to the spaced text
    let count = 0, pos = 0;
    for (; pos < text.length; pos++) {
      if (text[pos] !== " ") count++;
      if (count === at) break;
    }
    hit.book = label;
    hit.snippet = text.slice(pos, pos + 420).replace(/\s+/g, " ").trim();
    break;
  }
  if (hit.snippet) found++;
  results.push(hit);
}
writeFileSync(root + ".tmp/book-lookups.json", JSON.stringify(results, null, 1), "utf8");
console.log("found in a dictionary:", found, "of", results.length);
results.filter((r) => r.snippet).slice(0, 5).forEach((r) =>
  console.log("\n" + r.ar + "  [" + r.book + "]\n  " + r.snippet.slice(0, 220))
);
