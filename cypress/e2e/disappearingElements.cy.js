import Base from "../Integration/PageObject/base"
import DisappearingElementsPage from "../Integration/PageObject/disappearingElementsPage";
const base = new Base()
const disappearingElementsPage = new DisappearingElementsPage()

describe('Here we go again', () => {
    beforeEach('', () => { base.visitDisappearingElmntsTesting()} )
    it('Home Button should exist', () => { disappearingElementsPage.homeButton().should('exist')} )
    it('About Button Should Exist', () => { disappearingElementsPage.aboutButton().should('exist') })
    it('Contact Button Should Exist', () => { disappearingElementsPage.contactButton().should('exist') })
    it('Portfolio Button Should Exist', () => { disappearingElementsPage.portfolioButton().should('exist') })
    // Gallery Button only shows up on a 50/50 chance, so its not always expected to be there
    // it('Gallery Button Should Exist', () => { disappearingElementsPage.galleryButton().should('exist') })
})

