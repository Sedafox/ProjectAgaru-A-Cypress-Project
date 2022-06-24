import Base from "../Integration/PageObject/base"
import BasicAuthPage from "../Integration/PageObject/basicAuthPage";
const base = new Base()
const basicAuthPage = new BasicAuthPage()

describe('Tests the core functionality of the Basic Auth page', () =>{
    it('Successfully login by appending username and password in URL', () => {
        basicAuthPage.login()
        basicAuthPage.paragraph().should('include.text', 'Congratulations! You must have the proper credentials.') //If we find this then we logged in!
    })
})