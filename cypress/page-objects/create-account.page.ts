import { faker } from '@faker-js/faker';

// INTERFACES ---------------------------------//
interface CheckPageTitleParams {
  title: string;
}

interface FillFormParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
// --------------------------------------------//

class CreateAccountPage {
  get newUser(): { firstName: string, lastName: string, email: string, password: string} {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }
  }

  get pageTitle(): string {
    return '[data-ui-id="page-title-wrapper"]';
  }

  get firstNameInput(): string {
    return '#firstname';
  }

  get lastNameInput(): string {
    return '#lastname';
  }

  get emailInput(): string {
    return '#email_address';
  }

  get passwordInput(): string {
    return '#password';
  }

  get passwordStrength(): string {
    return '#password-strength-meter'
  }

  get passwordConfirmationInput(): string {
    return '#password-confirmation';
  }

  get successMessage(): string {
    return '[data-ui-id="message-success"]';
  }

  // FUNCTIONS ---------------------------------//

  /**
   * Click on the "Create an Account" button
   */
  clickOnCreateAccountButton() {
    return cy.contains('a', 'Create an Account').click()
  }

  /**
   * Check if the page title is visible and contains the expected text
   *
   * @param {Object} params - The parameters object
   * @param {string} params.title - The expected text
   */
  checkPageTitle(params: CheckPageTitleParams) {
    return cy.get(this.pageTitle).should('be.visible').and('contain.text', params.title);
  }

  /**
   * Fill in the registration form
   *
   * @param {object} params - The parameters object
   * @param {string} params.firstName - The first name
   * @param {string} params.lastName - The last name
   * @param {string} params.email - The email
   * @param {string} params.password - The password
   */
  fillTheForm(params: FillFormParams) {
    const { firstName, lastName, email, password } = params;
    const inputAndValues: { selector: string, value: string}[] = [
      { selector: this.firstNameInput, value: firstName },
      { selector: this.lastNameInput, value: lastName },
      { selector: this.emailInput, value: email }
    ]

    inputAndValues.forEach(({ selector, value }: { selector: string, value: string }) => {
      cy.get(selector).type(value);
    });

    cy.wrap([this.passwordInput, this.passwordConfirmationInput]).each((input: string) => {
      cy.get(input).type(password);

      // Check if the password strength is not weak
      cy.get(this.passwordStrength).invoke('text').then((text: string) => {
        expect(text).not.to.contain('Weak');
      });
    });
  }

  /**
   * Check the success message after registration
   */
  successRegistrationMessage() {
    cy.get(this.successMessage).should('be.visible')
      .and('contain.text', 'Thank you for registering with Main Website Store.');
  }
}

export default new CreateAccountPage();
