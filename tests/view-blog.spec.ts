import { test, expect } from '@playwright/test';


test('View blog', async ({ page }) => {
    console.log(process.env.URL);
    await page.goto('/home');
    const suggestedBlogs = await page.locator('.blog-list-one-line-results').nth(1);
    await suggestedBlogs.locator('.blog-card-small').nth(1).click();
    const newTabPromise = page.waitForEvent("popup");
    await page.getByRole('button', { name: "View This Blog" }).click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();
    await expect(newTab).not.toHaveURL(/wildernet/);
});
//3-400   now 30-40k alqueda and associated groups