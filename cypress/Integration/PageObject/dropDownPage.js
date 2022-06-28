class DropDownPage{
    dropDownMenu(){ return cy.get('div > select[id="dropdown"]') }
}
export default DropDownPage