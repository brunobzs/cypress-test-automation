// INTERFACES --------------------------//
interface SeachByKeywordParams {
  keyword: string;
}
//-------------------------------------//

class SearchPage {
  get searchInput(): string {
    return '#search';
  }

  get resultPageTitle(): string {
    return '[data-ui-id="page-title-wrapper"]'
  }

  get relatedSearchTermsItems(): string {
    return 'dl > dd';
  }

  get productItems(): string {
    return '.product-items > li';
  }

  get noticeMessage(): string {
    return '.notice';
  }

  // FUNCTIONS --------------------------//

  /**
   * Search by keyword
   *
   * @param {object} params
   * @param {string} params.keyword - Keyword to search
   */
  searchByKeyword(params: SeachByKeywordParams) {
    const { keyword } = params;
    cy.get(this.searchInput).type(`${keyword} {enter}`);
    cy.url().should('include', `result/?q=${keyword}`);
    cy.get(this.resultPageTitle).should('contain.text', keyword);
  }
}

export default new SearchPage();
