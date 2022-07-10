import base from "./base";

class BasicAuthPage extends base{

    //the admin:admin at the start indicates username:password
    login() { return cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth') }

    paragraph(){ return cy.get('p')}
}
export default BasicAuthPage