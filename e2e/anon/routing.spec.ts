import { expect, test } from '@playwright/test';

// The legacy `?page=` shim is permanent: app.mengplaz.lu links are shared
// externally. Every legacy URL must land on its new document with all other
// query params intact.

const CASES: Array<{ legacy: string; path: string; search?: string }> = [
  { legacy: '/?page=map', path: '/' },
  { legacy: '/?page=search', path: '/search/' },
  { legacy: '/?page=index', path: '/browse/' },
  { legacy: '/?page=quality-history', path: '/quality/' },
  { legacy: '/?page=record&guid=abc123', path: '/record/', search: '?guid=abc123' },
  { legacy: '/?page=reconcile&source=BDA&tab=Matched', path: '/reconcile/', search: '?source=BDA&tab=Matched' },
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

test('an unknown ?page= value falls back to the map', async ({ page }) => {
  await page.goto('/?page=nonsense');
  await page.waitForURL((url) => url.searchParams.get('page') === null, { timeout: 10_000 });
  expect(new URL(page.url()).pathname).toBe('/');
});
