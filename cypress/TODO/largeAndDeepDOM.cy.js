import Base from "../Integration/PageObject/base"
import LargeAndDeepDOMPage from "../Integration/PageObject/largeAndDeepDOMPage";

const base = new Base()
const largeAndDeepDOMPage = new LargeAndDeepDOMPage()

describe('It tests a very large and deep DOM in a webpage', () => {
    beforeEach('Refresh page', () => { base.visitLargeNDeepDOMTesting() })
    it('Finds 35.1 in the Div section', () => {
        cy.get('h4').contains('35.1')
    })
})