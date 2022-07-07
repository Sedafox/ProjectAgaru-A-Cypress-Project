import Base from "../Integration/PageObject/base"
import DynamicLoadingPage from "../Integration/PageObject/dynamicLoadingPage";

const base = new Base()
const dynamicLoadingPage = new DynamicLoadingPage()

describe('Tests Example 1: Element on page that is hidden', () => {
    beforeEach('Refresh page', () => { base.visitDynamicLoadingTesting() })

    it('Should click Example 1, should click start, and wait for the element to start ', { defaultCommandTimeout: 6000}, () => { //We need to specify the default timeout so the dynamic content will load
        dynamicLoadingPage.exampleOne().click()
        dynamicLoadingPage.exampleStart().click()
        dynamicLoadingPage.exampleHelloWorld().should('be.visible')
        dynamicLoadingPage.exampleHelloWorld().should('have.text', 'Hello World!')
    })


})

describe('Tests Example 2: Element Rendered after the fact', { defaultCommandTimeout: 6000}, () => {
    beforeEach('Refresh page', () => { base.visitDynamicLoadingTesting() })

    it('Should click Example 2, should click start, and wait for the element to start ', () => {
        dynamicLoadingPage.exampleTwo().click()
        dynamicLoadingPage.exampleStart().click()
        dynamicLoadingPage.exampleHelloWorld().should('be.visible')
        dynamicLoadingPage.exampleHelloWorld().should('have.text', 'Hello World!')
    })
})