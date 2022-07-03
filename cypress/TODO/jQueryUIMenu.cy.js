import Base from "../Integration/PageObject/base";
import JQueryUiMenuPage from "../Integration/PageObject/jQueryUiMenuPage";

const base = new Base()
const jQueryUiMenu = new JQueryUiMenuPage()

describe('Tests jQuery UI Menu', () => {
    beforeEach('refresh page', () => {
        base.visitJQueryUIMenusTesting()
    })

    it('Should be a disabled menu', () => {
        jQueryUiMenu.disabledMenu().should('be.visible')
    })

    it('hovers over the enabled menu', () => {
        jQueryUiMenu.enabledMenu().trigger('mouseover')
    })
    it('Clicks "Return to JQueryUI" in the enabled menu', () => {
        jQueryUiMenu.enabledMenu().trigger('mouseover')
        jQueryUiMenu.returnToMenu().click()
    })

    it('Clicks "PDF" in the downloads menu in the enabled menu', () => {
        jQueryUiMenu.enabledMenu().trigger('mouseover')
        jQueryUiMenu.downloadsMenu().realHover

    })
})