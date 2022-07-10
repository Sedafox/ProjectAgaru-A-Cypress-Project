import base from "./base";

class KeyPressesPage extends base {
    inputField() { return cy.get('#target') }
    textResult() { return cy.get('#result') }
}
export default KeyPressesPage