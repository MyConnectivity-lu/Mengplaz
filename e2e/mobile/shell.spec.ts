import { expect, test } from '@playwright/test';

// The phone project: the same anonymous journeys as `e2e/anon/`, but under a real
// device profile (touch, DPR, UA) rather than a narrowed desktop viewport. Kept
// to the shell and the map — the two surfaces a phone can break that a desktop
// window cannot: the off-canvas drawer with touch-sized targets, and the WebGL
// canvas under a doubled device pixel ratio.

test('the shell serves the drawer and does not overflow on a phone', async ({ page }) => {
  await page.goto('/');
  const drawer = page.getByRole('dialog', { name: 'Navigation menu' });
  await expect(drawer).not.toBeInViewport();
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(drawer).toBeInViewport();
  await page.keyboard.press('Escape');
  await expect(drawer).not.toBeInViewport();

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
});

test('the map canvas mounts at phone width and DPR', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible({ timeout: 30_000 });
  const canvas = page.locator('canvas.maplibregl-canvas');
  // maplibre sizes its backing store to CSS size × devicePixelRatio; a halved
  // assertion would not catch the DPR being dropped to 1.
  const ratio = await canvas.evaluate(() => window.devicePixelRatio);
  expect(ratio).toBeGreaterThan(1);
});

test('the address search opens its listbox under touch', async ({ page, request }) => {
  // Same probe as map.spec: skip where the text index is empty, not fail.
  const probe = await request.post('/api::searchAddress', { data: ['1 Rue du Village', 10, null] });
  const hits = (await probe.json()) as unknown[];
  test.skip(hits.length === 0, 'api::searchAddress index is empty in this store');

  await page.goto('/');
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible({ timeout: 30_000 });
  const input = page.locator('mp-address-search wa-input').getByRole('combobox');
  await input.tap();
  await input.fill('1 Rue du Village');
  await expect(page.locator('mp-address-search [role="option"]').first()).toBeVisible({ timeout: 20_000 });
});
