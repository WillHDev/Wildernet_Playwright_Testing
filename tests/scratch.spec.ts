import { test, expect } from '@playwright/test';

test('Test env', async ({ page }) => {
console.log(process.env.URL);
}); 

//Changes made after cloning feature:

//1. removed env
//2. commented out env lines at top of config


//URL='https://thewildernet.com'

