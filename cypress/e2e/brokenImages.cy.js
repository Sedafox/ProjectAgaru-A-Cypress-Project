import Base from "../Integration/PageObject/base"
import BrokenImagesPage from "../Integration/PageObject/brokenImagesPage";
const base = new Base()
const brokenImagesPage = new BrokenImagesPage()

describe('Tests designed to find Broken Images', () => {
    it('Goes to the Broken Images Page', () =>{
        base.visitBrokenImagesTesting()
        cy.get('img')
            .should('be.visible')//Image should be visible
            .and(($img) => {
                //naturalWidth & Height are set when image loads
                for(let i in $img) { //for every image found...
                    if(i <= $img.length) { //For reasons unbeknownst to man, if I don't have this if statement then the system tries to scan for an extra image. Why.
                        expect($img[i].naturalWidth).to.be.greaterThan(0) //Expect all images to have a natural width > 0, which indicates that the image has loaded
                    }
                }
            })

    })
})