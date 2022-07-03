class GeoLocationPage {
    findPageText(){ return cy.contains('Click the button') }
    findMyLocationBttn() { return cy.get('button') }
    latitude() { return cy.get('#lat-value')}
    longitude() { return cy.get('#long-value')}
}
export default GeoLocationPage