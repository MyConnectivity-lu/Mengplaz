# MengPlaz frontend migration: GreyCat JSX + Shoelace -> Lit + Web Awesome

Date: 2026-09-04
Status: approved, ready for planning

## Problem

`frontend/` is ~6,700 LOC of GreyCat JSX (`@greycat/web` jsx-runtime) over Shoelace 2.20,
rendered by hand-rolled `HTMLElement` subclasses that call `this.replaceChildren(...)` on
every state change. There is no component base class, no session gate, no design-token
system, and no automated frontend test of any kind. The sibling project
`/home/max/Projects/project-template` solves the same problems with Lit 3, Web Awesome 3,
a `--gc-*` token theme, a `GcPage` session gate, and a Playwright suite.

This migration rebuilds the MengPlaz frontend on the project-template architecture,
refreshes the visual design, and adds an end-to-end test suite.

## Decisions (settled with the user, 2026-09-04)

1. **Routing: MPA**, one `app/pages/<name>/index.html` per page, matching the template.
   Legacy `?page=` deep links are preserved by a redirect shim (see "Routing").
2. **UI library: full swap to Web Awesome 3.** Every `sl-*` becomes `wa-*` or a local
   `mp-*` Lit component. Shoelace and its 2,052-file Bootstrap icon folder are removed.
3. **Auth: anonymous access is preserved.** `@role("public", "api")` stays in
   `project.gcl`; there is no backend change. Anonymous users browse; `admin`-only
   surfaces stay permission-gated. `frontend/public/login.html` is restyled to match the
   new theme and kept as the login entry point.
4. **Visual scope: template palette re-keyed to the MengPlaz brand.** The token system,
   type ramp, density and panel/table styling come from the template; the accent is
   MengPlaz magenta, not GreyCat lime. Information architecture is unchanged - no page
   layout is redesigned in this migration.
5. **Sequencing: foundation first, then page by page.** `frontend/` stays buildable until
   the final page lands, so the branch is never in a broken state.

Vite Plus is already the build tool (`vite-plus ^0.2`, `vp dev|build|check|fmt|lint`).
The remaining build work is config alignment (MPA inputs) and a version bump, not an
adoption.

## Architecture

### Layout

    app/
      theme.css                     # --gc-* tokens + --wa-* bridge, MengPlaz accent
      env.d.ts
      lib/
        gc.ts                       # session gate: ready(), currentUser(), hasPermission(), logout()
        gc-page.ts                  # GcPage base: awaits ready(), then onInit()
        pages.ts                    # nav model (href, label, icon, requiredPermission)
        theme.ts                    # dark/light mode, currentColors() for canvas consumers
        columns.ts                  # declarative column model for the table components
        routing.ts                  # query-param helpers + legacy ?page= redirect map
        format.ts                   # match quality, distance, camel-case, source colours
      components/
        mengplaz-app-shell.ts       # nav, top bar, theme toggle, login/logout, footer
        mp-panel.ts                 # card shell (header, actions, body)
        mp-data-table.ts            # static table over Column<T>
        mp-virtual-table.ts         # TanStack-virtualized table
        mp-address-card.ts
        mp-address-search.ts
        mp-minimap.ts
        comparison/                 # candidates-panel, candidate-row, candidates-table,
                                    # comparison-dashboard, master-record-panel,
                                    # record-comparison-view, completion-message
        reconcile/reconcile-pane.ts
        dialogs/                    # confirm, promotion, search-parameters, batch-link, search
        address-field/              # address-field, address-content
      pages/
        index/    index.html index.ts     # /            the map (default view) + legacy redirect shim
        search/   index.html index.ts     # /search/
        browse/   index.html index.ts     # /browse/     (today's "index" page: city/street/number drill-down)
        record/   index.html index.ts     # /record/?guid=...
        quality/  index.html index.ts     # /quality/
        reconcile/index.html index.ts     # /reconcile/  (admin only)
      public/
        login.html                        # restyled, same auth endpoint
    e2e/
      auth.setup.ts                       # admin login -> storageState
      *.spec.ts                           # one spec per page + auth + routing
    playwright.config.ts
    vite.config.ts                        # appType: "mpa", one input per app/pages/**/index.html

