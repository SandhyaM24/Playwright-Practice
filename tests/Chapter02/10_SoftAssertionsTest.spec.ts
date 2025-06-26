//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Soft Assertions in Playwright', async ({ page }) => {

//Navigate to URL
await page.goto('https://www.youtube.com/');
await expect(page).toHaveURL('https://www.youtube.com/');
await expect.soft(page).toHaveTitle('YouTube test');
await expect(page.locator('//span[@class="title style-scope ytd-mini-guide-entry-renderer"]').first()).toHaveText('Home');



// await page.goto('https://www.amazon.in/');
// 
// await page.locator('//a[@data-csa-c-content-id="nav_cs_mobiles"]').click()
    // 
// await expect(page).toHaveURL('https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles');
// await expect(page.locator('//div[@class="sl-sobe-carousel-header"]').first()).toHaveText('Latest launches in Mobiles & Accessories');
// await expect(page.locator('//div[@class="sl-sobe-carousel-header"]')).toHaveCount(2);
// Hard assertions disabled
// await expect(page.locator('//div[@class="sl-sobe-carousel-header"]')).toBeDisabled();
await page.pause();
})
