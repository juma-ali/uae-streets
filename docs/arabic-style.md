# Arabic style guide

The Arabic is not a translation of the English. Both are written from the same
facts, independently, in the register a newspaper or a heritage plaque would use.
If a sentence only makes sense once you've read the English, it's wrong.

## The one test

Read the Arabic aloud. If it sounds like a translated press release — long
nominal chains, `تم` + masdar, abstract nouns where a verb belongs — rewrite it.

## Rules

1. **Write from the facts, not from the English sentence.** Same information,
   its own shape. Arabic usually needs fewer words than English, not more.
2. **2–3 sentences**, matching the English in content but not clause by clause.
3. **Verbs over verbal nouns.** `سُمّي` not `تم تسميته`; `شُقّ` not `تم شقّه`.
4. **No periphrastic scaffolding.** Avoid `يقوم بـ` / `قام بـ` / `بشكل` /
   `على مستوى` / `في إطار` / `من حيث`. The linter flags these.
5. **Prefer verbal sentences** (فعل + فاعل + مفعول) to stacked إضافات.
6. **Concrete verbs over clichés.** `صار اسمه مقترناً بـ…` reads better than
   `تحمل أبراجه اسمه`; `يُربط اسمها بـ…` better than `تُذكر ارتباطاً بـ…`.
7. **Punctuation:** `« »` for quotes, `،` for commas, `؟` and `!` where needed.
   Never ASCII `"` or `,`.
8. **Digits stay Western** — 1971, 2020, E11 — matching the rest of the site.
9. **Latin script only** for road codes and untranslatable names (`E11`).
   Anything else in Latin means a half-translated phrase.
10. **Length balance.** Arabic normally runs 0.5–1.4× the English character
    count. Outside that, one side was probably summarised or padded.

## Before / after

| Was | Now | Why |
|---|---|---|
| يسمّون الطريق **بحسب أعمالهم** لا بمعالمه | يسمّون الطريق **بوجهتهم** لا بمعالمه | "أعمالهم" means deeds/business, not destination; the antithesis now balances (destination vs landmarks) |
| واليوم **تحمل أبراجه الشاهقة اسمه** | واليوم **صار اسمه مقترناً** بأبراج المدينة الشاهقة | "towers carry his name" is English logic wearing Arabic words |
| وتُذكر **ارتباطاً** بشركة كهربائية | **ويُربط اسمها** بشركة كهربائية | nominal `ارتباطاً` is a calque of "in connection with" |

## Workflow

```bash
node tools/arabic-lint.mjs        # mechanical checks
node tools/arabic-review.mjs      # which entries changed since last approval
node tools/arabic-review.mjs --approve al-wasl-road
```

`tools/arabic-review.mjs` stores a hash of each entry's Arabic at the moment you
accepted it (`docs/arabic-review.json`). Change the Arabic, and the entry returns
to the queue; leave it alone, and it never comes back. That is what keeps review
cost proportional to *new writing*, not to the size of the dataset.

The queue is a reading list, not a blocker: it tells you what to read, and you
approve when the Arabic is good.
