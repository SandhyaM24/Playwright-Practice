//Import Plawright module
import { test, expect } from '@playwright/test'


const searchterms = ['Playwright', 'Automation', 'TypeScript']

for (const searchterm of searchterms) {
    //Write a test
    test(`parameterized test ${searchterm}`, async ({ page }) => {
        console.log('Test execution started');
        //Navigate to URL
        await page.goto('https://www.youtube.com/');

        //Search with keywords
        await page.getByRole('combobox', { name: 'Search' }).fill(searchterm);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    
        
        
        
    })
}