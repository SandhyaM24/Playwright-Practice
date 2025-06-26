//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Locators in playwright', async ({ page }) => {

    //Navigate to URL
    //await page.goto('https://github.com/bakkappaN');


    //Get by role
    //await page.getByRole('link',{name : 'Sign in'}).click();

    //Get by label
    //await page.getByLabel('Homepage', {exact: true}).first().click();

    //Get by AltText
    //await page.getByAltText("View BakkappaN's full-sized avatar").click();

    //Get by TestID
    //await page.getByTestId("projects").first().click();

    //Get by Text
    //await page.getByText("Sign up").click(); 

    //Get by Plaeholder, xpath, CSS Selector
    //await page.goto('https://www.youtube.com/@testerstalk');

    //await page.getByPlaceholder('Search').fill('Testers Talk');
    //await page.locator('//input[@name="search_query"]').fill('Testers Talk');
    //await page.locator('input[name="search_query"]').first().fill('Testers Talk');

    //Ge by Title
    await page.goto('https://www.google.com/');

    await page.getByTitle('Search').fill('Playwright by testers talk');



})