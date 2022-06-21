import Base from "../Integration/PageObject/base"
import BasicAuthPage from "../Integration/PageObject/basicAuthPage";
const base = new Base()
const basicAuthPage = new BasicAuthPage()

describe('Tests the core functionality of the Basic Auth page', () =>{
    it('Clicks the Basic Auth button from the home page', () =>{
        base.goHome()
        base.visitBasicAuthTesting() //TODO page infinitely loads.... Figure out a way to skip waiting for page to load?
    })
    it('Fills in the Basic Auth', () =>{
        basicAuthPage('admin','admin').login()
    })
})