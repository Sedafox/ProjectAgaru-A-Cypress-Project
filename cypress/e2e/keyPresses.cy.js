import KeyPressesPage from "../Integration/PageObject/keyPressesPage";

const keyPressesPage = new KeyPressesPage()

describe('It tests entering a single key', () => {
    beforeEach('Refreshes page', () => { keyPressesPage.visitKeyPressesTesting() })


    it('Enters the alphabet and checks to see if the proper text is displayed', () => {
        const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        for(let i in alphabet){
            keyPressesPage.inputField().type(alphabet[i])
            keyPressesPage.textResult().should('have.text','You entered: ' + alphabet[i]) //Since this page only checks for the last letter entered, we don't have to worry about clearing the text field here
        }
    })

    it('Enters Backspace', () => {
        keyPressesPage.inputField().type('{backspace}')
        keyPressesPage.textResult().should('have.text', 'You entered: BACK_SPACE')
    })

    it('Enters Space', () => {
        keyPressesPage.inputField().type(' ')
        keyPressesPage.textResult().should('have.text', 'You entered: SPACE')
    })

    it('Enters Up Arrow', () => {
        keyPressesPage.inputField().type('{upArrow}')
        keyPressesPage.textResult().should('have.text', 'You entered: UP')
    })
})
