import { readFileSync, writeFileSync } from "node:fs";

/* Two cards that were unsourced now have a source:
   - أم هانئ from al-Zirikli (ج5 ص126) and the Wikipedia article;
   - ابن المسيب: the index entry at ص3379 is a different man (an Abbasid
     governor of Egypt), so it is not used. The name on an Emirati sign in this
     company of Companions and Tabi'un is Saeed ibn al-Musayyib, and the card is
     written from his article instead. */
const PLAN = {
  "ابن المسيب": {
    meaning: { en: "Ibn al-Musayyib, the Tabi'i of Medina", ar: "ابن المسيب، تابعي المدينة" },
    story: {
      en: "Saeed ibn al-Musayyib (15–94 AH) was one of the great Tabi'un of Medina, called the scholar of the people of Medina and the master of the Tabi'un of his time. He was one of the seven jurists of the city.",
      ar: "سعيد بن المسيب المخزومي (١٥–٩٤هـ) تابعي من كبار التابعين في المدينة المنورة، لُقّب بـ«عالم أهل المدينة»، وبـ«سيد التابعين» في زمانه، وهو أحد فقهاء المدينة السبعة."
    },
    refs: [{ label: "ويكيبيديا العربية — سعيد بن المسيب", url: "https://ar.wikipedia.org/wiki/%D8%B3%D8%B9%D9%8A%D8%AF_%D8%A8%D9%86_%D8%A7%D9%84%D9%85%D8%B3%D9%8A%D8%A8" }]
  },
  "أم هانئ": {
    meaning: { en: "Umm Hani, the Prophet's cousin", ar: "أم هانئ، بنت عم النبي" },
    story: {
      en: "Fakhita bint Abi Talib, known as Umm Hani, was the Prophet's cousin and the sister of Ali ibn Abi Talib. Historians differ on her name — Fakhita, Atika or Fatima — the first being the best known. She married Hubayra ibn Abi Wahb al-Makhzumi.",
      ar: "فاختة بنت أبي طالب بن عبد المطلب الهاشمية، المعروفة بأم هانئ، بنت عم النبي وأخت علي بن أبي طالب. اختلف المؤرخون في اسمها: فاختة أو عاتكة أو فاطمة، والأشهر الأول. تزوجت هبيرة بن أبي وهب المخزومي."
    },
    refs: [
      { label: "الأعلام — الزركلي، ج5 ص126", url: "https://shamela.ws/book/12286/4338" },
      { label: "ويكيبيديا العربية — أم هانئ بنت أبي طالب", url: "https://ar.wikipedia.org/wiki/%D8%A3%D9%85_%D9%87%D8%A7%D9%86%D8%A6_%D8%A8%D9%86%D8%AA_%D8%A3%D8%A8%D9%8A_%D8%B7%D8%A7%D9%84%D8%A8" }
    ]
  }
};

function objectAt(text, at) {
  let i = text.lastIndexOf("{", at), depth = 0, inStr = false, esc = false;
  for (let k = i; k < text.length; k++) {
    const ch = text[k];
    if (inStr) { if (esc) esc = false; else if (ch === "\\") esc = true; else if (ch === '"') inStr = false; continue; }
    if (ch === '"') { inStr = true; continue; }
    if (ch === "{") depth++; else if (ch === "}") { depth--; if (depth === 0) return { start: i, end: k + 1 }; }
  }
  return null;
}

const norm = (s) => String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
  .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/\s+/g, " ").trim();

let t = readFileSync("data/streets.js", "utf8");
const box = {}; new Function("window", t)(box);
let done = 0;
for (const [name, plan] of Object.entries(PLAN)) {
  const key = norm(name).replace(/^ال/, "");
  const e = box.STREETS.find((x) => norm(x.ar).replace(/^(شارع|طريق|جادة|دوار)\s+/, "").replace(/^ال/, "") === key);
  if (!e) { console.log("not found: " + name); continue; }
  let at = t.indexOf('"id": "' + e.id + '"');
  if (at < 0) at = t.indexOf('id: "' + e.id + '"');
  const b = objectAt(t, at);
  const c = new Function("return (" + t.slice(b.start, b.end) + ");")();
  c.origin = "documented";
  c.meaning = plan.meaning;
  c.story = plan.story;
  c.refs = plan.refs;
  t = t.slice(0, b.start) + JSON.stringify(c, null, 2) + t.slice(b.end);
  done++;
  console.log("carded: " + name + " (" + e.id + ")");
}
writeFileSync("data/streets.js", t, "utf8");
console.log("done:", done);
