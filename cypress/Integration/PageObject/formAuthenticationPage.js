class FormAuthenticationPage {
    userNameField() { return cy.get('#username') }
    passwordField() { return cy.get('#password') }
    submitButton() { return cy.get('.radius')}
    logOutButton() { return cy.get('.button')}

    enterCorrectInfo() { //Log in successfully
        this.userNameField().type('tomsmith')
        this.passwordField().type('SuperSecretPassword!')
    }

    enterInvalidInfo() { //Log in unsuccessfully
        this.userNameField().type('whodathunk')
        this.passwordField().type('That I\'d be coding some day')
    }
}
export default FormAuthenticationPage