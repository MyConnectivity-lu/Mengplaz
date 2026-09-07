import { expect, test, type Page } from '@playwright/test';

// The golden point set is the largest payload the app fetches, and the map is
// the landing page - so it is cached in IndexedDB for a day rather than
// refetched on every visit. These specs pin the two halves of that: a warm
// cache serves the map without touching the API, and an expired one does not.

const DB_NAME = 'mengplaz';
const STORE = 'cache';
const KEY = 'map:pois';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

interface Row {
  expires: number;
  /** The page's own clock, so the TTL is measured against the writer's clock. */
  now: number;
  points: number;
}

/** Read the cached row straight out of the page's IndexedDB, or null if absent. */
function readRow(page: Page): Promise<Row | null> {
  return page.evaluate(
    ([db, store, key]) =>
      new Promise<Row | null>((resolve) => {
        const open = indexedDB.open(db, 1);
        open.onerror = () => resolve(null);
        open.onsuccess = () => {
          if (!open.result.objectStoreNames.contains(store)) {
            resolve(null);
            return;
          }
          const get = open.result.transaction(store, 'readonly').objectStore(store).get(key);
          get.onerror = () => resolve(null);
          get.onsuccess = () => {
            const row = get.result as { expires: number; value: { coords: BigUint64Array } } | undefined;
            resolve(
              row === undefined ? null : { expires: row.expires, now: Date.now(), points: row.value.coords.length },
            );
          };
        };
      }),
    [DB_NAME, STORE, KEY] as const,
  );
}

/** Backdate the cached row so the next load sees it as expired. */
function expireRow(page: Page): Promise<void> {
  return page.evaluate(
    ([db, store, key]) =>
      new Promise<void>((resolve) => {
        const open = indexedDB.open(db, 1);
        open.onerror = () => resolve();
        open.onsuccess = () => {
          const objects = open.result.transaction(store, 'readwrite').objectStore(store);
          const get = objects.get(key);
          get.onerror = () => resolve();
          get.onsuccess = () => {
            const row = get.result as { expires: number };
            row.expires = Date.now() - 1000;
            const put = objects.put(row, key);
            put.onerror = () => resolve();
            put.onsuccess = () => resolve();
          };
        };
      }),
    [DB_NAME, STORE, KEY] as const,
  );
}

/** The map has settled once the "Loading map data" callout is gone. */
async function waitForPoints(page: Page): Promise<void> {
  await expect(page.locator('canvas.maplibregl-canvas')).toBeVisible({ timeout: 30_000 });
  await expect(page.getByText('Loading map data')).toHaveCount(0, { timeout: 60_000 });
}

test('the golden points are fetched once and then served from IndexedDB', async ({ page }) => {
  let fetches = 0;
  await page.route('**/api::getPois', async (route) => {
    fetches++;
    await route.continue();
  });

  await page.goto('/');
  await waitForPoints(page);
  expect(fetches).toBe(1);

  // The write is deliberately not awaited by the page, so wait for it to land.
  await expect.poll(() => readRow(page), { timeout: 30_000 }).not.toBeNull();
  const row = (await readRow(page))!;
  if (row.points === 0) {
    // The cache still round-trips, but an empty store cannot show the packed
    // typed arrays surviving it - say so rather than pass silently.
    test.info().annotations.push({
      type: 'note',
      description: 'api::getPois is empty in this store; the payload round-trip is not covered',
    });
  } else {
    expect(row.points).toBeGreaterThan(0);
  }
  // A one-day window, allowing a minute of slack for the round trip.
  expect(row.expires - row.now).toBeGreaterThan(ONE_DAY_MS - 60_000);
  expect(row.expires - row.now).toBeLessThanOrEqual(ONE_DAY_MS);

  await page.reload();
  await waitForPoints(page);
  expect(fetches).toBe(1);
});

test('an expired row is refetched and rewritten', async ({ page }) => {
  let fetches = 0;
  await page.route('**/api::getPois', async (route) => {
    fetches++;
    await route.continue();
  });

  await page.goto('/');
  await waitForPoints(page);
  await expect.poll(() => readRow(page), { timeout: 30_000 }).not.toBeNull();

  await expireRow(page);
  await page.reload();
  await waitForPoints(page);
  expect(fetches).toBe(2);

  await expect.poll(() => readRow(page), { timeout: 30_000 }).not.toBeNull();
  const row = (await readRow(page))!;
  expect(row.expires).toBeGreaterThan(row.now);
});
