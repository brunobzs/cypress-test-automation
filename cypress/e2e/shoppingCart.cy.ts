import ShoppingCart from "../support/page_objects/ShoppingCart";

describe('Shopping Cart', () => {
  beforeEach(() => cy.visit(''))

  it('successfully adds a product to the cart', () => {
    ShoppingCart.addProductToChart()
    ShoppingCart.checkChartCounter({ quantity: 1 })
  })
})
