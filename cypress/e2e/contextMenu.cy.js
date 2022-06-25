import Base from "../Integration/PageObject/base"
import ContextMenuPage from "../Integration/PageObject/contextMenuPage";
const base = new Base()
const contextMenuPage = new ContextMenuPage()

describe('Right clicks a Context Menu', () => {
    beforeEach('', () => { base.visitContextMenuTesting() })
    it('Should right click the Context Menu', () => {
        contextMenuPage.contextMenu().rightclick()
    })
})