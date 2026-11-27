import { expect, test } from '@playwright/test';

// The shell test pins that the toggle flips the `wa-*` class and persists it; this
// spec pins that the flip actually re-resolves the token palette. Custom properties
// are read through a probe element rather than `getPropertyValue`, because the
// browser's serialization of a token's raw text is not stable (#ffffff → #fff).

test('flipping the theme re-resolves the surface and text tokens', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  const tokens = () =>
    html.evaluate(() => {
      const probe = document.createElement('div');
      probe.style.backgroundColor = 'var(--gc-surface)';
      probe.style.color = 'var(--gc-text)';
      document.body.appendChild(probe);
      const cs = getComputedStyle(probe);
      const out = { surface: cs.backgroundColor, text: cs.color };
      probe.remove();
      return out;
    });

  const startedDark = await html.evaluate((el) => el.classList.contains('wa-dark'));
  await page.getByRole('button', { name: /theme/i }).click();
  await expect(html).toHaveClass(startedDark ? /wa-light/ : /wa-dark/);

  const flipped = await tokens();
  // The two palettes of `app/theme.css`: near-black surface with light text, or
  // white surface with black text — the pair is the legibility contract.
  if (startedDark) {
    expect(flipped.surface).toBe('rgb(255, 255, 255)');
    expect(flipped.text).toBe('rgb(0, 0, 0)');
  } else {
    expect(flipped.surface).toBe('rgb(24, 27, 32)');
    expect(flipped.text).toBe('rgb(230, 232, 236)');
  }

  // Flipping back restores the starting palette — the toggle is lossless.
  await page.getByRole('button', { name: /theme/i }).click();
  await expect(html).toHaveClass(startedDark ? /wa-dark/ : /wa-light/);
  const restored = await tokens();
  if (startedDark) {
    expect(restored.surface).toBe('rgb(24, 27, 32)');
    expect(restored.text).toBe('rgb(230, 232, 236)');
  } else {
    expect(restored.surface).toBe('rgb(255, 255, 255)');
    expect(restored.text).toBe('rgb(0, 0, 0)');
  }
});
