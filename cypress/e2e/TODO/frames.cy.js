import Base from "../../Integration/PageObject/base"
import FramesPage from "../../Integration/PageObject/framesPage";

const base = new Base()
const framesPage = new FramesPage()

describe('Tests Nested frames functionality', () => {

    beforeEach('Refresh the page', () => {
        base.visitNestedFramesTesting()
    })

    it('Identifies all nested frames', () => {
        framesPage.topLeftFrame()
       // framesPage.topMiddleFrame().should('exist')
       // framesPage.topRightFrame().should('exist')
    })
})