class EntryAdPage{
    modalWindow() { return cy.get('#modal') }
    modalWindowCloseButton() { return cy.get('.modal-footer > p')}
    reOpenModalWindow() { return cy.get('#restart-ad')}
}
export default EntryAdPage