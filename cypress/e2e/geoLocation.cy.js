import Base from "../Integration/PageObject/base"
import GeoLocationPage from "../Integration/PageObject/geoLocationPage";

const base = new Base()
const geoLocationPage = new GeoLocationPage()

describe('Tests GeoLocationPage', () => {
    beforeEach('refreshes page', () => {
        //When running CLI the chrome browser/electron browser cant automatically agree to share location. So we are going to set up a fake location
        //call fakelocation() from geoLocationPage, pass some co-ords, then hand it off to the visit function in base
        base.visitGeolocationTestingElectron(geoLocationPage.fakeLocation())  //You can pass latitude and longitude into fakeLocation if you have specific co-ords.
    })
    it('Should say "Click the button to get your current latitudeText and longitudeText"', () => {
        geoLocationPage.findPageText().should('be.visible')
    })
    it('Should show current Latitude and Longitude after clicking the button', () => {
            geoLocationPage.findMyLocationBttn().click()
            geoLocationPage.latitudeText().should('be.visible')
            geoLocationPage.longitudeText().should('be.visible')
    })
})