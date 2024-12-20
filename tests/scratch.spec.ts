import { test, expect } from '@playwright/test';

test('Test env', async ({ page }) => {
console.log(process.env.URL);
}); 

//