// A tiny TTL cache over IndexedDB, for payloads too large to refetch on every
// page load. This is an MPA: an in-memory memo dies at every navigation, and
// `localStorage` is synchronous, string-only and capped around 5 Mb - neither
// can hold the map's golden-point set.
//
// Every operation is best-effort. IndexedDB is unavailable in some private
// windows, can be blocked by storage settings, and can refuse a write on quota.
// A failure resolves as a cache *miss* rather than rejecting, so a caller that
// forgets to guard still renders - just without the cache.

const DB_NAME = 'mengplaz';
const DB_VERSION = 1;
const STORE = 'cache';

/** One day, the default freshness window for cached payloads. */
export const ONE_DAY_MS = 24 * 60 * 60 * 1000;

interface CacheRow<T> {
  value: T;
  /** Epoch milliseconds past which the row is stale and must be refetched. */
  expires: number;
}

let db: Promise<IDBDatabase> | undefined;

function openDb(): Promise<IDBDatabase> {
  // Memoised: one connection per document, reused by every call.
  db ??= new Promise<IDBDatabase>((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) {
        req.result.createObjectStore(STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('indexedDB.open failed'));
    // A newer version opened in another tab leaves this request hanging forever.
    req.onblocked = () => reject(new Error('indexedDB.open blocked'));
  });
  return db.catch((err) => {
    // Do not memoise a failure: a later call may well succeed.
    db = undefined;
    throw err;
  });
}

function promisify<T>(req: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('IndexedDB request failed'));
  });
}

/**
 * Read `key`, or `undefined` when it is absent, expired or unreadable. An
 * expired row is dropped on the way out so it cannot occupy quota forever.
 */
export async function idbGet<T>(key: string): Promise<T | undefined> {
  try {
    const conn = await openDb();
    const row = await promisify<CacheRow<T> | undefined>(
      conn.transaction(STORE, 'readonly').objectStore(STORE).get(key),
    );
    if (row === undefined) {
      return undefined;
    }
    if (row.expires <= Date.now()) {
      await idbDelete(key);
      return undefined;
    }
    return row.value;
  } catch {
    return undefined;
  }
}

/**
 * Store `value` under `key` for `ttlMs`. Values are structured-cloned, so typed
 * arrays are stored as-is - which is why callers pack large columnar payloads
 * into them rather than into object arrays.
 */
export async function idbSet<T>(key: string, value: T, ttlMs: number): Promise<void> {
  try {
    const conn = await openDb();
    const row: CacheRow<T> = { value, expires: Date.now() + ttlMs };
    await promisify(conn.transaction(STORE, 'readwrite').objectStore(STORE).put(row, key));
  } catch {
    // Quota, private mode, blocked storage: the cache is an optimisation only.
  }
}

/** Drop `key`, if it is there. */
export async function idbDelete(key: string): Promise<void> {
  try {
    const conn = await openDb();
    await promisify(conn.transaction(STORE, 'readwrite').objectStore(STORE).delete(key));
  } catch {
    // Same as above: nothing a caller can usefully do about it.
  }
}
