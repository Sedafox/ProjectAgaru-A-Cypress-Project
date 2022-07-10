import DropDownPage from "../Integration/PageObject/dropDownPage";

const dropDownPage = new DropDownPage()

describe('Selections Options from a Dropdown Menu', () =>{
    beforeEach('Refreshes Page', () =>{ dropDownPage.visitDropdownTesting() })
    it('Selects Option 1', () => { dropDownPage.dropDownMenu().select('Option 1') })
    it('Selects Option 2', () => { dropDownPage.dropDownMenu().select('Option 2') })
})