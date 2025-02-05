class Authentication {
  get signInButton() {
    return cy.contains('button', 'Sign In');
  }

  get successLogInMessage() {
    return cy.contains('.greet.welcome', 'Welcome, User Test!').should('be.visible')
  }

  get errorLogInMessage() {
    return cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      .should('be.visible')
  }

  get createAccountButton() {
    return cy.contains('Create an Account');
  }

  get successRegisterMessage() {
    return cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
  }

  fillEmailInput(email) {
    cy.get('#email').type(email);
  }

  fillPasswordInput(password) {
    cy.get('#pass').type(password, { log: false });
  }

  registerNewUser({ firstName, lastName, email, password }) {
    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)
  }
}

export default new Authentication();
