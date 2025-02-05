class Search {
  searchFor(value) {
    cy.get('#search').type(`${value}{enter}`)
    cy.url().should('include', `result/?q=${value}`)
    cy.contains('h1', `Search results for: ${value}`).should('be.visible')
  }

  searchResult({ success }) {
    if (success) {
      cy.get('.product-item').its('length').should('be.greaterThan', 0)
    } else {
      cy.get('.product-item').should('not.exist')
    }
  }
}

export default new Search();
