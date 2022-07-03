import Base from "./base";
const base = new Base()

class AddRmElementsPage{
    addElementButton() { return cy.get('button[onclick="addElement()"]') } //this button adds the below delete button
    deleteButton() { return cy.get('.added-manually') } //button class is added-manually
}
export default AddRmElementsPage
