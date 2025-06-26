import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://www.makemytrip.com/');
await page.locator('.commonModal__close').click();
await page.getByRole('listitem').filter({ hasText: 'Round Trip' }).locator('span').click();
await page.getByRole('textbox', { name: 'From DEL, Delhi Airport India' }).click();
await page.getByText('Bengaluru, India').click();
await page.getByRole('textbox', { name: 'To BLR, Bengaluru' }).click();
await page.getByText('Pune, India').click();
//await page.getByText('30', { exact: true }).first().click();
await page.getByLabel('Sat Jun 28 2025').getByText('28').click();
await page.getByLabel('Fri Jul 11 2025').getByText('11').click();
await page.getByText('1 Traveller').click();
await page.getByText('‎5').first().click();
await page.getByText('‎2').nth(1).click();
await page.getByText('First Class').click();
await page.getByRole('button', { name: 'APPLY' }).click();
await page.getByText('Search').click();
});
