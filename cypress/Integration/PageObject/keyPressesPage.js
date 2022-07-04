class KeyPressesPage {
    inputField() { return cy.get('#target') }
    textResult() { return cy.get('#result') }
}
export default KeyPressesPage