//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('My first playwright typescript test', async ({ page }) => {
    console.log('Test execution started');
    //Navigate to URL
    await page.goto('https://www.google.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    //Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
    //Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - Youtube');
})
