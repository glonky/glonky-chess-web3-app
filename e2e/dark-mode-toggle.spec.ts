import { test, expect } from '@playwright/test';

test.skip('should toggle to light mode when clicking toggle', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('html')).toHaveClass('h-full light');
  await page.click('data-testid=dark-mode-toggle');
  await expect(page.locator('html')).toHaveClass('h-full dark');
});
