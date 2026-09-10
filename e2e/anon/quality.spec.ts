import { expect, test } from '@playwright/test';

test('the dashboard shows the current global quality figure', async ({ page }) => {
  await page.goto('/quality/');
  await expect(page.getByText(/Current Quality:/)).toBeVisible({ timeout: 30_000 });
  await expect(page.getByRole('heading', { name: 'Global Quality' })).toBeVisible();
});

test('the history chart renders onto a canvas', async ({ page }) => {
  await page.goto('/quality/');
  await expect(page.getByRole('heading', { name: 'Quality History' })).toBeVisible({ timeout: 30_000 });
  await expect(page.locator('mp-chart canvas')).toBeVisible({ timeout: 30_000 });
});

test('the golden records table lists records linking to their record page', async ({ page }) => {
  await page.goto('/quality/');
  await expect(page.getByRole('heading', { name: 'Golden Records' })).toBeVisible({ timeout: 30_000 });
  const firstLink = page.locator('mp-virtual-table a').first();
  await expect(firstLink).toBeVisible({ timeout: 30_000 });
  await expect(firstLink).toHaveAttribute('href', /\/record\/\?guid=/);
});

test('the chart survives a theme flip', async ({ page }) => {
  await page.goto('/quality/');
  await expect(page.locator('mp-chart canvas')).toBeVisible({ timeout: 30_000 });
  await page.getByRole('button', { name: /theme/i }).click();
  await expect(page.locator('mp-chart canvas')).toBeVisible();
  await expect(page.getByText(/Current Quality:/)).toBeVisible();
});

test('the quality documentation is linked', async ({ page }) => {
  await page.goto('/quality/');
  const link = page.getByRole('link', { name: 'Quality Documentation' });
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', /Golden-Record-Quality/);
});
