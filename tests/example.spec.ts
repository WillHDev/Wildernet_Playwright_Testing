import { test, expect } from '@playwright/test';
import { title } from 'process';
import { Browser } from 'puppeteer-core';
import path from 'path';
const { chromium } = require('playwright');



test('Upload blog', async ({ page }) => {
  await page.goto('https://thewildernet.com/home');
  // await page.getByText('Login').click();
  // await page.type('input[placeholder="example@email.com"]', 'honor.roll.tutor@gmail.com'); 
  // await page.getByRole('button', { name: 'Continue' }).click();
  // await page.type('input[placeholder="Password"]', 'Mrwhiskers1!'); 
  // //await page.locator('button[class="undefined"]').click(); - JASON
  // await page.getByRole('button', { name: "Log in" }).click();
  await page.getByText('Upload a Blog').click();
  await page.setInputFiles('input[type="file"]', "C:\\Users\\willv\\Documents\\wildernet\\tests\\images\\marginalRevolution.jpg");
  await page.getByRole('button', { name: "Crop & Apply"}).click();
  await page.getByPlaceholder('Enter Blog URL').fill('https://marginalrevolution.com');
  await page.getByPlaceholder('Enter Blog title').fill('Marginal Revolution');
  await page.getByPlaceholder('Add a description of the blog').fill('An economics blog about culture and assorted fascinations from around the internet');
  await page.getByRole('button', { name: "Continue" }).click();
 // await page.getByRole('button', { name: "Publish" }).click();
});

// test.beforeAll('Authenticate user', async () => {
//   const browser = await chromium.launch();
// const page = await browser.newPage();
//   await page.goto('https://thewildernet.com/home');
//   await page.getByText('Login').click();
//   await page.type('input[placeholder="example@email.com"]', 'honor.roll.tutor@gmail.com'); 
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.type('input[placeholder="Password"]', 'Mrwhiskers1!'); 
//   //await page.locator('button[class="undefined"]').click(); - JASON
//   await page.getByRole('button', { name: "Log in" }).click();

// });

