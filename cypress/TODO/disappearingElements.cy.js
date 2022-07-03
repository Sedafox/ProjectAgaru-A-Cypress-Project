import Base from "../Integration/PageObject/base"
import DisappearingElementsPage from "../Integration/PageObject/disappearingElementsPage";
const base = new Base()
const disappearingElementsPage = new DisappearingElementsPage()

describe('This page is designed to test disappearing elements', () => {
    beforeEach('', () => { base.visitDisappearingElmntsTesting()} )
    it('Home Button should exist', () => { disappearingElementsPage.homeButton().should('be.visible') })
    it('About Button Should Exist', () => { disappearingElementsPage.aboutButton().should('be.visible') })
    it('Contact Button Should Exist', () => { disappearingElementsPage.contactButton().should('be.visible') })
    it('Portfolio Button Should Exist', () => { disappearingElementsPage.portfolioButton().should('be.visible') })
    // Gallery Button only shows up on a 50/50 chance, so it's not always expected to be there
    // it('Gallery Button Should Exist', () => { disappearingElementsPage.galleryButton().should('exist') })
})

