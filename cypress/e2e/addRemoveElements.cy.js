import AddRmElementsPage from "../Integration/PageObject/addRemoveElementsPage";
import Base from "../Integration/PageObject/base";

const addRemoveElementPage = new AddRmElementsPage()
const base = new Base()

describe('Tests the Add and Remove Elements Page', () => {
    beforeEach('Visit the Elements Page', () => {
        base.visitAddRemoveTesting()
    })
    it('Should only have An Add Element Button on first visit', () =>{
        cy.get('button[onclick="addElement()"]')
    })
    it('Should add a Button if I click Add Element', () =>{
        cy.get('button[onclick="addElement()"]')
            .click()
        addRemoveElementPage.numberOfExpectedDeleteButtons(1) //We are expecting 1 Delete button to be on the page at this point
    })
    it('Should add an element I click each time. Random from 1-20', ()=>{
        let previousAmount = Cypress.$('button').length
        for(let i = 0; i < Math.random() * 20; i++) { //Click the Add Element button a random number of times
            cy.get('button').contains('Add Element')
                .click()
            addRemoveElementPage.numberOfExpectedDeleteButtons(previousAmount) //We expect another button to display after each click
            previousAmount++
        }
        })
    it('Should remove a button if I click delete. Delete all buttons.', () => {
        //Find How many Buttons there are
        let OriginalAmount = Cypress.$('button').length
        let newAmount = OriginalAmount
        for(let i = 0; OriginalAmount - 1 > i; i++){ //Click the Delete button however many times there are delete buttons
            cy.get('Button').contains('Delete')
                .click()
            addRemoveElementPage.numberOfExpectedDeleteButtons(newAmount) 
            newAmount-- //We are expecting 1 less Delete button every time we click
        }
        //For each button, click delete button - 1
    })
})
