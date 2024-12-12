import { test, expect } from '@playwright/test';


test('Fill out and submit "Contact Us" form', async ({ page }) => {
    await page.goto('/home');
    const suggestedBlogs = await page.locator('.blog-list-one-line-results').nth(0);
    await suggestedBlogs.locator('.blog-card-small').nth(1).click();
    const newTabPromise = page.waitForEvent("popup");
    await page.getByRole('button', { name: "View This Blog" }).click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();
    await expect(newTab).not.toHaveURL(/wildernet/);
});