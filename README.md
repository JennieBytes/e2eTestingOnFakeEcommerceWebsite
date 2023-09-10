# Cypress E2E Testing for FakeShop Website
This repository contains a Cypress E2E test script to validate the functionality of the "FakeShop" website, which serves as a mock e-commerce platform. The test focuses on checking various UI components of it's main page and attribute-based product filtering, specifically for the "jewelry" category.

## Test Scenarios
1. Checking the Website's Main Page Components
Visits the FakeShop website's main page.
Validates the components of nav bar.
Ensures the correct classes and visibility of the carousel.

3. Checking Product Attributes
Validates the existence and attributes of product category buttons.
Ensures that there are buttons for "All," "Women's Clothing," "Men's Clothing," "Jewelry," and "Electronics."

5. Fetching Product List for "Jewelery" Category
Makes an HTTP request to retrieve the product list for the "jewelery" category using the FakeStore API.
Validates the HTTP response status (200 OK) and checks if the response contains the expected number of products (4).

7. Clicking the Jewelery Attribute and Checking UI Updates
Clicks the "Jewelry" attribute button.
Validates that the UI displays the correct number of products for the "jewelry" category.
Checks each product's image, title, and price to ensure they match the retrieved data.


## Prerequisites
Before running the Cypress tests, ensure you have the following:
Cypress is installed in your system
Dependencies are installed


## Running the Test
Clone this repository to your local machine.


### Run the following command to open the Cypress test runner on Cypress GUI:

"npm test", or "npx cypress open". 

This will open Cypress's GUI.
Click on the test file testJeweleryAttribute.js to execute the test.


### Run the following command to open the Cypress test runner on CLI:

"npm test-ci". 

This will run the test on your terminal



## Test Results
After running the tests, the Cypress test runner will provide detailed results, including pass/fail statuses and logs.


## About FakeShop Website
The FakeShop website is a mock e-commerce platform used for testing and learning purposes. It does not represent any real business or products.

## Credits
The FakeShop website used in this project was created by Neeraj Adhav. The source code for the FakeShop website can be found here: https://github.com/neerajadhav/ReactFakeShop
