import HomePage from "../Integration/PageObject/homePage";

const homePage = new HomePage()

describe('Goes to the Home page', () => {
    beforeEach('Refreshes the Page',() => {
        homePage.goHome()
    })
    it('Should Verify the Page says "Welcome to the-internet"', () => {
        homePage.welcomeMessage().should('be.visible')
    })

    it('Should verify the Page says "Available Examples', () => {
        homePage.availableExamples().should('be.visible')
    })
})