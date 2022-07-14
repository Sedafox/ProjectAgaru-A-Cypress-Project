import ContextMenuPage from "../Integration/PageObject/contextMenuPage";

const contextMenuPage = new ContextMenuPage()

describe('Right clicks a Context Menu', () => {
    beforeEach('', () => { contextMenuPage.visitContextMenuTesting() })
    it('Should right click the Context Menu', () => {
        contextMenuPage.contextMenu().rightclick() //Right clicking the context menu opens a Javascript alert. We check for that below.
        cy.on('window:alert', (str) =>{ expect(str).to.equal('You selected a context menu') })
    })
})