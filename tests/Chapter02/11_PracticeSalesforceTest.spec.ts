//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Soft Assertions in Playwright', async ({ page }) => {

//Navigate to URL
await page.goto('https://test.salesforce.com/');

//Validate login 

await expect(page.getByAltText('Salesforce')).toBeVisible();
await expect(page.locator('//span[@class="zen-assistiveText"]')).toHaveText('Salesforce');

await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('admin@eipl.com.sbox1');
await page.getByRole('textbox', { name: 'Username' }).press('Tab');
await page.getByRole('textbox', { name: 'Password' }).fill('Salesforce@25');
await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
await page.goto('https://java-velocity-5946--sbox1.sandbox.lightning.force.com/lightning/page/home');
await expect(page.locator('div').filter({ hasText: /^EIPL$/ }).nth(1)).toBeVisible();
await page.getByRole('button', { name: 'View profile' }).click();
await expect(page.locator('[class="profile-link-label"]')).toContainText('Chaithanya Jose');
await page.getByRole('button', { name: 'Close' }).dblclick();



})