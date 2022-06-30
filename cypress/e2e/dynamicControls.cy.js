import Base from "../Integration/PageObject/base"
import DynamicControlsPage from "../Integration/PageObject/dynamicControlsPage"

const base = new Base()
const dynamicControlsPage = new DynamicControlsPage()

describe('Dynamic Controls Page', () => {
    beforeEach('Refresh the page', () => { base.visitDynamicControlsTesting() })
    it('Checks the checkbox then removes it', () => {
        dynamicControlsPage.checkBox().check()
        dynamicControlsPage.removeButton().click()
        cy.wait(1000) //Wait for the checkbox to disappear
        dynamicControlsPage.checkBox().should('not.exist')
    })
    it('Enables the field, types something in it, then disables it', () => {
        dynamicControlsPage.enableDisableButton().click() //Enables the text field
        dynamicControlsPage.enabledDisabledField().type('Hello world!') //Types 'Hello world!' in the text field
        dynamicControlsPage.enableDisableButton().click() //Disables the text field
    })
})