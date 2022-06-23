import Base from "../Integration/PageObject/base"
import BasicAuthPage from "../Integration/PageObject/basicAuthPage";
const base = new Base()
const basicAuthPage = new BasicAuthPage()

describe('Tests the core functionality of the Basic Auth page', () =>{
    it('Successfully login by appending username and password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth') //the admin:admin at the start indicates username:password
        basicAuthPage.paragraph().should('include.text', 'Congratulations! You must have the proper credentials.') //If we find this then we logged in!
    })
})