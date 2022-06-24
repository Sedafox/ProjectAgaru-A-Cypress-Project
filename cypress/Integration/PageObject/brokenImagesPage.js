class BrokenImagesPage{
    image(src) { return cy.get(`div > img[src="${src}"]`) }
}
export default BrokenImagesPage