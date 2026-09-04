# MengPlaz Frontend Lit Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the MengPlaz frontend as a Vite Plus MPA of Lit 3 components on Web Awesome 3 with a token-driven theme, replacing the GreyCat-JSX + Shoelace code in `frontend/`, and cover it with a Playwright suite.

**Architecture:** A new `app/` tree grows alongside the existing `frontend/` tree. `app/lib/gc.ts` is the single owner of the GreyCat session; `GcPage` (a `LitElement` base) awaits it before a page fetches. Every page is its own HTML document under `app/pages/<name>/`; the shell, tables, panels and dialogs are shared `mp-*` Lit components in `app/components/`. `frontend/` is deleted only in the final task, so every intermediate commit builds and the app keeps working.

**Tech Stack:** Lit 3.3, Web Awesome 3.12 (`@awesome.me/webawesome`), Vite Plus 0.2 (`vp`), TypeScript (strict, no JSX), `@greycat/web` SDK 8.1.4, maplibre-gl 6, ECharts 6 (granular), `@tanstack/virtual-core` 3, Playwright 1.62.

**Verified against the installed packages (2026-09-04):** Web Awesome 3.12.0 ships
`breadcrumb`, `toast`, `pagination` and `qr-code`, so this plan uses them directly instead
of the local `mp-breadcrumb` / `mp-toast` / `mp-pagination` replacements an earlier draft
called for. ECharts resolved to 6.1.0, not 5; its `echarts/core` + `use([...])` registration
API is unchanged.

**Spec:** `docs/superpowers/specs/2026-09-04-frontend-lit-migration-design.md`

## Global Constraints

- **No backend change.** No `.gcl` file is edited. `project.d.ts` is not regenerated. `@role("public", "api")` stays in `project.gcl`.
- **Anonymous access is a supported mode.** `gc.sdk.init()` succeeds without credentials; nothing may block rendering on a login.
- **Only `app/lib/gc.ts` may touch `gc.sdk`.** Pages and components call `gc.<module>.<fn>()` directly and type against the generated `gc.*` types. Never wrap the SDK, never re-declare its response types.
- **Colours and sizes come from tokens.** Every colour is a `--gc-*` var; every `font-size` is a `--wa-font-size-*` token. No raw hex, no raw `rem`/`px` font sizes in component CSS.
- **Only the font weights loaded by `app/theme.css`'s `@import`** may be used: IBM Plex Sans 400/500/600/700, IBM Plex Sans Condensed 600/700, IBM Plex Mono 400/500/600.
- **ECharts is imported granularly** through `app/lib/echarts.ts` only. Never `import * from "echarts"`.
- **Theme resolution order: the persisted `theme` localStorage key, then the OS
  `prefers-color-scheme`, then dark.** This is the previous frontend's own `setupTheme()`
  behaviour, kept so an existing user's preference survives the migration. Light is
  `html.wa-light`, dark is `html.wa-dark`. A spec must therefore assert that the toggle
  *flips and persists*, never that the initial class is `wa-dark` - a headless browser
  reporting `prefers-color-scheme: light` legitimately starts in light.
- **Colours come from the official MyConnectivity palette** (Blocksy `global.css`): green
  `#44D62C`, teal `#00C0A3`, blue `#10069F`, black, orange `#FF8700`, coral `#FA5C4F`,
  magenta `#FF0099`, white. Green is the brand primary and blue its link colour, but
  measured against our surfaces green is 9.65:1 on dark / 1.93:1 on white and blue is
  1.37:1 / 13.56:1 - so the accent *text* colour is green in dark mode and blue in light,
  while the filled primary stays the brand's green button with black on it (10.9:1). The
  site's own white-on-green button is 1.93:1 and is not reproduced.
- **Legacy `?page=` URLs must keep working** for the whole life of the app. The shim is permanent.
- **Every task ends green on `pnpm exec vp check` and `pnpm exec vp build`.**
- **`gc.sdk.init()` must be given an explicit `url: new URL(location.origin)`.** The SDK
  derives its endpoint from `location.origin + location.pathname`, so on any MPA page
  served from a subdirectory it POSTs to `/<page>/runtime::...` and 404s. The previous SPA
  never hit this because it only ever ran at `/`. Handled once, in `app/lib/gc.ts`.
- **Fetch first, then commit the view state.** When a page changes level or selection,
  assign the new data and the new level together *after* the await. Assigning the level
  first leaves the previous list rendered under the new heading, and a click landing in
  that window drills into the wrong record.
- **Web Awesome control sizes are `xs|s|m|l|xl`.** The long forms (`small`, `medium`) are
  deprecated and warn at runtime.

---

## File Structure

