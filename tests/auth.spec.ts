import { test, expect } from '@playwright/test';


test('Fill out and submit "Contact Us" form', async ({ page }) => {
    await page.goto('/home');
    await page.getByRole('button', { name: "Logout" }).click();
    await page.getByText('Upload a Blog').click();
    await expect(page).toHaveURL(/login-or-signup/);
});