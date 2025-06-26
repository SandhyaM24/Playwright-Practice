//Import Plawright module
import { test, expect } from '@playwright/test';


test.describe('Tags Suite', () =>{




test('Enter Search term in search box',{tag: ['@smoketesting']}, async ({ page }) => {
test.setTimeout(150_000)
await page.goto('https://www.amazon.in/');
await expect(page.getByRole('link', { name: 'Amazon.in' })).toBeVisible();
await page.getByRole('link', { name: 'MX Player' }).click();
await page.getByRole('link', { name: 'Telugu' }).click();
await expect(page.getByRole('link', { name: 'mx logo' })).toBeVisible();
await page.getByRole('link', { name: 'Click to Search' }).click();
await page.getByRole('searchbox', { name: 'Please enter your search' }).fill('gutar gu');
await page.getByRole('searchbox', { name: 'Please enter your search' }).press('Enter');

});



test('Iframes-handling drag and drop elements',{tag: ['@smoketesting', '@regressiontesting']}, async ({ page }) => {

    //Navigate to URL
    await page.goto('https://jqueryui.com/droppable/');

    // identify the frame
    const iframe = page.frameLocator('[class="demo-frame"]');

    //Drag element, Drop element

    const dragElement = iframe.locator('[id="draggable"]');
    const dropElement = iframe.locator('[id="droppable"]');
    await dragElement.dragTo(dropElement);
});


test('Hard Assertions in Playwright', {tag: ['@smoketesting', '@regressiontesting']}, async ({ page }) => {

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
});
test('Keyboard actions in playwright',{tag: ['@regressiontesting']}, async ({ page }) => {

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
});

});
