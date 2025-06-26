//Import Plawright module
import { test, expect } from '@playwright/test';
import testData from '../../TestData/Test_Data.json';

//login before each test
test.beforeEach(async({page}) => {

// Navigating to the URl
await page.goto(testData.SalesforceURL);
//Asserting Login Page
await expect(page.getByAltText('Salesforce')).toBeVisible();

//Entering Login Credentials and Logging in
await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill(testData.Username);
await page.getByRole('textbox', { name: 'Username' }).press('Tab');
await page.getByRole('textbox', { name: 'Password' }).fill(testData.Password);
await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

//Validate the login page
await expect(page.locator('(//div[@class="slds-global-header__logo"])[1]')).toBeVisible();
await expect(page.locator('(//div[@class="slds-global-header__logo"]//span[@class="slds-assistive-text"])[1]')).toHaveText('EIPL');
})



test.describe('Popup Haldling Suit', () =>{

//Add a new Lead
test('Add new lead', async ({ page }) => {
test.setTimeout(150_000);
  await expect(page.getByRole('link', { name: 'Leads' })).toBeVisible();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('button', { name: 'New' }).click();

  //Popup viibility assertion
  await expect(page.locator('[class="slds-modal__container"]')).toBeVisible();
  await expect(page.locator('#modal-heading-01')).toContainText('New Lead');

  //DropDown handling in form
  await page.getByRole('combobox', { name: 'Salutation' }).click();
  await page.getByRole('option', { name: 'Mrs.' }).locator('span').nth(1).click();
  // Fill data fro Jason File
  await page.getByRole('textbox', { name: 'First Name' }).fill(testData.Leadname);
  await page.getByRole('textbox', { name: '*Last Name' }).fill(testData.Lastname);
  await page.getByRole('combobox', { name: 'Project Type' }).click();
  await page.getByRole('option', { name: 'Villas' }).click();
  await page.getByRole('textbox', { name: '*Primary Phone' }).fill(testData.PriPhone1);
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill(testData.Email);
  await page.getByRole('combobox', { name: 'Lead source' }).click();
  await page.getByRole('option', { name: 'Facebook' }).locator('span').nth(1).click();
  await page.getByRole('combobox', { name: 'Project Name' }).click();
  await page.getByRole('option', { name: 'Treasure Trove' }).locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();
  //Phone number Validation
  await expect(page.locator('(//div[@aria-live="polite"])[4]')).toContainText('Phone number must be 10 digits for India');
  await page.getByRole('textbox', { name: '*Primary Phone' }).fill(testData.PriPhone2);
  await page.getByRole('button', { name: 'Save' }).click();
});


//Edit the lead
test('Edit an added lead', async ({ page }) => {
test.setTimeout(150_000)
await page.getByRole('link', { name: 'Leads' }).click();
//Click on the first row element (Locator written manually)
await page.locator('(//tr[@role="row"])[2]//td[@role="gridcell"]//span//div//lightning-primitive-custom-cell//lst-list-view-row-level-action//lightning-button-menu//button[@type="button"]').click();
await page.getByRole('menuitem', { name: 'Edit', exact: true }).click();
await expect(page.locator('[class="modal-body scrollable slds-modal__content slds-p-around_medium"]')).toBeVisible();
await expect(page.getByLabel('Edit ' + testData.Leadname + ' ' + testData.Lastname).locator('h2')).toContainText('Edit '+ testData.Leadname + ' ' + testData.Lastname);
await expect(page.locator('flexipage-record-home-single-col-no-header-template-desktop2')).toContainText('Lead Information');
await page.getByRole('combobox', { name: 'Project Type' }).click();
await page.getByText('Apartments').click();
await page.getByRole('combobox', { name: 'Project Name' }).click();
await page.getByText('Corner Stone').click();
const element = page.locator('(//legend[@class="slds-form-element__legend slds-form-element__label"])[1]');
await element.scrollIntoViewIfNeeded();
await page.locator('//div[@role="group"]//div//input[@name="Pushed_On__c"]').click();
await page.getByRole('button', { name: '22' }).click();
await page.getByRole('button', { name: 'Save', exact: true }).click();
// await page.locator('(//tr[@role="row"])[2]', { name: testData.Leadname + ' ' + testData.Lastname}).getByRole('button').click();
// await page.getByRole('button', { name: 'Show more actions' }).click();
// await page.getByRole('link', { name: testData.Leadname + ' ' + testData.Lastname }).click();
// await expect(page.locator('records-highlights2')).toContainText('Mrs. ' + testData.Leadname + ' ' + testData.Lastname);
// 
});

});