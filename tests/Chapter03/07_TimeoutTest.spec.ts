//Import Plawright module
import { test, expect } from '@playwright/test'


test('Time outs in playwright', async ({ page }) => {
//test.setTimeout(2 *60 * 1000);
    await page.goto('https://test.salesforce.com/');
    //asserting the logo text
    await expect(page.locator('//span[@class="zen-assistiveText"]')).toHaveText('Salesforce',{timeout: 4000});
    await page.screenshot({path : 'tests/Chapter03/07_TimeoutTest.spec.ts-snapshots/SalesforceLoginPage-Google-Chrome-win32.png'});
    await expect(page).toHaveScreenshot('SalesforceLoginPage.png');
    
    //await page.locator('[id="username"]').fill('sandhya.mora@ingwalabs.com');

    // await page.screenshot({path : 'tests/Chapter03/07_TimeoutTest.spec.ts-snapshots/SalesforceLoginPage1-Google-Chrome-win32.png'});
    // await expect(page).toHaveScreenshot('SalesforceLoginPage1.png');
    //await page.waitForTimeout(60000);
    await page.getByRole('textbox', { name: 'Username' }).fill('admin@eipl.com.sbox1');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Salesforce25');
    await page.getByRole('button', { name: 'Leads' }).click({timeout: 2000});
    await page.goto('https://java-velocity-5946--sbox1.sandbox.lightning.force.com/lightning/page/home');
    await page.getByRole('link', { name: 'Leads' }).click();

});





