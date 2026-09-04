import { expect, test } from '@playwright/test';

// `api::searchStreet` is a fuzzy index that needs more than a single short
// token: "rue" returns nothing while "rue de" matches broadly. The specs use a
// query the store demonstrably answers.
const QUERY = 'rue de';

test('the page starts with an empty results table and a prompt', async ({ page }) => {
  await page.goto('/search/');
  await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible();
  await expect(page.getByText('Type a street name to search')).toBeVisible();
});

test('searching a street lists matching streets', async ({ page }) => {
  await page.goto('/search/');
  await page.locator('wa-input[label="Street"]').getByRole('textbox').fill(QUERY);
  await expect(page.locator('mp-data-table tbody tr').first()).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('mp-data-table thead th').first()).toHaveText('Street');
});

test('picking a street lists its numbers, and a number opens the address card', async ({ page }) => {
  await page.goto('/search/');
  await page.locator('wa-input[label="Street"]').getByRole('textbox').fill(QUERY);
  const firstRow = page.locator('mp-data-table tbody tr').first();
  await expect(firstRow).toBeVisible({ timeout: 20_000 });
  await firstRow.click();

  await expect(page.getByRole('heading', { name: 'Street Numbers' })).toBeVisible({ timeout: 20_000 });
  const number = page.locator('.numbers wa-badge').first();
  await expect(number).toBeVisible();
  await number.click();

  await expect(page.locator('mp-address-card')).toBeVisible();
  // The card lists the record's fields, so at least one labelled row must render.
  await expect(page.locator('mp-address-card mp-address-field').first()).toBeVisible();
});

test('a query with no matches leaves the table empty', async ({ page }) => {
  await page.goto('/search/');
  await page.locator('wa-input[label="Street"]').getByRole('textbox').fill('zzzzzznotastreet');
  await expect(page.getByText('No matching streets')).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('mp-data-table tbody tr')).toHaveCount(0);
});
