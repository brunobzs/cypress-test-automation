import ShoppingCart from "../support/page_objects/ShoppingCart";

describe('Shopping Cart', () => {
  beforeEach(() => cy.visit(''))

  it('successfully adds a product to the cart', () => {
    ShoppingCart.addProductToCart()
    ShoppingCart.verifyCartCounter({ quantity: 1 })
  })
})
