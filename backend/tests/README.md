# Backend test suite

189 tests over the backend's behaviour, run with:

```bash
greycat test              # everything
greycat test link_test    # one module
greycat test link_test::linkingIsIdempotentOnTheGoldenSide   # one test
```

Exit code is 0 on success, non-zero on any failure.

## Layout

Every file ends in `_test.gcl`, which is what keeps them out of production:
`greycat build` strips those modules from `project.gcp`, so the suite ships with the
source but never with the program.

| Module                  | What it covers                                                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `fixtures_test.gcl`     | Shared builders — not a test module. `reset()`, `seedSources()`, and constructors for the golden chain, OSM and BDA records.  |
| `utils_test.gcl`        | `extractAlphaCharsFromStreetNumber` — the house-number split every record goes through.                                       |
| `scoring_test.gcl`      | The scoring primitives: geo, number, postcode, street, city, overall, and the bounded candidate list.                         |
| `quality_test.gcl`      | `computeQuality` and the global quality roll-up — the source-weighted formula behind the public quality API.                  |
| `golden_graph_test.gcl` | `indexing()` across all ten golden indices, record projection, aliases, `GoldenSource` lookups.                               |
| `search_test.gcl`       | `searchItem`'s four fallback stages: scoped, global street, deep search, geo circle.                                          |
| `reconcile_test.gcl`    | `DataSource::reconcile`, mismatch classification, the report and comparison views, the source lock.                           |
| `promote_test.gcl`      | `promoteRecord` — creating a golden POI out of a source record.                                                               |
| `link_test.gcl`         | `linkRecords` / `unlinkRecord` / `linkAllFullMatched` / `batchLinkByScore` / `mergePositionsToGolden`.                        |
| `textsearch_test.gcl`   | `GoldenTextSearch`, `SourceTextSearch` and `searchAddress`: address lines, unbuilt states, the create-vs-edit staleness rule. |
| `api_test.gcl`          | The public read endpoints and `getSources`.                                                                                   |

## Isolation

`greycat test` runs the whole suite in one process with a shared module context, and the
golden indices are module-level nodes — so state carries between tests unless it is
cleared. Every test therefore starts with `fixtures_test::reset()`, which wipes every
persistent index the backend writes to.

**The suite locks and persists to the project's own `gcdata/`** (observed on GreyCat
8.2.179: running it on a checkout sharing the dev store has wiped that store - the fixtures'
reset state survived the run). The earlier claim that the suite "never flushes" no longer
holds on this runtime. Never run `greycat test` against a store you care about: use a
disposable checkout, or back `gcdata/` up first.

## libpostal

The tests in `textsearch_test.gcl` that actually build an index need libpostal's model
directory, via `GREYCAT_POSTAL_DATA_DIR` (`./files/postal-data` in the sample `.env`).
That directory is not in the repository. When it is missing those tests announce
themselves as skipped in the log and pass, rather than failing a fresh checkout — so a
green run on a machine without it is *not* full coverage. `setup()` probes once and the
rest read the flag.

