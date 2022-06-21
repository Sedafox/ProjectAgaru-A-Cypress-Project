import Base from "../Integration/PageObject/base";

const homePage = new Base()

describe('Goes to the Home page', () => {
  beforeEach(() => {
    homePage.goHome()
    cy.pause()
  })
  it('Should go  to the Home page', () => {
  })
})