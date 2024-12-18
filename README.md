# Case Tests


## 1. Authentication (Login and Registration)
### 1.1 Login with valid credentials
   **Precondition:** The user is on the login page.
   **Steps:**
   1. Enter a valid email address.
   2. Enter a valid password.
   3. Click "Log in".
   Expected result: The user is redirected to the home page/successfully logged in.
   
### 1.2 Login with invalid credentials
   Precondition: The user is on the login page.
   Steps:
   Enter an invalid email address or an incorrect password.
   Click "Log in".
   Expected result: An error message such as "Invalid credentials" is displayed.
   
### 1.3 Registering a new user
   Precondition: The user is on the registration page.
   Steps:
   Fill in the registration fields with valid data (name, email, password).
   Click "Register".
   Expected Result: The account is successfully created and the user is redirected to the welcome page.

### 2. Product Search
   2.1 Search by valid keyword
   Precondition: The user is on the home page.
   Steps:
   Enter a product keyword in the search field.
   Click the "Search" button.
   Expected Result: A list of relevant products is displayed.
   2.2 Search with no results
   Precondition: The user is on the home page.
   Steps:
   Enter an invalid or non-existent keyword.
   Click the "Search" button.
   Expected Result: A "No results found" message is displayed.
3. Product Details Page
   3.1 View product details
   Precondition: The user is on a list of products.
   Steps:
   Click on a specific product.
   Expected Result: The product details page is loaded with title, price, images, and description.
   3.2 Add a product to the cart
   Precondition: The user is on the product details page.
   Steps:
   Click "Add to Cart".
   Expected result: The product is successfully added to the cart and a visual feedback is shown (e.g. "Product added" notification).
4. Shopping Cart
   4.1 View products in the cart
   Precondition: There are products in the cart.
   Steps:
   Go to the cart page.
   Expected result: The added products are displayed with details (name, quantity, price).
   4.2 Change product quantity
   Precondition: There is at least 1 product in the cart.
   Steps:
   Change the product quantity.
   Expected result: The total price is automatically updated.
   4.3 Remove product from the cart
   Precondition: There is at least 1 product in the cart.
   Steps:
   Click "Remove" on the product.
   Expected result: The product is removed from the cart and the total is updated.
5. Checkout and Payment
   5.1 Successful checkout
   Precondition: The user has products in the cart.
   Steps:
   Access the cart and click "Checkout".
   Fill in valid delivery and payment information.
   Confirm the purchase.
   Expected result: The purchase is successfully completed and a confirmation message is displayed.
   5.2 Attempt to checkout with invalid payment information
   Precondition: The user has products in the cart.
   Steps:
   Enter invalid payment information (e.g. wrong card number).
   Confirm the purchase.
   Expected result: The purchase is not completed and an error message is displayed.
6. Internationalization and Localization
   6.1 Change the website language
   Precondition: The user is on the home page.
   Steps:
   Access the language option.
   Select a different language.
   Expected result: All website content is translated into the selected language.