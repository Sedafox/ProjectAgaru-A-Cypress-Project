import Base from "../Integration/PageObject/base"
import BrokenImagesPage from "../Integration/PageObject/brokenImagesPage";
const base = new Base()
const brokenImagesPage = new BrokenImagesPage()

describe('Tests designed to find Broken Images', () => {
    it('Goes to the Broken Images Page', () =>{
        base.visitBrokenImagesTesting()
        cy.get('img')
            .filter(':visible')
            .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));
            //TODO figure out what the heck the above code is... It works... but how?
    })
})