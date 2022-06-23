import Base from "../Integration/PageObject/base"
import BrokenImagesPage from "../Integration/PageObject/brokenImagesPage";

const base = new Base()
const brokenImagesPage = new BrokenImagesPage()


//This test is designed to fail. Two of the image will fail to load, thus making their natural width less than 1. A website owner may want to know when their image don't load
describe('Tests designed to find Broken Images', () => {
    it('Webpage should load all image in div', () => {
        base.visitBrokenImagesTesting()
        brokenImagesPage.image().should('be.visible').and(($img) => {
            for (let i in $img) { //for every image found...
                if (i <= $img.length) {
                    expect($img[i].naturalWidth).to.be.greaterThan(0)
                }
                //The above code first checks if the image are visible, then for every image found, check the naturalWidth. If greater than 0, the image loaded successfully
            }
        })
    })
})
