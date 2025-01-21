import { test, expect } from '@playwright/test';


test('View a blog', async ({ page }) => {
    // await page.goto('/home');
    console.log('View Blog fired' + console.log(process.env.URL));
    await page.goto('/');

    const suggestedBlogs = await page.locator('.blog-list-one-line-results').nth(1); //switched this from 0 to 1 on production and local
    await suggestedBlogs.locator('.blog-card-small').nth(1).click();
    const newTabPromise = page.waitForEvent("popup");
    await page.getByRole('button', { name: "View This Blog" }).click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();
    await expect(newTab).not.toHaveURL(/wildernet/);
});

