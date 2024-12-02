import { test, expect } from '@playwright/test';
import { Browser } from 'puppeteer-core';

test('Authenticate user', async ({ page }) => {
  await page.goto('https://thewildernet.com/home');
  await page.getByText('Login').click();
  //await page.getByPlaceholder('example@email.com').fill('honor.roll.tutor@gmail.com');

  //await page.getByPlaceholder('Password').fill('Mrwhiskers1!');

  
await page.type('input[placeholder="example@email.com"]', 'honor.roll.tutor@gmail.com'); 
await page.getByRole('button', { name: 'Continue' }).click();
await page.type('input[placeholder="Password"]', 'Mrwhiskers1!'); 
//await page.locator('button[class="undefined"]').click(); - JASON
await page.getByRole('button', { name: "Log in" }).click();

  
  await page.getByText('Upload a Blog').click();
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator("input[type='file']").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('./tests/images/marginaRevolution.jpg', 100000);
 // await page.locator()

  // const imageUpload = await page.locator("input[type='file']");
  // await imageUpload.setInputFiles()


  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
