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
        challengingDOMPage.buttonsDiv().get('a.button:not(.alert):not(.success)').click() //Top button
        //In the above code, I had a[class="button"] but its so cool to use exclusions!
        challengingDOMPage.buttonsDiv().get('a.button.alert').click() //Middle Button
        challengingDOMPage.buttonsDiv().get('a.button.success').click() //Bottom Button
    })
    it('Finds Definiebas7 in the table', () => {
        challengingDOMPage.table().contains('Definiebas7')
    })
    it('Clicks the fourth edit from the top', () => {
        challengingDOMPage.fourthEditButton().click()
    })
    it('Clicks the sixth delete from the top', () => {
        challengingDOMPage.deleteButton().eq(5).click()
    })
    it('Checks for a canvas Element', () => {
        challengingDOMPage.canvas()
    })
})