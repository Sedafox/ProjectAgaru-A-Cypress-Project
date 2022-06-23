import Base from "./base";
const base = new Base()

class AddRmElementsPage{
    addElementButton() { return cy.get('button[onclick="addElement()"]') }
    deleteButton() { return cy.get('button[class="added-manually"]') }
}
export default AddRmElementsPage
