class Search {
  // ---------------------------------------------------------------------
  // Elements
  // ---------------------------------------------------------------------

  /** Header search input. */
  private get searchInput() {
    return cy.get('#search')
  }

  /** Product cards shown on the search results page. */
  private get productItems() {
    return cy.get('.product-item')
  }

  // ---------------------------------------------------------------------
  // Actions
  // ---------------------------------------------------------------------

  /**
   * Types a term into the header search input and submits it.
   * @param value - Search term to look for.
   */
  search(value: string) {
    return this.searchInput.type(`${value}{enter}`)
  }

  // ---------------------------------------------------------------------
  // Assertions
  // ---------------------------------------------------------------------

  /**
   * Asserts that the browser navigated to the results page for the given term.
   * @param value - Search term expected in the results URL.
   */
  verifySearchUrl(value: string) {
    return cy.url().should('include', `result/?q=${value}`)
  }

  /**
   * Asserts that the results page heading matches the given search term.
   * @param value - Search term expected in the results heading.
   */
  verifySearchResultsHeading(value: string) {
    return cy.contains('h1', `Search results for: '${value}'`).should('be.visible')
  }

  /**
   * Asserts whether the search returned any product results.
   * @param params.success - `true` to assert at least one result exists,
   * `false` to assert no results exist.
   */
  verifySearchResults({ success }: { success: boolean }) {
    if (success) {
      return this.productItems.its('length').should('be.greaterThan', 0)
    }

    return this.productItems.should('not.exist')
  }
}

export default new Search();
