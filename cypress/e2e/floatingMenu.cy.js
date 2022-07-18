import FloatingMenuPage from "../Integration/PageObject/floatingMenuPage";

const floatingMenuPage = new FloatingMenuPage()

describe('Tests things related to a floating menu', () => {
    beforeEach('Refresh the page', () => {
        floatingMenuPage.visitFloatingMenuTesting()
    })

    it('scrolls the page down, then clicks the home button', () => {
        cy.scrollTo(0,500) //scrolldown some
        floatingMenuPage.floatingHomeButton().click({scrollBehavior: false})
        cy.url().should('eq', 'http://localhost:7080/floating_menu#home')
    })

    it('scrolls the page down, then clicks the News button', () => {
        cy.scrollTo(0,500) //scrolldown some
        floatingMenuPage.floatingNewsButton().click({scrollBehavior: false})
        //We want to tell Cypress not to scroll, this makes it so if the floating menu wasn't on screen,it wouldn't scroll all the way up to click it
        cy.url().should('eq', 'http://localhost:7080/floating_menu#news')
    })
    it('scrolls the page down, then clicks the Contact button', () => {
        cy.scrollTo(0,500) //scrolldown some
        floatingMenuPage.floatingContactButton().click({scrollBehavior: false})
        cy.url().should('eq', 'http://localhost:7080/floating_menu#contact')
    })
    it('scrolls the page down, then clicks the About button', () => {
        cy.scrollTo(0,500) //scrolldown some
        floatingMenuPage.floatingAboutButton().click({scrollBehavior: false})
        cy.url().should('eq', 'http://localhost:7080/floating_menu#about')
    })
})