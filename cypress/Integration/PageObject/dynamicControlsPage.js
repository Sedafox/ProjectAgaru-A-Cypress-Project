class DynamicControlsPage{
    checkBox(){ return cy.get('div > input[type="checkbox"]') }
    removeButton(){ return cy.get('form > button[onclick="swapCheckbox()"]') }
    enabledDisabledField(){ return cy.get('form > input[type="text"]') }
    enableDisableButton(){ return cy.get('form > button[onclick="swapInput()"]')}
}
export default DynamicControlsPage