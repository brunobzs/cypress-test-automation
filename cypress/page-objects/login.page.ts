interface CheckAPIRequestParams {
  valueToCheck: string;
}

interface SuccessLoginParams {
  fullName: string;
}

class LoginPage {
  get user(): { firstName: string, lastName: string, email: string, password: string } {
    return {
      "firstName": "User",
      "lastName": "Test",
      "email": "brunobzs+test@gmail.com",
      "password": "Test1234"
    }
  }

  get loginPanel(): string {
    return '.panel.wrapper > .panel'
  }

  get emailInput(): string {
    return '#email';
  }

  get passwordInput(): string {
    return '#pass';
  }

  get signInButton(): string {
    return '#send2';
  }

  get errorMessage(): string {
    return '.message-error';
  }

  // FUNCTIONS -----------------------------------//

  /**
   * Click on the "Create an Account" button
   */
  clickOnCreateAnAccountButton() {
    cy.contains('button', 'Create an Account').click();
  }

  /**
   * Check the API request to validate the user's login
   *
   * @param {object} params
   * @param {string} params.valueToCheck - The value to check in the API request
   */
  checkTheAPIRequest(params: CheckAPIRequestParams) {
    const { valueToCheck } = params;

    cy.wait('@sessionAutentication').then((req: any) => {
      const fullNameFromAPI: any = req.response.body.customer.fullname;
      expect(req.state).to.equal('Complete');
      expect(fullNameFromAPI).to.equal(valueToCheck);
    })
  }

  /**
   * Check the success message after login
   *
   * @param {object} params
   * @param {string} params.fullName - The user's full name
   */
  successLoginMessage(params: SuccessLoginParams) {
    const { fullName } = params;
    cy.get(this.loginPanel).find('span')
      .should('be.visible')
      .and('contain.text', `Welcome, ${fullName}!`);
  }

  /**
   * Check if the error message is displayed
   */
  errorLoginMessage() {
    cy.get(this.errorMessage).should('be.visible')
      .and('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later');
  }
}

export default new LoginPage();
