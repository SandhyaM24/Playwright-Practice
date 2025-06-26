//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Handling Dropdown list in playwright', async ({ page }) => {

    //Navigate to URL
    await page.goto('https://www.facebook.com/');

    // Navigate to Create new account page

    await page.getByRole('button', { name: 'Create new account'}).click();

    //Select dropdown list option
    await page.getByLabel('Month').selectOption('3');

    //Select dropdown value using visual text
    await page.getByLabel('Month').selectOption('Aug');

    //Validate all options
    await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

   

})
