import Search from '../support/page_objects/Search'

describe('Search', () => {
  beforeEach(() => cy.visit(''))

  it('searches for an existing product', () => {
    Search.searchFor('shirt')
    Search.searchResult({ success: true })
  })

  it('searches for an non-existing product', () => {
    Search.searchFor('motorcycle')
    Search.searchResult({ success: false })
  })
})
