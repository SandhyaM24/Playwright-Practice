//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Selecting Date in playwright', async ({ page }) => {

    //Navigate to URL
    await page.goto('https://jqueryui.com/datepicker/');

    //iframe identification
    const iframe = page.frameLocator('[class="demo-frame"]');

    //Hardcoded date 
    //await iframe.locator('[id="datepicker"]').fill('12/11/2024');

    //Selecting dynamic date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('.ui-datepicker-today').click();

    //Selecting past date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text="10"').click();
    // await page.pause();

    //Selecting past date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text="10"').click();

    //Selecting future date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="23"').click();
})