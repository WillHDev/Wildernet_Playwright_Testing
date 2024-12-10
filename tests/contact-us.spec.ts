import { test, expect } from '@playwright/test';

//Submit and assert success message visible are commented out to prevent too many test emails from sending

test('Fill out and submit "Contact Us" form', async ({ page }) => {
  await page.goto('https://thewildernet.com/home');
  await page.getByText('Contact Us').click();
  await page.getByPlaceholder('Your Email').fill('honor.roll.tutor@gmail.com');
  await page.getByLabel('Subject Line').fill('Test - this is just a test');
  await page.getByLabel('Message').fill('Test message');
//await page.getByRole('button', { name: "Submit" }).click();
//await expect(page.getByText('Thank you for feedback!')).toBeVisible();
});