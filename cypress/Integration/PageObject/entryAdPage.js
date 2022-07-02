class EntryAdPage{
    modalWindow() { return cy.get('#modal') }
    reOpenModalWindow() { return cy.get('#restart-ad')}
}
export default EntryAdPage