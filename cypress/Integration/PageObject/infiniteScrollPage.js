import base from "./base";

class InfiniteScrollPage extends base{
    findDiv() { return cy.get('.row') }
}
export default InfiniteScrollPage