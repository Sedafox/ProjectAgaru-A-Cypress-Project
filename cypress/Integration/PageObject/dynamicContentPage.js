import base from "./base";

class DynamicContentPage extends base{
    pageImages(){ return cy.get('.large-2.columns > img')}
    rowsWithText(){ return cy.get('.large-10.columns:not(.large-centered)')} //large-centered is the div above this one
}
export default DynamicContentPage