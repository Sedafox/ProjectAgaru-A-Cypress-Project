import base from "./base";

class BrokenImagesPage extends base{
    image(src) { return cy.get(`div > img[src="${src}"]`) }
}
export default BrokenImagesPage