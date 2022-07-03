import Base from "../Integration/PageObject/base"
import GeoLocationPage from "../Integration/PageObject/geoLocationPage";

const base = new Base()
const geoLocationPage = new GeoLocationPage()

//Note, this test will not work on Electron on a mac device. Must be on a browser with geolocation enabled
describe('Tests GeoLocationPage', () => {
    beforeEach('refreshes page', () => {
        base.visitGeolocationTesting()
    })
    it('Should say "Click the button to get your current latitude and longitude"', () => {
        geoLocationPage.findPageText()
    })
    it('Should show current Latitude and Longitude after clicking the button', () => {
        geoLocationPage.findMyLocationBttn().click()
        cy.wait(5000) //it takes a few seconds to get the lat and long, so we are gonna rest here
        geoLocationPage.latitude().should('be.visible')
        geoLocationPage.longitude().should('be.visible')
    })
})