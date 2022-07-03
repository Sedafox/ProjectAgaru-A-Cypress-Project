class GeoLocationPage {
    findPageText() { return cy.contains('Click the button') }
    findMyLocationBttn() { return cy.get('button') }
    latitude() { return cy.get('#lat-value') }
    longitude() { return cy.get('#long-value') }

    fakeLocation(latitude, longitude) {
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