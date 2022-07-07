import Base from "../Integration/PageObject/base"
import JavaScriptOnLoadErrorPage from "../Integration/PageObject/javaScriptOnLoadErrorPage";

const base = new Base()
const javaScriptOnLoadErrorPage = new JavaScriptOnLoadErrorPage()

if (Cypress.isBrowser('Firefox')) { //If the browser is firefox
        Cypress.on('uncaught:exception', (err, runnable) => { //If there is an uncaught exception
            expect(err.message).to.contain("document.propertyThatDoesNotExist") //If the error contains document.propertyThatDoesNotExist
            return false //Pass the test anyway
        })
} else { //If the browser is not firefox (because firefox has a different error for some reason)
    Cypress.on('uncaught:exception', (err, runnable) => { //If there is an uncaught exception
        expect(err.message).to.contain("Cannot read properties of undefined (reading 'xyz')") //If the error contains "reading 'xyz'" (which this page's error message does)
        return false //Pass the test anyway
    })
}

describe('Tests Getting a Java Script error on load', () => {
    it('Tests the onLoad error', () => { base.visitJavascriptonloadTesting() }) //Without the above code, this would fail because of the javascript error.
})