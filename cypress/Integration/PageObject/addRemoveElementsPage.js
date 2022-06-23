import Base from "./base";
const base = new Base()

class AddRmElementsPage{
    numberOfExpectedDeleteButtons(expectedNum){
       return cy.get('button[class="added-manually"]').then((numOfDeleteButtons) => { //Delete buttons have the added-manually class
           if(numOfDeleteButtons.length != expectedNum){ //If there are more or less Delete Buttons then expected...
               reportError("There are More or Less Delete Buttons Than Expected") //Error!
           }
       })
    }
}
export default AddRmElementsPage