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

## What the guide says, and what it refuses to say

Every card carries its own sourcing state, printed on the card:

| State | Meaning |
|---|---|
| **documented** | a published source is cited — a biographical dictionary with volume and page, or an encyclopaedia article |
| **recorded account** | an account the project holds, with no published source to cite |
| **no-reference** | the name is recorded as it appears on the sign, and nothing further is claimed |

Folk etymology is never dressed up as fact. Where no source exists, the card says so
rather than guessing — a wrong story is worse than none. Renamed roads carry both
names, and a road with a route number shows it (E 66, D 94).

Wording about people is limited to titles, dates and offices. No political framing,
no praise, no controversy.

## Inside

| | |
|---|---|
| Named streets | 11,226 |
| Districts | 449 |
| Cards with a written story | 1,833 |
| — of those, sourced to a published reference | 541 |
| Streets with a meaning | 6,478 |

## Layout

```
index.html          the guide
roads.html          the browsable index of streets
assets/             one stylesheet, two scripts
data/               streets.js · cards.js · hierarchy.js · glosses-ar.js · version.json
directory/          361 generated pages: emirates, districts, street tables, search
```

## Sources and licence

Street geometry and names come from **OpenStreetMap**, © OpenStreetMap contributors,
available under the [Open Database License](https://opendatacommons.org/licenses/odbl/).
The database in `data/` is offered under the same licence.

Biographical and lexical material is cited on the card it supports, most often
**الأعلام للزركلي** (with volume and page) and Arabic Wikipedia.

The code and the written text are under the MIT licence — see [LICENSE](LICENSE).
