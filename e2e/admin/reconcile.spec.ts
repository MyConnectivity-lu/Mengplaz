import { expect, test } from '@playwright/test';

// Runs with the stored admin session. The workspace is data-driven: which tabs
// hold records depends on what has been reconciled in this store, so the specs
// assert on structure and on the controls, and skip the parts that need a
// populated report when there is none.

const TABS = ['Linked', 'Matched', 'Multiple Match', 'Mismatched', 'No Match'];

/**
 * Pick a source through the UI and wait for its report. Returns the name chosen.
 * wa-select renders its options into a popup, so the option has to be waited for
 * after opening rather than clicked straight away.
 */
async function selectFirstSource(page: import('@playwright/test').Page): Promise<string> {
  const select = page.locator('wa-select[label="Source"]');
  await expect(select).toBeVisible({ timeout: 30_000 });
  const name = (await select.locator('wa-option').first().getAttribute('value')) ?? '';
  expect(name).not.toBe('');
  await select.click();
  const option = page.locator(`wa-option[value="${name}"]`).first();
  await expect(option).toBeVisible({ timeout: 10_000 });
  await option.click();
  await expect.poll(() => new URL(page.url()).searchParams.get('source'), { timeout: 30_000 }).toBe(name);
  return name;
}

test('the workspace offers a source selector and a reconcile action', async ({ page }) => {
  await page.goto('/reconcile/');
  await expect(page.locator('wa-select[label="Source"]')).toBeVisible({ timeout: 30_000 });
  await expect(page.getByRole('button', { name: 'Reconcile', exact: true })).toBeVisible();
});

test('the source list excludes Golden, which is the target rather than a source', async ({ page }) => {
  await page.goto('/reconcile/');
  const select = page.locator('wa-select[label="Source"]');
  await expect(select).toBeVisible({ timeout: 30_000 });
  const options = await select.locator('wa-option').allTextContents();
  expect(options.length).toBeGreaterThan(0);
  expect(options.map((o) => o.trim())).not.toContain('Golden');
});

test('with no source selected the page asks for one', async ({ page }) => {
  await page.goto('/reconcile/');
  await expect(page.getByText(/select a source/i)).toBeVisible({ timeout: 30_000 });
});

test('choosing a source records it in the URL and renders every tab', async ({ page }) => {
  await page.goto('/reconcile/');
  await selectFirstSource(page);
  for (const name of TABS) {
    await expect(page.getByRole('tab', { name: new RegExp(name) })).toBeVisible({ timeout: 30_000 });
  }
});

test('the chosen source survives a reload', async ({ page }) => {
  await page.goto('/reconcile/');
  const name = await selectFirstSource(page);
  await page.reload();
  await expect(page.locator('wa-select[label="Source"]')).toHaveJSProperty('value', name, { timeout: 30_000 });
  await expect(page.getByRole('tab', { name: /Linked/ })).toBeVisible({ timeout: 30_000 });
});

test('every tab carries a count badge', async ({ page }) => {
  await page.goto('/reconcile/');
  await selectFirstSource(page);
  const tabs = page.locator('wa-tab-group wa-tab');
  await expect(tabs.first()).toBeVisible({ timeout: 30_000 });
  expect(await tabs.count()).toBe(TABS.length);
  for (let i = 0; i < TABS.length; i++) {
    await expect(tabs.nth(i).locator('wa-badge')).toBeVisible();
  }
});

test('a populated tab shows the record pager and the comparison dashboard', async ({ page }) => {
  await page.goto('/reconcile/');
  await selectFirstSource(page);
  await expect(page.locator('mp-record-pager')).toBeVisible({ timeout: 30_000 });
  await expect(page.locator('mp-comparison-dashboard')).toBeVisible({ timeout: 30_000 });
  await expect(page.locator('mp-master-record-panel')).toBeVisible();
  await expect(page.locator('mp-candidates-table')).toBeVisible();
});

test('the pager advances to the next record in the queue', async ({ page }) => {
  await page.goto('/reconcile/');
  await selectFirstSource(page);
  const pager = page.locator('mp-record-pager');
  await expect(pager).toBeVisible({ timeout: 30_000 });
  await expect(pager.getByText(/^1 of /)).toBeVisible();
  await pager.getByRole('button', { name: 'Next record' }).click();
  await expect(pager.getByText(/^2 of /)).toBeVisible({ timeout: 20_000 });
});

test('the search parameters dialog opens and cancels', async ({ page }) => {
  await page.goto('/reconcile/');
  await selectFirstSource(page);
  await page.getByRole('button', { name: 'Reconcile', exact: true }).click();
  // wa-dialog promotes its content to the top layer, leaving the host element
  // with a zero-size box - assert on the content, not on the host.
  await expect(page.getByRole('heading', { name: 'Search Parameters' })).toBeVisible({ timeout: 20_000 });
  await expect(page.getByText('Similarity Thresholds')).toBeVisible();
  await expect(page.getByText('Scoring Weights')).toBeVisible();
  await expect(page.getByText('Geo Distance')).toBeVisible();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await expect(page.getByRole('heading', { name: 'Search Parameters' })).not.toBeVisible();
});

test('the search parameters dialog exposes the documented defaults', async ({ page }) => {
  await page.goto('/reconcile/');
  await selectFirstSource(page);
  await page.getByRole('button', { name: 'Reconcile', exact: true }).click();

  await expect(page.getByRole('heading', { name: 'Search Parameters' })).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('#city-sim')).toHaveJSProperty('value', '0.7');
  await expect(page.locator('#w-city')).toHaveJSProperty('value', '4');
  await expect(page.locator('#geo-max')).toHaveJSProperty('value', '1000');
  await page.keyboard.press('Escape');
});
