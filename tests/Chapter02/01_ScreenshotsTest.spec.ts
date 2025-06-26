//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Capture Screenshots in Playwright', async ({ page }) => {

    //Navigate to URL
    await page.goto('https://www.youtube.com/@testerstalk');

    //Capture screenshot of element
    await page.locator('#page-header-container').screenshot({path : './Screenshots/ElementScreenshot.png'});

    //Capture screenshot of page
    await page.screenshot({path : './Screenshots/PageScreenshot.jpeg'});

    //capture screenshot of full page
    await page.screenshot({path : './Screenshots/FullPageScreenshot.jpeg', fullPage : true});

})