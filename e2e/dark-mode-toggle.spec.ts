import { test, expect } from '@playwright/test';

test('should toggle to light mode when clicking toggle', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('html')).toHaveClass('light');
  await page.click('data-test-id=dark-mode-toggle');
  await expect(page.locator('html')).toHaveClass('dark');
});
