import LoginPage from '../page-objects/login.page';
import ProductDetailsPage from '../page-objects/product-details.page';
import SearchPage from '../page-objects/search-product.page';

const loginPage = LoginPage
const productDetailsPage = ProductDetailsPage
const searchPage = SearchPage

describe('Product Details Page test', () => {
  beforeEach(() => {
    cy.accessWebPage();
  });

  it('View product details', () => {
    const productDetails: { name: string, price: string, rating: string} = {
      name: '',
      price: '',
      rating: ''
    }

    searchPage.searchByKeyword({ keyword: 'shirt' });

    cy.get(searchPage.productItems).first().within(() => {
      const detaisl: string[] = [
        productDetailsPage.productName,
        productDetailsPage.productPrice,
        productDetailsPage.productRating
      ]
      detaisl.forEach((detail: string, index: number) => {
        cy.get(detail).invoke('text').then((text: string) => {
          const textCleaned: string = text.trim();
          if (index === 0) {
            productDetails.name = textCleaned;
          } else if (index === 1) {
            productDetails.price = textCleaned;
          } else {
            productDetails.rating = textCleaned;
          }
        })
      })
    }).click();

    cy.wait(1000)

    cy.then(() => {
      const productReference: string = productDetails.name.toLowerCase().replace(/ /g, '-');
      cy.url().should('include', productReference);

      const detailsAndValues = [
        { detail: productDetailsPage.productPageTitle, value: productDetails.name },
        { detail: productDetailsPage.productPrice, value: productDetails.price },
        { detail: productDetailsPage.productRating, value: productDetails.rating }
      ]
      detailsAndValues.forEach(({ detail, value }: { detail: string, value: string}) => {
        cy.get(productDetailsPage.productInfo).find(detail).should('contain.text', value);
      });
    });
  });

  it.only('Add a product to the cart', () => {
    // Select a product
    cy.get(searchPage.productItems).first().click();
    cy.get(productDetailsPage.productPageTitle).should('be.visible', { setTimeout: 5000 });

    // Select product attributes
    cy.get(productDetailsPage.productInfo).within(() => {
      cy.get(productDetailsPage.size).find(productDetailsPage.attributeOptions).eq(3).click();
      cy.get(productDetailsPage.color).find(productDetailsPage.attributeOptions).eq(1).click();
    });

    cy.contains('button', 'Add to Cart').click(); // Add product to cart

    // Check if the product was added to the cart
    cy.get(productDetailsPage.chartLoader).should('not.exist', { setTimeout: 5000 });
    cy.get(productDetailsPage.cartCounter).should('not.eq', '0');
  });
})