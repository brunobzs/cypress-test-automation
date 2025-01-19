describe('Search', () => {
  beforeEach(() => cy.visit(''))

  it('searches for an existing product', () => {
    cy.get('#search').type(`shirt{enter}`)

    cy.url().should('include', 'result/?q=shirt')
    cy.contains('h1', "Search results for: 'shirt'").should('be.visible')
    cy.get('.product-item')
      .its('length')
      .should('be.greaterThan', 0)
  })

  it('searches for an non-existing product', () => {
    cy.get('#search').type(`motorcycle{enter}`)

    cy.url().should('include', 'result/?q=motorcycle')
    cy.contains('h1', "Search results for: 'motorcycle'").should('be.visible')
    cy.get('.product-item')
      .should('not.exist')
  })
})
