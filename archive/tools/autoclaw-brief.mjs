/* Builds research/autoclaw-brief.md — a self-contained task file an autonomous
   browser agent can work from, plus the CSVs it should fill in. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const load = (file, name) => {
  const box = {};
  new Function("window", readFileSync(root + file, "utf8"))(box);
  return box[name];
};

const CARDS = load("data/streets.js", "STREETS");
const ROADS = load("data/cards.js", "ROADS");

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/\s+/g, " ")
    .trim();

const EM = { "abu-dhabi": "أبوظبي", dubai: "دبي", sharjah: "الشارقة", ajman: "عجمان", "umm-al-quwain": "أم القيوين", "ras-al-khaimah": "رأس الخيمة", fujairah: "الفجيرة" };

/* A — people the guide can only name. */
const people = CARDS.filter((c) => c.origin !== "documented")
  .filter((c) => !/of the .* family|من أسرة/.test(c.meaning.en + c.meaning.ar))
  .map((c) => ({
    ar: String(c.ar).replace(/^(شارع|طريق|جادة|دوار|نفق|ساحة|ميدان|جسر)\s+/, "").trim(),
    en: c.en,
    em: EM[c.emirate] || c.emirate,
  }))
  .filter((p) => p.ar.split(/\s+/).length >= 2 || /^(ال|أبو|ابو)/.test(p.ar));

const stripped = (s) => String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/\s+/g, " ").trim();
const seenPeople = new Map();
for (const p of people) if (!seenPeople.has(stripped(p.ar))) seenPeople.set(stripped(p.ar), p);
const peopleList = [...seenPeople.values()].sort((a, b) => a.ar.localeCompare(b.ar, "ar"));

/* B — words with no meaning yet. */
const wordRows = ROADS.rows.filter((r) => !r[6] && r[3] === "word" && String(r[1] || "").trim());
const wordMap = new Map();
for (const r of wordRows) {
  const ar = String(r[1]).replace(/^(شارع|طريق|جادة)\s+/, "").trim();
  const key = stripped(ar);
  const cur = wordMap.get(key) || { ar, en: String(r[0]), n: 0 };
  cur.n++;
  wordMap.set(key, cur);
}
const words = [...wordMap.values()].sort((a, b) => b.n - a.n || a.ar.localeCompare(b.ar, "ar"));

const csv = (rows, head) => head + "\n" + rows.map((r) => r.join("\t")).join("\n") + "\n";
writeFileSync(root + "research/autoclaw-people.tsv", csv(peopleList.map((p) => [p.ar, p.en, p.em, "", "", ""]),
  "الاسم العربي\tالاسم الإنجليزي\tالإمارة\tمن هو (سطر واحد)\tالمرجع (رابط)\tملاحظة"), "utf8");
writeFileSync(root + "research/autoclaw-words.tsv", csv(words.map((w) => [w.ar, w.en, String(w.n), "", ""]),
  "الكلمة\tالاسم الإنجليزي\tعدد الشوارع\tالمعنى\tالمرجع (رابط)"), "utf8");

const samplePeople = peopleList.slice(0, 60).map((p) => `| ${p.ar} | ${p.em} |  |  |`).join("\n");
const sampleWords = words.slice(0, 60).map((w) => `| ${w.ar} | ${w.n} |  |  |`).join("\n");