Created across the plan:

    app/theme.css                          # --gc-* tokens + --wa-* bridge (Task 1)
    app/env.d.ts                           # vite-plus client types (Task 1)
    app/lib/theme.ts                       # mode toggle + currentColors() (Task 2)
    app/lib/gc.ts                          # session gate; sole gc.sdk owner (Task 2)
    app/lib/gc-page.ts                     # GcPage base class (Task 2)
    app/lib/routing.ts                     # query params + legacy ?page= shim (Task 2)
    app/lib/format.ts                      # match quality, distance, dates, source colours (Task 2)
    app/lib/icons.ts                       # ~25 inline SVG paths, replaces sl-icon (Task 3)
    app/lib/pages.ts                       # nav model (Task 3)
    app/components/mengplaz-app-shell.ts   # nav, top bar, theme toggle, auth, footer (Task 3)
    app/lib/columns.ts                     # Column<T> model (Task 4)
    app/components/mp-panel.ts             # card shell (Task 4)
    app/components/mp-data-table.ts        # static table (Task 4)
    app/components/mp-virtual-table.ts     # virtualized table (Task 4)
    app/lib/toast.ts                       # wa-toast wrapper (Task 4)
    playwright.config.ts, e2e/*            # harness + specs (Task 5, extended per page)
    app/pages/index.html, index.ts         # THE MAP + redirect shim, at the pages root (Tasks 1, 6)
    app/components/mp-address-search.ts    # (Task 6)
    app/components/mp-minimap.ts           # (Task 6)
    app/pages/search/                      # (Task 7)
    app/components/mp-address-card.ts      # (Task 7)
    app/components/address-field/          # (Task 7)
    app/pages/browse/                      # (Task 8)
    app/pages/record/                      # (Task 9)
    app/components/comparison/             # 7 components (Task 9)
    app/pages/quality/                     # (Task 10)
    app/lib/echarts.ts, mp-chart.ts        # (Task 10)
    app/pages/reconcile/                   # (Task 11)
    app/components/reconcile/              # reconcile-pane (Task 11)
    app/components/dialogs/                # 4 dialogs (Task 11)

Deleted in Task 12: all of `frontend/`.

---

### Task 1: Build foundation - dependencies, MPA config, theme tokens

Establishes the new tree and proves it builds before any component exists. The placeholder page is thrown away in Task 6, when the real map replaces it.

**Files:**
- Modify: `package.json`
- Modify: `tsconfig.json`
- Modify: `vite.config.ts`
- Create: `app/theme.css`
- Create: `app/env.d.ts`
- Create: `app/pages/index.html` (at the pages ROOT - a page in `app/pages/index/` would build to `webroot/index/` and serve `/index/`, not `/`)
- Create: `app/pages/index.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: the `~` alias resolving to `app/`; `app/theme.css` exporting the `--gc-*` and `--wa-*` custom properties every later task reads; a build that emits one bundle per `app/pages/**/index.html` into `webroot/`.

- [ ] **Step 1: Add the new dependencies and drop nothing yet**

Shoelace and maplibre stay until Task 12; `frontend/` still imports them.

```bash
pnpm add lit @awesome.me/webawesome @tanstack/virtual-core echarts
pnpm add -D @playwright/test
pnpm exec playwright install chromium
```

- [ ] **Step 2: Point tsconfig at `app/` and turn JSX off**

Replace `tsconfig.json` with:

```json
{
  "compilerOptions": {
    "rootDir": ".",
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "useDefineForClassFields": false,
    "experimentalDecorators": true,
    "paths": { "~/*": ["./app/*"] },
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["app", "project.d.ts"],
  "exclude": ["node_modules", "vite.config.ts", "playwright.config.ts"]
}
```

`useDefineForClassFields: false` and `experimentalDecorators: true` are required by Lit's `@property`/`@state` decorators. Dropping `jsx`/`jsxImportSource` is what stops the old JSX from type-checking - which is fine, because `include` no longer covers `frontend/`.

- [ ] **Step 3: Switch vite to an MPA rooted at `app/pages`**

Replace `vite.config.ts` with:

```ts
import { basename, dirname, relative, resolve } from 'node:path';
import { globSync } from 'node:fs';
import { defineConfig } from 'vite-plus';
import greycat from '@greycat/web/vite-plugin';

const APP = resolve('app');
const PAGES_ROOT = resolve('app/pages');

// One entry per MPA page: every app/pages/**/index.html is a page.
const pages = globSync('**/index.html', { cwd: PAGES_ROOT }).map((p) => resolve(PAGES_ROOT, p));

export default defineConfig({
  plugins: [greycat()],
  base: './',
  appType: 'mpa',
  root: PAGES_ROOT,
  resolve: { alias: { '~': APP } },
  publicDir: resolve('app/public'),
  fmt: {
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    tabWidth: 2,
    printWidth: 120,
    ignorePatterns: ['webroot', 'gcdata', 'project.d.ts', 'frontend', 'app/public', '**/*.md'],
  },
  lint: {
    ignorePatterns: ['webroot', 'gcdata', 'frontend', 'vite.config.ts', 'playwright.config.ts'],
    plugins: ['unicorn', 'typescript', 'oxc'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    options: { typeAware: true, typeCheck: true },
  },
  build: {
    outDir: resolve('webroot'),
    emptyOutDir: false,
    target: 'esnext',
    rollupOptions: {
      input: pages,
      output: {
        entryFileNames: (chunk) =>
          chunk.facadeModuleId ? `assets/${pageName(chunk.facadeModuleId)}.js` : 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        codeSplitting: {
          includeDependenciesRecursively: true,
          groups: [{ name: 'greycat', test: /[\\/]@greycat[\\/]web[\\/]/ }],
        },
      },
    },
  },
});

// A page's chunk is named after its directory, since every page module is an
// index.ts. The page at the root of PAGES_ROOT keeps the name "index".
function pageName(moduleId: string): string {
  const dir = dirname(moduleId);
  if (dir === PAGES_ROOT) {
    return 'index';
  }
  if (!relative(PAGES_ROOT, dir).startsWith('..')) {
    return basename(dir);
  }
  return basename(moduleId).replace(/\.[^.]+$/, '');
}
```

`emptyOutDir: false` matters: `webroot/` also holds the GreyCat explorer, which is not ours to delete. `frontend` is in both ignore lists so the old tree does not fail the new lint pass.

- [ ] **Step 4: Write the token theme**

Create `app/theme.css`. This is the template's token file with the accent re-keyed to the MengPlaz brand and the data-source colours promoted to tokens.

```css
/* MengPlaz design tokens (`--gc-*`) plus the Web Awesome (`--wa-*`) bridge. */
@import url('@awesome.me/webawesome/dist/styles/webawesome.css');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Condensed:wght@600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

:root {
  /* Typography */
  --gc-display: 'IBM Plex Sans Condensed', 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
  --gc-ui: 'IBM Plex Sans', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --gc-mono: 'IBM Plex Mono', 'SF Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

  /* Surfaces & text (dark, default) */
  --gc-bg: #111317;
  --gc-surface: #181b20;
  --gc-surface-2: #21252c;
  --gc-surface-3: #2b303a;
  --gc-border: #2e3440;
  --gc-hair: #232832;
  --gc-text: #e6e8ec;
  --gc-muted: #8c96a5;
  --gc-faint: #5c6573;
  --gc-zebra: rgba(255, 255, 255, 0.025);
  --gc-hover: rgba(255, 255, 255, 0.05);
  --gc-selected: rgba(255, 24, 164, 0.1);

  --gc-panel: var(--gc-surface);
  --gc-panel-header: var(--gc-surface-2);
  --gc-panel-body: transparent;

  /* Brand accent: MengPlaz magenta */
  --gc-accent: #ff18a4;
  --gc-accent-2: #04e104;
  --gc-accent-fill: #ff18a4;
  --gc-accent-soft: rgba(255, 24, 164, 0.14);
  --gc-accent-glow: rgba(255, 24, 164, 0.26);
  --gc-on-accent: #2b0018;

  /* Semantic state */
  --gc-good: #4ade80;
  --gc-bad: #ff537c;
  --gc-warn: #ffb84d;
  --gc-info: #5c9dff;

  /* Data-source identity - shared by map layers, comparator and legends */
  --gc-src-golden: #ff18a4;
  --gc-src-bda: #7c3aed;
  --gc-src-osm: #f59e0b;
  --gc-src-caclr: #10b981;
  --gc-src-other: #6b7280;

  /* Categorical palette */
  --gc-c1: #ff18a4;
  --gc-c2: #5c9dff;
  --gc-c3: #c084fc;
  --gc-c4: #ff8a65;
  --gc-c5: #facc15;
  --gc-c6: #2dd4bf;
  --gc-c7: #4ade80;
  --gc-c8: #ff537c;

  /* Shape & rhythm */
  --gc-radius: 4px;
  --gc-radius-s: 2px;
  --gc-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);
  --gc-gap: 0.6rem;
  --gc-pad-page: 0.7rem 0.9rem 1.1rem;
  --gc-pad-header: 0.6rem 0.9rem 0.4rem;

  /* --- Web Awesome bridge --- */
  --wa-font-family-body: var(--gc-ui);
  --wa-font-family-heading: var(--gc-ui);
  --wa-font-family-code: var(--gc-mono);

  --wa-font-size-3xs: 10px;
  --wa-font-size-2xs: 11px;
  --wa-font-size-xs: 12px;
  --wa-font-size-s: 13px;
  --wa-font-size-m: 15px;
  --wa-font-size-l: 19px;
  --wa-font-size-xl: 24px;
  --wa-font-size-2xl: 30px;
  --wa-font-size-3xl: 38px;
  --wa-font-size-4xl: 48px;
  --wa-font-size-5xl: 60px;

  --wa-space-scale: 0.8;

  --wa-border-radius-s: var(--gc-radius-s);
  --wa-border-radius-m: var(--gc-radius);
  --wa-border-radius-l: var(--gc-radius);

  --wa-color-brand-fill-loud: var(--gc-accent);
  --wa-color-brand-fill-normal: var(--gc-accent);
  --wa-color-brand-fill-quiet: var(--gc-accent-soft);
  --wa-color-brand-on-loud: var(--gc-on-accent);
  --wa-color-brand-on-normal: var(--gc-on-accent);
  --wa-color-brand-on-quiet: var(--gc-accent);
  --wa-color-brand-border-loud: var(--gc-accent);
  --wa-color-brand-border-normal: var(--gc-accent);
  --wa-color-brand-border-quiet: var(--gc-accent-glow);

  --wa-color-neutral-fill-loud: var(--gc-surface-2);
  --wa-color-neutral-fill-normal: var(--gc-surface);
  --wa-color-neutral-fill-quiet: var(--gc-hover);
  --wa-color-neutral-on-loud: var(--gc-text);
  --wa-color-neutral-on-normal: var(--gc-text);
  --wa-color-neutral-on-quiet: var(--gc-muted);
  --wa-color-neutral-border-loud: var(--gc-border);
  --wa-color-neutral-border-normal: var(--gc-border);
  --wa-color-neutral-border-quiet: var(--gc-hair);

  --wa-color-danger-fill-loud: var(--gc-bad);
  --wa-color-danger-on-loud: #ffffff;
  --wa-color-danger-border-loud: var(--gc-bad);
  --wa-color-success-fill-loud: var(--gc-good);
  --wa-color-success-on-loud: #0c1008;
  --wa-color-success-border-loud: var(--gc-good);
  --wa-color-warning-fill-loud: var(--gc-warn);
  --wa-color-warning-on-loud: #2b1a00;

  --wa-color-surface-default: var(--gc-bg);
  --wa-color-surface-raised: var(--gc-surface);
  --wa-color-surface-lowered: var(--gc-surface-2);
  --wa-color-surface-border: var(--gc-border);
  --wa-color-text-normal: var(--gc-text);
  --wa-color-text-quiet: var(--gc-muted);
  --wa-color-text-link: var(--gc-accent);
  --wa-color-focus: var(--gc-accent);

  --wa-form-control-height: 2.1em;
  --wa-form-control-padding-block: 0.4em;
  --wa-form-control-padding-inline: 0.75em;
  --wa-form-control-background-color: var(--gc-surface);
  --wa-form-control-border-color: var(--gc-border);
}

html.wa-light {
  --gc-bg: #edf0f5;
  --gc-surface: #ffffff;
  --gc-surface-2: #f4f6fa;
  --gc-surface-3: #e4e8f0;
  --gc-border: #d1d8e3;
  --gc-hair: #e2e7f0;
  --gc-text: #131821;
  --gc-muted: #576273;
  --gc-faint: #8794a6;
  --gc-zebra: rgba(0, 0, 0, 0.018);
  --gc-hover: rgba(0, 0, 0, 0.035);
  --gc-selected: rgba(192, 17, 120, 0.09);

  --gc-accent: #c01178;
  --gc-accent-2: #0a8f0a;
  --gc-accent-fill: #c01178;
  --gc-accent-soft: rgba(192, 17, 120, 0.1);
  --gc-accent-glow: transparent;
  --gc-on-accent: #ffffff;

  --gc-good: #0f9d6b;
  --gc-bad: #e03151;
  --gc-warn: #d97706;
  --gc-info: #2b6cb0;

  --gc-src-golden: #c01178;
  --gc-src-bda: #6d28d9;
  --gc-src-osm: #b45309;
  --gc-src-caclr: #0f766e;
  --gc-src-other: #6b7280;

  --gc-c1: #c01178;
  --gc-c2: #2b6cb0;
  --gc-c3: #8b5cf6;
  --gc-c4: #e05236;
  --gc-c5: #d97706;
  --gc-c6: #0d9488;
  --gc-c7: #65a30d;
  --gc-c8: #db2777;

  --gc-shadow: 0 8px 24px rgba(19, 24, 33, 0.08);
}

html,
body {
  margin: 0;
  min-height: 100vh;
}

body {
  color: var(--gc-text);
  background: var(--gc-bg);
  font-family: var(--gc-ui);
  font-size: var(--wa-font-size-m);
  line-height: 1.45;
  letter-spacing: -0.01em;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 5: Add the env types and a placeholder page**

`app/env.d.ts`:

```ts
/// <reference types="vite-plus/client" />
```

`app/pages/index.html` - at the ROOT of `app/pages`, not in a subdirectory: the build mirrors the tree under `app/pages`, so only a file at the root emits `webroot/index.html` and serves `/`. Every other page is `app/pages/<name>/index.html`, which serves `/<name>/`.

```html
<!doctype html>
<html lang="en" class="wa-dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>MengPlaz</title>
    <script type="module" src="./index.ts"></script>
  </head>
  <body>
    <mengplaz-index-page></mengplaz-index-page>
  </body>
</html>
```

`app/pages/index.ts` - a placeholder that Task 6 replaces with the map:

```ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '~/theme.css';

@customElement('mengplaz-index-page')
export class MengplazIndexPage extends LitElement {
  render() {
    return html`<p>MengPlaz</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-index-page': MengplazIndexPage;
  }
}
```

- [ ] **Step 6: Verify the build emits the new page**

```bash
pnpm exec vp check --fix   # oxfmt reformats vite.config.ts to the configured printWidth
pnpm exec vp check
pnpm exec vp build
ls webroot/index.html webroot/assets/index.js webroot/explorer
```

Expected: `vp check` clean, `vp build` succeeds, all three present - `webroot/explorer/` still
existing is the proof `emptyOutDir: false` worked.

Delete the previous frontend's leftovers from `webroot/` once (`rm -f webroot/index.js
webroot/index.js.gz` and `rm -rf webroot/assets`, then rebuild). They are stale copies of the
old app; the GreyCat Vite plugin regenerates the `.gz` twin of every emitted file, so the
gzipped and plain outputs stay in sync from here on.

- [ ] **Step 7: Commit**

```bash
git add package.json pnpm-lock.yaml tsconfig.json vite.config.ts app/
git commit -m "build: MPA scaffold on Lit and Web Awesome with the MengPlaz token theme"
```

---

### Task 2: Session gate, page base, routing and formatting helpers

The four modules every page depends on. No UI yet.

**Files:**
- Create: `app/lib/theme.ts`
- Create: `app/lib/gc.ts`
- Create: `app/lib/gc-page.ts`
- Create: `app/lib/routing.ts`
- Create: `app/lib/format.ts`
- Modify: `app/pages/index.ts`

**Interfaces:**
- Consumes: `app/theme.css` (Task 1).
- Produces:
  - `theme.ts`: `initMode(): void`, `currentMode(): "dark" | "light"`, `toggleMode(): Mode`, `applyMode(m: Mode): void`, `currentColors(): Colors` where `Colors = { text, muted, border, grid, surface, accent, series: string[], sources: Record<"Golden"|"BDA"|"OSM"|"CACLR", string> }`.
  - `gc.ts`: `ready(): Promise<void>`, `currentUser(): gc.runtime.Identity | null`, `isAnonymous(): boolean`, `hasPermission(name: string): boolean`, `logout(): Promise<void>`, `appInfo(): gc.RuntimeInfo | null`.
  - `gc-page.ts`: `abstract class GcPage extends LitElement` with `protected loadError: string`, `protected abstract onInit(): Promise<void>`.
  - `routing.ts`: `PATHS: Record<LegacyPage, string>`, `redirectLegacy(): boolean`, `getQueryParam(k: string): string | null`, `setQueryParam(k: string, v: string): void`, `recordHref(guid: string): string`.
  - `format.ts`: `getMatchQuality(score: number)`, `getGeoMatchQuality(km: number)`, `toBadgeVariant(v: MatchVariant)`, `calculateDistance(a, b)`, `formatDistance(km)`, `prettifyCamelCase(s)`, `formatDate(d: Date)`, `colorForSource(key: string)`.

- [ ] **Step 1: Write `app/lib/theme.ts`**

```ts
// Theme helpers. Canvas consumers (ECharts, maplibre) cannot read CSS custom
// properties, so `currentColors()` resolves the `--gc-*` tokens to concrete
// values for them. DOM components read `var(--gc-*)` directly and ignore this.
import '~/theme.css';

