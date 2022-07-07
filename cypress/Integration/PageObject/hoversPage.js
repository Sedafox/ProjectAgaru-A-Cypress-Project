class HoversPage{
    firstImage() { return cy.get(':nth-child(3) > img') }
    hiddenUserName(username) { return cy.contains(`${username}`) } //Pass in a username when calling this function
    viewProfile(userNumber) { return cy.get(`a[href="/users/${userNumber}"]`) } //Pass in the usernumber (1-3) when calling this function
    secondImage() { return cy.get(':nth-child(4) > img') }
    thirdImage() { return cy.get(':nth-child(5) > img') }
}
export default HoversPage