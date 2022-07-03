class JQueryUiMenuPage {
    disabledMenu() { return cy.get('#ui-id-1') }
    enabledMenu() { return cy.get('#ui-id-2') }
    returnToMenu() { return cy.get('#ui-id-5') }
    downloadsMenu() { return cy.get('#ui-id-4') }
    PDFOption() { return cy.get('#ui-id-6') }
}
export default JQueryUiMenuPage