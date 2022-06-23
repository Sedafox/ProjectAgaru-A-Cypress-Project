import Base from "./base";
const base = new Base()

class AddRmElementsPage{
    addElementButton() { return cy.get('button[onclick="addElement()"]') }
    deleteButtons() { return cy.get('button[class="added-manually"]') }
}
export default AddRmElementsPage
