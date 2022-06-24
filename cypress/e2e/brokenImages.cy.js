import Base from "../Integration/PageObject/base"
import BrokenImagesPage from "../Integration/PageObject/brokenImagesPage";

const base = new Base()
const brokenImagesPage = new BrokenImagesPage()


//This test is designed to fail. Two of the image will fail to load, thus making their natural width less than 1. A website owner may want to know when their image don't load
describe('Tests designed to find Broken Images', () => {
    it('Webpage should load all image in div', () => {
        base.visitBrokenImagesTesting()
        brokenImagesPage.image('asdf.jpg').should('exist') //Broken image 1
        brokenImagesPage.image('hjkl.jpg').should('exist') //Broken image 2
        brokenImagesPage.image('img/avatar-blank.jpg').should('exist')
        })
    })
