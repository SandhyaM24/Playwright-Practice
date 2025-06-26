import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navigate to URl', async() => {
    await page.goto('https://github.com/');
  })
   console.log('Test execution started');
  await test.step('Go to Sign In page', async() => {
    await page.getByRole('link', { name: 'Sign in' }).click();
  })
  await test.step('Enter Credentials', async() => {
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('Sand@igo.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  })
  await test.step('Click on SIgn In Button', async() => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })
  await test.step('Validate error message', async() => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  })
});