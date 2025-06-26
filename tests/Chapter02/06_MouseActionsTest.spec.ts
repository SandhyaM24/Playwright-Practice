//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Handling Mouse Actions', async ({ page }) => {

    //Navigate to URL
    await page.goto('https://www.amazon.in/');

    //Left button click
    //await page.getByRole('link', {name :'Mobiles'}).click({ button:'left'});

    //Middle button click
    //await page.getByRole('link', {name :'Mobiles'}).click({ button:'middle'});

    //Right button click
   //await page.getByRole('link', {name :'Mobiles'}).click({ button:'right'});

   //Hover on an element
   //await page.getByRole('link', {name :'Account & Lists'}).hover();

   //Double click on an element
   await page.getByRole('link', {name: 'Explore all'}).first().dblclick();
})