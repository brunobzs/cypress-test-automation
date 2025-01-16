import ProductDetailsPage from '../page-objects/product-details.page';
import SearchPage from '../page-objects/search-product.page';

const productDetailsPage = ProductDetailsPage
const searchPage = SearchPage

describe('Product Details Page test', () => {
  beforeEach(() => {
    cy.accessWebPage();
  });

  it('View product details', () => {
    searchPage.searchByKeyword({ keyword: 'shirt' }); // Search for a product
    productDetailsPage.checkProductDetails(); // Check the product details
  });

  it('Add a product to the cart', () => {
    productDetailsPage.addProductToCart(); // Select a product
    productDetailsPage.checkProductAddedToCart() // Check if the product was added to the cart
  });
})