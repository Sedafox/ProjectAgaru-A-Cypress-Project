import Base from "../Integration/PageObject/base"
import DropDownPage from "../Integration/PageObject/dropDownPage";
const base = new Base()
const dropDownPage = new DropDownPage()

describe('Does something', () =>{
    beforeEach('Refreshes Page', () =>{ base.visitDropdownTesting() })
    it('Selects Option 1', () => { dropDownPage.dropDownMenu().select('Option 1') })
    it('Selects Option 2', () => { dropDownPage.dropDownMenu().select('Option 2') })
})