// The key `frontend/common/utils.ts` used, so an existing user's preference survives.
const MODE_KEY = 'theme';

export type Mode = 'dark' | 'light';

export function currentMode(): Mode {
  return document.documentElement.classList.contains('wa-light') ? 'light' : 'dark';
}

export function applyMode(mode: Mode): void {
  const el = document.documentElement;
  el.classList.toggle('wa-light', mode === 'light');
  el.classList.toggle('wa-dark', mode === 'dark');
  localStorage.setItem(MODE_KEY, mode);
  window.dispatchEvent(new CustomEvent('gc-theme', { detail: mode }));
}

export function toggleMode(): Mode {
  const next: Mode = currentMode() === 'dark' ? 'light' : 'dark';
  applyMode(next);
  return next;
}

/** Restore the persisted mode, falling back to the OS preference. Call once per page. */
export function initMode(): void {
  const saved = localStorage.getItem(MODE_KEY) as Mode | null;
  if (saved === 'dark' || saved === 'light') {
    applyMode(saved);
    return;
  }
  applyMode(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

export type SourceKey = 'Golden' | 'BDA' | 'OSM' | 'CACLR';

export interface Colors {
  text: string;
  muted: string;
  border: string;
  grid: string;
  surface: string;
  accent: string;
  series: string[];
  sources: Record<SourceKey, string>;
}

export function currentColors(): Colors {
  const s = getComputedStyle(document.documentElement);
  const v = (name: string) => s.getPropertyValue(name).trim();
  return {
    text: v('--gc-text'),
    muted: v('--gc-muted'),
    border: v('--gc-border'),
    grid: v('--gc-hair'),
    surface: v('--gc-surface'),
    accent: v('--gc-accent'),
    series: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => v(`--gc-c${i}`)),
    sources: {
      Golden: v('--gc-src-golden'),
      BDA: v('--gc-src-bda'),
      OSM: v('--gc-src-osm'),
      CACLR: v('--gc-src-caclr'),
    },
  };
}
```

- [ ] **Step 2: Write `app/lib/gc.ts`**

Unlike the project-template's gate, this one never mounts a sign-in overlay: MengPlaz grants the `public` role the `api` permission, so `gc.sdk.init()` succeeds anonymously and `ready()` always resolves.

```ts
import '@greycat/web/sdk';

// The session gate and the only module that touches `gc.sdk`. MengPlaz allows
// anonymous browsing (`@role("public", "api")` in project.gcl), so `init()`
// succeeds without credentials and `ready()` resolves for every visitor. Signing
// in happens on the separate /login.html document, not in the app.

let identity: gc.runtime.Identity | null = null;
let info: gc.RuntimeInfo | null = null;
let started = false;
let resolveReady!: () => void;
let rejectReady!: (e: unknown) => void;
const readyPromise = new Promise<void>((resolve, reject) => {
  resolveReady = resolve;
  rejectReady = reject;
});

/** Resolves once `gc.*` is usable. Memoized; `GcPage` awaits it before `onInit()`. */
export function ready(): Promise<void> {
  if (!started) {
    started = true;
    void establish();
  }
  return readyPromise;
}

export function currentUser(): gc.runtime.Identity | null {
  return identity;
}

export function isAnonymous(): boolean {
  return identity?.name === 'public';
}

export function hasPermission(name: string): boolean {
  return gc.$.default.hasPermission(name);
}

export function appInfo(): gc.RuntimeInfo | null {
  return info;
}

export async function logout(): Promise<void> {
  try {
    await gc.sdk.logout();
  } catch {
    // Best-effort: drop the local session even if the server call fails.
  }
  location.replace('/');
}

async function establish(): Promise<void> {
  try {
    await gc.sdk.init({ debug: import.meta.env.VITE_ENV === 'dev' });
    identity = await gc.runtime.Identity.current();
    info = await gc.appInfo();
    resolveReady();
  } catch (e) {
    rejectReady(e);
  }
}
```

- [ ] **Step 3: Write `app/lib/gc-page.ts`**

```ts
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { ready } from '~/lib/gc';

/**
 * Base class for every page that talks to the backend. It parks on the session
 * gate (`ready()`) and only then runs `onInit()`, so a subclass may call
 * `gc.<module>.*` freely. Never override `connectedCallback` in a subclass
 * without calling `super.connectedCallback()` first - that skips the gate and
 * races `gc.sdk.init()`.
 */
export abstract class GcPage extends LitElement {
  /** Message from a failed `onInit()`; empty when there is none. */
  @state() protected loadError = '';
  /** False until `onInit()` has settled; pages render a spinner while true. */
  @state() protected loading = true;

  override async connectedCallback() {
    super.connectedCallback();
    try {
      await ready();
      await this.onInit();
    } catch (e) {
      this.loadError = e instanceof Error ? e.message : String(e);
    } finally {
      this.loading = false;
    }
  }

  /** Runs once, after the session is established. */
  protected abstract onInit(): Promise<void>;
}
```

- [ ] **Step 4: Write `app/lib/routing.ts`**

```ts
// MPA routing. Each page is its own document; in-page state that must survive a
// reload lives in query params, exactly as it did in the SPA.
//
// The legacy `?page=` shim is PERMANENT, not transitional: app.mengplaz.lu links
// are shared externally and must keep resolving.

export type LegacyPage = 'map' | 'search' | 'index' | 'reconcile' | 'record' | 'quality-history';

/** Legacy `?page=` value -> the document that now serves it. */
export const PATHS: Record<LegacyPage, string> = {
  map: '/',
  search: '/search/',
  index: '/browse/',
  reconcile: '/reconcile/',
  record: '/record/',
  'quality-history': '/quality/',
};

/**
 * Honour a legacy `?page=` URL. Call FIRST in the index page's module, before
 * anything renders. Returns true when it has navigated away, so the caller can
 * skip rendering. Every other query param is carried through untouched.
 */
export function redirectLegacy(): boolean {
  const url = new URL(location.href);
  const page = url.searchParams.get('page');
  if (page === null) {
    return false;
  }
  url.searchParams.delete('page');
  const target = PATHS[page as LegacyPage] ?? '/';
  // `?page=map` is already the right document: strip the param in place rather
  // than bouncing through a navigation.
  const next = `${target}${url.search}`;
  if (target === '/' && location.pathname === '/') {
    history.replaceState(null, '', next);
    return false;
  }
  location.replace(next);
  return true;
}

export function getQueryParam(key: string): string | null {
  return new URL(location.href).searchParams.get(key);
}

/** Update one query param in place, without adding a history entry. */
export function setQueryParam(key: string, value: string): void {
  const url = new URL(location.href);
  url.searchParams.set(key, value);
  history.replaceState(null, '', url);
}

export function deleteQueryParam(key: string): void {
  const url = new URL(location.href);
  url.searchParams.delete(key);
  history.replaceState(null, '', url);
}

/** The canonical link to one golden record. Replaces `handleGoToRecord`. */
export function recordHref(guid: string): string {
  return `${PATHS.record}?guid=${encodeURIComponent(guid)}`;
}
```

- [ ] **Step 5: Write `app/lib/format.ts`**

Ported from `frontend/common/utils.ts`, minus the theme and routing helpers (now in `theme.ts` / `routing.ts`) and with Shoelace's badge variants replaced by Web Awesome's.

```ts
import { currentColors, type SourceKey } from '~/lib/theme';

export type MatchVariant = 'exact' | 'good' | 'partial' | 'poor';
/** Web Awesome `wa-badge` / `wa-callout` variants. */
export type BadgeVariant = 'success' | 'brand' | 'warning' | 'danger' | 'neutral';

export function toBadgeVariant(variant: MatchVariant): BadgeVariant {
  const map: Record<MatchVariant, BadgeVariant> = {
    exact: 'success',
    good: 'brand',
    partial: 'warning',
    poor: 'danger',
  };
  return map[variant];
}

export function getMatchQuality(score: number): { label: string; variant: MatchVariant } {
  if (score === 100) return { label: 'EXACT', variant: 'exact' };
  if (score >= 85) return { label: 'GOOD', variant: 'good' };
  if (score >= 65) return { label: 'PARTIAL', variant: 'partial' };
  return { label: 'POOR', variant: 'poor' };
}

export function getGeoMatchQuality(distanceKm: number): { label: string; variant: MatchVariant } {
  if (distanceKm < 0.01) return { label: 'Exact', variant: 'exact' };
  if (distanceKm < 0.05) return { label: 'High', variant: 'good' };
  if (distanceKm < 0.1) return { label: 'Medium', variant: 'partial' };
  return { label: 'Low', variant: 'poor' };
}

/** Great-circle distance in kilometres. */
export function calculateDistance(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function formatDistance(km: number): string {
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
}

export function prettifyCamelCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/^./, (s) => s.toUpperCase());
}

const DATE_FMT = new Intl.DateTimeFormat('fr', { dateStyle: 'medium', timeStyle: 'short' });

/** Replaces `<sl-format-date lang="fr">`. */
export function formatDate(date: Date): string {
  return DATE_FMT.format(date);
}

/** Resolved colour for a data source, for canvas/maplibre consumers. */
export function colorForSource(key: string): string {
  const c = currentColors();
  return c.sources[key as SourceKey] ?? getComputedStyle(document.documentElement).getPropertyValue('--gc-src-other').trim();
}
```

- [ ] **Step 6: Wire the shim into the index page**

Replace the body of `app/pages/index.ts` with:

```ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { initMode } from '~/lib/theme';
import { redirectLegacy } from '~/lib/routing';

// The shim runs before anything renders, so a legacy URL never paints the wrong page.
if (!redirectLegacy()) {
  initMode();
}

