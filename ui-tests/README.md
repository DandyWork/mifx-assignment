## UI Automation Testing (SauceDemo)

This task implements UI automation testing for the SauceDemo application using Python and Selenium WebDriver. 
The objective of this automation is to validate the login functionality by covering both positive and negative scenarios as required in the assignment. 
The target application under test is https://www.saucedemo.com/ and the automation is executed using Google Chrome with ChromeDriver managed automatically via webdriver-manager.

The automation verifies that a user is able to log in successfully using a valid username and password and is redirected to the inventory dashboard page. 
It also validates negative login behavior by attempting to log in with invalid credentials and confirming that an appropriate error message is displayed on the login page. 
These scenarios align with the functional requirements provided in the assignment and the manual test cases created earlier.

## How to Run UI Tests
To execute the automation, Python version 3.9 or higher and Google Chrome must be installed on the machine. 
An active internet connection is required so that ChromeDriver can be downloaded automatically. 
Before running the test, the required dependencies must be installed using the following command:

python -m pip install selenium webdriver-manager

After the dependencies are installed, the automation script can be executed from the ui-tests directory using the following command:

python tests/test_login.py

When the script is executed, a Chrome browser window will open automatically and the login scenarios will be performed sequentially. 
If the login is successful, the user is redirected to the dashboard page and a success message is printed in the console.
 For invalid login attempts, an error message is displayed and validated. 
 A successful execution will produce console output similar to the following:

Positive login test passed
Negative login test passed

## Test Execution Evidence
Execution proof in the form of screenshots or video recordings is provided in the proof directory as required by the assignment. 
From a QA perspective, explicit waits are used to improve test stability and reliability, and the automation logic is kept simple and readable to support maintainability and future enhancements. 
This automation was created specifically for QA technical assessment purposes and can be easily extended to include additional scenarios or integrated into a test framework such as pytest.


## Author
**Dandy Purwanto**