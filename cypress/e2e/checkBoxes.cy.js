import Base from "../Integration/PageObject/base"
import CheckBoxesPage from "../Integration/PageObject/checkBoxesPage";
const base = new Base()
const checkBoxesPage = new CheckBoxesPage()

describe('Testing Checkboxes', () => {
    beforeEach('Refreshes Page', () => { base.visitCheckboxesTesting() } )
    it('Ensures Checkbox 2 is checked by default, while checkbox 1 is not', () => {
        checkBoxesPage.checkBox().eq(0).should('not.be.checked')
        checkBoxesPage.checkBox().eq(1).should('be.checked')
    })
    it('Should ensure that clicking a checkbox checks it', () => {
        checkBoxesPage.checkBox().eq(0).click()
        checkBoxesPage.checkBox().eq(0).should('be.checked')
    })
    it('Should ensure that clicking a checkbox that is already checked will uncheck it', () => {
        checkBoxesPage.checkBox().eq(1).click()
        checkBoxesPage.checkBox().eq(1).should('not.be.checked')
    })
    it('Should ensure that clicking a checkbox will allow the user to uncheck it', () => {
        checkBoxesPage.checkBox().eq(0).click()
        checkBoxesPage.checkBox().eq(0).should('be.checked')
            .click()
        checkBoxesPage.checkBox().eq(0).should('not.be.checked')
    })
})