import base from "./base";

class ChallengingDOMPage extends base{
    buttonsDiv(){ return cy.get('.large-2.columns') }
    table(){ return cy.get('table') }
    canvas(){ return cy.get('#canvas') }
    fourthEditButton(){ return cy.get(':nth-child(4) > :nth-child(7) > [href="#edit"]')} // 4th row, seventh column, the edit button
    deleteButton(){ return cy.get('a[href="#delete"]') }
}
export default ChallengingDOMPage