import { expect, test } from '@playwright/test';

// The shell is chrome shared by every page: nav, theme toggle, responsive tiers,
// footer. Anonymous is the default visitor, so these run without a session.

test('nav lists the public pages and hides the admin one', async ({ page }) => {
  await page.goto('/');
  // Scope to the primary nav: the map's attribution control injects links whose
  // names ("© OpenMapTiles") match a loose query for "Map".
  const nav = page.locator('nav[aria-label="Primary"]');
  await expect(nav.getByRole('link', { name: 'Map', exact: true })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Search' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Index' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Quality Dashboard' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Reconcile' })).toHaveCount(0);
});

test('an anonymous visitor is offered a log in, not a log out', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /log in/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /log out/i })).toHaveCount(0);
});

test('the theme toggle flips and survives a reload', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  // The starting mode follows the OS preference, so assert on the flip rather
  // than the initial class: a headless browser may legitimately start in either.
  const startedDark = await html.evaluate((el) => el.classList.contains('wa-dark'));
  const expected = startedDark ? /wa-light/ : /wa-dark/;
  await page.getByRole('button', { name: /theme/i }).click();
  await expect(html).toHaveClass(expected);
  await page.reload();
  await expect(html).toHaveClass(expected);
});

test('the nav collapses to an icon rail and the preference persists', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Collapse menu' }).click();
  await expect(page.getByRole('button', { name: 'Expand menu' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Expand menu' })).toBeVisible();
  await page.getByRole('button', { name: 'Expand menu' }).click();
  await expect(page.getByRole('button', { name: 'Collapse menu' })).toBeVisible();
});

test('the drawer opens and closes below the docked breakpoint', async ({ page }) => {
  await page.setViewportSize({ width: 600, height: 800 });
  await page.goto('/');
  const drawer = page.getByRole('dialog', { name: 'Navigation menu' });
  await expect(drawer).not.toBeInViewport();
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(drawer).toBeInViewport();
  await page.keyboard.press('Escape');
  await expect(drawer).not.toBeInViewport();
});

test('the footer credits MyConnectivity and links the API docs', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'MyConnectivity G.I.E.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'openapi' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Swagger' })).toBeVisible();
});

test('the page does not scroll horizontally at a narrow width', async ({ page }) => {
  await page.setViewportSize({ width: 380, height: 800 });
  await page.goto('/');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
});
