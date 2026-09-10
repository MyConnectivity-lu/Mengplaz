import { expect, test } from '@playwright/test';

// The favicon is vendored into app/public rather than hotlinked from
// myconnectivity.lu, so it works offline, in dev, and without a third-party
// request on every page load.

const PAGES = ['/', '/search/', '/browse/', '/record/', '/quality/', '/reconcile/', '/login.html'];

test('every page declares the favicon and it resolves to the site root', async ({ page }) => {
  for (const path of PAGES) {
    await page.goto(path);
    const href = await page.locator('link[rel="icon"]').first().getAttribute('href');
    expect(href, `${path} declares an icon`).toBeTruthy();
    // `base: './'` rewrites the href per depth; what matters is where it lands.
    const resolved = new URL(href as string, page.url());
    expect(resolved.pathname, `${path} icon resolves to /favicon.ico`).toBe('/favicon.ico');
  }
});

test('the favicon is served as an icon and is not requested from a third party', async ({ page, request }) => {
  const external: string[] = [];
  page.on('request', (req) => {
    if (/favicon/i.test(req.url()) && !req.url().startsWith(page.url().split('/').slice(0, 3).join('/'))) {
      external.push(req.url());
    }
  });
  await page.goto('/');

  const res = await request.get('/favicon.ico');
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toMatch(/icon|image/);
  expect((await res.body()).byteLength).toBeGreaterThan(0);
  expect(external, 'favicon is served locally').toEqual([]);
});
