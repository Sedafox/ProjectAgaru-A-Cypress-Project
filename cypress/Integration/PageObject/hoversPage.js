class HoversPage{
    firstImage() { return cy.get(':nth-child(3) > img') }
    hiddenUserName(username) { return cy.contains(`${username}`) }
    viewProfile(userNumber) { return cy.get(`a[href="/users/${userNumber}"`) }
    secondImage() { return cy.get(':nth-child(4) > img') }
    thirdImage() { return cy.get(':nth-child(5) > img') }
}
export default HoversPage