import { readFileSync, writeFileSync } from "node:fs";

/* Applies the sound half of the morphology pass.

   Rejected, with reason:
     الأحوال → "year"            (أحوال = conditions)
     الأجواد → "waterskin"        (جواد = steed, generous man)
     الأخيار → "better; best"     (أخيار = the good ones)
     السباع / السبعين → one seventh (سباع = beasts, سبعين = seventy)
     الشعاب → "tribe, race"       (شعاب = ravines, mountain paths)
     الهيال → cardamom            (هيال = a she-camel, per the dialect sources)
*/
const KEEP = [
  "الأريام", "الغِيطين", "الغِيمَات", "الكِرام", "النَّبَّال", "النُورِين",
  "الرَعاد", "السدار", "الصفوات", "السياب", "السطاح", "الوَعبِين", "الوادِيين",
  "الوِصال", "اليَاسَات", "اليازيات", "النَّخَّال", "النِّخِيلات", "الرَّوضات",
  "الرِّحَيَّات", "أرزام", "رزام", "الطُّوِيِّين", "الزِّينات", "دَرَّار", "الدرار", "جرنين"
];

const acc = JSON.parse(readFileSync(".tmp/word-accepted.json", "utf8"));
const AR = {};
new Function("window", readFileSync("data/glosses-ar.js", "utf8"))(AR);

const norm = (s) => String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
  .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/\s+/g, " ").trim();

let d = readFileSync("tools/dictionary.mjs", "utf8");
const rows = [];
for (const name of KEEP) {
  const v = acc[name];
  if (!v) { console.log("missing candidate: " + name); continue; }
  const key = norm(name).replace(/^ال/, "");
  const ar = AR.GLOSS_AR[v.gloss] || "";
  if (!ar) { console.log("no Arabic side: " + name); continue; }
  rows.push({ key, en: v.gloss, ar, name });
}

const fresh = rows.filter((r) => !new RegExp(`"${r.key}":`).test(d));
if (fresh.length) {
  d = d.replace("const CURATED = {\n",
    "const CURATED = {\n  /* sound plurals and derivatives of words the dictionary already had */\n" +
    fresh.map((r) => `  ${JSON.stringify(r.key)}: ${JSON.stringify(r.en)},`).join("\n") + "\n");
  writeFileSync("tools/dictionary.mjs", d, "utf8");
}

let g = readFileSync("data/glosses-ar.js", "utf8");
const box = {};
new Function("window", g)(box);
for (const r of fresh) box.GLOSS_AR[r.en] = r.ar;
writeFileSync("data/glosses-ar.js", "/* Arabic side of the most common glosses… */\nwindow.GLOSS_AR = " + JSON.stringify(box.GLOSS_AR) + ";\n", "utf8");

console.log("applied:", fresh.length);
fresh.slice(0, 10).forEach((r) => console.log("  " + r.name.padEnd(14) + " → " + r.en.slice(0, 50)));
