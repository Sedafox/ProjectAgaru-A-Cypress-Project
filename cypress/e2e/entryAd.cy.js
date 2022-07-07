import Base from "../Integration/PageObject/base"
import EntryAdPage from "../Integration/PageObject/entryAdPage";

const base = new Base()
const entryAdPage = new EntryAdPage()

describe('Tests things related to Modal Window Page', () => {
    beforeEach('Refresh the page', () => {
        base.visitEntryAdTesting()
    })
    it('Modal Window Should exist and be visible', () => {
        entryAdPage.modalWindow().should('exist')
        entryAdPage.modalWindow().should('be.visible')
    })
    it('Modal Window Should contain text "encourage a user"', () => {
        entryAdPage.modalWindow().should('contain.text', 'encourage a user')
    })
    it('Modal Window Should be able to be closed', () => {
        base.modalWindowCloseButton().click()
        base.modalWindowCloseButton().should('not.be.visible') //If the window close button isn't visible, then we successfully closed the modal window
    })
    it('After Closing the Modal window, re-open it with the click here button', () => { //Note this test sometimes fails. If this were a real project, I'd write a bug!
        cy.wait(1000) //Without this wait, the window won't actually appear here.
        base.modalWindowCloseButton().click()
        entryAdPage.reOpenModalWindow().click()
        base.modalWindowCloseButton().should('be.visible')
    })
})