@customElement('mengplaz-index-page')
export class MengplazIndexPage extends LitElement {
  render() {
    return html`<p>MengPlaz</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-index-page': MengplazIndexPage;
  }
}
```

- [ ] **Step 7: Verify**

```bash
pnpm exec vp check && pnpm exec vp build
```

Expected: both clean. (These modules have no Playwright coverage yet; Task 5 adds `routing.spec.ts`, which is what actually proves the shim.)

- [ ] **Step 8: Commit**

```bash
git add app/lib app/pages
git commit -m "feat(app): session gate, page base, routing shim and format helpers"
```

---

### Task 3: Application shell

The chrome every page wraps its body in: responsive nav, top bar, theme toggle, login/logout, footer.

**Files:**
- Create: `app/lib/icons.ts`
- Create: `app/lib/pages.ts`
- Create: `app/components/mengplaz-app-shell.ts`
- Modify: `app/pages/index.ts`

**Interfaces:**
- Consumes: `ready`, `currentUser`, `isAnonymous`, `hasPermission`, `appInfo`, `logout` from `~/lib/gc`; `toggleMode`, `currentMode` from `~/lib/theme`.
- Produces:
  - `icons.ts`: `ICONS: Record<IconName, string>` (inner SVG markup for a 24x24 `stroke` viewBox) and `type IconName`.
  - `pages.ts`: `interface PageLink { href: string; label: string; icon: IconName; requiredPermission?: string }` and `PAGES: PageLink[]`.
  - `<mengplaz-app-shell page-title="...">` with attributes `page-title`, `flush` (drops the body padding, for the map), and slots: default (body) and `topbar-actions`.

- [ ] **Step 1: Write `app/lib/icons.ts`**

Replaces `sl-icon` and the 2,052-file Bootstrap icon folder with the icons actually in use. Each value is the inner markup of a 24x24 `fill="none" stroke="currentColor"` SVG.

```ts
// The icon set actually used by the app, inlined so there is no icon CDN, no
// 2,052-file public/ payload, and no network request per glyph. Each value is
// the inner markup of a 24x24 `fill="none" stroke="currentColor"` viewBox.
// Add a glyph here when a component needs one; keep the stroke-only style.

export const ICONS = {
  map: '<path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4z"/><path d="M9 4v13"/><path d="M15 6.5v13"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  reconcile: '<path d="M4 8h12l-3-3"/><path d="M20 16H8l3 3"/>',
  chart: '<path d="M4 4v16h16"/><path d="M8 16v-4"/><path d="M12 16V8"/><path d="M16 16v-6"/>',
  chevronLeft: '<path d="M15 6l-6 6 6 6"/>',
  chevronRight: '<path d="M9 6l6 6-6 6"/>',
  arrowLeft: '<path d="M20 12H4"/><path d="m10 6-6 6 6 6"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z"/>',
  signIn: '<path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/><path d="M10 8l4 4-4 4"/><path d="M14 12H3"/>',
  signOut: '<path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><path d="M17 8l4 4-4 4"/><path d="M21 12H10"/>',
  pin: '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  pinFill: '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" fill="currentColor" stroke="none"/>',
  link: '<path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 0-5.7-5.7L11.5 6.8"/><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.3 2.3a4 4 0 0 0 5.7 5.7l1.3-1.3"/>',
  unlink: '<path d="M9 15l-1.5 1.5a4 4 0 0 1-5.7-5.7L3.5 9"/><path d="M15 9l1.5-1.5a4 4 0 0 1 5.7 5.7L20.5 15"/><path d="M4 4l16 16"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2 6"/><path d="M20 5v6h-6"/>',
  check: '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  block: '<circle cx="12" cy="12" r="8.5"/><path d="m6.5 6.5 11 11"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  database: '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/><path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/>',
  document: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h6"/>',
  external: '<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
  graphUp: '<path d="M4 4v16h16"/><path d="m7 15 4-4 3 3 5-6"/>',
} as const;

export type IconName = keyof typeof ICONS;
```

- [ ] **Step 2: Write `app/lib/pages.ts`**

```ts
import type { IconName } from '~/lib/icons';

// Single source of truth for the nav. `href` must match the MPA layout under
// app/pages/ and the `PATHS` map in ~/lib/routing.
//
// There is no separate home entry: the map IS the index, as it always has been.

export interface PageLink {
  href: string;
  label: string;
  icon: IconName;
  /** When set, the entry is hidden unless the session holds this permission. */
  requiredPermission?: string;
}

export const PAGES: PageLink[] = [
  { href: '/', label: 'Map', icon: 'map' },
  { href: '/search/', label: 'Search', icon: 'search' },
  { href: '/browse/', label: 'Index', icon: 'list' },
  { href: '/reconcile/', label: 'Reconcile', icon: 'reconcile', requiredPermission: 'admin' },
  { href: '/quality/', label: 'Quality Dashboard', icon: 'chart' },
];
```

- [ ] **Step 3: Write `app/components/mengplaz-app-shell.ts`**

Port the structure of `/home/max/Projects/project-template/app/components/gc-app-shell.ts` - the three responsive tiers (docked sidebar >=1024px, icon rail 640-1023px, off-canvas drawer <640px), the collapse preference in `localStorage`, the blurred sticky top bar, `Escape`/backdrop closing the drawer, and focus restoration - with these MengPlaz differences:

1. Brand is `MengPlaz`, no tagline. The brand dot uses `--gc-accent`.
2. Nav items come from `PAGES` filtered by `requiredPermission` against `hasPermission()`. The current page is `aria-current="page"` when `location.pathname === p.href`.
3. Auth area - this is the main divergence from the template, which only ever has a
   signed-in user. Anonymous is a first-class state here:

```ts
  private renderAuth() {
    if (isAnonymous()) {
      return html`<wa-button size="s" appearance="outlined" href="/login.html">
        ${this.renderIcon(ICONS.signIn)}<span class="label">Log in</span>
      </wa-button>`;
    }
    const name = currentUser()?.name ?? '';
    return html`
      <span class="user">
        <span class="avatar">${name.slice(0, 1)}</span>
        <span class="uname">${name}</span>
      </span>
      <wa-button size="s" appearance="outlined" @click=${() => void logout()}>Log out</wa-button>
    `;
  }
```

   `wa-button` with an `href` renders an anchor, which is what makes the spec's
   `getByRole("link", { name: /log in/i })` resolve; the signed-in control stays a button.
4. Add a `flush` boolean attribute that sets the body padding to `0` - the map page needs an edge-to-edge canvas.
5. Keep the existing footer, rendered below the body slot: copyright with the current year, a link to `https://myconnectivity.lu/`, "Powered by GreyCat" linking `https://greycat.io`, the version from `appInfo()?.program_version` (truncated at the first `-`) linking the GitLab changelog wiki, and the `./api::openapi` and Swagger links. Copy the exact URLs and labels from `frontend/components/mengplaz-layout/mengplaz-layout.tsx:145-175`.
6. Icons come from `ICONS` via `unsafeSVG`, not `sl-icon`.

The component parks on `ready()` before rendering chrome that depends on the session (nav filtering, user name, footer version), showing the `MengPlaz.` loading mark until it resolves - the same `view: "checking" | "ready"` pattern as the template.

- [ ] **Step 4: Mount the shell on the index page**

In `app/pages/index.ts`, add `import '~/components/mengplaz-app-shell';` and change `render()` to:

```ts
  render() {
    return html`<mengplaz-app-shell page-title="Map"></mengplaz-app-shell>`;
  }
```

- [ ] **Step 5: Verify by eye as well as by build**

```bash
pnpm exec vp check && pnpm exec vp build
bin/greycat serve
```

Open `http://localhost:8080/`. Confirm: nav lists Map / Search / Index / Quality Dashboard (Reconcile only when signed in as admin), the theme toggle flips and survives a reload, the drawer opens below 1024px, and the footer shows a version. Stop the server before the next task - it locks `gcdata/`.

- [ ] **Step 6: Commit**

```bash
git add app/lib/icons.ts app/lib/pages.ts app/components/mengplaz-app-shell.ts app/pages/index/index.ts
git commit -m "feat(app): responsive application shell with inline icon set"
```

---

### Task 4: Shared presentation components

The primitives every page composes. Each is generic; none knows about MengPlaz data.

**Files:**
- Create: `app/lib/columns.ts`
- Create: `app/components/mp-panel.ts`
- Create: `app/components/mp-data-table.ts`
- Create: `app/components/mp-virtual-table.ts`
- Create: `app/lib/toast.ts`

**Interfaces:**
- Consumes: theme tokens (Task 1), `ICONS` (Task 3).
- Produces:
  - `columns.ts`: `interface Column<T> { key: keyof T & string; label: string; kind?: "text" | "num"; align?: "left" | "right"; width?: string; render?: (row: T) => TemplateResult | string }`, plus `formatCell<T>(col, row)` and `align<T>(col)`.
  - `<mp-panel heading="..." ?padded ?expandable body-height="...">` with slots `header`, `actions`, default.
  - `<mp-data-table .columns=${Column<T>[]} .rows=${T[]}>`, event `row-click` with `detail: { row: T; index: number }`.
  - `<mp-virtual-table .columns=${Column<T>[]} .rows=${T[]} row-height="32" height="...">`, same `row-click` event.
  - `app/lib/toast.ts` exporting `toast(message: string, variant?: BadgeVariant, duration?: number): void`, built on `wa-toast`/`wa-toast-item`. Replaces `toast` from `@greycat/web`.

Breadcrumbs, pagination and QR codes use Web Awesome's own `wa-breadcrumb`,
`wa-pagination` and `wa-qr-code`; no local equivalents are written.

- [ ] **Step 1: Copy `columns.ts` from the template**

`/home/max/Projects/project-template/app/lib/columns.ts` transfers verbatim - it has no project-specific content. Add a `row-click`-friendly `id` field only if a later task needs it (it does not).

- [ ] **Step 2: Port `mp-panel`, `mp-data-table`, `mp-virtual-table` from the template**

Source files: `app/components/gc-panel.ts`, `gc-data-table.ts`, `gc-virtual-table.ts` in the template. Changes: rename the custom element (`gc-` -> `mp-`) and the class (`Gc` -> `Mp`), update the `HTMLElementTagNameMap` declaration, and add to both tables a `row-click` `CustomEvent` dispatched from the `<tr>` click handler:

```ts
    this.dispatchEvent(
      new CustomEvent('row-click', { detail: { row, index }, bubbles: true, composed: true }),
    );
```

`row-click` is what replaces `GuiTable`'s `gui-table-click`, which the search and reconcile pages rely on.

- [ ] **Step 3: Write `app/lib/toast.ts`**

Web Awesome ships a toast stack with a programmatic `create()`, so this is a thin wrapper
rather than a component. It replaces the `toast` helper imported from `@greycat/web` in
`frontend/pages/reconcile/reconcile.tsx`. Its variant union is already exactly our
`BadgeVariant`.

```ts
import '@awesome.me/webawesome/dist/components/toast/toast.js';
import type WaToast from '@awesome.me/webawesome/dist/components/toast/toast.js';
import type { BadgeVariant } from '~/lib/format';

// One shared stack for the document, created on first use. Web Awesome owns the
// placement, stacking, timer and dismiss affordances.
let stack: WaToast | undefined;

function getStack(): WaToast {
  if (!stack) {
    stack = document.createElement('wa-toast') as WaToast;
    stack.placement = 'bottom-end';
    document.body.appendChild(stack);
  }
  return stack;
}

/** Transient notification. Replaces `toast` from `@greycat/web`. */
export function toast(message: string, variant: BadgeVariant = 'brand', duration = 4000): void {
  void getStack().create(message, { variant, duration });
}
```

- [ ] **Step 4: Confirm the Web Awesome primitives cover breadcrumb, pagination and QR**

No local components are needed for these - Web Awesome 3.12 ships them. Verify the modules
resolve before later tasks depend on them:

```bash
node -e "for (const m of ['breadcrumb/breadcrumb','breadcrumb-item/breadcrumb-item','pagination/pagination','qr-code/qr-code','toast/toast','tab-group/tab-group','callout/callout','badge/badge','tag/tag','select/select','dialog/dialog','input/input','switch/switch','checkbox/checkbox','divider/divider','spinner/spinner','tooltip/tooltip','button/button']) require.resolve('@awesome.me/webawesome/dist/components/' + m + '.js')" && echo "all present"
```

Expected: `all present`. Anything missing is a mapping to revisit before the page that needs it.

- [ ] **Step 5: Exercise every primitive on a scratch page**

Temporarily render each component inside the index page's shell with hardcoded rows, run `bin/greycat serve`, and confirm each looks right in both themes at all three widths. Then revert the index page to the Task 3 state. This is the only visual check these components get before real pages use them.

- [ ] **Step 6: Verify and commit**

```bash
pnpm exec vp check && pnpm exec vp build
git add app/lib/columns.ts app/lib/toast.ts app/components
git commit -m "feat(app): shared panel and table components plus the toast helper"
```

---

### Task 5: Playwright harness, routing and shell specs

The first real tests. From here every page task ships with its spec.

**Files:**
- Create: `playwright.config.ts`
- Create: `e2e/auth.setup.ts`
- Create: `e2e/anon/routing.spec.ts`
- Create: `e2e/anon/shell.spec.ts`
- Create: `e2e/admin/auth.spec.ts`
- Modify: `package.json` (scripts)
- Modify: `.gitignore`

**Interfaces:**
- Consumes: the shell and routing from Tasks 2-3.
- Produces: two Playwright projects other tasks add specs to - `chromium-admin` (signed in, `e2e/.auth/admin.json`) and `chromium-anon` (no storage state). Admin specs go under `e2e/admin/`, anonymous ones under `e2e/anon/`.

- [ ] **Step 1: Create the e2e admin user**

`greycat serve` locks `gcdata/`, so do this with no server running.

**`set_password` takes the SHA-256 hex of the password, not the plaintext.** This is the
same convention `MENGPLAZ_ADMIN_PASS` uses (see the README's `.env` table), and
`login.html` hashes the typed password before posting it to `runtime::Identity::login`.
Passing the plaintext here stores a credential that can never be matched, and the failure
surfaces only as a silent "Login rejected" in the setup project.

```bash
bin/greycat run runtime::Identity::create e2e admin
HASH=$(node -e "console.log(require('node:crypto').createHash('sha256').update('e2e-password').digest('hex'))")
bin/greycat run runtime::Identity::set_password e2e "$HASH"
```

If the project's admin bootstrap already made a user via `MENGPLAZ_ADMIN_LOGIN`, that user
works too - set `E2E_USER` / `E2E_PASSWORD` instead of creating a new one.

Note also that `pgrep -f 'greycat serve'` matches the shell running it, so a
`pkill`/`kill` built on that pattern kills its own shell. Use a self-excluding pattern:
`pgrep -f 'greycat ser[v]e'`.

- [ ] **Step 2: Write `playwright.config.ts`**

```ts
import { defineConfig, devices } from '@playwright/test';

// `greycat serve` serves the prebuilt webroot and the API on one origin, so run
// `pnpm exec vp build` before the suite. It locks gcdata/, so no dev server may
// be running. Anonymous browsing is a supported mode, hence two browser
// projects: one signed in, one not.
const PORT = Number(process.env.E2E_PORT ?? 8080);
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  use: { baseURL: BASE_URL, trace: 'on-first-retry' },
  projects: [
    { name: 'setup', testMatch: /auth\.setup\.ts/ },
    {
      name: 'chromium-admin',
      testMatch: /admin\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], storageState: 'e2e/.auth/admin.json' },
      dependencies: ['setup'],
    },
    {
      name: 'chromium-anon',
      testMatch: /anon\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'bin/greycat serve',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
```

- [ ] **Step 3: Write `e2e/auth.setup.ts`**

The login form is the existing `public/login.html`, not an in-app component, so the setup drives that document.

```ts
import { test as setup, expect } from '@playwright/test';

// Sign in once through login.html and persist the session; the admin project
// reuses it via storageState. Create the user before the suite:
//   bin/greycat run runtime::Identity::create e2e admin
//   bin/greycat run runtime::Identity::set_password e2e e2e-password
const AUTH_FILE = 'e2e/.auth/admin.json';
const USER = process.env.E2E_USER ?? 'e2e';
const PASSWORD = process.env.E2E_PASSWORD ?? 'e2e-password';

setup('authenticate as admin', async ({ page }) => {
  await page.goto('/login.html');
  await page.locator('input[name="username"], #username').first().fill(USER);
  await page.locator('input[name="password"], #password').first().fill(PASSWORD);
  await page.getByRole('button', { name: /sign in|log ?in/i }).click();
  // A successful login lands on the map, whose nav shows the admin-only entry.
  await expect(page.getByRole('link', { name: 'Reconcile' })).toBeVisible({ timeout: 15_000 });
  await page.context().storageState({ path: AUTH_FILE });
});
```

If the selectors do not match `public/login.html`, fix the selectors here - do not change the login page in this task; Task 12 restyles it and must keep these names.

- [ ] **Step 4: Write `e2e/anon/routing.spec.ts` - the failing test**

```ts
import { test, expect } from '@playwright/test';

// The legacy `?page=` shim is permanent: app.mengplaz.lu links are shared
// externally. Every legacy URL must land on its new document with all other
// query params intact.

const CASES: Array<{ legacy: string; path: string; search?: string }> = [
  { legacy: '/?page=map', path: '/' },
  { legacy: '/?page=search', path: '/search/' },
  { legacy: '/?page=index', path: '/browse/' },
  { legacy: '/?page=quality-history', path: '/quality/' },
  { legacy: '/?page=record&guid=abc123', path: '/record/', search: '?guid=abc123' },
  {
    legacy: '/?page=reconcile&source=BDA&tab=Matched',
    path: '/reconcile/',
    search: '?source=BDA&tab=Matched',
  },
];

for (const c of CASES) {
  test(`${c.legacy} lands on ${c.path}`, async ({ page }) => {
    await page.goto(c.legacy);
    await page.waitForURL((url) => url.pathname === c.path, { timeout: 10_000 });
    const url = new URL(page.url());
    expect(url.pathname).toBe(c.path);
    expect(url.searchParams.get('page')).toBeNull();
    if (c.search) {
      expect(url.search).toBe(c.search);
    }
  });
}

test('the site root renders the map without redirecting', async ({ page }) => {
  await page.goto('/');
  expect(new URL(page.url()).pathname).toBe('/');
});
```

- [ ] **Step 5: Run it and watch it fail**

```bash
pnpm exec vp build
pnpm exec playwright test e2e/anon/routing.spec.ts
```

Expected: the `/`, `/search/` cases fail because `/browse/`, `/record/`, `/reconcile/`, `/quality/` and `/search/` do not exist yet - `location.replace` lands on a 404. This is the correct failure; those cases go green as their pages land in Tasks 6-11.

To keep the suite green in the meantime, mark the not-yet-built destinations:

```ts
const BUILT = new Set(['/']);
// ...inside the loop:
  test(`${c.legacy} lands on ${c.path}`, async ({ page }) => {
    test.skip(!BUILT.has(c.path), 'destination page not ported yet');
```

Each page task adds its path to `BUILT` and deletes the skip line when `BUILT` is complete.

- [ ] **Step 6: Write `e2e/anon/shell.spec.ts`**

```ts
import { test, expect } from '@playwright/test';

// The shell is chrome shared by every page: nav, theme toggle, responsive tiers.
// Anonymous is the default visitor, so these run without a stored session.

test('nav lists the public pages and hides the admin one', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Map' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Index' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Quality Dashboard' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Reconcile' })).toHaveCount(0);
});

test('an anonymous visitor is offered a log in, not a log out', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /log in/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /log out/i })).toHaveCount(0);
});

test('the theme toggle flips and survives a reload', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  // The starting mode follows the OS preference, so assert on the flip, not the
  // initial class: a headless browser may legitimately start in either mode.
  const startedDark = await html.evaluate((el) => el.classList.contains('wa-dark'));
  await page.getByRole('button', { name: /theme/i }).click();
  await expect(html).toHaveClass(startedDark ? /wa-light/ : /wa-dark/);
  await page.reload();
  await expect(html).toHaveClass(startedDark ? /wa-light/ : /wa-dark/);
});

test('the drawer opens and closes below the docked breakpoint', async ({ page }) => {
  await page.setViewportSize({ width: 600, height: 800 });
  await page.goto('/');
  const drawer = page.getByRole('dialog', { name: 'Navigation menu' });
  await expect(drawer).not.toBeInViewport();
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(drawer).toBeInViewport();
  await page.keyboard.press('Escape');
  await expect(drawer).not.toBeInViewport();
});

test('the footer credits MyConnectivity and links the API docs', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'MyConnectivity G.I.E.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'openapi' })).toBeVisible();
});
```

- [ ] **Step 7: Write `e2e/admin/auth.spec.ts`**

```ts
import { test, expect } from '@playwright/test';

// Runs with the stored admin session.

test('an admin sees the reconcile entry and their name', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Reconcile' })).toBeVisible();
  await expect(page.getByRole('button', { name: /log out/i })).toBeVisible();
});

test('logging out returns to the anonymous view', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /log out/i }).click();
  await expect(page.getByRole('link', { name: /log in/i })).toBeVisible({ timeout: 15_000 });
  await expect(page.getByRole('link', { name: 'Reconcile' })).toHaveCount(0);
});
```

- [ ] **Step 8: Run the suite green**

```bash
pnpm exec vp build
pnpm exec playwright test
```

Expected: all pass (with the not-yet-built routing cases skipped). Fix the shell rather than the assertions if a role or name does not resolve - the assertions encode the accessible names the shell is required to expose.

- [ ] **Step 9: Add scripts and ignores, then commit**

In `package.json` scripts add:

```json
    "test:e2e": "playwright test",
    "test:e2e:full": "vp build && playwright test"
```

Append to `.gitignore`:

```
/test-results/
/playwright-report/
/e2e/.auth/
```

```bash
git add playwright.config.ts e2e package.json .gitignore
git commit -m "test(e2e): Playwright harness with admin and anonymous projects"
```

---

### Task 6: The map, at `/`

The default view and the shell's most demanding host: a full-bleed canvas with no page padding.

**Files:**
- Create: `app/components/mp-address-search.ts`
- Create: `app/components/mp-minimap.ts`
- Modify: `app/pages/index.ts`
- Modify: `app/pages/index.html`
- Create: `e2e/anon/map.spec.ts`
- Modify: `e2e/anon/routing.spec.ts` (no change needed - `/` is already in `BUILT`)

**Interfaces:**
- Consumes: `GcPage`, `mengplaz-app-shell` (with `flush`), `colorForSource`, `recordHref`.
- Produces:
  - `<mp-address-search ?disable-no-coords>`, event `address-select` with `detail: { record: gc.mengplaz.POIRecordRef }`.
  - `<mp-minimap .center=${gc.core.geo} .markers=${Array<{ geo: gc.core.geo; source: string }>} zoom="17">` - the small non-interactive map reused by the record page.

- [ ] **Step 1: Write `e2e/anon/map.spec.ts` first**

```ts
import { test, expect } from '@playwright/test';

// The map is the index. maplibre renders into a WebGL canvas, so the assertions
// are structural: the canvas mounts, the controls are present, and searching
// produces a result list.

test('the map canvas mounts at the site root', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible({ timeout: 20_000 });
});

test('the basemap can be switched to the orthophoto', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible({ timeout: 20_000 });
  const select = page.getByRole('combobox', { name: /basemap/i });
  await expect(select).toBeVisible();
  await select.click();
  await page.getByRole('option', { name: /orthophoto/i }).click();
  await expect(select).toContainText(/orthophoto/i);
});

test('address search returns results and selecting one keeps the map mounted', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible({ timeout: 20_000 });
  await page.getByRole('textbox', { name: /address|search/i }).fill('rue');
  const results = page.locator('mp-address-search [role="option"]');
  await expect(results.first()).toBeVisible({ timeout: 15_000 });
  await results.first().click();
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible();
});

test('the attribution credits geoportail and OpenStreetMap', async ({ page }) => {
  await page.goto('/');
  const attrib = page.locator('.maplibregl-ctrl-attrib');
  await expect(attrib).toContainText(/geoportail/i, { timeout: 20_000 });
  await expect(attrib).toContainText(/OpenStreetMap/i);
});
```

Run it: `pnpm exec playwright test e2e/anon/map.spec.ts`. Expected: every test fails - `/` is still the Task 3 placeholder.

- [ ] **Step 2: Port `mp-address-search`**

Source: `frontend/components/mengplaz-address-search/mengplaz-address-search.tsx` and its `.css`. Port to a Lit component with the CSS moved into `static styles`. Behaviour to preserve exactly: the debounced query against `gc.api.searchAddress`, the `disableNoCoords` filter (renamed to the `disable-no-coords` attribute), the result list, and the `address-select` `CustomEvent`. Changes: `sl-input` -> `wa-input`, `sl-icon` -> inline `ICONS.search` via `unsafeSVG`, `sl-spinner` -> `wa-spinner`, and give the result list `role="listbox"` with `role="option"` children so the spec's locators resolve.

- [ ] **Step 3: Port the map page**

Source: `frontend/pages/map/map.tsx` and `map.css`. The page class becomes `MengplazIndexPage extends GcPage` in `app/pages/index.ts`, keeping the redirect shim at the top of the module. Carry over verbatim: `GEOPORTAIL_STYLE`, `ORTHO_TILES`, `ORTHO_OVERLAY_TILES`, `ATTRIBUTION`, `OSM_DATA_ATTRIBUTION`, the Luxembourg `maxBounds`, the layer setup and the `setBasemap` logic. Changes:

1. maplibre must own a real DOM node, and Lit's shadow root would isolate maplibre's own stylesheet - so render the map container into **light DOM**: override `createRenderRoot() { return this; }` on the page class and import `maplibre-gl/dist/maplibre-gl.css` at module scope.
2. The `sl-select` basemap switcher becomes `wa-select` + `wa-option`, labelled `Basemap` so `getByRole("combobox", { name: /basemap/i })` resolves.
3. The `sl-alert` loading notice becomes `wa-callout`.
4. Marker colours come from `colorForSource()`, not the deleted `SOURCE_COLORS` literal.
5. Wrap the body in `<mengplaz-app-shell page-title="Map" flush>`; the map fills the body with `height: 100%`.
6. Any link to a record uses `recordHref(guid)`.
7. `common/maplibre-worker.ts` moves to `app/lib/maplibre-worker.ts` and is imported first, as before.

Update `index.html`'s `<title>` to `MengPlaz - Map`.

- [ ] **Step 4: Port `mp-minimap`**

Source: `frontend/components/minimap/minimap.tsx` + `.css`. Same light-DOM treatment as the map page. Exposes `center`, `markers` and `zoom` properties. The record page (Task 9) is its consumer; port it here because it shares the maplibre setup.

- [ ] **Step 5: Run the specs green**

```bash
pnpm exec vp check && pnpm exec vp build
pnpm exec playwright test e2e/anon/map.spec.ts e2e/anon/shell.spec.ts
```

Expected: all pass. If the address search finds nothing for `rue`, pick a query string that matches the data actually in `gcdata/` and update the spec.

- [ ] **Step 6: Look at it**

`bin/greycat serve`, open `/`, and check the map at 1400px, 800px and 500px wide in both themes: the canvas is edge to edge with no double scrollbar, the search overlay is legible over the tiles, and the basemap switch works. Stop the server.

- [ ] **Step 7: Commit**

```bash
git add app e2e
git commit -m "feat(map): port the map to Lit at the index route"
```

---

### Task 7: Search page

**Files:**
- Create: `app/pages/search/index.html`
- Create: `app/pages/search/index.ts`
- Create: `app/components/mp-address-card.ts`
- Create: `app/components/address-field/address-field.ts`
- Create: `app/components/address-field/address-content.ts`
- Create: `e2e/anon/search.spec.ts`
- Modify: `e2e/anon/routing.spec.ts` (add `/search/` to `BUILT`)

**Interfaces:**
- Consumes: `GcPage`, `mengplaz-app-shell`, `mp-panel`, `mp-data-table` and its `row-click` event, `mp-minimap`, `formatDate`, `getMatchQuality`, `recordHref`.
- Produces: `<mp-address-card .value=${gc.mengplaz.POIRecordRef} ?show-go-to>`; `<mp-address-field .label=${string} .value=${unknown}>`.

- [ ] **Step 1: Write `e2e/anon/search.spec.ts` first**

```ts
import { test, expect } from '@playwright/test';

test('searching a street lists matching streets', async ({ page }) => {
  await page.goto('/search/');
  await page.getByRole('textbox', { name: /street/i }).fill('rue');
  await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible();
  await expect(page.locator('mp-data-table tbody tr').first()).toBeVisible({ timeout: 15_000 });
});

test('picking a street lists its numbers, and a number opens the address card', async ({ page }) => {
  await page.goto('/search/');
  await page.getByRole('textbox', { name: /street/i }).fill('rue');
  const firstRow = page.locator('mp-data-table tbody tr').first();
  await expect(firstRow).toBeVisible({ timeout: 15_000 });
  await firstRow.click();
  await expect(page.getByRole('heading', { name: 'Street Numbers' })).toBeVisible({ timeout: 15_000 });
  const number = page.locator('.street-numbers wa-badge').first();
  await expect(number).toBeVisible();
  await number.click();
  await expect(page.locator('mp-address-card')).toBeVisible();
});

test('an empty search shows no result rows', async ({ page }) => {
  await page.goto('/search/');
  await page.getByRole('textbox', { name: /street/i }).fill('zzzzzznotastreet');
  await expect(page.locator('mp-data-table tbody tr')).toHaveCount(0, { timeout: 15_000 });
});
```

Run it; expect failures - `/search/` 404s.

- [ ] **Step 2: Port the address field pair**

Sources: `frontend/components/address-field/address-field.tsx`, `address-content.tsx`, `address-field.css`. Port to Lit. Changes: `sl-format-date` -> `formatDate()` from `~/lib/format`; `gui-value` -> a plain formatted string (numbers through `Intl.NumberFormat`, `gc.time` through `formatDate`, everything else `String(value)`); the label styling reads `--gc-muted` and `--wa-font-size-xs`.

- [ ] **Step 3: Port `mp-address-card`**

Source: `frontend/components/mengplaz-address-card/mengplaz-address-card.tsx` + `.css`. Changes: `sl-qr-code` -> `wa-qr-code` (verify the element exists in the installed Web Awesome; if it does not, add the `qrcode` package and render to a canvas), **and its value becomes `${location.origin}${recordHref(uid)}`** rather than the legacy `?guid=X&page=record`. `sl-button` -> `wa-button`, `sl-icon` -> `ICONS` + `unsafeSVG`, `sl-badge` -> `wa-badge`. The `showGoTo` prop becomes the `show-go-to` attribute and links via `recordHref`.

- [ ] **Step 4: Port the search page**

Source: `frontend/pages/search/search.tsx` + `.css`. `SearchPage extends GcPage`, body wrapped in `<mengplaz-app-shell page-title="Search">`. Changes: `GuiInputString` -> `wa-input` labelled `Street`, debounced by 250ms; `GuiTable` -> `mp-data-table` with `columns` `[{ key: "street", label: "Street" }, { key: "city", label: "Locality" }]` over `searchResults.map((e) => e.record)`, listening for `row-click`; the street-number `sl-badge` list -> `wa-badge` inside a `.street-numbers` container; the two cards -> `mp-panel` with `heading="Search Results"` and `heading="Street Numbers"`. `gc.api.searchStreet` and `gc.api.getPoisInStreet` are called exactly as before.

- [ ] **Step 5: Run green, look at it, commit**

```bash
pnpm exec vp check && pnpm exec vp build
pnpm exec playwright test e2e/anon/search.spec.ts e2e/anon/routing.spec.ts
```

Add `/search/` to `BUILT` in `routing.spec.ts` before this run. Then `bin/greycat serve`, check `/search/` in both themes at three widths, stop the server, and:

```bash
git add app e2e
git commit -m "feat(search): port the search page, address card and address fields"
```

---

### Task 8: Browse page (the city/street/number index)

**Files:**
- Create: `app/pages/browse/index.html`
- Create: `app/pages/browse/index.ts`
- Create: `e2e/anon/browse.spec.ts`
- Modify: `e2e/anon/routing.spec.ts` (add `/browse/` to `BUILT`)

**Interfaces:**
- Consumes: `GcPage`, `mengplaz-app-shell`, `wa-breadcrumb`/`wa-breadcrumb-item`, `recordHref`.
- Produces: nothing other tasks consume.

- [ ] **Step 1: Write `e2e/anon/browse.spec.ts` first**

```ts
import { test, expect } from '@playwright/test';

test('drilling from cities to streets to numbers and back', async ({ page }) => {
  await page.goto('/browse/');
  const cities = page.locator('.index-container wa-tag');
  await expect(cities.first()).toBeVisible({ timeout: 15_000 });
  await cities.first().click();

  const streets = page.locator('.index-container wa-tag');
  await expect(streets.first()).toBeVisible({ timeout: 15_000 });
  await expect(page.locator('wa-breadcrumb')).toContainText('Streets');
  await streets.first().click();

  await expect(page.locator('wa-breadcrumb')).toContainText('Numbers', { timeout: 15_000 });
  await page.locator('wa-breadcrumb-item', { hasText: 'Cities' }).click();
  await expect(page.locator('wa-breadcrumb')).not.toContainText('Streets');
});

test('a street number links to its record', async ({ page }) => {
  await page.goto('/browse/');
  await page.locator('.index-container wa-tag').first().click();
  await page.locator('.index-container wa-tag').first().click();
  const number = page.locator('.index-container wa-tag').first();
  await expect(number).toBeVisible({ timeout: 15_000 });
  await number.click();
  await page.waitForURL(/\/record\/\?guid=/, { timeout: 15_000 });
});
```

The second test depends on `/record/` existing (Task 9); guard it with `test.skip(true, "record page ported in Task 9")` here and delete that line in Task 9.

- [ ] **Step 2: Port the page**

Source: `frontend/pages/index/index.tsx` + `index.css`. `BrowsePage extends GcPage`, three levels of state (`cities` / `streets` / `numbers`) held in `@state` fields rather than three `replaceChildren` methods. `sl-breadcrumb`/`sl-breadcrumb-item` -> `wa-breadcrumb`/`wa-breadcrumb-item`, each non-final crumb carrying a `@click` that pops back to that level. `sl-tag` -> `wa-tag`. Backend calls are unchanged: `gc.api.getGoldenLocalities(null)`, `gc.api.getGoldenStreetsByLocalityId(id)`, `gc.api.getGoldenNumbersByStreetId(id)`. The numeric sort on street numbers is preserved. `handleGoToRecord` becomes a link to `recordHref(id)`.

- [ ] **Step 3: Run green, look at it, commit**

```bash
pnpm exec vp check && pnpm exec vp build
pnpm exec playwright test e2e/anon/browse.spec.ts e2e/anon/routing.spec.ts
git add app e2e
git commit -m "feat(browse): port the city/street/number index page"
```

---

### Task 9: Record page

The comparator page. **The seven `comparison/` components are NOT part of this task** - an
earlier draft placed them here, but reading `mengplaz-comparator.tsx` shows the record page
uses only `mengplaz-address-card` and `mengplaz-minimap`. The comparison subtree
(candidates table, score breakdown, dashboard) belongs entirely to the reconcile workspace
and is ported in Task 11.

**Files:**
- Create: `app/pages/record/index.html`, `app/pages/record/index.ts`
- Create: `app/components/comparison/mp-comparison-dashboard.ts`
- Create: `app/components/comparison/mp-master-record-panel.ts`
- Create: `app/components/comparison/mp-candidates-panel.ts`
- Create: `app/components/comparison/mp-candidates-table.ts`
- Create: `app/components/comparison/mp-candidate-row.ts`
- Create: `app/components/comparison/mp-record-comparison-view.ts`
- Create: `app/components/comparison/mp-completion-message.ts`
- Create: `e2e/anon/record.spec.ts`
- Modify: `e2e/anon/routing.spec.ts` (add `/record/`), `e2e/anon/browse.spec.ts` (drop the skip)

**Interfaces:**
- Consumes: `GcPage`, `mengplaz-app-shell`, `mp-panel`, `mp-minimap`, `mp-address-field`, `getMatchQuality`, `getGeoMatchQuality`, `toBadgeVariant`, `calculateDistance`, `formatDistance`, `colorForSource`, `getQueryParam`.
- Produces: `<mp-record-comparison-view .data=${gc.privateApi.ComparisonViewData}>` and the six components it composes, all also used by the reconcile page in Task 11. Events bubbling out of the view, consumed in Task 11: `request-link` (`detail: RequestLinkEvent`), `request-promote` (`detail: RequestPromoteEvent`), `request-reconcile` (`detail: RequestReconcileEvent`) - the three interfaces declared at the top of `frontend/pages/reconcile/reconcile.tsx:20-33`, which move to `app/components/comparison/events.ts`.

- [ ] **Step 1: Write `e2e/anon/record.spec.ts` first**

```ts
import { test, expect } from '@playwright/test';

// A guid is needed. Rather than hardcode one, the spec walks the browse page to
// find a real record, then asserts the record page renders it.

test('a record page renders the comparator for a real record', async ({ page }) => {
  await page.goto('/browse/');
  await page.locator('.index-container wa-tag').first().click();
  await page.locator('.index-container wa-tag').first().click();
  const number = page.locator('.index-container wa-tag').first();
  await expect(number).toBeVisible({ timeout: 15_000 });
  await number.click();

  await page.waitForURL(/\/record\/\?guid=/, { timeout: 15_000 });
  await expect(page.locator('mp-record-comparison-view')).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('mp-master-record-panel')).toBeVisible();
});

test('an unknown guid shows an error rather than an empty page', async ({ page }) => {
  await page.goto('/record/?guid=definitely-not-a-real-guid');
  await expect(page.getByText(/not found|failed|error/i).first()).toBeVisible({ timeout: 20_000 });
});

test('a record page with no guid explains what is missing', async ({ page }) => {
  await page.goto('/record/');
  await expect(page.getByText(/no record selected/i)).toBeVisible({ timeout: 15_000 });
});
```

- [ ] **Step 2: Move the shared event types**

Create `app/components/comparison/events.ts` holding `RequestLinkEvent`, `RequestPromoteEvent` and `RequestReconcileEvent`, copied verbatim from `frontend/pages/reconcile/reconcile.tsx:20-33`. Both this task and Task 11 import from here.

- [ ] **Step 3: Port the seven comparison components**

Sources, all under `frontend/components/comparison/`: `comparison-dashboard`, `master-record-panel`, `candidates-panel`, `candidates-table`, `candidate-row`, `record-comparison-view`, `completion-message`. Port each `.tsx` + `.css` pair to one Lit file with the CSS in `static styles`, renaming the element to `mp-*`. Mapping applied throughout: `sl-button`->`wa-button`, `sl-icon`->`ICONS`+`unsafeSVG`, `sl-badge`->`wa-badge`, `sl-divider`->`wa-divider`, `sl-checkbox`->`wa-checkbox`, `sl-tooltip`->`wa-tooltip`, `sl-spinner`->`wa-spinner`. Source colours come from `colorForSource()`. Props that were JSX attributes become `@property({ attribute: false })` fields; the components keep their existing event names and payloads so Task 11 can consume them unchanged.

- [ ] **Step 4: Port the record page**

Source: `frontend/components/mengplaz-comparator/mengplaz-comparator.tsx`, which the SPA mounted for `?page=record`. `RecordPage extends GcPage` reads `getQueryParam("guid")` in `onInit()`: with no guid it sets a `No record selected` message; otherwise it calls `gc.api.getGoldenRecordDetails` exactly as the comparator did and renders `mp-record-comparison-view`. Errors surface through `loadError`, which the template renders in a `wa-callout variant="danger"`. Body wrapped in `<mengplaz-app-shell page-title="Record">`.

- [ ] **Step 5: Run green, look at it, commit**

```bash
pnpm exec vp check && pnpm exec vp build
pnpm exec playwright test e2e/anon/record.spec.ts e2e/anon/browse.spec.ts e2e/anon/routing.spec.ts
git add app e2e
git commit -m "feat(record): port the record page and the comparison components"
```

---

### Task 10: Quality dashboard and the chart stack

**Files:**
- Create: `app/lib/echarts.ts`
- Create: `app/components/mp-chart.ts`
- Create: `app/pages/quality/index.html`, `app/pages/quality/index.ts`
- Create: `e2e/anon/quality.spec.ts`
- Modify: `e2e/anon/routing.spec.ts` (add `/quality/`)

**Interfaces:**
- Consumes: `GcPage`, `mengplaz-app-shell`, `mp-panel`, `mp-data-table`, `currentColors`, `recordHref`.
- Produces: `<mp-chart .option=${EChartsOption}>`; `app/lib/echarts.ts` exporting `echarts` and `type EChartsOption`.

- [ ] **Step 1: Write `e2e/anon/quality.spec.ts` first**

```ts
import { test, expect } from '@playwright/test';

test('the quality dashboard renders the history chart and the current figure', async ({ page }) => {
  await page.goto('/quality/');
  await expect(page.getByText(/current quality/i)).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('mp-chart canvas')).toBeVisible({ timeout: 20_000 });
});

test('the golden records table lists records that link to their record page', async ({ page }) => {
  await page.goto('/quality/');
  const firstLink = page.locator('mp-data-table tbody tr a').first();
  await expect(firstLink).toBeVisible({ timeout: 20_000 });
  await expect(firstLink).toHaveAttribute('href', /\/record\/\?guid=/);
});

test('the chart re-renders after a theme flip', async ({ page }) => {
  await page.goto('/quality/');
  await expect(page.locator('mp-chart canvas')).toBeVisible({ timeout: 20_000 });
  await page.getByRole('button', { name: /theme/i }).click();
  await expect(page.locator('mp-chart canvas')).toBeVisible();
});
```

- [ ] **Step 2: Write `app/lib/echarts.ts`**

The quality history is a line chart with a tooltip, legend and grid. Registering only that keeps the bundle far below the ~325 KB umbrella.

```ts
// Granular ECharts registration - the ONLY place the library is imported. Never
// import the `echarts` umbrella. Add a module here when a chart needs a new type.
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, DataZoomComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([LineChart, GridComponent, TooltipComponent, LegendComponent, DataZoomComponent, CanvasRenderer]);

export { echarts };
export type { EChartsOption } from 'echarts';
```

- [ ] **Step 3: Port `mp-chart` from the template**

Source: `/home/max/Projects/project-template/app/components/gc-chart.ts`. Rename to `mp-chart` / `MpChart`; everything else transfers, including the `gc-theme` listener, the `ResizeObserver`, and `applyTheme()` merging `currentColors()` into the option. This is what makes the theme-flip spec pass.

- [ ] **Step 4: Port the quality page**

Source: `frontend/pages/quality-history/quality-history.tsx` + `.css`. `QualityPage extends GcPage`. `gc.getGlobalQualityHistory(null, null)` is called unchanged. Changes:

1. `GuiChart` + `gc.Table.fromObjects(data.history)` -> `mp-chart` fed an `EChartsOption` built directly from `data.history`: `xAxis: { type: "time" }`, one `LineChart` series over the history points, `tooltip: { trigger: "axis" }`. Drop `setConfig` and the `ChartConfig` import entirely.
2. `GuiTable` -> `mp-data-table` with columns `UID` (a `render` returning `html`<a href=${recordHref(String(row.uid))}>${row.uid}</a>``), `Number`, `Street`, `Locality`, `Postcode`, `Linked Records`, and `Quality (%)` (a `render` returning `${(Number(row.quality) * 100).toFixed(1)} %`). The old column model indexed by position (`index: 0..6`); map each position to the corresponding field name of the row type in `project.d.ts`.
3. `sl-spinner` -> `wa-spinner`; the current-quality figure keeps its `Current Quality: NN.N%` wording so the spec's `/current quality/i` matches.
4. Body wrapped in `<mengplaz-app-shell page-title="Quality Dashboard">`; chart and table each in an `mp-panel`.

- [ ] **Step 5: Run green, look at it, commit**

```bash
pnpm exec vp check && pnpm exec vp build
pnpm exec playwright test e2e/anon/quality.spec.ts e2e/anon/routing.spec.ts
git add app e2e
git commit -m "feat(quality): port the quality dashboard onto granular ECharts"
```

---

### Task 11: Reconcile workspace

The largest single port: a 958-line page, a 295-line pane, and four dialogs. Admin-only.

**Files:**
- Create: `app/pages/reconcile/index.html`, `app/pages/reconcile/index.ts`
- Create: `app/components/reconcile/mp-reconcile-pane.ts`
- Create: `app/components/dialogs/mp-confirm-dialog.ts`
- Create: `app/components/dialogs/mp-promotion-dialog.ts`
- Create: `app/components/dialogs/mp-search-parameters-dialog.ts`
- Create: `app/components/dialogs/mp-batch-link-dialog.ts`
- Create: `app/components/dialogs/mp-search-dialog.ts`
- Create: `e2e/admin/reconcile.spec.ts`
- Create: `e2e/anon/reconcile-denied.spec.ts`
- Modify: `e2e/anon/routing.spec.ts` (add `/reconcile/`, then delete the `BUILT` skip entirely)

**Interfaces:**
- Consumes: everything from Tasks 3, 4, 9 - notably `mp-record-comparison-view` and the three request events from `~/components/comparison/events`.
- Produces: nothing later tasks consume.

- [ ] **Step 1: Write the specs first**

`e2e/anon/reconcile-denied.spec.ts`:

```ts
import { test, expect } from '@playwright/test';

// Permission gating in the UI is presentational - the backend enforces
// @permission("admin") - but an anonymous visitor must get an explanation
// rather than a blank page or a wall of failed requests.

test('an anonymous visitor is refused the reconcile workspace', async ({ page }) => {
  await page.goto('/reconcile/');
  await expect(page.getByText(/not authori[sz]ed|administrator/i)).toBeVisible({ timeout: 15_000 });
  await expect(page.locator('mp-reconcile-pane')).toHaveCount(0);
});
```

`e2e/admin/reconcile.spec.ts`:

```ts
import { test, expect } from '@playwright/test';

const TABS = ['Linked', 'Matched', 'Multiple Match', 'Mismatched', 'No Match'];

test('the workspace lists data sources', async ({ page }) => {
  await page.goto('/reconcile/');
  const source = page.getByRole('combobox', { name: /source/i });
  await expect(source).toBeVisible({ timeout: 20_000 });
});

test('every tab is reachable and reports a count', async ({ page }) => {
  await page.goto('/reconcile/');
  await expect(page.getByRole('tab', { name: /Linked/ })).toBeVisible({ timeout: 20_000 });
  for (const name of TABS) {
    const tab = page.getByRole('tab', { name: new RegExp(name) });
    await tab.click();
    await expect(tab).toHaveAttribute('aria-selected', 'true');
    await expect(tab.locator('wa-badge')).toBeVisible();
  }
});

test('the selected tab and source survive a reload', async ({ page }) => {
  await page.goto('/reconcile/');
  await expect(page.getByRole('tab', { name: /Matched/ })).toBeVisible({ timeout: 20_000 });
  await page.getByRole('tab', { name: /^Matched/ }).click();
  await expect(new URL(page.url()).searchParams.get('tab')).toBe('Matched');
  await page.reload();
  await expect(page.getByRole('tab', { name: /^Matched/ })).toHaveAttribute('aria-selected', 'true', {
    timeout: 20_000,
  });
});

test('the search parameters dialog opens and closes', async ({ page }) => {
  await page.goto('/reconcile/');
  await page.getByRole('button', { name: /parameters/i }).click();
  const dialog = page.getByRole('dialog', { name: /parameters/i });
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
});

test('the batch link dialog opens from the matched tab', async ({ page }) => {
  await page.goto('/reconcile/');
  await page.getByRole('tab', { name: /^Matched/ }).click();
  await page.getByRole('button', { name: /link all matched/i }).click();
  await expect(page.getByRole('dialog', { name: /link/i })).toBeVisible();
  await page.keyboard.press('Escape');
});
```

Run both; expect failures.

- [ ] **Step 2: Port the four dialogs plus the search dialog**

Sources: `frontend/components/mengplaz-confirm-dialog/`, `mengplaz-promotion-dialog/`, `search-parameters-dialog/`, `batch-link-dialog/`, `mengplaz-search-dialog/`. Each becomes one Lit file under `app/components/dialogs/`. `sl-dialog` -> `wa-dialog` (the `label` attribute carries the accessible name the specs locate by), `sl-input` -> `wa-input`, `sl-checkbox` -> `wa-checkbox`, `sl-select`/`sl-option` -> `wa-select`/`wa-option`, `sl-button` -> `wa-button`. Each dialog keeps its current `open()` method and its confirm/cancel events. `gc.mengplaz.SearchParameters`, `ScoringWeights`, `GeoParameters` and `gc.privateApi.LinkParameters` are constructed exactly as before.

- [ ] **Step 3: Port `mp-reconcile-pane`**

Source: `frontend/components/reconcilation/reconcile-pane/reconcile-pane.tsx` + `.css`. It renders one tab's record list and hosts `mp-record-comparison-view`. The record list becomes `mp-virtual-table` (these lists can run long). It re-emits `request-link`, `request-promote` and `request-reconcile` from the comparison view unchanged.

- [ ] **Step 4: Port the reconcile page**

Source: `frontend/pages/reconcile/reconcile.tsx`. `ReconcilePage extends GcPage`. Structure to preserve exactly: the `TAB_CONFIG` table (all five entries with their `loadData`, `getRecordIds`, `showActions` and `bulkAction` fields - copy it verbatim, only changing `badgeVariant: "primary"` to `"brand"` for Web Awesome), the source selection, `gc.privateApi.getReconciliationReport`, the spawn calls (`gc.privateApi.reconcile.spawn`, `reconcilePOIs.spawn`), `gc.linkRecords`, `gc.unlinkRecord`, `gc.promoteRecord`, `gc.lockDatasource`, `gc.privateApi.batchLinkByScore`. Changes:

1. `onInit()` first checks `hasPermission("admin")`; when false it renders a `wa-callout variant="warning"` reading `You are not authorised to use the reconcile workspace. Sign in as an administrator.` and fires no admin endpoint.
2. `GuiSelect`/`GuiOption` -> `wa-select`/`wa-option` labelled `Source`.
3. `sl-tab-group`/`sl-tab`/`sl-tab-panel` -> `wa-tab-group`/`wa-tab`/`wa-tab-panel`, each tab carrying its `wa-badge` count.
4. `toast` from `@greycat/web` -> `toast` from `~/lib/toast`.
5. `getQueryParam` from `~/lib/routing`; `source`, `tab` and `sourceId` continue to live in the URL via `setQueryParam` so a reload restores the workspace.
6. Body wrapped in `<mengplaz-app-shell page-title="Reconcile">`.

If this step grows beyond a reviewable diff, split it: land the source selector, tabs and report first, then the bulk actions and dialogs as a second commit.

- [ ] **Step 5: Complete the routing spec**

Add `/reconcile/` to `BUILT`, then delete the `BUILT` set and the `test.skip` line - every destination now exists.

- [ ] **Step 6: Run the whole suite green**

```bash
pnpm exec vp check && pnpm exec vp build
pnpm exec playwright test
```

Expected: every spec in both projects passes.

- [ ] **Step 7: Look at it, then commit**

`bin/greycat serve`, sign in as admin, exercise each tab and each dialog by hand at three widths in both themes. Stop the server.

```bash
git add app e2e
git commit -m "feat(reconcile): port the reconcile workspace, pane and dialogs"
```

---

### Task 12: Teardown and documentation

Delete the old tree and everything only it needed.

**Files:**
- Delete: `frontend/` (entire tree, including `public/assets/icons/`'s 2,052 files)
- Create: `app/public/login.html` (the restyled login page)
- Modify: `package.json` (drop `@shoelace-style/shoelace`)
- Modify: `README.md`
- Modify: `.gitignore`

**Interfaces:**
- Consumes: everything.
- Produces: the final repository state.

- [ ] **Step 1: Move and restyle the login page**

Copy `frontend/public/login.html` to `app/public/login.html`. Keep its form action, field `name` attributes and submit behaviour byte-for-byte - `e2e/auth.setup.ts` and the GreyCat login endpoint both depend on them. Restyle only: replace the hardcoded `--color-*` block with the same palette values as `app/theme.css` (`#111317` background, `#181b20` card, `#ff18a4` accent, `#2e3440` border, `#e6e8ec` text), load the IBM Plex Sans `@import`, and match the card's radius and shadow to `--gc-radius` / `--gc-shadow`. Keep it a standalone document with inline CSS - it must render before any bundle loads.

- [ ] **Step 2: Delete the old frontend and its dependency**

```bash
git rm -r --quiet frontend
pnpm remove @shoelace-style/shoelace
```

- [ ] **Step 3: Verify nothing referenced it**

```bash
grep -rn "shoelace\|frontend/\|jsxImportSource\|GuiTable\|GuiChart\|GuiSelect\|GuiInputString\|@greycat/web/components" app vite.config.ts tsconfig.json package.json
```

Expected: no matches. Any hit is a leftover to fix now.

- [ ] **Step 4: Update the README**

In `README.md`, replace the `frontend` bullet under "Project structure" with:

```
- `app` contains the frontend: `lib/` (session gate, routing, theme), `components/` (shared `mp-*` Lit components), `pages/` (one directory per page, each an MPA entry point)
- `e2e` contains the Playwright suite
```

Add a "Frontend" section documenting `pnpm exec vp dev`, `vp check`, `vp build`, and a "Tests" section with the e2e user creation commands, `pnpm run test:e2e:full`, and the warning that `greycat serve` locks `gcdata/` so the suite cannot run beside a dev server.

- [ ] **Step 5: Full verification**

```bash
pnpm exec vp check
pnpm exec vp build
pnpm exec playwright test
```

All three must pass. Then confirm the bundle actually shrank:

```bash
du -sh webroot/assets
```

- [ ] **Step 6: Final visual pass**

`bin/greycat serve`, then walk `/`, `/search/`, `/browse/`, `/record/?guid=<real>`, `/quality/` and `/reconcile/` at 1400px, 800px and 500px in both themes. Fix anything that overflows, clips, or reads at the wrong contrast before committing.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: remove the Shoelace/JSX frontend and document the new app tree"
```

---

## Notes for the executor

- **Never run `greycat serve --user=<name>`** - it disables auth for every caller.
- **`greycat serve` locks `gcdata/`.** Stop it before running `bin/greycat run ...` or the Playwright suite (the suite starts its own server).
- **Do not regenerate `project.d.ts`.** No backend change is in scope; a regeneration here would mix unrelated churn into the migration.
- **When a port needs a backend field name**, read it from `project.d.ts` rather than guessing - the old JSX often indexed columns positionally and those positions are not self-documenting.
- **`project.gcp` shows as modified in git** from an earlier session. Leave it alone; it is not part of this work.
