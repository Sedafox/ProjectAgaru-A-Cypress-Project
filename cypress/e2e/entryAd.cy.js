import Base from "../Integration/PageObject/base"
import EntryAdPage from "../Integration/PageObject/entryAdPage";

const base = new Base()
const entryAdPage = new EntryAdPage()

describe('Tests things related to Modal Window Page', () => {
    beforeEach('Refresh the page', () => {
        base.visitEntryAdTesting()
    })
    it('Modal Window Should exist', () => {
        entryAdPage.modalWindow().should('exist')
    })
    it('Modal Window Should contain text "encourage a user"', () => {
        entryAdPage.modalWindow().should('contain.text', 'encourage a user')
    })
    it('Modal Window Should be able to be closed', () => {
        entryAdPage.modalWindowCloseButton().click()
    })
    it('After Closing the Modal window, re-open it with the click here button', () => {
        entryAdPage.modalWindowCloseButton().click()
        entryAdPage.reOpenModalWindow().click()
    })
})