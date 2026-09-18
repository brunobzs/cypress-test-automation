class ShoppingCart {
  // ---------------------------------------------------------------------
  // Elements
  // ---------------------------------------------------------------------

  /** First product card on the search results / listing page. */
  private get firstProductItem() {
    return cy.get('.product-item').first()
  }

  /** Container with the main info of the product detail page. */
  private get productInfoMain() {
    return cy.get('.product-info-main')
  }

  /** "Add to Cart" button on the product detail page. */
  private get addToCartButton() {
    return cy.contains('button', 'Add to Cart')
  }

  /** Cart item counter shown in the header. */
  private get cartCounter() {
    return cy.get('.counter.qty')
  }

  // ---------------------------------------------------------------------
  // Assertions
  // ---------------------------------------------------------------------

  /**
   * Asserts that the "Radiant Tee" product detail page is displayed with
   * the expected title, price and rating.
   */
  verifyRadiantTeeProductPage() {
    cy.url().should('include', 'radiant-tee')
    cy.contains('h1', 'Radiant Tee').should('be.visible')
    cy.contains('.price', '$22.00').should('be.visible')

    return cy.get('.rating-result[title="60%"]').should('be.visible')
  }

  /**
   * Asserts that the cart counter in the header displays the given quantity.
   * @param params.quantity - Expected number of items in the cart.
   */
  verifyCartCounter({ quantity }: { quantity: number }) {
    return this.cartCounter.should('contain.text', String(quantity)).and('be.visible')
  }

  // ---------------------------------------------------------------------
  // Actions
  // ---------------------------------------------------------------------

  /**
   * Opens the first product listed on the current page.
   */
  openFirstProduct() {
    return this.firstProductItem.click()
  }

  /**
   * Selects the "L" size and "Orange" color options on the product detail page.
   */
  selectProductOptions() {
    return this.productInfoMain.within(() => {
      cy.get('[option-label="L"]').click()
      cy.get('[option-label="Orange"]').click()
    })
  }

  /**
   * Clicks the "Add to Cart" button on the product detail page.
   */
  addToCart() {
    return this.addToCartButton.click()
  }

  /**
   * Opens the first product in the listing, selects its options, adds it to
   * the cart and verifies the product page content along the way.
   */
  addProductToCart() {
    this.openFirstProduct()
    this.verifyRadiantTeeProductPage()
    this.selectProductOptions()
    this.addToCart()

    return this
  }
}

export default new ShoppingCart();
