#!/usr/bin/env node

// UI screenshot loop. Points a headless browser at a running GreyCat server,
// signs in once through /login.html (the session persists across pages in the
// same browser context), and writes a PNG per page at each responsive width
// mode under `.shots/`.
//
// MengPlaz supports anonymous browsing, so signing in is optional: set
// SHOT_USER to an empty string to shoot the app as a visitor with no session,
// which is the mode most of its traffic is in. /reconcile/ is admin-only and
// renders nothing useful anonymously.
//
// The shell (mengplaz-app-shell) is responsive across three tiers, so every page
// is shot at all three: `large` (docked sidebar, >=1024px), `medium` (icon rail,
// 640-1023px), `small` (off-canvas drawer, <640px). Below the large breakpoint
// the overlay drawer is also opened and captured, since a closed-shell shot
// can't show it. Files are named `<page>-<mode>.png` and `<page>-<mode>-nav.png`
// for the open drawer.
//
// Use it to eyeball a UI change instead of guessing: edit, rebuild the webroot
// (`pnpm build`) and restart `greycat serve`, then re-run this and open the
// PNGs. See AGENTS.md "UI screenshot loop" for the full recipe.
//
//   node scripts/shot.mjs                 # every page, all three modes
//   node scripts/shot.mjs /search/        # one path, all three modes
//   SHOT_MODE=small node scripts/shot.mjs # every page, small only
//   SHOT_USER= node scripts/shot.mjs      # anonymous
//
// Env:
//   SHOT_BASE      base URL of a running server   (default http://localhost:8080)
//   SHOT_USER      login user, "" for anonymous   (default e2e)
//   SHOT_PASSWORD  login password                 (default e2e-password)
//   SHOT_OUT       output directory               (default .shots)
//   SHOT_MODE      one of large|medium|small      (default: all three)

import { chromium } from '@playwright/test';
import { globSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const BASE = (process.env.SHOT_BASE ?? 'http://localhost:8080').replace(/\/$/, '');
const USER = process.env.SHOT_USER ?? 'e2e';
const PASSWORD = process.env.SHOT_PASSWORD ?? 'e2e-password';
const OUT = process.env.SHOT_OUT ?? '.shots';

// The shell docks its sidebar at/above 1024px and swaps to an overlay drawer
// below it; these three widths land one sample in each responsive tier.
const LARGE_MIN = 1024;
const MODES = [
  { name: 'large', width: 1440, height: 900 },
  { name: 'medium', width: 820, height: 900 },
  { name: 'small', width: 390, height: 844 },
];
const modes = process.env.SHOT_MODE ? MODES.filter((m) => m.name === process.env.SHOT_MODE) : MODES;
if (modes.length === 0) {
  console.error(`unknown SHOT_MODE "${process.env.SHOT_MODE}"; expected one of ${MODES.map((m) => m.name).join(', ')}`);
  process.exit(1);
}

// Default set: every app/pages/**/index.html, served at its directory path.
// Override by passing paths as args.
const PAGES_ROOT = resolve(import.meta.dirname, '../app/pages');
const DEFAULT_PATHS = globSync('**/index.html', { cwd: PAGES_ROOT })
  .map((p) => {
    const dir = dirname(p);
    return dir === '.' ? '/' : `/${dir}/`;
  })
  .sort();

const args = process.argv.slice(2);
const paths = args.length != 0 ? args : DEFAULT_PATHS;
const slug = (p) => (p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/\//g, '-'));

/**
 * Sign in once, through the standalone /login.html document. MengPlaz has no
 * in-app sign-in overlay: the app itself is reachable anonymously, and
 * login.html is the only place credentials are entered. No-op when SHOT_USER is
 * empty, which shoots the app as an anonymous visitor.
 */
async function login(page) {
  if (USER === '') {
    console.log('no SHOT_USER: shooting anonymously');
    return;
  }
  await page.goto(`${BASE}/login.html`, { waitUntil: 'networkidle' });
  await page.locator('#username').fill(USER);
  await page.locator('#password').fill(PASSWORD);
  await page.locator('#signin').click();

  // A successful sign-in navigates to the app; a failed one stays on the form.
  await page.waitForURL((url) => !url.pathname.endsWith('/login.html'), { timeout: 20_000 }).catch(() => {});
  if (page.url().includes('login.html')) {
    throw new Error(
      `sign-in failed for user "${USER}" at ${BASE}.\n` +
        `Set SHOT_USER / SHOT_PASSWORD to a user that exists on this server, or create one:\n` +
        `  bin/greycat run runtime::Identity::create ${USER} admin\n` +
        `  bin/greycat run runtime::Identity::set_password ${USER} <password>\n` +
        `(stop the server first - it holds the gcdata/ lock)\n` +
        `Or set SHOT_USER= to shoot anonymously.`,
    );
  }
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: modes[0].width, height: modes[0].height },
  });
  const page = await context.newPage();
  const written = [];
  try {
    await login(page);
    for (const path of paths) {
      for (const mode of modes) {
        await page.setViewportSize({ width: mode.width, height: mode.height });
        await page.goto(BASE + path, { waitUntil: 'networkidle' });
        // Give charts/tables a beat to render into the canvas/DOM.
        await page.waitForTimeout(1500);
        const file = `${OUT}/${slug(path)}-${mode.name}.png`;
        await page.screenshot({ path: file, fullPage: false });
        written.push(file);
        console.log(`shot ${path} @ ${mode.name} -> ${file}`);

        // Below the large breakpoint the menu is an overlay drawer; open it and
        // capture that state too.
        if (mode.width < LARGE_MIN) {
          const toggle = page.locator('button[aria-label="Open menu"]').first();
          if (await toggle.isVisible().catch(() => false)) {
            await toggle.click();
            await page.waitForTimeout(400);
            const navFile = `${OUT}/${slug(path)}-${mode.name}-nav.png`;
            await page.screenshot({ path: navFile, fullPage: false });
            written.push(navFile);
            console.log(`shot ${path} @ ${mode.name} (drawer) -> ${navFile}`);
          }
        }
      }
    }
  } finally {
    await browser.close();
  }
  console.log(`\n${written.length} screenshot(s) in ${OUT}/`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
