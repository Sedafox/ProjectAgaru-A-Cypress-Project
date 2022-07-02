class ChallengingDOMPage{
    buttonsDiv(){ return cy.get('.large-2.columns') }
    table(){ return cy.get('table') }
    canvas(){ return cy.get('#canvas') }
    fourthEditButton(){ return cy.get(':nth-child(4) > :nth-child(7) > [href="#edit"]')}
    deleteButton(){ return cy.get('a[href="#delete"]') }
}
export default ChallengingDOMPage