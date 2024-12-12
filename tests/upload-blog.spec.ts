import { test, expect } from '@playwright/test';

test('Upload blog', async ({ page }) => {
  await page.goto('/home');

  await page.getByText('Upload a Blog').click();
  await page.setInputFiles('input[type="file"]', "C:\\Users\\willv\\Documents\\wildernet\\tests\\images\\marginalRevolution.jpg");
  await page.getByRole('button', { name: "Crop & Apply"}).click();
  await page.getByPlaceholder('Enter Blog URL').fill('https://marginalrevolution.com');
  await page.getByPlaceholder('Enter Blog title').fill('Marginal Revolution');
  await page.getByPlaceholder('Add a description of the blog').fill('An economics blog about culture and assorted fascinations from around the internet');
  await page.getByRole('button', { name: "Continue" }).click();
 // await page.getByRole('button', { name: "Publish" }).click();
}); 