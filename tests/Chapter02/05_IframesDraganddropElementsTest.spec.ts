//Import Plawright module
import { test, expect } from '@playwright/test'
//Write a test
test('Iframes-handling drag and drop elements', async ({ page }) => {

    //Navigate to URL
    await page.goto('https://jqueryui.com/droppable/');

    // identify the frame
    const iframe = page.frameLocator('[class="demo-frame"]');

    //Drag element, Drop element

    const dragElement = iframe.locator('[id="draggable"]');
    const dropElement = iframe.locator('[id="droppable"]');
    await dragElement.dragTo(dropElement);
})
