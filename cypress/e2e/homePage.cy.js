import Base from "../Integration/PageObject/base";
import HomePage from "../Integration/PageObject/homePage";

const base = new Base()
const homePage = new HomePage()

describe('Goes to the Home page', () => {
    beforeEach('Refreshes the Page',() => {
        base.goHome()
    })
    it('Should Verify the Page says "Welcome to the-internet"', () => {
        homePage.welcomeMessage().should('be.visible')
    })

    it('Should verify the Page says "Available Examples', () => {
        homePage.availableExamples().should('be.visible')
    })
})