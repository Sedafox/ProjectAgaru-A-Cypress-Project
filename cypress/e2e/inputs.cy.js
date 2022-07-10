import InputsPage from "../Integration/PageObject/inputsPage";

const inputsPage = new InputsPage()

describe('Tests input page', () => {
    beforeEach('Refreshes page', () => {
        inputsPage.visitInputsTesting()
    })

    it('Enters a number into the input field', () => {
        inputsPage.inputField().type('5')
    })

})