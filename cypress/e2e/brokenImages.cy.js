import BrokenImagesPage from "../Integration/PageObject/brokenImagesPage";

const brokenImagesPage = new BrokenImagesPage()

describe('Tests designed to find Broken Images', () => {
    it('Webpage should load all image in div', () => {
        brokenImagesPage.visitBrokenImagesTesting()
        brokenImagesPage.image('asdf.jpg').should('exist') //Broken image 1
        brokenImagesPage.image('hjkl.jpg').should('exist') //Broken image 2
        brokenImagesPage.image('img/avatar-blank.jpg').should('exist')
        })
    })
