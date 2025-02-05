import { faker } from '@faker-js/faker/locale/en'
import Authentication from '../support/page_objects/Authentication'

describe('Authentication', () => {
  beforeEach(() => cy.visit(''))

  it('successfully logs in', () => {
    Authentication.signIn({ isButton: false }).click()

    Authentication.fillEmailInput(Cypress.env('EMAIL'))
    Authentication.fillPasswordInput(Cypress.env('PASSWORD'))
    Authentication.signIn({ isButton: true }).click()

    Authentication.successLogInMessage
  })

  it('shows an error message when trying to login with invalid credentials', () => {
    Authentication.signIn({ isButton: false }).click()

    Authentication.fillEmailInput('wrongUser@email.com')
    Authentication.fillPasswordInput('wrongPassword1')
    Authentication.signIn({ isButton: true }).click()

    Authentication.errorLogInMessage
  })

  it('successfully registers a new user', () => {
    Authentication.createAccount({ isButton: false }).click()

    Authentication.registerNewUser({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    })

    Authentication.createAccount({ isButton: true }).click()

    Authentication.successRegisterMessage
  })
})
