//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Record at cursor', async ({ page }) => {
test.setTimeout(150_000)
await page.goto('https://www.amazon.in/');
await expect(page.getByRole('link', { name: 'Amazon.in' })).toBeVisible();
await page.getByRole('link', { name: 'MX Player' }).click();
await page.getByRole('link', { name: 'Telugu' }).click();
await expect(page.getByRole('link', { name: 'mx logo' })).toBeVisible();
await page.getByRole('link', { name: 'Click to Search' }).click();
await page.getByRole('searchbox', { name: 'Please enter your search' }).fill('gutar gu');
await page.getByRole('searchbox', { name: 'Please enter your search' }).press('Enter');
await expect(page.getByRole('heading')).toContainText('Results for "gutar gu"');

})