`frontend/` is deleted only in the final step, after the last page is ported.

### Routing

Each page is its own document; navigation between pages is a plain `<a href>`. Within a
page, state that must survive a reload stays in query params exactly as today
(`?guid=`, `?source=`, `?tab=`, `?sourceId=`).

`app/pages/index/index.ts` runs a redirect shim before rendering: if `?page=` is present,
it maps the legacy value to the new path and `location.replace()`s, carrying every other
query param through.

| Legacy                                  | New                        |
| --------------------------------------- | -------------------------- |
| `/?page=map`                            | `/` (no redirect; already there) |
| `/?page=search`                         | `/search/`                 |
| `/?page=index`                          | `/browse/`                 |
| `/?page=reconcile&source=&tab=&sourceId=` | `/reconcile/?source=&tab=&sourceId=` |
| `/?page=record&guid=X`                  | `/record/?guid=X`          |
| `/?page=quality-history`                | `/quality/`                |
| no `?page=`                             | render the map             |

The shim is permanent, not transitional: `app.mengplaz.lu` links are shared externally.

Links the app *emits* move to the new paths, and every emitter is updated in the step that
ports it: `handleGoToRecord()` in `common/utils.ts`, the QR code in the address card
(`${origin}/?guid=X&page=record` becomes `${origin}/record/?guid=X`), and the UID cell of
the quality-history golden-records table.

There is no separate landing page: the map *is* the index, as it is today. `/?page=map`
needs no redirect because it is already on the right document; the shim simply strips the
param. `pages.ts` therefore has no `HOME` entry distinct from Map - Map is the first nav
item and its `href` is `/`.

### Session and permissions

`lib/gc.ts` owns the whole session flow and is the only module that touches `gc.sdk`:

- `ready(): Promise<void>` - memoized; resolves once `gc.sdk.init()` has run. Because the
  `public` role holds `api`, `init()` succeeds for anonymous visitors, so `ready()`
  resolves without any login. This is the deliberate difference from the template's gate,
  which mounts a sign-in overlay on failure.
- `currentUser(): gc.runtime.Identity | null` - fetched once after init.
- `isAnonymous(): boolean` - `currentUser()?.name === "public"`.
- `hasPermission(name: string): boolean` - wraps `gc.$.default.hasPermission`.
- `logout(): Promise<void>` - `gc.sdk.logout()` then `location.replace("/")`.

`lib/gc-page.ts` provides `GcPage extends LitElement`: `connectedCallback` awaits
`ready()` then calls the subclass's `onInit()`, capturing failures into a `loadError`
state field. No page calls `gc.sdk.init` itself and no page renders login UI.

Permission gating is presentational only - the backend already enforces
`@permission("admin")` on the private API. `pages.ts` entries carry an optional
`requiredPermission`; the shell filters the nav by it, and `/reconcile/` additionally
renders a "not authorized" panel rather than firing admin endpoints when the check fails.

### Visual system

`app/theme.css` is the template's token file with these MengPlaz-specific changes:

- Accent: `--gc-accent: #ff18a4` (dark) and a darkened magenta with sufficient contrast on
  white for light mode; `--gc-on-accent` set for readable text on accent fills.
- Data-source colours become tokens - `--gc-src-golden`, `--gc-src-bda`, `--gc-src-osm`,
  `--gc-src-caclr` - seeded from today's `SOURCE_COLORS` so map layers, the comparator and
  legends stay in agreement. `format.ts` reads them through `currentColors()` for
  canvas/maplibre consumers, which cannot resolve CSS custom properties.
- Everything else (surfaces, IBM Plex ramp pinned to px via `--wa-font-size-*`, spacing,
  radii, shadows, the `--wa-*` bridge, light-mode block) is carried over unchanged.

Rules that apply to all new frontend code:

- Colours and sizes come from tokens. No raw hex, no raw `rem`/`px` font sizes.
- Only font weights loaded by the `@import` may be used.
- Dark is the default; light mode is a class on `<html>` (`wa-light`/`wa-dark`),
  persisted in `localStorage`, restored by `initMode()` at page start.

