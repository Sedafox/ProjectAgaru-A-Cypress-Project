import Base from "./base";
const base = new Base()

class AddRmElementsPage{
    numberOfExpectedButtons(num){
       return cy.get('button').then((amountOfButtons) => { //If statement
            if(amountOfButtons.length === num){ //If there is one button
                //No code is pass code!!!
            }
            else {
                reportError(`Warning, I did not find exactly ${num} button(s). Error!!`) //Wamp Wamp,There was a different num of buttons
            }
        } )
    }
}
export default AddRmElementsPage