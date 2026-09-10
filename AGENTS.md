# MengPlaz

The Golden Standard of national addresses, by MyConnectivity (https://app.mengplaz.lu/).

A GreyCat fullstack project. One `greycat` binary compiles the backend, stores the graph in
`gcdata/`, and serves both the API and the built frontend over HTTP. The frontend is a Vite+
**MPA** of Lit web components - one document per page - that reconciles address records from
several external sources (CACLR, BDA, OSM) into a single golden record set.

## Fresh clone to running app

    greycat install            # download lib/* and bin/greycat at the pinned versions
    greycat run bootstrap      # create the admin user, init GoldenSource, restore from ./backup , if empty load fresh data may take some time to finish
    pnpm i                     # frontend deps
    pnpm run gen               # greycat codegen -> project.d.ts
    pnpm build                 # build app/ into webroot/
    greycat dev                # API + webroot on http://localhost:8080

`greycat dev`  runs the frontend and backend dev server any frontend changes require a page reload and backend changes require a restart.


## For AI agents

The GreyCat skill ships inside the standard library. Load it before writing any GreyCat code:

@./lib/std/skills/SKILL.md

Run `greycat install` first when `lib/std/` is absent; the skill and the stdlib install together.

For the webapp stack, also read `lib/std/skills/reference/webapp.md` and `webapp-tests.md`.
Domain background lives in `docs/`: `docs/reconciliation.md` (matching parameters, thresholds,
scoring weights) and `docs/golden-record-quality.md` (the source-weighted quality formula).
Read the relevant one before touching scoring, linking, or quality code.

## Hard rules

- **Anonymous read access is deliberate, and it is the one place this project diverges from the
  GreyCat default.** `project.gcl` declares `@role("public", "api")` because MengPlaz is a public
  national address service: the map, search, browse, record and quality pages must work with no
  session. That is a product decision, not a shortcut - do not "fix" it. What it means in practice:
  - Public read endpoints live in `backend/api/api.gcl` and carry an explicit
    `@expose` + `@permission("public")`.
  - Everything that mutates the golden graph lives in `backend/api/privateApi.gcl` and carries
    `@expose` + `@permission("admin")`. **Never add a write endpoint to `api.gcl`, and never mark
    one `public`.** Promote, link, unlink, reconcile, merge and lock are admin-only.
  - A bare `@expose` with no `@permission` still requires the `api` permission - which the `public`
    role holds here - so it is effectively public. Be explicit either way; do not rely on the bare
    form to mean "authenticated".
- **The backend is layered by role, not by page.** `backend/model` = persisted types and the graph
  indices, `backend/edi` = external-source loaders and backup import/export, `backend/services` =
  search, scoring, reconciliation, quality, `backend/api` = the HTTP surface, `backend/common` =
  shared helpers, `backend/tests` = the `*_test.gcl` suite. An endpoint is a thin wrapper: it
  validates arguments and delegates to a service. Business logic never lives in `backend/api`.
- **Graph state lives in module-level `var` node indices in `backend/model`.** `golden_pois_by_id`,
  `osm_by_geo`, `bda_address_by_cacrid`, `sources_by_name`, ... Every persisted index is declared at
  the top of its model module. Add a new one there, and add it to `fixtures_test::reset()` in the
  same change - the suite shares one module context, so an index not cleared by `reset()` leaks
  state between tests.
- **Wire-only types are `@volatile`.** Anything that exists purely to cross to the browser or to
  hold a computed view - `POIRecordRef`, `GoldenIndex`, `GoldenRecordPage`, `ComparisonViewData`,
  `GeoJSON`, `ReconciliationReportView` - is `@volatile` so it can never be written into the graph.
  Only genuinely persisted types (`GoldenPointOfInterest`, `OsmAddress`, `BDAddress`, `DataSource`,
  `ReconciliationReport`) stay non-volatile.
- **Backend logging uses the logger, not `println`.** `info()` / `warn()` / `error()`, so output
  carries a level and lands in the server log. Reserve `println` for a deliberate CLI dump.
- **Comment sparingly - only where the code cannot speak for itself.** Default to none. Earn a
  comment by explaining a *why* the reader cannot recover from the code: a non-obvious choice
  between alternatives, a constraint imposed from outside, a trap that looks like a bug. Some
  older files in this repo are heavily commented - do not take them as the target. Concretely:
  - **Three lines is the ceiling**, one or two the norm, and a file header caps at ~8. A comment
    growing into paragraphs means the design or the naming is what wants fixing; longer
    background belongs in `docs/`, not inline.
  - **Never restate what the code does** - no narrating a function's steps, no label comments
    (`// Record quality event`, `// Convert IDs to node refs`), no section banners.
  - **Never doc-comment a name that already says it** - `ready()`, `docText()`, a stats struct's
    fields, a `build*` endpoint. An empty doc comment is the right amount for most declarations.
  - **Say a thing once.** Point at the file that owns the explanation rather than repeating it,
    and never repeat the same paragraph across sibling modules.
  - **No commented-out code.** Delete it; git remembers. A `TODO` stands on its own line, in
    prose, without the dead code it refers to.
  - Comments are code: when you change a line, re-read the comment above it, and when you delete
    code delete its comment with it.
- **Call the SDK directly; never wrap it.** Reach the backend with `gc.<module>.<fn>(...)` and type
  against the generated `gc.<module>.<Type>` from `project.d.ts`. No `api.ts`, no typed-call
  wrappers, no hand-written mirrors of response types. The runtime `gc.*` bindings are built during
  `gc.sdk.init()`, so nothing may touch them before the session gate resolves - `GcPage` enforces
  that ordering.
- **The session gate is `app/lib/gc.ts`; pages extend `GcPage`.** `gc.ts` is the only module that
  touches `gc.sdk`. Because anonymous browsing is supported, `ready()` resolves for every visitor -
  signed in or not - and there is no sign-in overlay: **signing in happens on the standalone
  `/login.html` document** (`app/public/login.html`), never inside the app. A page extends `GcPage`
  (`app/lib/gc-page.ts`) and implements `onInit()`; the base awaits `ready()` first, so `onInit()`
  can call `gc.*` freely. Gate admin-only UI on `hasPermission('admin')` / `isAnonymous()` from
  `gc.ts` - the backend enforces it too, but the UI must not offer what will 403.
- **`gc.sdk.init()` must be pinned to the origin.** On an MPA page served from `/record/` the SDK
  would otherwise derive its endpoint from `location.pathname` and POST into the subdirectory.
  `gc.ts` passes `url: new URL(location.origin)`; do not remove it.
- **The legacy `?page=` shim is permanent.** `app/lib/routing.ts` maps `?page=map|search|index|
  reconcile|record|quality-history` onto the MPA documents. `app.mengplaz.lu` links are shared
  externally and must keep resolving. `redirectLegacy()` is called first in the index page's module,
  before anything renders. Adding a page means adding it to `PATHS` only if a legacy value pointed
  at it; never delete an existing mapping.
- **`mengplaz-app-shell` is chrome, not auth.** It owns the responsive nav (docked sidebar >=1024px,
  icon rail 640-1023px, off-canvas drawer <640px), the top bar, the theme toggle, the current-user /
  sign-in control and the footer. Pages wrap their body in
  `<mengplaz-app-shell page-title="...">`. The nav's single source of truth is `PAGES` in
  `app/lib/pages.ts`; an entry with `requiredPermission` is hidden unless the session holds it.
- **Charts use ECharts, imported granularly.** All registration lives in `app/lib/echarts.ts`
  (`echarts/core` + `use([...])`). Never import the `echarts` umbrella (~325 KB gzip).
- **Maps use MapLibre GL.** Style, tile URLs, bounds and attribution constants live in
  `app/lib/geoportail.ts`; the worker shim is `app/lib/maplibre-worker.ts` and must be imported
  first in any page that instantiates a map. Virtualization uses TanStack Virtual
  (`@tanstack/virtual-core`), see `mp-virtual-table`.
- **Icons are inlined in `app/lib/icons.ts`.** No icon CDN, no icon package, no per-glyph request.
  Add the glyph's inner markup for a 24x24 `fill="none" stroke="currentColor"` viewBox.
- **Colors and sizes come from `--gc-*` tokens** (`app/theme.css`), never hardcoded. The tokens
  bridge onto Web Awesome `--wa-*` and are keyed to the MyConnectivity brand palette. Canvas/map
  code reads resolved hexes via `currentColors()` / `colorForSource()` (`app/lib/theme.ts`,
  `app/lib/format.ts`). Both light and dark modes must stay legible - the brand green is unreadable
  as text on white and the brand blue is unreadable on dark, which is why each mode picks a
  different one; read the comment at the top of `theme.css` before touching the palette.
- **No webfont.** The app uses the brand's system font stack (`--gc-ui`), deliberately - it removes
  a Google Fonts request on every page load. Do not add an `@import` for a font family.
- **Every `font-size` uses a `--wa-font-size-*` token**, never a raw `rem`/`px`. The ramp is pinned
  to pixels in `app/theme.css` (`3xs` 10 ... `m` 15 body ... `4xl` 40). Pick the nearest step; in a
  `clamp()` map each bound to a token.
- **`login.html` is standalone and duplicates its tokens on purpose.** It must render before any
  bundle loads, so its palette is inlined. Keep the values in step with `theme.css`'s dark palette.
- **Attribution is a licence obligation.** Address data derives in part from OpenStreetMap (ODbL).
  The credit is surfaced in the map's attribution control, by the `attribution` endpoint, and per
  record via source links. Do not remove any of the three.
- **Never run `greycat serve --user=<name>` / `GREYCAT_USER=<name>`.** It executes every request as
  that user. `.env` documents it for local convenience only; leave it commented.
- **Regenerate `project.d.ts` after any backend ABI change:** `greycat codegen` (`pnpm run gen`).
  A stale client gets HTTP 422.

## Layout

    project.gcl                 # @include("backend"), @library pins, @role, main/bootstrap, load* endpoints
    backend/
      model/                    # persisted types + module-level node indices
        golden.gcl              #   the golden record graph (constituency -> canton -> municipality -> city -> street -> POI)
        caclr.gcl osm.gcl bdaddress.gcl   # one module per external source
        mengplaz.gcl            #   DataSource, quality events, linked records
        trafic.gcl errors.gcl
      edi/                      # external data in/out
        caclrLoader.gcl bdAddressLoader.gcl osmLoader.gcl
        backupExporter.gcl backupImporter.gcl
      services/                 # search, scoring, reconciliation, quality, text search
      api/
        api.gcl                 #   public reads   (@permission("public"), some @tag("openapi"))
        privateApi.gcl          #   admin writes   (@permission("admin"))
      common/utils.gcl
      tests/                    # *_test.gcl - see backend/tests/README.md
    app/
      theme.css                 # --gc-* tokens + --wa-* bridge
      lib/                      # gc.ts session gate, GcPage, routing (+ legacy shim), theme, format,
                                # columns, echarts, geoportail, icons, pages (nav), toast
      components/               # shared mp-* / mengplaz-* Lit components (shadow DOM)
      pages/                    # one directory per MPA page; index.html + index.ts
        index.*                 #   the map, served at /
        search/ browse/ record/ quality/ reconcile/
      public/                   # served as-is: login.html, favicon.ico
    e2e/                        # Playwright: auth.setup.ts + admin/ and anon/ specs
    docs/                       # reconciliation.md, golden-record-quality.md
    scripts/shot.mjs            # UI screenshot loop
    vite.config.ts              # MPA: one input per app/pages/**/index.html

## Adding a page

1. Put the logic in a service under `backend/services/`, and expose it from
   `backend/api/api.gcl` (read, `@permission("public")`) or `backend/api/privateApi.gcl`
   (write, `@permission("admin")`). Keep wire-only response types `@volatile`. Add tests under
   `backend/tests/`, resetting state via `fixtures_test::reset()`.
2. `pnpm run gen` to refresh `project.d.ts`.
3. `app/pages/<name>/index.html` + `index.ts` with a `mengplaz-<name>-page` Lit root that
   **extends `GcPage`** (`~/lib/gc-page`): implement `onInit()` for the fetch and wrap the body in
   `<mengplaz-app-shell page-title="...">`. Call `gc.<module>.<fn>()` directly and type against
   the generated `gc.<module>.<Type>`. **Never wrap the SDK or re-declare its types.**
4. Register it in `PAGES` (`app/lib/pages.ts`) if it belongs in the nav, with `requiredPermission`
   when it is admin-only. The build and the screenshot script discover
   `app/pages/**/index.html` on their own.
5. Add a spec under `e2e/anon/` or `e2e/admin/` depending on who may reach it. An admin-only page
   deserves both: the admin spec that it works, and an anon spec that it is denied
   (see `e2e/anon/reconcile-denied.spec.ts`).

## Definition of done

    greycat-lang fmt --mode=check   # backend formatting
    greycat-lang lint               # backend lint (0 errors)
    greycat test                    # backend unit tests (see backend/tests/README.md)
    pnpm check                      # frontend format + typecheck + lint (vp check --fix to autofix)
    pnpm build                      # frontend builds into webroot/
    pnpm exec playwright test       # e2e (serve must be able to bind :8080)

The e2e suite signs in as an admin, so create its user once before running (while no server holds
the `gcdata/` lock):

    bin/greycat run runtime::Identity::create e2e admin
    bin/greycat run runtime::Identity::set_password e2e \
        $(printf 'e2e-password' | sha256sum | cut -d' ' -f1)

`set_password` stores the string verbatim, and `login.html` sends `sha256hex(password)` - so the
hash is what has to be stored. Passing the plaintext leaves every sign-in rejected and the whole
admin project skipped behind a failed `auth.setup.ts`.

Override with `E2E_USER` / `E2E_PASSWORD`, and the port with `E2E_PORT`. Playwright starts
`bin/greycat serve` itself and serves the **prebuilt** `webroot/`, so run `pnpm build` first
(`pnpm run test:e2e:full` does both). The suite is single-worker and not parallel-safe: one server,
one `gcdata/` lock.

Some `textsearch_test.gcl` tests need libpostal's model directory via `GREYCAT_POSTAL_DATA_DIR`;
without it they announce themselves skipped and pass, so a green run on a fresh checkout is not
full coverage.

## The `.env` file

Optional, at the project root. See README.md for the full table. The ones that matter day to day:
`GREYCAT_CACHE` / `GREYCAT_STORE` / `GREYCAT_WORKERS` sizing, `CACLR_API_CLIENT_ID` +
`CACLR_API_CLIENT_SECRET` for the CACLR loader, `MENGPLAZ_ADMIN_LOGIN` + `MENGPLAZ_ADMIN_PASS`
(SHA256) for the admin `bootstrap`/`main` creates, and `GREYCAT_POSTAL_DATA_DIR` for libpostal.
`GREYCAT_USER` disables auth entirely - keep it commented.

## UI screenshot loop

**After any UI change, look at it - do not ship a UI change unseen.** `scripts/shot.mjs` drives a
headless browser against a running server, signs in through `/login.html`, and writes a PNG per
page at each responsive width under `.shots/`. Read the PNGs back and check the actual pixels
(contrast, sizing, overflow, chart legends, map tiles) - `pnpm check` / `pnpm build` passing says
nothing about how it looks.

Every page is shot at all three shell tiers - `large` (docked sidebar), `medium` (icon rail) and
`small` (off-canvas drawer) - as `<page>-<mode>.png`. Below the large breakpoint the overlay drawer
is also opened and captured as `<page>-<mode>-nav.png`.

    node scripts/shot.mjs                # every page, all three modes
    node scripts/shot.mjs /search/       # one path, all three modes
    SHOT_MODE=small node scripts/shot.mjs
    SHOT_USER= node scripts/shot.mjs     # anonymous - the mode most visitors are in

Env: `SHOT_BASE` (default `http://localhost:8080`), `SHOT_USER` / `SHOT_PASSWORD` (default
`e2e` / `e2e-password`; empty `SHOT_USER` shoots anonymously), `SHOT_OUT` (default `.shots`),
`SHOT_MODE` (`large` | `medium` | `small`; default: all three).

It needs a running server with data. `greycat serve` locks `gcdata/`, so rebuild the webroot and
restart that server rather than starting a second one - `serve` captures `index.html` at boot, so a
rebuild with new asset hashes needs a fresh `serve` either way:

    pnpm build && greycat serve
    # then, from another shell:
    node scripts/shot.mjs

`/reconcile/` renders nothing useful anonymously; shoot it signed in as an admin.
