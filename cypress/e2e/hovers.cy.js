import Base from "../Integration/PageObject/base"
import HoversPage from "../Integration/PageObject/hoversPage";

const base = new Base()
const hoversPage = new HoversPage()

if(Cypress.isBrowser('Chrome')) {
    describe('Tests hover functionality', () => {
        beforeEach('Refresh Page', () => {
            base.visitHoverTesting()
        })
        it('Tests Hovering over the first photo, should display username and View Profile Button', () => {
            hoversPage.firstImage().realHover()
            hoversPage.hiddenUserName('user1').should('be.visible')
            hoversPage.viewProfile(1).should('be.visible')
            hoversPage.viewProfile(1).click() //This isn't a real page. It'll show something like: Sinatra doesn't know this ditty.
        })
        it('Tests Hovering over the second photo, should display username and View Profile Button', () => {
            hoversPage.secondImage().realHover()
            hoversPage.hiddenUserName('user2').should('be.visible')
            hoversPage.viewProfile(2).should('be.visible')
            hoversPage.viewProfile(2).click() //This isn't a real page. It'll show something like: Sinatra doesn't know this ditty.
        })
        it('Tests Hovering over the third photo, should display username and View Profile Button', () => {
            hoversPage.thirdImage().realHover()
            hoversPage.hiddenUserName('user3').should('be.visible')
            hoversPage.viewProfile(3).should('be.visible')
            hoversPage.viewProfile(3).click() //This isn't a real page. It'll show something like: Sinatra doesn't know this ditty.
        })
    })
}

if(!Cypress.isBrowser('Chrome')){
    /*https://github.com/cypress-io/cypress/issues/10
    Unfortunately, cy.get(firstImage).trigger('mouseover') isn't making the text appear. Cypress accurately simulates the mouseover, but something funky is going on.
    Also tried cy.get(firstImage).invoke('show') and that doesn't work either
    cypress' github claims its a problem with CSS elements
    Thankfully through https://github.com/dmtrKovalenko/cypress-real-events we can use Chrome Dev tools to simulate a realHover
    But this won't work on other browsers. Curses!
     */
}

