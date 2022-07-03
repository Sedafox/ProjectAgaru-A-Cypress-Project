import Base from "../Integration/PageObject/base"
import GeoLocationPage from "../Integration/PageObject/geoLocationPage";

const base = new Base()
const geoLocationPage = new GeoLocationPage()

describe('Tests GeoLocationPage', () => {
    beforeEach('refreshes page', () => {
        //Electron on Mac unfortunately can not call on a location. So we are going to use a helper function to set a fake location before the page loads
        //Is Electron the browser? If so, call fakelocation() from geoLocationPage, pass some co-ords, then hand it off to the visit function in base
        Cypress.isBrowser('Electron') ? base.visitGeolocationTestingElectron(geoLocationPage.fakeLocation('48', '2')) : base.visitGeolocationTesting()
    })
    it('Should say "Click the button to get your current realLatitude and realLongitude"', () => {
        geoLocationPage.findPageText()
    })
    it('Should show current Latitude and Longitude after clicking the button', () => {
            geoLocationPage.findMyLocationBttn().click()
            cy.wait(5000) //it takes a few seconds to get the lat and long, so we are gonna rest here
            geoLocationPage.realLatitude().should('be.visible')
            geoLocationPage.realLongitude().should('be.visible')
    })
})