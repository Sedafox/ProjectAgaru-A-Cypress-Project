import GeoLocationPage from "../Integration/PageObject/geoLocationPage";

const geoLocationPage = new GeoLocationPage()

describe('Tests GeoLocationPage', () => {
    beforeEach('refreshes page', () => {
        //When running CLI the chrome browser/electron browser cant automatically agree to share location. So we are going to set up a fake location
        //call fakelocation() from geoLocationPage, pass some co-ords, then hand it off to the visit function in base
        geoLocationPage.visitGeolocationTestingElectron(geoLocationPage.fakeLocation()) //You can pass lat and longitude as args into fakeLocation() But by default it is random
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
