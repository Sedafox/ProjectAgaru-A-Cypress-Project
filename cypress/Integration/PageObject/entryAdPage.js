import base from "./base";

class EntryAdPage extends base{
    modalWindow() { return cy.get('.modal') }
    reOpenModalWindow() { return cy.get('#restart-ad') }
}
export default EntryAdPage