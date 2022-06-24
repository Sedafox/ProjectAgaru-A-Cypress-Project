import Base from "../Integration/PageObject/base"
import ChallengingDOMPage from "../Integration/PageObject/challengingDOMPage";

const base = new Base()
const challengingDOMPage = new ChallengingDOMPage()

describe('This page is designed to test the abilities of finding best locators.', () => {
    beforeEach('Refreshes Page', () =>{
        base.visitChallengingDOMTesting()
    })

    it('Finds the three left-hand buttons', () => {
        challengingDOMPage.buttonsDiv().find('a').eq(2).should('be.visible')
    })
    it('Clicks the buttons from top to bottom', () => {
        challengingDOMPage.buttonsDiv().get('a[class="button"]').click() //Top button
        challengingDOMPage.buttonsDiv().get('a[class="button alert"]').click() //Middle Button
        challengingDOMPage.buttonsDiv().get('a[class="button success"]').click() //Bottom Button
    })
    it('Finds Definiebas7 in the table', () => {
        challengingDOMPage.table().contains('Definiebas7')
    })
    it('Clicks the fourth edit from the top', () => {
        //Okay, this is challenging...
    })
    it('Clicks the sixth delete from the top', () => {
        //TODO
    })
    it('Checks for a canvas Element', () => {
        challengingDOMPage.canvas()
    })
})