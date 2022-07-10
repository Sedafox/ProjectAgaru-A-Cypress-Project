import base from "./base";

class DropDownPage extends base{
    dropDownMenu(){ return cy.get('#dropdown') }
}
export default DropDownPage