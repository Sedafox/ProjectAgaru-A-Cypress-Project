class LargeAndDeepDOMPage{
    everyNumberPointDecimal(num){ return cy.get(`div[id="sibling-${num}"]`) }
    table() { return cy.get('#large-table')}
}
export default LargeAndDeepDOMPage