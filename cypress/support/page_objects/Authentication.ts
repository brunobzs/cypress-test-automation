interface RegisterNewUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class Authentication {
  get successLogInMessage() {
    return cy.contains('.greet.welcome', 'Welcome, User Test!').should('be.visible')
  }

  get errorLogInMessage() {
    return cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      .should('be.visible')
  }

  get successRegisterMessage() {
    return cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
  }

  fillEmailInput(email: string) {
    cy.get('#email').type(email);
  }

  fillPasswordInput(password: string) {
    cy.get('#pass').type(password, { log: false });
  }

  signIn({ isButton }: { isButton: boolean }) {
    return cy.contains(isButton ? 'button' : 'a', 'Sign In');
  }

  createAccount({ isButton }: { isButton: boolean }) {
    return cy.contains(isButton ? 'button' : 'a', 'Create an Account');
  }

  registerNewUser(params: RegisterNewUserParams) {
    const { firstName, lastName, email, password } = params;

    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)
  }
}

export default new Authentication();
