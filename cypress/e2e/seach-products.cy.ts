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

    searchPage.searchByKeyword({ keyword }); // Search by keyword
    searchPage.checkSearchResults({ keyword }); // Validate the search result
  });

  it('Search without results', () => {
    searchPage.searchByKeyword({ keyword: 'motorcycle' }); // Search by keyword\
    searchPage.messageNoResults() // Validate the search result
  });
});
