import SearchPage from '../page-objects/search-product.page';

const searchPage = SearchPage;

describe('Search Products Test', () => {
  beforeEach(() => {
    cy.accessWebPage();
  });

  afterEach(() => {
    cy.clearAllCookies();
  });

  it('Search for valid keyword', () => {
    const keyword: string = 't-shirt';
    searchPage.searchByKeyword({ keyword });

    // Validate the search result
    cy.get(searchPage.relatedSearchTermsItems).each(terms => {
      cy.wrap(terms).invoke('text').then(text => {
        expect(text.toLowerCase()).to.contain(keyword);
      });
    })

    // Check if the product items are listed
    cy.get(searchPage.productItems).should('have.length.greaterThan', 0);
  });

  it('Search without results', () => {
    searchPage.searchByKeyword({ keyword: 'motorcycle' });

    // Validate the search result
    cy.get(searchPage.noticeMessage).should('be.visible')
      .and('contain.text', 'Your search returned no results.');
  });
});
