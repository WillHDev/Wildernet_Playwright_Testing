import { test, expect } from '@playwright/test';
import { title } from 'process';
import { Browser } from 'puppeteer-core';
import path from 'path';

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
    // const fileChooserPromise = page.waitForEvent('filechooser');
    // await page.locator("input[type='file']").click();
    // const fileChooser = await fileChooserPromise;
   // await fileChooser.setFiles('./tests/images/marginaRevolution.jpg', 100000);
   // await page.locator()
//await path.join(__dirname, '../Assets/Autoamted_Doc_2.pdf)
            //const filePath = path.relative(process.cwd(), asset('file to upload.txt')); 
   //await page.setInputFiles('input[type="file"]', './tests/images/marginaRevolution.jpg');
   await page.setInputFiles('input[type="file"]', "C:\\Users\\willv\\Documents\\wildernet\\tests\\images\\marginalRevolution.jpg");
   
   
   await page.getByRole('button', { name: "Crop & Apply"}).click();
   //await page.click('#file-submit');

   await page.getByPlaceholder('Enter Blog URL').fill('https://marginalrevolution.com');
   await page.getByPlaceholder('Enter Blog title').fill('Marginal Revolution');
   await page.getByPlaceholder('Add a description of the blog').fill('An economics blog about culture and assorted fascinations from around the internet');
   await page.getByRole('button', { name: "Continue" }).click();

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
