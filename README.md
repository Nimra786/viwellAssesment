# QA-Automation-Assesment Project

Welcome to the QA-Automation-Assesment project! This project contains automated tests for [Website: https://automationexercise.com/].


## Prerequisites

Before running the tests, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (recommended latest version)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository:**
git clone https://github.com/Nimra786/viwellAssesment.git

2. **Navigate to the Project Directory:**
cd AutomationAssesment

3. **Install Dependencies:**
`npm install`

## Running Tests
Once the dependencies are installed, you can run the tests. There are two ways to run tests:

### 1. Using the Cypress Test Runner (Interactive Mode):
To run tests interactively in the Cypress Test Runner, use the following command:
`npx cypress open`

This command will open the Cypress Test Runner GUI, where you can select and run individual test files.

### 2. Using Headless Mode:
To run tests in headless mode (without the GUI), use the following command:
`npx cypress run`

### 3. Test Scenarios:
I have use POM technique to structure my test cases.

### i. User Authentication:
Automate the login functionality ensuring successful authentication with valid credentials.
Test invalid login scenarios, such as incorrect username or password, and verify appropriate error messages.

For all these test cases related to login I created two file loginPage.js for objects and loginSpec.cy.js for test cases

### ii.Product Browsing:
Automate the process of browsing products across different categories.
Verify that the product details are displayed correctly on the product page.

For all these test cases related to product I created two file productPage.js for objects and productSpec.cy.js for test cases

### iii.Cart Management:
Automate adding products to the cart and verify successful addition.
Test the removal of items from the cart and verify the updated cart contents.

For all these test cases related to product I created two file cartPage.js for objects and productSpec.cy.js for test cases

### iv.Checkout Process:
Automate the checkout process, including filling in shipping details, selecting payment methods, and completing the purchase.
Verify the successful completion of the order and receipt generation.

For all these test cases related to product I created two file checkoutPage.js for objects and checkoutSpec.cy.js for test cases

### v.Other files
I have created some other pages file to support and automate the process.

### 4.Advanced Requirements:

### i.Data-Driven Testing:
For this part I create user.json in fixture and user faker package to make testing data-Driven.


### ii.Custom Commands:
There were not much to customize so I just make login fucntionality as login command and use it across the system.

### iii.Cross-Browser Testing:
For Cross browser testing I simply use browser option in my cypress.json file , and I can give it as option when I run test cases in headless mode to run test browser from any of the list I have given, and it will run test cases on that browser.
command: `npx cypress run --browser browser-name`

### vi.Parallel Execution:
For this as I didnt configure any cli at this moment so I just add scripts in my package.json and then try to run my script files parallaly.

command: `npm run test:parallel`

### 5.Reporting:
Generate detailed test reports with clear descriptions of test results, including any failures or errors encountered during execution.

- For creation of reports for all test files together,
  Use `npx cypress run --reporter mochawesome`
- For creation for each test case file separately
  Use `npx cypress run --reporter mochawesome --reporter-options "reportFilename=test1"`
  
## 🚀 About Me
- [@Nimra786](https://github.com/Nimra786)
