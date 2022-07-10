import base from "./base";

class CheckBoxesPage extends base{
    checkBoxOne() { return cy.get('#checkboxes > :nth-child(1)') }
    checkBoxTwo() { return cy.get('#checkboxes > :nth-child(3)') }
}
export default CheckBoxesPage