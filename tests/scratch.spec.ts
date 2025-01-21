import { test, expect } from '@playwright/test';

test('Test env', async ({ page }) => {
console.log('scratch ' + process.env.URL);
}); 

// //console.log('Base URL:' + baseURL);
    //console.log('Base URL:' + baseURL);


    //1. When loginauth.json is cleared (empty file), got the following error Error reading storage state from ./LoginAuth.json:
//Unexpected end of JSON input

//2. when baseurl switched to prod, problem is resolved