# Web corroboration (SearXNG)

A local SearXNG can answer "does this road exist?" in one query, and it earned its
keep: when `docs/WIKI-CHECK.md` flagged eight Dubai roads absent from
OpenStreetMap, a search for each returned real-world evidence for **all eight**.

## What the check proved

| Road | Evidence found |
|---|---|
| Mankhool Road | Google results, 20 of 30 |
| Al Rebat Street | Google results, 20 of 30 |
| Al Diyafah Street | Google results, 20 of 30 |
| Al Musallah Road | 19 of 30 |
| Discovery Garden Road | 7 of 17 |
| Deira Islands Street | 2 of 12 |
| Emirates Road (E 611) | **rta.ae**, 30 of 30 |
| Dubai–Al Ain Road | **rta.ae**, 20 of 30 |

So those eight are real roads that OSM is missing — not artefacts of this pipeline.

It also settled a spelling: a query for *Oud Maitha Road* surfaced the RTA's own
news item — "Completing the Oud Maitha Road" — confirming the spelling the KB holds
over Wikipedia's "Oud Metha".

## What it cannot do: bulk verification

Two limits, both measured, not guessed:

1. **Silence is not error.** Of 299 sampled streets, 240 returned nothing. They are
   new suburban lanes (`Tawi Al Haffar`, `Sayh Sidrah`) that no page would ever
   discuss. Checking them measures the internet, not the data.
2. **The engines suspend.** After roughly 300 queries SearXNG reported
   `brave: Suspended: too many requests`, `google: Suspended: access denied`,
   `google cse: Suspended: too many requests`. Only Bing kept answering, and its
   results were unrelated — a query for *Khalid Bin Waleed Road* returned ChatGPT
   pages. Any bulk run past that point is noise.

## How to use it

For a handful of deliberate questions, with the engines healthy:

```bash
node tools/web-check.mjs --names "Mankhool Road;Al Rebat Street" --delay 5000
```

Keep batches small (10–20) and the delay long (5 s). For systematic coverage use
`tools/wiki-check.mjs` instead: it is deterministic, needs no engines, and cannot
be rate-limited.
