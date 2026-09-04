import { expect, test } from '@playwright/test';

// Runs with the stored admin session from auth.setup.ts.

test('an admin sees the reconcile entry and a log out control', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav[aria-label="Primary"]').getByRole('link', { name: 'Reconcile' })).toBeVisible();
  await expect(page.getByRole('button', { name: /log out/i })).toBeVisible();
});

test('the signed-in user name is shown in the top bar', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('e2e', { exact: true })).toBeVisible();
});

test('logging out returns to the anonymous view', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /log out/i }).click();
  await expect(page.getByRole('link', { name: /log in/i })).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('nav[aria-label="Primary"]').getByRole('link', { name: 'Reconcile' })).toHaveCount(0);
});
