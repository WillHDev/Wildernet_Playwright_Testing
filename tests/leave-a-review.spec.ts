import { test, expect } from '@playwright/test';
import { title } from 'process';


test('Post a review for a blog', async ({ page }) => {
    await page.goto('/home');
    //Jason
    const suggestedBlogs = await page.locator('.blog-list-one-line-results').nth(0);
    await suggestedBlogs.locator('.blog-card-small').nth(1).click();
    await page.getByRole('button', { name: "Leave a Review" }).click();
    // await page.getByLabel('Review Title').fill('Test blog review title');
    await page.getByPlaceholder('Enter a short review title').fill('Test Title');
    await page.getByPlaceholder('Write your review here').fill('Test review body');
    //await page.getByTestId('RadioButtonUncheckedIcon').nth(0).check();
    const recommendRadioBtn = await page.locator('.css-p58oka').locator('input').nth(0);
    await recommendRadioBtn.check();
    const dropDown = await page.locator('#react-select-2-input');
    await dropDown.click();
    await dropDown.selectOption({ label: 'Culture' });
    await expect(page.locator('.interest-card')).toHaveText('Culture');
    //await page.getByRole('button', { name: "Leave a Review" }).click();




    //TODO: Add test for 'create tag'
    // Review Title
    // Review
    // Select or Create Review Tags
    // const newTabPromise = page.waitForEvent("popup");
    // await page.getByRole('button', { name: "View This Blog" }).click();
    // const newTab = await newTabPromise;
    // await newTab.waitForLoadState();
    // await expect(newTab).not.toHaveURL(/wildernet/);
});