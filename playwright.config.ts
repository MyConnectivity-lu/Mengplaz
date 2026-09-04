import { defineConfig, devices } from '@playwright/test';

// `greycat serve` serves the prebuilt webroot and the API on one origin, so run
// `pnpm exec vp build` before the suite (see the test:e2e:full script). It locks
// gcdata/, so no dev server may be running alongside it.
//
// Anonymous browsing is a supported mode here - project.gcl grants the `public`
// role the `api` permission - so there are two browser projects: one signed in
// as an admin, one with no session at all. Specs live in e2e/admin/ and
// e2e/anon/ respectively.
const PORT = Number(process.env.E2E_PORT ?? 8080);
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: 'e2e',
  // One server, one gcdata lock: the suite is not safe to run in parallel.
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'list' : [['list'], ['html', { open: 'never' }]],
  use: { baseURL: BASE_URL, trace: 'on-first-retry' },
  projects: [
    { name: 'setup', testMatch: /auth\.setup\.ts/ },
    {
      name: 'chromium-admin',
      testMatch: /admin\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], storageState: 'e2e/.auth/admin.json' },
      dependencies: ['setup'],
    },
    {
      name: 'chromium-anon',
      testMatch: /anon\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'bin/greycat serve',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
