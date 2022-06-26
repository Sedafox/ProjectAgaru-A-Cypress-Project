import Base from "../Integration/PageObject/base"
import DigestAuthenticationPage from "../Integration/PageObject/digestAuthenticationPage";
const base = new Base()
const digestAuthenticationPage = new DigestAuthenticationPage()

describe('Digest Authentication', () => {

    it('Looks like Cypress isn\'t capable of Digest Auth', () => {
        //Looks like no one knows how to do this yet without cookies
    })
})