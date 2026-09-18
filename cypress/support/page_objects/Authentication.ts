interface RegisterNewUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginParams {
  email: string;
  password: string;
}

class Authentication {
  // ---------------------------------------------------------------------
  // Elements
  // ---------------------------------------------------------------------

  /** Header link that opens the login page. */
  private get signInLink() {
    return cy.contains('a', 'Sign In')
  }

  /** Submit button on the login form. */
  private get signInButton() {
    return cy.contains('button', 'Sign In')
  }

  /** Header link that opens the registration page. */
  private get createAccountLink() {
    return cy.contains('a', 'Create an Account')
  }

  /** Submit button on the registration form. */
  private get createAccountButton() {
    return cy.contains('button', 'Create an Account')
  }

  /** Email input on the login form. */
  private get loginEmailInput() {
    return cy.get('#email')
  }

  /** Password input on the login form. */
  private get loginPasswordInput() {
    return cy.get('#pass')
  }

  /** First name input on the registration form. */
  private get registerFirstNameInput() {
    return cy.get('#firstname')
  }

  /** Last name input on the registration form. */
  private get registerLastNameInput() {
    return cy.get('#lastname')
  }

  /** Email input on the registration form. */
  private get registerEmailInput() {
    return cy.get('#email_address')
  }

  /** Password input on the registration form. */
  private get registerPasswordInput() {
    return cy.get('#password')
  }

  /** Password confirmation input on the registration form. */
  private get registerPasswordConfirmationInput() {
    return cy.get('#password-confirmation')
  }

  // ---------------------------------------------------------------------
  // Assertions
  // ---------------------------------------------------------------------

  /**
   * Asserts that the "Welcome, User Test!" message is visible after a
   * successful login.
   */
  get successLogInMessage() {
    return cy.contains('.greet.welcome', 'Welcome, User Test!').should('be.visible')
  }

  /**
   * Asserts that the invalid credentials error message is visible after a
   * failed login attempt.
   */
  get errorLogInMessage() {
    return cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      .should('be.visible')
  }

  /**
   * Asserts that the confirmation message is visible after a successful
   * registration.
   */
  get successRegisterMessage() {
    return cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
  }

  // ---------------------------------------------------------------------
  // Actions
  // ---------------------------------------------------------------------

  /**
   * Navigates to the login page via the header "Sign In" link.
   * @returns The clicked link, for chaining/assertions.
   */
  goToLoginPage() {
    return this.signInLink.click()
  }

  /**
   * Navigates to the registration page via the header "Create an Account" link.
   * @returns The clicked link, for chaining/assertions.
   */
  goToRegisterPage() {
    return this.createAccountLink.click()
  }

  /**
   * Types an email address into the login form's email input.
   * @param email - Email address to type.
   */
  fillEmailInput(email: string) {
    return this.loginEmailInput.type(email)
  }

  /**
   * Types a password into the login form's password input.
   * The keystrokes are not logged to avoid leaking credentials in test output.
   * @param password - Password to type.
   */
  fillPasswordInput(password: string) {
    return this.loginPasswordInput.type(password, { log: false })
  }

  /**
   * Fills the login form and submits it.
   * @param params - Login credentials.
   * @param params.email - Email address to log in with.
   * @param params.password - Password to log in with.
   */
  login({ email, password }: LoginParams) {
    this.fillEmailInput(email)
    this.fillPasswordInput(password)

    return this.signInButton.click()
  }

  /**
   * Fills out the registration form with the given user data.
   * Does not submit the form; call this followed by a submit action.
   * @param params - New user's registration data.
   */
  registerNewUser(params: RegisterNewUserParams) {
    const { firstName, lastName, email, password } = params

    this.registerFirstNameInput.type(firstName)
    this.registerLastNameInput.type(lastName)
    this.registerEmailInput.type(email)
    this.registerPasswordInput.type(password)
    this.registerPasswordConfirmationInput.type(password)

    return this
  }

  /**
   * Submits the registration form.
   */
  submitRegisterForm() {
    return this.createAccountButton.click()
  }
}

export default new Authentication();
