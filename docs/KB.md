# The knowledge base (`data/kb.js`)

Facts, not prose: what streets exist, what they are called, and where they are.
The editorial layer — meanings and stories — lives in `data/streets.js` and stays
CC BY. This file is ODbL, because it is derived from OpenStreetMap.

## Schema

```js
window.KB = {
  meta: { license, attribution, note },
  emirates: [{ id, osm, bbox, street_count, note }],
  areas:    [{ id, path: ["Abu Dhabi Emirate", "Abu Dhabi", "Abu Dhabi", "Khalifa City"],
               osm, bbox, street_count }],
  streets:  [{ id, area, emirate, name_en, name_ar, osm, kind, lat, lon, variants }]
}
```

- `path` is the four-level hierarchy: **Emirate » City » Area » District**.
- `area` is null while a street is only known at emirate level.
- `osm` (`way/123`) is the provenance link back to OpenStreetMap.
- `variants` counts numbered stretches that were merged into this row.

## Two rules that shape the data

**1. Numeric-only names are excluded.** `Road 1b`, `Street 112`, `42nd Street`,
`شارع 7` are not documented — by the owner's decision they carry no name, so they
are dropped. 79 were removed.

**2. Numbered stretches merge into the base name.** `Al Aqhuwanah 1 Street` …
`Al Aqhuwanah 9 Street` are stretches of **Al Aqhuwanah Street**, not nine streets:
the number marks the stretch, not the name. Same for `Al Withaq 1…23`. 543 such ways
collapsed into 85 rows.

A name that merely *contains* a number is untouched: `Abu Al Hinna-a 1 Street` keeps
its own row, because the base name is not `Abu Al Hinna-a Street`.

## Build

```bash
node tools/kb-collect.mjs --name abu-dhabi-city --osm relation/3766481 \
  --bbox 24.26,54.30,24.56,54.78 --tiles 2 --bbox-only
node tools/kb-build.mjs --emirate abu-dhabi-city --osm relation/3766481 \
  --bbox 24.26,54.30,24.56,54.78 --note "coverage note"
```

`kb-collect` writes to `.cache/` (gitignored); `kb-build` merges into `data/kb.js`,
replacing only the scope it was given. Overpass is flaky — see the roadmap.

## Current coverage — partial, deliberately recorded

| Scope | Streets | Status |
|---|---|---|
| Abu Dhabi » Khalifa City | 223 | complete for the district |
| Abu Dhabi city (emirate level) | 3,161 | **southern half only** — island and north missing |

The emirate record carries a `note` explaining the gap, so the file never implies
more completeness than it has.

## Meanings belong elsewhere

The base names are often ordinary Arabic words — الأُقحوان is the chrysanthemum
(white petals, yellow centre; what Arabic also calls البابونج). That belongs in the
editorial entry, not here. The KB answers *"what is this street called?"*; the
guide answers *"why?"*.
