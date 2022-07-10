import base from "./base";

class ForgotPasswordPage extends base{
    emailField() { return cy.get('#email') }
    retrievePasswordButton() { return cy.get('#form_submit')}
}
export default ForgotPasswordPage