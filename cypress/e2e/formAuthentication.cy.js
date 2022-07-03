import Base from "../Integration/PageObject/base"
import FormAuthenticationPage from "../Integration/PageObject/formAuthenticationPage";

const base = new Base()
const formAuthenticationPage = new FormAuthenticationPage()

describe('Tests Form Authentication', () => {

    beforeEach('Refresh the page', () => {
        base.visitFormAuthenticationTesting()
    })

    it('Logs in Successfully', () => {
        formAuthenticationPage.enterCorrectInfo() //Does cy.get on username field and enters username. Does cy.get on password field and enters password
        formAuthenticationPage.submitButton().click()
        //Verify we logged in
        cy.contains('Welcome to the Secure Area')
        cy.contains('Logout')
    })
    it('Logs out after logging in', () => {
        formAuthenticationPage.enterCorrectInfo() //Enter correct info
        formAuthenticationPage.submitButton().click() //Click Submit
        formAuthenticationPage.logOutButton().click() //Logout
    })
    it('Enters the incorrect username and password', () => {
        formAuthenticationPage.enterInvalidInfo()//Enter invalid info
        formAuthenticationPage.submitButton().click() //Click Submit
        //Verify we failed to log in
        cy.contains('Your username is invalid!')
    })
})