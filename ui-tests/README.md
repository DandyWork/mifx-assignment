# UI Automation – SauceDemo Login

## Description
This project contains UI automation tests for the SauceDemo application login feature.
The tests cover both positive and negative login scenarios using Selenium WebDriver with JavaScript.

## Tools & Technology
- Node.js
- Selenium WebDriver
- ChromeDriver
- JavaScript

## Test Scenarios Automated
1. Positive Login  
   - Login using valid credentials  
   - Verify user is redirected to inventory (dashboard) page  

2. Negative Login  
   - Login using invalid credentials  
   - Verify error message is displayed  

Positive and negative login tests are executed in separate browser sessions to avoid shared authentication state and reduce flaky behavior.

## Website Under Test
https://www.saucedemo.com/

## How to Run the Test
```bash
npm install
node tests/login.test.js

> Test execution proof is available in the `proof` folder.