const md = `# مهمة بحث — أسماء شوارع الإمارات

ملف موجَّه لوكيل تصفّح (AutoClaw). اقرأه كاملاً قبل البدء، واتبع قواعد الإخراج حرفياً.

---

## ١. ما المشروع

موقع ثنائي اللغة يوثّق **١١٬٢٢٦ شارعاً** في الإمارات السبع: من سُمّي عليه، وما معنى الاسم، ومصدر ذلك.

- الموقع: https://juma-ali.github.io/uae-streets
- المستودع: https://github.com/juma-ali/uae-streets
- البيانات: \`data/streets.js\` (البطاقات) و \`data/cards.js\` (فهرس الشوارع)

**الحالة الآن:** ٤٨٨ بطاقة موثّقة، و**١٬١٧٦** بطاقة تقول «لم يُعثر على مصدر منشور». مهمتك تقليص هذا الرقم.

---

## ٢. القاعدة الأولى: لا تخترع

هذا الموقع بُني على مبدأ واحد: **الفراغ أفضل من التخمين.**

- إن لم تجد مصدراً، اترك الخانة **فارغة**. لا تكتب «يُرجّح» ولا «ربما» ولا «اسم محلي».
- لا تخمّن من شكل الاسم. «الترمذي» ليس أسرة إماراتية بل نسبة إلى مدينة ترمذ.
- لا تنسب شخصاً إلى زمن لم تتحقق منه. «الشيخ سعود بن راشد المعلا» حاكمٌ معاصر، لا من «أعلام صدر الإسلام».
- المصدر يجب أن يكون **رابطاً يعمل** ويذكر الاسم صراحة. ويكيبيديا وحدها لا تكفي للأسماء المحلية.

**كل معلومة بلا مصدر تُحذف من الموقع. العمل بلا فائدة أهون من العمل بخطأ.**

---

## ٣. القاعدة الثانية: الحياد

- لا آراء سياسية، ولا وصف للمناصب السياسية بغير ذكر المنصب والتواريخ.
- لا مدح ولا قدح: «كان حاكماً ١٩٨١–٢٠٠٤» مقبول، و«قائد عظيم» مرفوض.
- لا خوض في الخلافات أو المذاهب.

---

## ٤. ما المطلوب — دفعتان

### الدفعة أ: أشخاص بلا ترجمة

الملف: \`research/autoclaw-people.tsv\` — **${peopleList.length}** اسماً.

اكتب في العمود الرابع **سطراً واحداً** يجيب: من هو هذا الشخص؟
وفي الخامس رابط المصدر.

أمثلة على الإجابة الصحيحة:

\`\`\`
الاسم: عبدالله بن الزبير
من هو: صحابي، ابن الزبير بن العوام وأسماء بنت أبي بكر، وأول مولود للمهاجرين في المدينة.
المرجع: https://ar.wikipedia.org/wiki/عبد_الله_بن_الزبير
\`\`\`

\`\`\`
الاسم: صباح الأحمد الجابر الصباح
من هو: أمير دولة الكويت من ٢٠٠٦ حتى وفاته سنة ٢٠٢٠.
المرجع: https://ar.wikipedia.org/wiki/صباح_الأحمد_الجابر_الصباح
\`\`\`

**أين تبحث، بهذا الترتيب:**

1. **ويكيبيديا العربية** — للصحابة والخلفاء والعلماء والأمراء. جرّب صيغ الاسم: «عبدالله» و«عبد الله»، «أبو» و«أبي»، «محمد» و«محمد».
2. **المكتبة الشاملة** (shamela.ws) و**الأعلام للزركلي** و**أسد الغابة** — لكل اسم من أسماء الصحابة والتابعين. النص الكامل متاح على archive.org أيضاً.
3. **tarajm.com** و**islamweb.net** — تراجم الرواة والعلماء.
4. **الصحف الإماراتية**: الاتحاد، البيان، الخليج، الإمارات اليوم — للأسماء المحلية. ابحث: \`"الاسم" شارع\` أو \`"الاسم" الإمارات\`.
5. **بلدية دبي وأبوظبي** — أدلة تسمية الشوارع الرسمية.

### الدفعة ب: كلمات بلا معنى

الملف: \`research/autoclaw-words.tsv\` — **${words.length}** كلمة.

المطلوب: **معنى الكلمة** بالعربية، ومن قاموس أو مصدر موثوق.

\`\`\`
الكلمة: الليّان
المعنى: اللين والسهولة
المرجع: https://www.almaany.com/ar/dict/ar-ar/ليان/
\`\`\`

**مصادر مفيدة:** المعجم الوسيط، لسان العرب، معجم اللهجة الإماراتية، وأعمدة الصحف الإماراتية التي يشرح فيها باحثون أسماء المواضع (هذا أنجح مصدر حتى الآن: عمود واحد عن ليوا شرح ٦١ اسماً).

---

## ٥. صيغة الإخراج

عدّل ملفات TSV نفسها وأعدها كما هي، **بالترميز نفسه** (TAB بين الأعمدة، UTF-8).

- املأ عمودي «من هو / المعنى» و«المرجع» فقط.
- لا تعد ترتيب الصفوف، ولا تحذف صفاً، ولا تغيّر الأعمدة الثلاثة الأولى.
- اترك فارغاً كل ما لم تجد له مصدراً.

---

## ٦. البداية السريعة (٦٠ اسماً)

| الاسم | الإمارة | من هو | المرجع |
|---|---|---|---|
${samplePeople}

## ٧. البداية السريعة (٦٠ كلمة)

| الكلمة | عدد الشوارع | المعنى | المرجع |
|---|---|---|---|
${sampleWords}

---

## ٨. كيف أعرف أن عملك مقبول

سيُدمج ما ترسله في الموقع مباشرة إن استوفى:

1. الصف فيه **اسم + إجابة + رابط** (لا إجابة بلا رابط، ولا رابط بلا إجابة).
2. الرابط يفتح ويذكر الاسم.
3. الإجابة **سطر واحد** لا فقرة.
4. لا كلمة من: سياسي، نظام، انقلاب، معارضة، فساد، مثير للجدل.
5. النسبة العددية بين العربية والإنجليزية متقاربة (الموقع يتحقق آلياً).

---

## ٩. ملاحظة أخيرة

المشروع يعرف حدوده. من **الطبيعي** أن تعود بأقل من نصف الصفوف فارغة أيدٍ — الأسماء المحلية الصغيرة لا وجود لها في أي مصدر رقمي، وتركها فارغة **هو الجواب الصحيح**. ما لا يجوز أن يحدث هو أن يظهر على الموقع اسمٌ وتحته معلومة مخترعة.
`;

writeFileSync(root + "research/autoclaw-brief.md", md, "utf8");
console.log("people:", peopleList.length, "| words:", words.length, "| brief:", Math.round(md.length / 1024) + " KB");
