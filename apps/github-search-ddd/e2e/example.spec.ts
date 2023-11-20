import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h2 to contain a substring.
  expect(await page.locator('h2').innerText()).toContain('Search more');
});

test('Can search', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[name="q"]', 'playwright');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForLoadState('networkidle');

  expect(await page.locator('h2').innerText()).toContain('Total results found');
});
