import AddRmElementsPage from "../Integration/PageObject/addRemoveElementsPage";

const addRemoveElementPage = new AddRmElementsPage()


describe('Tests the Add and Remove Elements Page', () => {
    beforeEach('Visit the Elements Page', () => {
        addRemoveElementPage.visitAddRemoveTesting()
    })
    it('Should only have An Add Element Button on first visit', () => {
        addRemoveElementPage.addElementButton().eq(0).should('be.visible');
        addRemoveElementPage.addElementButton().eq(1).should('not.exist') //There should only be 1 addElement Button
    })
    it('Should add only 1 Button if I click Add Element', () => {
        addRemoveElementPage.addElementButton().click();
        addRemoveElementPage.deleteButton().eq(0).should('be.visible')
        addRemoveElementPage.deleteButton().eq(1).should('not.exist')
    })
    it('Should be able to click the Add Element multiple times', () => {
        for (let i = 0; i < Math.random() * 20; i++) { //Randomly run the below code from 1-20 times
            addRemoveElementPage.addElementButton().click()
            addRemoveElementPage.deleteButton().eq(i).should('be.visible')
            addRemoveElementPage.deleteButton().eq(i + 1).should('not.exist')

        }
    })
    it('Should remove a button if I click delete.', () => {
        addRemoveElementPage.addElementButton().click()
        addRemoveElementPage.deleteButton().eq(0).should('be.visible')
        addRemoveElementPage.deleteButton().click()
        addRemoveElementPage.deleteButton().should('not.exist') //Delete button shouldn't be there anymore
    })
})
