//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Hard Assertions in Playwright', async ({ page }) => {

    //Navigate to URL
    //await page.goto('https://www.youtube.com/');
    await page.goto('https://www.amazon.in/');

    //Hard Assertions (Visible,Editable,Enabled,Empty)
    // await expect(page.getByPlaceholder('Search',{exact: true}).first()).toBeVisible();
    // await expect(page.getByPlaceholder('Search',{exact: true}).first()).toBeEditable();
    // await expect(page.getByPlaceholder('Search',{exact: true}).first()).toBeEnabled();
    // await expect(page.getByPlaceholder('Search',{exact: true}).first()).toBeEmpty();

    //Hard Assertions (URL,Title,text,count)

    //await expect(page).toHaveURL('https://www.youtube.com/');
    //await expect(page).toHaveTitle('YouTube');
    // await page.getByRole('searchbox',{exact: true}).first().click();
    // await page.getByRole('searchbox',{exact: true}).first().fill('Television');
    // await page.getByRole('searchbox',{exact: true}).first().press('Enter');
    await page.locator('//a[@data-csa-c-content-id="nav_cs_mobiles"]').click()
    
    await expect(page).toHaveURL('https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles');
    await expect(page.locator('//div[@class="sl-sobe-carousel-header"]').first()).toHaveText('Latest launches in Mobiles & Accessories');
    await expect(page.locator('//div[@class="sl-sobe-carousel-header"]')).toHaveCount(1);

    //Hard assertions disabled
    //await expect(page.locator('//div[@class="sl-sobe-carousel-header"]')).toBeDisabled();
    // await page.pause();
})