The theme switch keeps its current placement in the sidebar footer.

### Component mapping

| Today                                   | After                                             |
| --------------------------------------- | ------------------------------------------------- |
| `sl-button`, `sl-icon-button`           | `wa-button` (icon-only variant)                   |
| `sl-input`, `GuiInputString`            | `wa-input`                                        |
| `sl-select`/`sl-option`, `GuiSelect`    | `wa-select`/`wa-option`                           |
| `sl-dialog`                             | `wa-dialog`                                       |
| `sl-checkbox`, `sl-switch`              | `wa-checkbox`, `wa-switch`                        |
| `sl-tag`, `sl-badge`                    | `wa-tag`, `wa-badge`                              |
| `sl-tooltip`                            | `wa-tooltip`                                      |
| `sl-tab-group`/`sl-tab`/`sl-tab-panel`  | `wa-tab-group`/`wa-tab`/`wa-tab-panel`            |
| `sl-spinner`                            | `wa-spinner`                                      |
| `sl-alert`                              | `wa-callout`                                      |
| `sl-divider`                            | `wa-divider`                                      |
| `sl-format-date`                        | `Intl.DateTimeFormat` in `format.ts`              |
| `sl-breadcrumb`/`sl-breadcrumb-item`    | `wa-breadcrumb`/`wa-breadcrumb-item`              |
| `sl-qr-code`                            | `wa-qr-code` (verify in WA3; else the `qrcode` package) |
| `sl-icon` + `public/assets/icons` (2052)| inline-SVG icon map in `lib/icons.ts` (~25 icons) |
| `GuiTable` (search results)             | `mp-data-table`                                   |
| `GuiTable` (reconcile record lists)     | `mp-virtual-table`                                |
| `GuiValue`                              | formatted output from `format.ts`                 |
| `GuiChart` + `gc.Table.fromObjects`     | `mp-chart` over granular ECharts (`lib/echarts.ts`) |
| `toast` from `@greycat/web`             | `wa-toast`/`wa-toast-item`                        |

`maplibre-gl` is unchanged and stays a direct dependency: the Geoportail vector style,
the 2025 orthophoto WMTS tiles, the WMS overlay, the attribution strings and the
Luxembourg `maxBounds` are carried over verbatim into the new map page and `mp-minimap`.

Charts follow the template: all ECharts registration lives in `lib/echarts.ts`
(`echarts/core` plus an explicit `use([...])`), never the `echarts` umbrella import, and
`mp-chart` wraps the instance with resize handling and a `gc-theme` listener that re-reads
`currentColors()` on a mode flip. The quality-history page is the only current consumer: it
drops `GuiChart` and `gc.Table.fromObjects` and feeds `mp-chart` the `history` rows
directly.

Dependency changes: add `lit`, `@awesome.me/webawesome`, `@tanstack/virtual-core`,
`echarts`, `@playwright/test`; remove `@shoelace-style/shoelace`. `@greycat/web` stays (SDK and
generated types); its `components/*` and `greycat.css` imports are dropped, and
`tsconfig.json` loses the `jsx`/`jsxImportSource` options.

### Backend

None. No `.gcl` file is edited, so `project.d.ts` needs no regeneration and
`greycat-lang lint` / `greycat test` results are unaffected by this work.

## Testing

### Playwright configuration

`playwright.config.ts` mirrors the template: `webServer` runs `bin/greycat serve` on
`E2E_PORT` (default 8080) serving the prebuilt `webroot/` and the API on one origin;
`vp build` must run before the suite. Three projects:

- `setup` - signs in as the e2e admin through `login.html`, saves `e2e/.auth/admin.json`.
- `chromium-admin` - `storageState: e2e/.auth/admin.json`, runs the specs that need admin.
- `chromium-anon` - no `storageState`, runs the anonymous-visitor specs.

The e2e admin user is created once before the suite, while no server holds the `gcdata/`
lock, via `MENGPLAZ_ADMIN_LOGIN` / `MENGPLAZ_ADMIN_PASS` or
`greycat run runtime::Identity::create`.

