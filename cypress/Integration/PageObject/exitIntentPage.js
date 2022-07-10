import base from "./base";

class ExitIntentPage extends base{
    exitBoundary() { return cy.root().trigger('mouseleave', 0, 0) }
}
export default ExitIntentPage