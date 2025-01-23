import { faker } from '@faker-js/faker/locale/en'

describe('Authentication', () => {
  beforeEach(() => cy.visit(''))

  it('successfully logs in', () => {
    cy.contains('a', 'Sign In').click()

    cy.get('#email').type(`${Cypress.env('EMAIL')}`)
    cy.get('#pass').type(`${Cypress.env('PASSWORD')}`, { log: false })
    cy.contains('button', 'Sign In').click()

    cy.contains('.greet.welcome', 'Welcome, User Test!').should('be.visible')
  })

  it('shows an error message when trying to login with invalid credentials', () => {
    cy.contains('a', 'Sign In').click()

    cy.get('#email').type('wrongUser@email.com')
    cy.get('#pass').type('wrongPassword1')
    cy.contains('button', 'Sign In').click()

    cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      .should('be.visible')
  })

  it('successfully registers a new user', () => {
    const password = faker.internet.password()

    cy.contains('a', 'Create an Account').click()

    cy.get('#firstname').type(faker.person.firstName())
    cy.get('#lastname').type(faker.person.lastName())
    cy.get('#email_address').type(faker.internet.email())
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)
    cy.contains('button', 'Create an Account').click()

    cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
  })
})
