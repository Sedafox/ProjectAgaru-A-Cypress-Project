import ForgotPasswordPage from "../Integration/PageObject/forgotPasswordPage";

const forgotPasswordPage = new ForgotPasswordPage()

describe('Tests Forgot Password Functionality', () => {

    beforeEach('Refresh the page', () => {
        forgotPasswordPage.visitForgotPasswordTesting()
    })

    it('Types an email into the email field and clicks submit', () => {
        forgotPasswordPage.emailField().type('myemailhere@aol.com')
        forgotPasswordPage.retrievePasswordButton().click()
    })
})