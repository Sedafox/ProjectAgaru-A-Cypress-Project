import ExitIntentPage from "../Integration/PageObject/exitIntentPage";

const exitIntentPage = new ExitIntentPage()

describe('This test is designed to test moving a mouse outside of a boundary', () => {
    beforeEach('Refreshes the page', () => {
        exitIntentPage.visitExitIntentTesting()
        })
    it('Should say "Mouse out of the viewport pane and see a modal window appear', () => {
        cy.contains('Mouse out of the viewport pane and see a modal window appear').should('be.visible')
    })
    it('Should trigger the Mouse moving out of the screen', () => {
        exitIntentPage.exitBoundary()
    })
    it('Modal Window Should say "It\'s commonly used to encourage a user to take an action"', () => {
        exitIntentPage.exitBoundary()
        cy.contains('It\'s commonly used to encourage a user to take an action').should('be.visible')
    })
    it('Modal Window should be closable', () => {
        exitIntentPage.exitBoundary()
        exitIntentPage.modalWindowCloseButton().click()
        exitIntentPage.modalWindowCloseButton().should('not.be.visible') //If the modal Window's close button isn't visible, the window is closed
    })
})