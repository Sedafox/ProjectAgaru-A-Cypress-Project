class GeoLocationPage {
    findPageText() { return cy.contains('Click the button') }
    findMyLocationBttn() { return cy.get('button') }
    latitudeText() { return cy.get('#lat-value') }
    longitudeText() { return cy.get('#long-value') }

    //Documentation at https://github.com/cypress-io/cypress/issues/2671#issuecomment-444069577
    fakeLocation(latitude = (Math.random() * 190) - 100, longitude = (Math.random() * 280) - 100) { //We do (Math.random() * 190) - 100 because the min latitude is -90 and the maximum is 90. Same logic goes to longitude.
        return {
            onBeforeLoad(win) {
                cy.stub(win.navigator.geolocation, "getCurrentPosition", (cb, err) => {
                    if (latitude && longitude) {
                        return cb({ coords: { latitude, longitude } });
                    }
                    throw err({ code: 1 }); // 1: rejected, 2: unable, 3: timeout
                });
            }
        };
    }
}
export default GeoLocationPage