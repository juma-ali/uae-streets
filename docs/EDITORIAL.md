# Editorial policy for cards

Cards about public figures — rulers, presidents, crown princes, historical
leaders — are read by people who live under those names. The register is
therefore fixed: **respectful, professional, and factual**. This is not a matter
of taste; it is enforced in CI by `tools/editorial-lint.mjs --fail`.

## The rule

An entry about a person states, and only states:

- **who** the street is named after,
- their **title** at the time, and their **dates** where known,
- their **relationship** to the place or to another person in the name, where
  that relationship explains the name,
- where the street **runs**, if it helps.

It does not:

- evaluate, praise, or celebrate the person ("honours", "pays tribute",
  "visionary", "beloved"),
- editorialise or add colour ("more camels than cars", "rebuilt with oil money"),
- mention controversy, criticism, allegations, or disputes of any kind,
- frame naming politically (alliances, rivalries, factions, ideology),
- speculate about motive ("which is why the family kept reusing the name").

The same standard applies in Arabic. "يكرّم", "تكريماً", "يحتفي" are treated
exactly like "honours" — they are all findings.

## Before and after

> **Before.** Not the founding father, but his great-grandfather: Sheikh Zayed bin
> Khalifa Al Nahyan, 'Zayed the Great', ruled Abu Dhabi from 1855 to 1909. His
> reign was the age when pearl diving made the town rich and Al Nahyan influence
> spread along the coast — which is why the family kept reusing the name.
>
> **After.** The street is named after Sheikh Zayed bin Khalifa Al Nahyan
> (1855–1909), known as Zayed the Great, who ruled Abu Dhabi from 1855 to 1909.
> He was the great-grandfather of Sheikh Zayed bin Sultan Al Nahyan.

> **Before.** Naming a street after a neighbouring head of state reflects the
> kinship and alliance that tie the Gulf's ruling families together.
>
> **After.** *(removed — the naming is not a political statement to be explained)*

## What is allowed

- Titles and offices: "ruler of Abu Dhabi from 1966 and first President of the UAE".
- Reign dates and life dates: "(1918–2004)", "who ruled from 1981 to 2009".
- Family facts that explain the name: "of the same ruling family as the street above".
- Long-standing institutional facts: "the Al Nuaimi family has ruled Ajman since
  the 19th century".

## Enforcement

```bash
node tools/editorial-lint.mjs --fail
```

The lint scans `story`, `meaning`, `now` and `former` in both languages against
five rule groups — controversy, politics, corruption/rights, evaluative verbs,
editorialising — and fails CI on any hit. The word lists live in
`tools/editorial-lint.mjs`; each rule carries the reason it exists, so a future
contributor can tell which one they tripped and why.

If a genuine fact trips a rule (for example the word "alliance" in the name of a
place), rewrite the sentence rather than weakening the pattern: the pattern is
what keeps the register consistent across 34 entries and two languages.
