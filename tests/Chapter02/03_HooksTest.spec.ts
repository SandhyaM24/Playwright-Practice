//Import Plawright module
import { test, expect } from '@playwright/test'

test.beforeAll(async() => {
    console.log('Running before all tests...');
})


test.beforeEach(async({page}) => {
    console.log('Running before each test..');
    await page.goto('https://www.google.com/');
})

test.afterEach(async() => {
    console.log('Running after each test...');
})

test.afterAll(async() => {
    console.log('Running after all tests...');
})
//Write a test
test('Test 1', async ({ page }) => {
    console.log('Test 1 execution started..')

    //Navigate to URL
    //await page.goto('https://www.google.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    //Click on playlist
   // console.log('Test 1 execution ended...');
    
})


//Write a test
test('Test 2', async ({ page }) => {
    console.log('Test 2 execution started..');

    //Navigate to URL
    //await page.goto('https://www.google.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    // npx playwright test Chapter02/03_HooksTest.spec.tsconsole.log('Test 2 execution ended...');
    
})