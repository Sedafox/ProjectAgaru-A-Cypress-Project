import AddRmElementsPage from "../Integration/PageObject/addRemoveElementsPage";
import Base from "../Integration/PageObject/base";

const addRemoveElementPage = new AddRmElementsPage()
const base = new Base()

describe('Tests the Add and Remove Elements Page', () => {
    beforeEach('Visit the Elements Page', () => {
        base.visitAddRemoveTesting()
    })
    it('Should only have An Add Element Button on first visit', () => {
        addRemoveElementPage.addElementButton().eq(0).should('be.visible');
        addRemoveElementPage.addElementButton().eq(1).should('not.exist') //There should only be 1 addElement Button
    })
    it('Should add only 1 Button if I click Add Element', () => {
        addRemoveElementPage.addElementButton().click();
        addRemoveElementPage.deleteButtons().eq(0).should('be.visible')
        addRemoveElementPage.deleteButtons().eq(1).should('not.exist')
    })
    it('Should be able to click the Add Element multiple times', () => {
        for (let i = 0; i < Math.random() * 20; i++) { //Randomly run the below code from 1-20 times
            addRemoveElementPage.addElementButton().click()
            addRemoveElementPage.deleteButtons().eq(i).should('be.visible')
            addRemoveElementPage.deleteButtons().eq(i + 1).should('not.exist')

        }
    })
    it('Should remove a button if I click delete.', () => {
        addRemoveElementPage.addElementButton().click()
        addRemoveElementPage.deleteButtons().eq(0).should('be.visible')
        addRemoveElementPage.deleteButtons().click()
        addRemoveElementPage.deleteButtons().should('not.exist') //Delete button shouldn't be there anymore
    })
})
