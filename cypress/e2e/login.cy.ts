import CreateAccountPage from "../page-objects/create-account.page";
import LoginPage from "../page-objects/login.page";

const createAccountPage = CreateAccountPage;
const loginPage = LoginPage;

describe('Authentication Test', () => {
  beforeEach(() => {
    cy.accessWebPage();
  });

  afterEach(() => {
    cy.clearAllCookies();
  })

  it('Login with valid credentials', () => {
    const { firstName, lastName, email, password } = loginPage.user;
    const fullName: string = `${firstName} ${lastName}`;
    cy.login({ email, password }) // Fill in the login form and submit it

    // Check if the user is logged in
    cy.get(loginPage.loginPanel).find('span')
      .should('be.visible')
      .and('contain.text', `Welcome, ${fullName}!`);
  });

  it('Login with invalid credentials', () => {
    // Fill in the login form and submit it
    cy.login({
      email: 'wrongUser@email.com',
      password: 'wrongPassword1'
    })

    // Check if the error message is displayed
    cy.get(loginPage.errorMessage).should('be.visible')
      .and('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later');
  })

  it('Registering a new user', () => {
    const { firstName, lastName, email, password } = createAccountPage.newUser; // Generate random user data

    createAccountPage.clickOnCreateAccountButton(); // Click on the "Create an Account" button
    createAccountPage.checkPageTitle({ title: 'Create New Customer Account' });

    // Fill in the registration form
    createAccountPage.fillTheForm({
      firstName,
      lastName,
      email,
      password
    })

    cy.contains('button', 'Create an Account').click();

    cy.get(createAccountPage.successMessage).should('be.visible')
      .and('contain.text', 'Thank you for registering with Main Website Store.');
  })
});