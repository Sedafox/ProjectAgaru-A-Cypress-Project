class ChallengingDOMPage{
    buttonsDiv(){ return cy.get('div[class="large-2 columns"]') }
    table(){ return cy.get('div[class="large-10 columns"] > table') }
    canvas(){ return cy.get('div[class="large-10 columns"] > canvas') }
    editButton(){ return cy.get('td > a[href="#edit"]') }
    deleteButton(){ return cy.get('td > a[href="#delete"]') }
}
export default ChallengingDOMPage