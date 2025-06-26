import { test, expect } from '@playwright/test';


test('Browser/tab practice in playwright', async ({ page }) => {
await page.goto('https://tgsouthernpower.org/');
await expect(page.getByRole('link', { name: 'TGSPDCL LOGO' })).toBeVisible();
await expect(page.getByRole('navigation')).toContainText('Company Information');
await page.getByRole('link', { name: 'Consumer Services ' }).click();
await expect(page.getByRole('navigation')).toContainText('Consumer Services');
await expect(page.getByRole('navigation')).toContainText('Renewable Energy');
await expect(page.getByRole('navigation')).toContainText('Home');
await expect(page.getByRole('navigation')).toContainText('Tariffs & Regulations');
await expect(page.getByRole('navigation')).toContainText('Tenders');
await expect(page.getByRole('navigation')).toContainText('ACHIEVEMENTS');
await expect(page.getByRole('navigation')).toContainText('CGRF');
await expect(page.getByRole('navigation')).toContainText('EODB');
await expect(page.getByRole('navigation')).toContainText('Contact Us');
await expect(page.getByRole('navigation')).toContainText('Login');


const page1Promise = page.waitForEvent('popup');
await page.getByRole('link', { name: 'CGRF' }).click();
const page1 = await page1Promise;
await expect(page1).toHaveURL("https://webportal.tgsouthernpower.org/CGRF/");
await expect(page1.locator('body')).toContainText('Home');
await expect(page1.locator('body')).toContainText('Complaint Registration');
await expect(page1.locator('body')).toContainText('Complaint Status');
await expect(page1.locator('body')).toContainText('Procedure');
await expect(page1.locator('body')).toContainText('Rules & Regulations');
await expect(page1.locator('body')).toContainText('About US');
await expect(page1.locator('body')).toContainText('CGRF1');
await expect(page1.locator('body')).toContainText('Related Links');
await expect(page1.locator('#custom-tabs-one-person-tab')).toContainText('HOME');
// await page1.getByRole('link', { name: 'Complaint Registration' }).click();
// await page1.getByRole('link', { name: 'About US   ' }).click();
// await page1.getByRole('link', { name: 'Contact US' }).click();
await page1.getByRole('link', { name: 'Rules & Regulations   ' }).click();
await page1.getByRole('link', { name: 'Acts & Rules' }).click();


const page2Promise = page1.waitForEvent('popup');
await page1.getByRole('row', { name: 'Electricity Act 2003 with' }).getByRole('link').click();
const page2 = await page2Promise;
await expect(page2).toHaveURL("https://webportal.tgsouthernpower.org/CGRF/acts/Electricity%20Act%202003%20with%20amendment.pdf");  
});