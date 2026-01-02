const { Builder, By, until } = require('selenium-webdriver');

// POSITIVE LOGIN TEST
async function positiveLoginTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.saucedemo.com/');

    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    await driver.wait(until.urlContains('inventory.html'), 5000);
    console.log('✅ Positive login test passed');

  } finally {
    await driver.quit();
  }
}

// NEGATIVE LOGIN TEST
async function negativeLoginTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.saucedemo.com/');

    await driver.findElement(By.id('user-name')).sendKeys('invalid_user');
    await driver.findElement(By.id('password')).sendKeys('wrong_password');
    await driver.findElement(By.id('login-button')).click();

    await driver.wait(
      until.elementLocated(By.className('error-message-container')),
      5000
    );

    console.log('✅ Negative login test passed');

  } finally {
    await driver.quit();
  }
}

// RUN TESTS
(async function runTests() {
  await positiveLoginTest();
  await negativeLoginTest();
})();
