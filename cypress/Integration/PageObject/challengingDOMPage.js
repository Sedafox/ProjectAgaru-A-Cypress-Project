class ChallengingDOMPage{
    buttonsDiv(){ return cy.get('div[class="large-2 columns"]') }
    table(){ return cy.get('div[class="large-10 columns"] > table') }
    canvas(){ return cy.get('div[class="large-10 columns"] > canvas') }
}
export default ChallengingDOMPage