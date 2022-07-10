import base from "./base";

class HorizontalSliderPage extends base{
    instructions() { return cy.get('.subheader') }
    horizontalSlider() { return cy.get('.sliderContainer > input') }
}
export default HorizontalSliderPage