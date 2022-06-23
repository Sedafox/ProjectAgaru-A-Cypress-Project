import Base from "../Integration/PageObject/base"
import BrokenImagesPage from "../Integration/PageObject/brokenImagesPage";
const base = new Base()
const brokenImagesPage = new BrokenImagesPage()


//This test is designed to fail. Two of the images will fail to load, thus making their natural width less than 1. A website owner may want to know when their images don't load
describe('Tests designed to find Broken Images', () => {
    it('Webpage should load all images in div', () =>{
        base.visitBrokenImagesTesting()
        brokenImagesPage.images().should('be.visible')
            .and(($img) => {
                for(let i in $img) { //for every image found...
                    if(i <= $img.length) { expect($img[i].naturalWidth).to.be.greaterThan(0) }
                    //The above code first checks if the images are visible, then for every image found, check the naturalWidth. If greater than 0, the image loaded successfully
                }
            })
    })
})
