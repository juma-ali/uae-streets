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

## Current coverage

| Area | Streets | Districts assigned |
|---|---|---|
| Capital and island | 4,559 | 50 |
| Al Ain | 2,552 | 34 |
| Liwa / Madinat Zayed | 275 | 2 |
| Ruwais | 36 | 0 |
| Sila | 34 | 0 |

**7,665 streets total; 7,408 carry an Arabic name; 2.4 MB.** **86 districts**, and
7,087 streets (92%) resolve to the full path —

```
Abu Dhabi Emirate » Abu Dhabi » Abu Dhabi » Khalifa City
```

**578 streets stay at emirate level**: they fall outside any `admin_level 8` polygon
(358 in Al Ain's rural outskirts, 169 around the capital, 51 in the west). They are
kept, not dropped — `area: null` is honest about what we know.

Assignment takes the **tightest containing polygon**, so a street inside both a city
and a district lands in the district. City names for Al Ain and the Al Dhafra towns
come from the collection boxes, because OSM has no boundary at that level there.

Coverage is by **populated box**, not by geometry: five rectangles cover the capital
and island, Al Ain, the Liwa/Madinat Zayed cluster, Ruwais and Sila. Desert between
them is excluded by design — there are no streets there to lose.

1,658 numeric-only ways were excluded (339 in the capital, 246 in Al Ain, 1,020 in
Liwa). The two cities run about 2% numeric; Liwa runs 38%, because oasis tracks are
numbered rather than named.

## Collection: PBF, not Overpass

```bash
node tools/pbf-import.mjs --name abu-dhabi --bbox "24.26,54.30,24.56,54.78;24.10,55.55,24.35,55.90;…"
node tools/kb-build.mjs   --emirate abu-dhabi --bbox "…" --note "…"
```

`pbf-import` downloads the UAE extract once (`.cache/`, gitignored), then walks it
twice: named highways first, their node coordinates second. `--bbox` takes several
boxes separated by `;`, because an emirate is rarely one rectangle. It writes the same
JSON shape the Overpass collector produced, so `kb-build` is unchanged.

Overpass remains available (`kb-collect`, `osm-district`) for one-off lookups, but
it is not the primary source any more: it 504s under load and silently returns
**empty tiles**, which is how the island went missing the first time.

## Meanings belong elsewhere

The base names are often ordinary Arabic words — الأُقحوان is the chrysanthemum
(white petals, yellow centre; what Arabic also calls البابونج). That belongs in the
editorial entry, not here. The KB answers *"what is this street called?"*; the
guide answers *"why?"*.
