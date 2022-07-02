class FloatingMenuPage{
    floatingHomeButton() { return cy.get('a[href="#home"]')}
    floatingNewsButton() { return cy.get('a[href="#news"]')}
    floatingContactButton() { return cy.get('a[href="#contact"]')}
    floatingAboutButton() { return cy.get('a[href="#about"]')}
}
export default FloatingMenuPage