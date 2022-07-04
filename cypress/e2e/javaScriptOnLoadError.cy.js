import Base from "../Integration/PageObject/base"
import JavaScriptOnLoadErrorPage from "../Integration/PageObject/javaScriptOnLoadErrorPage";

const base = new Base()
const javaScriptOnLoadErrorPage = new JavaScriptOnLoadErrorPage()

Cypress.on('uncaught:exception', (err, runnable) => { //If there is an uncaught exception
    expect(err.message).to.contain("Cannot read properties of undefined (reading 'xyz')") //If the error contains "reading 'xyz'" (which this page's error message does)
    return false //Pass the test anyway
})

describe('Tests Getting a Java Script error on load', () => {
    it('Tests the onLoad error', () => { base.visitJavascriptonloadTesting() }) //Without the above code, this would fail because of the javascript error.
})