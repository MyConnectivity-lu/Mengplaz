import { expect, test } from '@playwright/test';

// The combobox contract of `mp-address-search`: the ARIA wiring lives on the
// native input inside `wa-input`, arrow keys move an active option through the
// listbox, Enter picks it, Escape closes the popup and keeps the typed text.

test('the address search is a keyboard-operable combobox', async ({ page, request }) => {
  // Same probe as map.spec: skip where the text index is empty, not fail.
  const probe = await request.post('/api::searchAddress', { data: ['1 Rue du Village', 10, null] });
  const hits = (await probe.json()) as unknown[];
  test.skip(hits.length === 0, 'api::searchAddress index is empty in this store');

  await page.goto('/');
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible({ timeout: 30_000 });

  const input = page.locator('mp-address-search wa-input').getByRole('combobox');
  await expect(input).toHaveAttribute('role', 'combobox');
  await expect(input).toHaveAttribute('aria-haspopup', 'listbox');
  await expect(input).toHaveAttribute('aria-expanded', 'false');

  await input.fill('1 Rue du Village');
  const options = page.locator('mp-address-search [role="option"]');
  await expect(options.first()).toBeVisible({ timeout: 20_000 });
  await expect(input).toHaveAttribute('aria-expanded', 'true');

  await input.press('ArrowDown');
  await expect(page.locator('mp-address-search [role="option"][aria-selected="true"]')).toHaveCount(1);
  await expect(input).toHaveAttribute('aria-activedescendant', (await options.first().getAttribute('id')) ?? '');

  await input.press('Enter');
  await expect(page.locator('mp-address-search [role="option"]')).toHaveCount(0);
  await expect(input).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible();
});

test('escape closes the results and keeps the typed text', async ({ page, request }) => {
  const probe = await request.post('/api::searchAddress', { data: ['1 Rue du Village', 10, null] });
  const hits = (await probe.json()) as unknown[];
  test.skip(hits.length === 0, 'api::searchAddress index is empty in this store');

  await page.goto('/');
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible({ timeout: 30_000 });

  const input = page.locator('mp-address-search wa-input').getByRole('combobox');
  await input.fill('1 Rue du Village');
  await expect(page.locator('mp-address-search [role="option"]').first()).toBeVisible({ timeout: 20_000 });

  await input.press('Escape');
  await expect(page.locator('mp-address-search .results')).toHaveCount(0);
  await expect(input).toHaveValue('1 Rue du Village');
  await expect(input).toHaveAttribute('aria-expanded', 'false');
});
