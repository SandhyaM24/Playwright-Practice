//Import Plawright module
import { test, expect } from '@playwright/test'
import { describe } from 'node:test';


test.describe('Visual comparison Suite',()=> {

test('Visual comparision in playwright', async ({ page }) => {
test.setTimeout(150_000);
    await page.goto('https://test.salesforce.com/')
    await page.screenshot({path : 'tests/Chapter03/06_Visualtest.spec.ts-snapshots/SalesforceLoginPage-Google-Chrome-win32.png'});
    await expect(page).toHaveScreenshot('SalesforceLoginPage.png');
    
    await page.locator('[id="username"]').fill('sandhya.mora@ingwalabs.com')

    await page.screenshot({path : 'tests/Chapter03/06_Visualtest.spec.ts-snapshots/SalesforceLoginPage1-Google-Chrome-win32.png'});
    await expect(page).toHaveScreenshot('SalesforceLoginPage1.png');

});

test('Visual comparision of element in playwright', async ({ page }) => {
test.setTimeout(150_000);
    await page.goto('https://test.salesforce.com/')
    const loginForm = page.locator('[id="content"]');
    await loginForm.screenshot({path : 'tests/Chapter03/06_Visualtest.spec.ts-snapshots/SalesforceLoginform-Google-Chrome-win32.png'});
    await expect(loginForm).toHaveScreenshot('SalesforceLoginform.png');
    
    // await page.locator('[id="username"]').fill('sandhya.mora@ingwalabs.com')

    // await page.screenshot({path : 'tests/Chapter03/06_Visualtest.spec.ts-snapshots/SalesforceLoginPage1-Google-Chrome-win32.png'});
    // await expect(page).toHaveScreenshot('SalesforceLoginPage1.png');

});

});