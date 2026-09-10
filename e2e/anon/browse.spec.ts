import { expect, test } from '@playwright/test';

// The address index drills locality -> street -> number. The last rung links to
// the record page rather than handling a click, so links stay copyable.

test('the index opens on the list of localities', async ({ page }) => {
  await page.goto('/browse/');
  await expect(page.locator('.entries wa-tag').first()).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('wa-breadcrumb')).toContainText('Cities');
  await expect(page.locator('wa-breadcrumb')).not.toContainText('Streets');
});

test('drilling from cities to streets to numbers and back', async ({ page }) => {
  await page.goto('/browse/');
  const entries = page.locator('.entries wa-tag');
  await expect(entries.first()).toBeVisible({ timeout: 20_000 });
  await entries.first().click();

  await expect(page.locator('wa-breadcrumb')).toContainText('Streets', { timeout: 20_000 });
  await expect(entries.first()).toBeVisible();
  await entries.first().click();

  await expect(page.locator('wa-breadcrumb')).toContainText('Numbers', { timeout: 20_000 });

  await page.locator('wa-breadcrumb-item', { hasText: 'Cities' }).click();
  await expect(page.locator('wa-breadcrumb')).not.toContainText('Streets', { timeout: 20_000 });
});

test('a street number links to its record', async ({ page }) => {
  await page.goto('/browse/');
  const entries = page.locator('.entries wa-tag');
  await expect(entries.first()).toBeVisible({ timeout: 20_000 });
  await entries.first().click();
  await expect(page.locator('wa-breadcrumb')).toContainText('Streets', { timeout: 20_000 });
  await entries.first().click();
  await expect(page.locator('wa-breadcrumb')).toContainText('Numbers', { timeout: 20_000 });

  const link = page.locator('.entries a').first();
  await expect(link).toHaveAttribute('href', /\/record\/\?guid=/);
});

test('house numbers are listed in numeric, not lexical, order', async ({ page }) => {
  await page.goto('/browse/');
  const entries = page.locator('.entries wa-tag');
  await expect(entries.first()).toBeVisible({ timeout: 20_000 });
  await entries.first().click();
  await expect(page.locator('wa-breadcrumb')).toContainText('Streets', { timeout: 20_000 });
  await entries.first().click();
  await expect(page.locator('wa-breadcrumb')).toContainText('Numbers', { timeout: 20_000 });

  const numbers = (await entries.allTextContents()).map((t) => Number(t.trim())).filter((n) => !Number.isNaN(n));
  expect(numbers.length).toBeGreaterThan(1);
  // Lexical order would put "10" before "2"; numeric order must not.
  const sorted = [...numbers].sort((a, b) => a - b);
  expect(numbers).toEqual(sorted);
});