### Coverage

| Spec               | Asserts                                                                     |
| ------------------ | --------------------------------------------------------------------------- |
| `auth.spec.ts`     | anonymous sees no Reconcile entry and gets the not-authorized panel at `/reconcile/`; admin sees both. Login and logout round-trip. |
| `routing.spec.ts`  | every legacy `?page=` URL redirects to its new path with query params intact. |
| `shell.spec.ts`    | nav renders at all three viewport tiers, drawer opens/closes below 1024px, theme toggle flips and persists across a reload. |
| `search.spec.ts`   | typing a street name populates the results table; clicking a row lists street numbers; clicking a number opens the address card. |
| `browse.spec.ts`   | city -> street -> number drill-down, breadcrumb navigates back up.          |
| `map.spec.ts`      | at `/`: maplibre canvas mounts, basemap select switches vector/ortho, address search flies to a record. |
| `record.spec.ts`   | `/record/?guid=` renders the comparator for a known record; an unknown guid shows the error state. |
| `quality.spec.ts`  | the quality-history chart renders and shows a latest value.                 |
| `reconcile.spec.ts`| source selection, tab switching across all five tabs with badge counts, and the link / promote / batch-link dialogs opening and closing. |

Specs assert on roles and visible text, not CSS classes. Playwright pierces open shadow
roots, so Lit and Web Awesome internals resolve normally.

### Definition of done

    vp check                     # format + typecheck + lint
    vp build                     # builds app/ into webroot/
    pnpm exec playwright test    # full e2e suite

plus a visual pass: every page screenshotted at the large / medium / small shell tiers and
reviewed before the migration branch merges.

## Sequencing

Each step is a commit that leaves the branch building and the existing app working.

1. **Foundation.** `app/theme.css`, `lib/*`, `vite.config.ts` MPA switch, dependency
   changes, `mengplaz-app-shell`, `mp-panel`, `mp-data-table`, `mp-virtual-table`,
   `lib/icons.ts`, `lib/toast.ts`. A placeholder `/` carrying the redirect shim, so the
   shell and the routing are testable before the map is ported onto them.
2. **Playwright harness.** `playwright.config.ts`, `auth.setup.ts`, `routing.spec.ts`,
   `shell.spec.ts` - green against step 1.
3. **`/` (the map)** + `mp-address-search`, `mp-minimap` + spec. Ported early because it is
   the default view and the shell's most demanding host (full-bleed canvas, no page padding).
4. **`/search/`** + `mp-address-card`, `address-field` + spec.
5. **`/browse/`** + spec.
6. **`/record/`** + the `comparison/` subtree + spec.
7. **`/quality/`** + spec.
8. **`/reconcile/`** + `reconcile-pane` + the four dialogs + spec. Largest step; may split
   per tab family if it grows past a reviewable size.
9. **Teardown.** Delete `frontend/`, drop Shoelace and the icon folder, restyle
   `public/login.html`, update `README.md` and `.gitignore`, final `vp check` /
   `vp build` / full suite, visual pass.

## Risks

- **`reconcile.tsx` is 958 LOC with five dialogs and a seven-module comparison subtree.**
  It concentrates most of the migration's behavioural risk. Its spec is written before the
  port (step 8 begins with the spec against the *old* page, which must also pass against
  the new one).
- **Web Awesome 3's form-control API differs from Shoelace's** - `wa-input` events and slot
  names are not `sl-input`'s. Each mapping is verified against a rendered page, not assumed.
  (An earlier draft of this spec claimed WA3 had no breadcrumb; the installed 3.12.0 ships
  `wa-breadcrumb`, `wa-toast` and `wa-pagination`, so no local replacements are needed.)
- **The e2e suite needs data.** Specs assert on records that must exist in `gcdata/`. Any
  spec that cannot rely on stable seeded data asserts on structure (a non-empty table, a
  mounted canvas) rather than on a specific record.
- **`greycat serve` locks `gcdata/`.** The suite cannot run while a dev server is up; the
  README gets the throwaway-copy recipe from the template's AGENTS.md.
