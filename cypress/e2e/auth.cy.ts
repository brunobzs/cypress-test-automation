import { faker } from '@faker-js/faker/locale/en'
import Authentication from '../support/page_objects/Authentication'

describe('Authentication', () => {
  beforeEach(() => cy.visit(''))

  it('successfully logs in', () => {
    Authentication.goToLoginPage()

    Authentication.login({
      email: Cypress.env('EMAIL'),
      password: Cypress.env('PASSWORD')
    })

    Authentication.successLogInMessage
  })

  it('shows an error message when trying to login with invalid credentials', () => {
    Authentication.goToLoginPage()

    Authentication.login({
      email: 'wrongUser@email.com',
      password: 'wrongPassword1'
    })

    Authentication.errorLogInMessage
  })

  it('successfully registers a new user', () => {
    Authentication.goToRegisterPage()

    Authentication.registerNewUser({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    })

    Authentication.submitRegisterForm()

    Authentication.successRegisterMessage
  })
})
