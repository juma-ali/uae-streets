# UAE Streets

**A bilingual guide to the names on UAE street signs, and a directory of every named
street in the country.**

**[The guide →](https://juma-ali.github.io/uae-streets/)** ·
**[The directory →](https://juma-ali.github.io/uae-streets/directory/)** ·
**[Search →](https://juma-ali.github.io/uae-streets/directory/search.html)**

Two halves of one dataset:

- **The guide** explains names — a Companion, a tribe, a well, a dune, an ordinary
  Arabic word — with the story behind each, in Arabic and English.
- **The directory** lists them: every named street collected from OpenStreetMap,
  grouped **emirate → city → town → district**, and searchable in either language.

Both are plain static pages. No framework, no build step, no trackers.

**بالعربية:** دليل لأسماء شوارع الإمارات — أصولها ومعانيها ومن وراءها — وقائمة بكل
شارع مسمّى في الدولة، مرتّبة إمارة ← مدينة ← بلدة ← حي، وبحث يتعامل مع الكتابة العربية
كيفما كُتبت: [juma-ali.github.io/uae-streets](https://juma-ali.github.io/uae-streets/)

## What a card claims, and what it refuses to claim

Every card prints its own sourcing state:

| State | Meaning |
|---|---|
| **documented** | a published source is cited — a chronicle, an encyclopaedia, a newspaper, an official release |
| **recorded account** | an account the project holds, with no published source to cite |
| **no-reference** | the name is recorded as it appears on the sign, and nothing further is claimed |

Folk etymology is never dressed up as fact. Where no source exists, the card says so
rather than guessing — a wrong story is worse than none. Renamed roads carry both
names, and a road with a route number shows it (E 66, D 94).

The rule that decides most arguments here: **a word's root is not a place's meaning.**
`نجم` is "a star" in the dictionary and "an instalment" in the ledger; neither tells
you what the street is called after. When the only evidence is a root, the card stays
quiet.

## Inside

| | |
|---|---|
| Named streets | 11,246 |
| Districts | 456 |
| Cards with a written story | 1,682 |
| — sourced to a published reference | 614 |
| — recorded accounts | 27 |
| — recorded and nothing claimed | 1,041 |
| Streets that carry a meaning | 6,775 |
| Streets with a route number | 6,530 |
| Directory pages | 347 |

## How a name is written up

A card is four things: the **name** as it appears on the plate, in both languages; a
one-line **meaning**; a **story** of a few sentences; and the **references** the story
rests on. Names are kept as the municipality spells them — including the diacritics —
because the spelling is often the clue.

Where the plate and the books disagree, the card states the difference instead of
choosing silently: `سعيد` on the sign and `سعد` in the sources is a sentence on the
card, not a correction.

## Layout

```
index.html          the guide
roads.html          the browsable index of streets
assets/             one stylesheet, two scripts
data/               streets.js · cards.js · hierarchy.js · glossary · version.json
directory/          347 generated pages: emirates, districts, street tables, search
tools/              the build chain and the linters
research/           source notes: what was found, what is print-only, what failed
```

The build is a chain of plain Node scripts — `classify` → `cards-build` → `wiki-build`
— over a knowledge base assembled from OpenStreetMap and the offline PBF import. Two
linters guard the prose: one for Arabic typography, one for editorial policy.

## Sources and licence

Street geometry and names come from **OpenStreetMap**, © OpenStreetMap contributors,
available under the [Open Database License](https://opendatacommons.org/licenses/odbl/).
The database in `data/` is offered under the same licence.

The code and the written text are under the MIT licence — see [LICENSE](LICENSE).
