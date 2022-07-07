import Base from "../Integration/PageObject/base"
import LargeAndDeepDOMPage from "../Integration/PageObject/largeAndDeepDOMPage";

const base = new Base()
const largeAndDeepDOMPage = new LargeAndDeepDOMPage()

describe('It tests a very large and deep DOM in a webpage', () => {
    beforeEach('Refresh page', () => { base.visitLargeNDeepDOMTesting() })

    it('Make sure every number starting with 1.1 and ending with 50.3 has the proper text on the large and deep DOM', () => {
        for(let i = 1.1; i <= 50.1; i++){
            largeAndDeepDOMPage.everyNumberPointDecimal(i).should('contain.text', i)
        }
            largeAndDeepDOMPage.everyNumberPointDecimal(50.2).should('contain.text', '50.2')
        largeAndDeepDOMPage.everyNumberPointDecimal(50.3).should('contain.text', '50.3')
    })

    it('Make sure every number up to 50.50 exists in the table ', () => {
        for(let i = 1.0; i <= 50.50; i = i + 0.1){
            largeAndDeepDOMPage.table().contains(i)
            /*
            TODO for some reason when incrementing by 0.1, Cypress begins to look for 1.2000000000002... Why?
             */
        }
    })
})