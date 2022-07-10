import base from "./base";

class AddRmElementsPage extends base{
    addElementButton() { return cy.get('button[onclick="addElement()"]') } //this button adds the below delete button
    deleteButton() { return cy.get('.added-manually') } //button class is added-manually
}
export default AddRmElementsPage
