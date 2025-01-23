describe('Shopping Cart', () => {
  beforeEach(() => cy.visit(''))

  it('successfully adds a product to the cart', () => {
    cy.get('.product-item')
      .first()
      .click()

    cy.url().should('include', 'radiant-tee')
    cy.contains('h1', 'Radiant Tee').should('be.visible')
    cy.contains('.price', '$22.00').should('be.visible')
    cy.get('.rating-result[title="60%"]').should('be.visible')

    cy.get('.product-info-main').within(() => {
      cy.get('[option-label="L"').click()
      cy.get('[option-label="Orange"]').click()
    })
    cy.contains('button', 'Add to Cart').click()

    cy.contains('.counter.qty', '1').should('be.visible')
  })
})
