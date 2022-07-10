import CheckBoxesPage from "../Integration/PageObject/checkBoxesPage";

const checkBoxesPage = new CheckBoxesPage()

describe('Testing Checkboxes', () => {
    beforeEach('Refreshes Page', () => { checkBoxesPage.visitCheckboxesTesting() } )
    it('Ensures Checkbox 2 is checked by default, while checkbox 1 is not', () => {
        checkBoxesPage.checkBoxOne().should('not.be.checked')
        checkBoxesPage.checkBoxTwo().should('be.checked')
    })
    it('Should ensure that clicking a checkbox checks it', () => {
        checkBoxesPage.checkBoxOne().click()
        checkBoxesPage.checkBoxOne().should('be.checked')
    })
    it('Should ensure that clicking a checkbox that is already checked will uncheck it', () => {
        checkBoxesPage.checkBoxTwo().click()
        checkBoxesPage.checkBoxTwo().should('not.be.checked')
    })
    it('Should ensure that clicking a checkbox will allow the user to uncheck it', () => {
        checkBoxesPage.checkBoxOne().click()
        checkBoxesPage.checkBoxOne().should('be.checked')
        checkBoxesPage.checkBoxOne().click()
        checkBoxesPage.checkBoxOne().should('not.be.checked')
    })
})