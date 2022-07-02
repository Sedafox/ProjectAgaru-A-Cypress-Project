import Base from "../Integration/PageObject/base"
import ForgotPasswordPage from "../Integration/PageObject/forgotPasswordPage";

const base = new Base()
const forgotPasswordPage = new ForgotPasswordPage()

describe('Tests Forgot Password Functionality', () => {

    beforeEach('Refresh the page', () => {
        base.visitForgotPasswordTesting()
    })

    it('Types an email into the email field and clicks submit', () => {
        forgotPasswordPage.emailField().type('myemailhere@aol.com')
        forgotPasswordPage.retrievePasswordButton().click()
    })
})