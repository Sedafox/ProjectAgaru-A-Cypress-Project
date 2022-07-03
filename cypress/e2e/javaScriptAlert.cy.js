import Base from "../Integration/PageObject/base"
import JavaScriptAlertPage from "../Integration/PageObject/javaScriptAlertPage";

const base = new Base()
const javaScriptAlertPage = new JavaScriptAlertPage()

describe('Tests Javascript alerts', () => {
    beforeEach('Refresh page', () => {
        base.visitJavascriptAlertsTesting()
    })

    it('Clicks the Button that says "Click for JS Alert" ensures the prompt says "I am a JS Alert", and exits the prompt', () => {
        javaScriptAlertPage.clickForJSAlertBttn().click()
        cy.on('window:alert', (str) =>{ expect(str).to.equal('I am a JS Alert') }) //Get the alert, compare it to string
    })

    it('Clicks the Button that says "Click for JS Confirm" ensures the prompt says "I am a JS Confirm", and selects confirm', () => {
        javaScriptAlertPage.clickForJSConfirmBttn().click()
        cy.on('window:alert', (str) =>{ expect(str).to.equal('I am a JS Confirm') }) //Get the alert, compare it to string
        cy.on('window:confirm', () => true ) //confirm = true
        javaScriptAlertPage.afterResult().should('have.text', 'You clicked: Ok')
    })

    it('Clicks the Button that says "Click for JS Confirm" and selects cancel', () => {
        javaScriptAlertPage.clickForJSConfirmBttn().click()
        cy.on('window:alert', (str) =>{ expect(str).to.equal('I am a JS Confirm') }) //Get the alert, compare it to string
        cy.on('window:confirm', () => false ) //cancel = false
        javaScriptAlertPage.afterResult().should('have.text', 'You clicked: Cancel')
    })

    it('Clicks the Button that says "Click for JS Prompt" ensures the prompt says "I am a JS Prompt", and enters a string into the prompt', () => {
        const enteredText = 'Hello World! Did you know that high fructose corn syrup is bad for you?' //Set your text here

        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns(enteredText)
            javaScriptAlertPage.clickForJSPromptBttn().click()
        })
        cy.on('window:alert', (str) =>{ expect(str).to.equal('I am a JS Prompt') }) //Get the alert, compare it to string
        javaScriptAlertPage.afterResult().should('have.text', 'You entered: ' + enteredText) //checks to see if the proper text is displayed
    })
})