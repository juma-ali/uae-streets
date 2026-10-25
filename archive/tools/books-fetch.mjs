/* The proper sources: al-Zirikli's الأعلام (a dictionary of ~13,000 notable
   Arabs) and Ibn al-Athir's أسد الغابة (the Companions). Both are public on
   archive.org as OCR text, so every name can be looked up locally instead of
   guessed at from search results. */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
mkdirSync(root + ".tmp/books", { recursive: true });

const BOOKS = {
  alam: {
    id: "alam6",
    files: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `alam${n}_djvu.txt`),
  },
  asad: {
    id: "01-22240",
    files: [1, 2, 3, 4, 5].map((n) => `أسد الغابة في معرفة الصحابة - ط العلمية/0${n}_2224${n - 1}_djvu.txt`),
  },
};

const fetchText = async (id, name) => {
  const local = `${root}.tmp/books/${id}-${name.split("/").pop()}`;
  if (existsSync(local)) return readFileSync(local, "utf8");
  const u = `https://archive.org/download/${id}/${encodeURI(name)}`;
  const r = await fetch(u, { headers: { "user-agent": "uae-streets-kb/1.0" }, signal: AbortSignal.timeout(180000) });
  if (!r.ok) throw new Error(id + " " + name + " → " + r.status);
  const t = await r.text();
  writeFileSync(local, t, "utf8");
  console.log("  got " + name.split("/").pop() + "  " + Math.round(t.length / 1024) + " KB");
  return t;
};

for (const [label, b] of Object.entries(BOOKS)) {
  const parts = [];
  for (const f of b.files) {
    try { parts.push(await fetchText(b.id, f)); } catch (e) { console.log("  skip " + f.split("/").pop() + ": " + e.message.slice(0, 40)); }
  }
  const all = parts.join("\n");
  writeFileSync(`${root}.tmp/books/${label}.txt`, all, "utf8");
  console.log(label + " total: " + Math.round(all.length / 1024) + " KB");
}
