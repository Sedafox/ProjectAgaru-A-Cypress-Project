import HomePage from "../Integration/PageObject/homePage"

const homePage = new HomePage()

describe('Goes to the Home page', () => {
  beforeEach(() => {
    homePage.goHome()
    cy.pause()
  })
  it('Should go  to the Home page', () => {
  })
  it('Should visit A/B Testing', () => {
    homePage.visitABTesting()
  })
  it('Should visit AddRemoveTesting', () => {
    homePage.visitAddRemoveTesting()
  })
})