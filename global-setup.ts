import { Browser, chromium, expect, Page } from '@playwright/test';

async function globalSetup() {
  
    const browser: Browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://thewildernet.com/home');
    await page.getByText('Login').click();
    await page.type('input[placeholder="example@email.com"]', 'honor.roll.tutor@gmail.com'); 
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.type('input[placeholder="Password"]', 'Mrwhiskers1!'); 
    await page.getByRole('button', { name: "Log in" }).click();
    await page.waitForLoadState('networkidle');
    await page.context().storageState({ path: "./LoginAuth.json" });
    await browser.close();
}

export default globalSetup;