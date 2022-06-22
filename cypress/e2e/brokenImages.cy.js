import Base from "../Integration/PageObject/base"
import BrokenImagesPage from "../Integration/PageObject/brokenImagesPage";
const base = new Base()
const brokenImagesPage = new BrokenImagesPage()

describe('Tests designed to find Broken Images', () => {
    it('Goes to the Broken Images Page', () =>{
        base.visitBrokenImagesTesting()
        cy.get('img')
            .should('be.visible')
            .and(($img) => {
                //naturalWidth & Height are set when image loads
                for(let i in $img){
                    expect($img[i].naturalWidth).to.be.greaterThan(-1)
                }
            })

    })
})