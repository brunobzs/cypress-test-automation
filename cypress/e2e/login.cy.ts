import CreateAccountPage from "../page-objects/create-account.page";
import LoginPage from "../page-objects/login.page";

const createAccountPage = CreateAccountPage;
const loginPage = LoginPage;

describe('Authentication Test', () => {
  beforeEach(() => {
    cy.accessWebPage();
    cy.intercept('**/customer/section/load/?sections=messages%2Ccustomer%2Ccompare-products%2Clast-ordered-items%2Ccart%2Cdirectory-data%2Ccaptcha%2Cinstant-purchase%2Cpersistent%2Creview%2Cwishlist%2Crecently_viewed_product%2Crecently_compared_product%2Cproduct_data_storage%2Cpaypal-billing-agreement&force_new_section_timestamp=false&_=**').as('sessionAutentication')
  });

  afterEach(() => {
    cy.clearAllCookies();
    cy.clearAllSessionStorage();
  })

  it('Login with valid credentials', () => {
    const { firstName, lastName, email, password } = loginPage.user;
    const fullName: string = `${firstName} ${lastName}`;

    cy.login({ email, password }); // Fill in the login form and submit it
    loginPage.checkTheAPIRequest({ valueToCheck: fullName }); // Check the API request
    loginPage.successLoginMessage({ fullName }); // Check if the user is logged in
  });

  it('Login with invalid credentials', () => {
    // Fill in the login form and submit it
    cy.login({
      email: 'wrongUser@email.com',
      password: 'wrongPassword1'
    })

    // Check if the error message is displayed
    loginPage.errorLoginMessage();
  })

  it('Registering a new user', () => {
    const { firstName, lastName, email, password } = createAccountPage.newUser; // Generate random user data
    const fullName: string = `${firstName} ${lastName}`;

    createAccountPage.clickOnCreateAccountButton(); // Click on the "Create an Account" button
    createAccountPage.checkPageTitle({ title: 'Create New Customer Account' });

    // Fill in the registration form
    createAccountPage.fillTheForm({
      firstName,
      lastName,
      email,
      password
    })

    loginPage.clickOnCreateAnAccountButton(); // Confirm the registration
    loginPage.checkTheAPIRequest({ valueToCheck: fullName }); // Check the API request
    createAccountPage.successRegistrationMessage(); // Check the success message
  })
});