import ContextMenuPage from "../Integration/PageObject/contextMenuPage";

const contextMenuPage = new ContextMenuPage()

describe('Right clicks a Context Menu', () => {
    beforeEach('', () => { contextMenuPage.visitContextMenuTesting() })
    it('Should right click the Context Menu', () => {
        contextMenuPage.contextMenu().rightclick()
    })
})