/// <reference types="node" />
import { expect, test as setup } from '@playwright/test';

// Sign in once through login.html and persist the session; the admin project
// reuses it via storageState. Create the user before the suite, with no server
// holding the gcdata/ lock:
//   bin/greycat run runtime::Identity::create e2e admin
//   bin/greycat run runtime::Identity::set_password e2e \
//       $(printf 'e2e-password' | sha256sum | cut -d' ' -f1)
// The hash, not the plaintext: set_password stores the string verbatim and
// login.html sends sha256hex(password), so a plaintext secret never matches.
const AUTH_FILE = 'e2e/.auth/admin.json';
const USER = process.env.E2E_USER ?? 'e2e';
const PASSWORD = process.env.E2E_PASSWORD ?? 'e2e-password';

setup('authenticate as admin', async ({ page }) => {
  await page.goto('/login.html');
  await page.locator('#username').fill(USER);
  await page.locator('#password').fill(PASSWORD);
  await page.locator('#signin').click();
  // A successful login lands on the app, whose nav shows the admin-only entry.
  await expect(page.getByRole('link', { name: 'Reconcile' })).toBeVisible({ timeout: 20_000 });
  await page.context().storageState({ path: AUTH_FILE });
});
