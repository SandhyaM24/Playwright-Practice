//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Keyboard actions in playwright', async ({ page }) => {

    //Navigate to URL
    await page.goto('https://www.amazon.in/');

    //Search text box and enter input
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).first().click();
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).first().fill('Mobiles');
    //await page.getByRole('searchbox', { name: 'Search Amazon.in' }).first().press('Enter');

    //Selecting and deleting text
    // await page.getByRole('searchbox', { name: 'Search Amazon.in' }).first().click();
    // await page.keyboard.press('Control+A');
    // await page.keyboard.press('Delete');
    // await page.pause();

    //Tab and enter
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).first().press('Tab');
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).first().press('Enter');
    await page.pause();
})