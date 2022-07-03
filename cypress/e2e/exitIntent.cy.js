import Base from "../Integration/PageObject/base.js"
import ExitIntentPage from "../Integration/PageObject/exitIntentPage";

const base = new Base()
const exitIntentPage = new ExitIntentPage()

describe('This test is designed to test moving a mouse outside of a boundary', () => {
    beforeEach('Refreshes the page', () => {
        base.visitExitIntentTesting()
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
        base.modalWindowCloseButton().click()
    })
})