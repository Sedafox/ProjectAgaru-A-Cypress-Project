import base from "./base";

class DisappearingElementsPage extends base {
    homeButton(){ return cy.get('ul > li > a' ).contains('Home') }
    aboutButton(){ return cy.get('ul > li > a' ).contains('About') }
    contactButton(){ return cy.get('ul > li > a' ).contains('Contact Us') }
    portfolioButton(){ return cy.get('ul > li > a' ).contains('Portfolio') }
    galleryButton(){ return cy.get('ul > li > a' ).contains('Gallery')}
}
export default DisappearingElementsPage