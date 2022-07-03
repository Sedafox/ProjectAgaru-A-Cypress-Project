import Base from "../Integration/PageObject/base"
import GeoLocationPage from "../Integration/PageObject/geoLocationPage";

const base = new Base()
const geoLocationPage = new GeoLocationPage()

describe('Tests GeoLocationPage', () => {
    beforeEach('refreshes page', () => {
        //Electron on Mac unfortunately can not call on a location. So we are going to use a helper function to set a fake location before the page loads
        //Is Electron the browser? If so, call fakelocation() from geoLocationPage, pass some co-ords, then hand it off to the visit function in base
        Cypress.isBrowser('Electron') ? base.visitGeolocationTestingElectron(geoLocationPage.fakeLocation(Math.random() * 90, Math.random() * 180)) : base.visitGeolocationTesting()
    })
    it('Should say "Click the button to get your current latitudeText and longitudeText"', () => {
        geoLocationPage.findPageText().should('be.visible')
    })
    it('Should show current Latitude and Longitude after clicking the button', () => {
            geoLocationPage.findMyLocationBttn().click()
            if(!Cypress.isBrowser('Electron')){ cy.wait(6000) /*If the browser isn't electron, we need to wait or else the page will time out. */ }
            geoLocationPage.latitudeText().should('be.visible')
            geoLocationPage.longitudeText().should('be.visible')
    })
})