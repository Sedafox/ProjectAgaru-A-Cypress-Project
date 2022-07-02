class ExitIntentPage{
    exitBoundary() { return cy.root().trigger('mouseleave', 0, 0) }
}
export default ExitIntentPage