# Test Automation with Cypress, TypeScript and Page Objects Model

This repository contains a test automation project developed with **Cypress**, **TypeScript** and **Page Objects Model (POM)**. The goal of this project is to validate the functionalities of an [e-commerce](https://magento.softwaretestingboard.com/), ensuring that the main user journeys work as expected.

## 🛠️ About the Project

This project was created to perform automated tests on an e-commerce, including:

- Authentication (Login and Registration)
- Product Search
- Shopping Cart

## 🚀 Technologies Used

- [Cypress](https://www.cypress.io/) - Framework for end-to-end testing.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript superset for static typing.

## 📦 Installation and Configuration

Follow the steps below to install and configure the project:

1. **Installation of `devDependencies`**:

Make sure [Node.js](https://nodejs.org/) is installed.

To install the `devDependencies`, run:

```bash
npm install

```

2. **Running the Tests**:

- To open the Cypress App, run:

```bash
npm run cy:open

```

- To run the tests in headless model run:

```bash
npm test

```

## 📁 Project Structure

```
├── cypress
│ ├── e2e                  # Test files
│ └── support              # Cypress support files
│   └── page_objects       # Page Objects Models
├── cypress.config.ts      # Cypress configuration
├── package.json           # Project dependencies, npm scripts, etc.
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Available Tese Cases

The below test cases are currently implemented.

```sh
cypress/e2e/auth.cy.ts (3 tests)
└─ Authentication
  ├─ successfully logs in
  ├─ shows an error message when trying to login with invalid credentials
  └─ successfully registers a new user

cypress/e2e/search.cy.ts (2 tests)
└─ Search
  ├─ searches for an existing product
  └─ searches for an non-existing product

cypress/e2e/shoppingCart.cy.ts (1 test)
└─ Shopping Cart
  └─ successfully adds a product to the cart

```

## 🧪 How to Add New Tests

1. Create a new file in the `cypress/e2e` folder with the name of the functionality that will be tested (e.g., `productDetails.cy.ts`).
2. Use the best practices of Cypress and TypeScript to implement the test.
3. Run the tests to validate that they're working as expected.

## 🤝 Contribution

Feel free to contribute to this project! To do so:

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b branch-name-here

```

3. Commit your changes and push them to your fork

4. Open a Pull Request explaining your changes

---

If you have any questions or suggestions, feel free to contact me.
