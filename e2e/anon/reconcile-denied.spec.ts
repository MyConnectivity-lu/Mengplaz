import { expect, test } from '@playwright/test';

// Permission gating in the UI is presentational - the backend enforces
// @permission("admin") on every private endpoint - but an unauthorised visitor
// must get an explanation rather than a blank page or a wall of failed requests.

test('an anonymous visitor is refused the reconcile workspace', async ({ page }) => {
  await page.goto('/reconcile/');
  await expect(page.getByText(/not authorised/i)).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('mp-reconcile-pane')).toHaveCount(0);
});

test('no admin endpoint is called for an unauthorised visitor', async ({ page }) => {
  const privateCalls: string[] = [];
  page.on('request', (req) => {
    if (/privateApi::/.test(req.url())) {
      privateCalls.push(req.url());
    }
  });
  await page.goto('/reconcile/');
  await expect(page.getByText(/not authorised/i)).toBeVisible({ timeout: 20_000 });
  expect(privateCalls).toEqual([]);
});

test('the reconcile entry is absent from the nav', async ({ page }) => {
  await page.goto('/reconcile/');
  await expect(page.locator('nav[aria-label="Primary"]').getByRole('link', { name: 'Reconcile' })).toHaveCount(0);
});
