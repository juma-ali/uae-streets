import { readFileSync, writeFileSync } from "node:fs";

/* The 110 words two models agreed on, with the English written by hand.

   Dropped, with reason:
     ٥                      a numeral, and numeric names are out of scope
     السلام و               the word is truncated in the source list
     مسافي · حتا · فايِز    place or personal names the models mis-read as words
     ثبر                    models said "patience"; the Fujairah source says ebb tide
     الهميل · الغيل · الغياث conflicting senses against sources we already hold
     شفايا · زبارة هطيل      too uncertain to put on a card
*/
const MAP = {
  "الروابي": ["heights, low hills", "المرتفعات أو التلال المنخفضة"],
  "صوغان": ["a small vessel for keeping small things", "وعاء صغير يُحفظ فيه الشيء الصغير"],
  "هتان": ["light steady rain", "المطر الخفيف الدائم"],
  "الاصباح": ["early morning", "الصباح الباكر"],
  "البكرا": ["a young she-camel", "البَكْرة: الصغيرة من الإبل"],
  "البواخر": ["large ships", "السفن الكبيرة"],
  "التاني": ["deliberateness, not rushing", "التَّروّي وعدم الاستعجال"],
  "التجلي": ["manifestation, clarity", "الظهور والوضوح"],
  "التوقيت": ["the fixing of time", "ضبط الوقت"],
  "التوكل": ["reliance on God in all things", "الاعتماد على الله في كل شيء"],
  "الجرانيت": ["granite, a hard building stone", "حجر صلب متين يُستخدم في البناء"],
  "الجمانه": ["a small pearl", "اللؤلؤة الصغيرة"],
  "الحييله": ["trickery, guile", "الحيلة: المكر والخديعة"],
  "الخريده": ["a young unmarried woman", "الفتاة البِكر"],
  "الخلان": ["friends", "الأصدقاء"],
  "الخواص": ["qualities, distinguishing traits", "الصفات والمميزات"],
  "الدنان": ["large clay jars for storing and cooling water", "أوانٍ فخارية كبيرة لحفظ الماء وتبريده"],
  "الراشديه": ["after the Al Rashidi, an Emirati tribe", "نسبة إلى قبيلة الراشدي الإماراتية"],
  "الرزفه": ["a folk dance of men at weddings, also called al-yowlah", "رقصة شعبية يؤديها الرجال في المناسبات، وتُعرف باليولة"],
  "الرصافي": ["the mason who lays stone or brick", "العامل الذي يرصف الحجارة أو الطوب"],
  "الرغيلات": ["young camels", "صغار الإبل"],
  "الرقط": ["small scattered spots on the skin", "النقط الصغيرة المتفرقة على الجلد"],
  "الروحه": ["going, departure", "الذهاب"],
  "الروزنه": ["an opening in a wall", "الفتحة في الجدار"],
  "الريعان": ["the prime of youth and strength", "فترة الشباب والقوة"],
  "الزافات": ["the bride's procession, and its folk singing", "موكب العروس والغناء الشعبي فيه"],
  "الزراف": ["very tall", "الطويل جداً"],
  "السمحاء": ["the white one", "البيضاء"],
  "السمهري": ["a long spear", "الرمح الطويل"],
  "الشط": ["the shore", "الشاطئ"],
  "الشمايل": ["good qualities of character", "الخصال الحميدة"],
  "الشهم": ["the brave", "الشجاع"],
  "الصابح": ["the first part of the day", "أول النهار"],
  "الصايغ": ["the goldsmith, maker and polisher of jewellery", "صانع الحلي الذهبية والفضية"],
  "الصيب": ["heavy rain", "المطر الشديد"],
  "الظفيره": ["a braid of hair", "جديلة الشعر"],
  "العذل": ["blame, reproach", "اللوم والعتاب"],
  "العطفه": ["a bend or turn in the road", "المنحنى أو المنعطف في الطريق"],
  "الغانم": ["the gainer, the winner", "الرابح"],
  "الغايات": ["goals, ends", "الأهداف"],
  "الغزيل": ["a lamb", "الصغير من ولد الضأن"],
  "الغنايم": ["spoils, gains", "الغنائم"],
  "الفرقد": ["the star near the pole by which travellers steer", "نجم قريب من القطب يُهتدى به"],
  "الفضايل": ["virtues", "الخصال الحميدة"],
  "الفواح": ["a fragrant scent", "الرائحة الطيبة العطرة"],
  "القطبان": ["the north pole", "القطب الشمالي"],
  "القوع": ["hard, dry ground", "الأرض الصلبة الجافة"],
  "المباهج": ["joys, delights", "الأفراح والمسرات"],
  "المثنايه": ["a forked wooden stand that holds a cooking pot", "أداة خشبية ذات شعبتين تُوضع عليها القدر"],
  "المخاليق": ["creatures", "المخلوقات"],
  "المرحبين": ["the hospitable", "أهل الضيافة والكرم"],
  "المريجيب": ["a clay vessel for keeping water cool", "وعاء فخاري لحفظ الماء وتبريده"],
  "المطري": ["light falling rain", "المطر الخفيف المتساقط"],
  "المعمر": ["the aged, the long-lived", "الكبير في السن"],
  "المفضال": ["the generous", "الكريم"],
  "الملازيم": ["obligations that bind a person", "ما يُلزم به الإنسان من واجبات"],
  "النظاير": ["in the Gulf, a brother", "في اللهجة: الأخ أو الشقيق"],
  "الهادف": ["the intended, the aimed at", "المقصود"],
  "الهبايب": ["strong winds", "الرياح الشديدة"],
  "الهطال": ["heavy rain", "المطر الغزير"],
  "الهمم": ["strong resolves", "العزائم القوية"],
  "الوثايق": ["documents", "الوثائق"],
  "الوهب": ["giving without return", "العطاء بلا مقابل"],
  "الياهلي": ["the young of anything", "الصغير من كل شيء"],
  "بارقه": ["the flash of lightning", "لمعان البرق"],
  "بالطبول": ["with drums", "مع الطبول"],
  "بالوصل": ["with reunion, with meeting", "مع الوصال واللقاء"],
  "براشي": ["severe cold", "البرد الشديد"],
  "دفالس": ["a large clay jar for water", "وعاء فخاري كبير لحفظ الماء وتبريده"],
  "ديمة": ["steady light rain", "المطر الدائم الخفيف"],
  "رحيبي": ["wide, spacious", "واسع وكبير"],
  "رقيطوه": ["very small", "الصغيرة جداً"],
  "سبتمبر": ["September", "أيلول"],
  "سيان": ["equal, the same", "متساويان"],
  "شهل": ["easy, level ground", "سهل"],
  "صبيطان": ["small fish", "صغير السمك"],
  "قنوان": ["the clusters that carry the dates", "عذوق النخل"],
  "كورنفلاور": ["cornflower", "زهرة الذرة"],
  "مايو": ["May", "شهر خمسة"],
  "مديد": ["long, tall", "طويل"],
  "مرده": ["small fish", "صغار السمك"],
  "مصيبيخ": ["a small battery lamp for the night", "مصباح صغير يعمل بالبطارية للإضاءة"],
  "معنق": ["long-necked", "طويل العنق"],
  "مقصار الدكه": ["short in stature", "قصير القامة"],
  "مي": ["milk", "حليب"],
  "ميربا": ["welcome", "أهلاً"],
  "نيمرو": ["a small leopard or tiger", "نمر صغير"],
  "هدير": ["the sound of running water", "صوت الماء الجاري"],
  "هيلي": ["Hili, a village of Al Ain", "قرية في العين"],
  "وقنه الهرم": ["the top of the pyramid", "قمة الهرم"],
  "يريوب": ["deceives", "يخدع"],
  "يفرة قمرة": ["a pleasant walk by night", "جولة ممتعة في الليل"]
};

let d = readFileSync("tools/dictionary.mjs", "utf8");
const fresh = Object.entries(MAP).filter(([k]) => !new RegExp(`"${k}":`).test(d));
if (fresh.length) {
  d = d.replace("const CURATED = {\n",
    "const CURATED = {\n  /* meanings on which two local models independently agreed; no printed source,\n     so these are recorded as accounts rather than documented fact */\n" +
    fresh.map(([k, [en]]) => `  ${JSON.stringify(k)}: ${JSON.stringify(en)},`).join("\n") + "\n");
  writeFileSync("tools/dictionary.mjs", d, "utf8");
}
let g = readFileSync("data/glosses-ar.js", "utf8");
const box = {};
new Function("window", g)(box);
for (const [, [en, ar]] of Object.entries(MAP)) box.GLOSS_AR[en] = ar;
writeFileSync("data/glosses-ar.js", "/* Arabic side of the most common glosses… */\nwindow.GLOSS_AR = " + JSON.stringify(box.GLOSS_AR) + ";\n", "utf8");
console.log("applied from consensus:", fresh.length, "of", Object.keys(MAP).length, "prepared");
