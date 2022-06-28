import Base from "../Integration/PageObject/base"
import DragAndDropPage from "../Integration/PageObject/dragAndDropPage";
const base = new Base()

describe('Drags and Drops things', () => {
    beforeEach('Refresh page', () => { base.visitDragNDropTesting() })
    it('Drags box B to box A', () => { cy.get('div[id="column-b"]').drag('div[id="column-a"]') }) //.drag is a plugin, can be found in commands.js
})