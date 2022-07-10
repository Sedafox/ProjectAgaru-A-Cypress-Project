import base from "./base";

class DynamicControlsPage extends base{
    checkBox(){ return cy.get('#checkbox > input') }
    removeButton(){ return cy.get('#checkbox-example > button') }
    enabledDisabledField(){ return cy.get('#input-example > input') }
    enableDisableButton(){ return cy.get('#input-example > button')}
}
export default DynamicControlsPage