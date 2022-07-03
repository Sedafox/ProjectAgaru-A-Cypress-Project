import Base from "../Integration/PageObject/base"
import InputsPage from "../Integration/PageObject/inputsPage";

const base = new Base()
const inputsPage = new InputsPage()

describe('Tests input page', () => {
    beforeEach('Refreshes page', () => {
        base.visitInputsTesting()
    })

    it('Enters a number into the input field', () => {
        inputsPage.inputField().type('5')
    })

})