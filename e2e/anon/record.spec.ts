import { expect, test } from '@playwright/test';

// A record page needs a real guid, so rather than hardcoding one the specs walk
// the index to find a record the store actually holds.
async function firstRecordHref(page: import('@playwright/test').Page): Promise<string> {
  await page.goto('/browse/');
  const entries = page.locator('.entries wa-tag');
  await expect(entries.first()).toBeVisible({ timeout: 20_000 });
  await entries.first().click();
  await expect(page.locator('wa-breadcrumb')).toContainText('Streets', { timeout: 20_000 });
  await entries.first().click();
  await expect(page.locator('wa-breadcrumb')).toContainText('Numbers', { timeout: 20_000 });
  const href = await page.locator('.entries a').first().getAttribute('href');
  expect(href).toBeTruthy();
  return href as string;
}

test('a record page renders the golden card for a real record', async ({ page }) => {
  const href = await firstRecordHref(page);
  await page.goto(href);
  await expect(page.getByRole('heading', { name: 'Golden Record' })).toBeVisible({ timeout: 20_000 });
  const golden = page.locator('mp-address-card').first();
  await expect(golden).toBeVisible({ timeout: 20_000 });
  // The card lists the record's fields and plots its position.
  await expect(golden.locator('mp-address-field').first()).toBeVisible();
  await expect(golden.locator('mp-minimap')).toBeVisible({ timeout: 20_000 });
});

test('the golden card offers a QR permalink pointing back at this record', async ({ page }) => {
  const href = await firstRecordHref(page);
  await page.goto(href);
  const card = page.locator('mp-address-card').first();
  // The code is behind a dialog now - the header button is what offers it.
  await card.getByRole('button', { name: 'Show QR code' }).click();
  const qr = card.locator('wa-qr-code');
  await expect(qr).toBeVisible({ timeout: 20_000 });
  const value = await qr.getAttribute('value');
  expect(value).toContain('/record/?guid=');
});

test('linked source records are shown alongside the golden one', async ({ page }) => {
  const href = await firstRecordHref(page);
  await page.goto(href);
  await expect(page.locator('mp-address-card').first()).toBeVisible({ timeout: 20_000 });
  // The golden card plus at least one source card; every golden record in this
  // store is built from at least one source.
  await expect(page.locator('.sources mp-address-card').first()).toBeVisible({ timeout: 20_000 });
});

test('an anonymous visitor gets no unlink action', async ({ page }) => {
  const href = await firstRecordHref(page);
  await page.goto(href);
  await expect(page.locator('.sources mp-address-card').first()).toBeVisible({ timeout: 20_000 });
  await expect(page.getByRole('button', { name: 'Unlink' })).toHaveCount(0);
});

test('an unknown guid reports that the record was not found', async ({ page }) => {
  await page.goto('/record/?guid=definitely-not-a-real-guid');
  await expect(page.getByText(/not found/i)).toBeVisible({ timeout: 20_000 });
});

test('a record page with no guid explains what is missing', async ({ page }) => {
  await page.goto('/record/');
  await expect(page.getByText(/no record selected/i)).toBeVisible({ timeout: 20_000 });
});
