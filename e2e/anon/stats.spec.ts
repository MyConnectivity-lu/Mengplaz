import { expect, test } from '@playwright/test';

test('the statistics page lists a row per source', async ({ page }) => {
  await page.goto('/stats/');
  await expect(page.getByRole('heading', { name: 'Records by Source' })).toBeVisible({ timeout: 30_000 });
  for (const source of ['Golden', 'CACLR', 'OSM', 'BDA']) {
    await expect(page.getByText(source, { exact: true })).toBeVisible();
  }
});

test('the growth chart renders onto a canvas', async ({ page }) => {
  await page.goto('/stats/');
  await expect(page.getByRole('heading', { name: 'Growth' })).toBeVisible({ timeout: 30_000 });
  await expect(page.locator('mp-chart canvas')).toBeVisible({ timeout: 30_000 });
});

test('the page loads without an error for an anonymous visitor', async ({ page }) => {
  await page.goto('/stats/');
  await expect(page.getByRole('heading', { name: 'Records by Source' })).toBeVisible({ timeout: 30_000 });
  await expect(page.locator('.error')).toHaveCount(0);
});

test('statistics is reachable from the nav', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Statistics' }).click();
  await expect(page).toHaveURL(/\/stats\//);
  await expect(page.getByRole('heading', { name: 'Records by Source' })).toBeVisible({ timeout: 30_000 });
});
