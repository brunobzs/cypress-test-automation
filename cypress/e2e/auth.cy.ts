import { faker } from '@faker-js/faker/locale/en'
import Authentication from '../support/page_objects/Authentication'

describe('Authentication', () => {
  beforeEach(() => cy.visit(''))

  it('successfully logs in', () => {
    Authentication.signInButton.click()

    Authentication.fillEmailInput(Cypress.env('EMAIL'))
    Authentication.fillPasswordInput(Cypress.env('PASSWORD'))
    Authentication.signInButton.click()

    Authentication.successLogInMessage
  })

  it('shows an error message when trying to login with invalid credentials', () => {
    Authentication.signInButton.click()

    Authentication.fillEmailInput('wrongUser@email.com')
    Authentication.fillPasswordInput('wrongPassword1')
    Authentication.signInButton.click()

    Authentication.errorLogInMessage
  })

  it('successfully registers a new user', () => {
    Authentication.createAccountButton.click()

    Authentication.registerNewUser({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    })

    Authentication.createAccountButton.click()

    Authentication.successRegisterMessage
  })
})
