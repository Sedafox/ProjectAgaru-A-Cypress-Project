import base from "./base";

class EntryAdPage extends base{
    modalWindow() { return cy.get('.modal') }
    modalWindowCloseButton() { return cy.get('.modal-footer > p') }
    reOpenModalWindow() { return cy.get('#restart-ad') }
}
export default EntryAdPage