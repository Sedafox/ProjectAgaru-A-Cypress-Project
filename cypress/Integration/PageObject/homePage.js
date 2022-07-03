class HomePage{
    welcomeMessage() { return cy.contains('Welcome to the-internet') }
    availableExamples() { return cy.contains('Available Examples') }
}
export default HomePage