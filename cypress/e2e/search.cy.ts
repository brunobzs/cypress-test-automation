import Search from '../support/page_objects/Search'

describe('Search', () => {
  beforeEach(() => cy.visit(''))

  it('searches for an existing product', () => {
    Search.search('shirt')
    Search.verifySearchUrl('shirt')
    Search.verifySearchResultsHeading('shirt')
    Search.verifySearchResults({ success: true })
  })

  it('searches for an non-existing product', () => {
    Search.search('motorcycle')
    Search.verifySearchUrl('motorcycle')
    Search.verifySearchResultsHeading('motorcycle')
    Search.verifySearchResults({ success: false })
  })
})
