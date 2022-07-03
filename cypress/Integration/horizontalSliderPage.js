class HorizontalSliderPage{
    instructions() { return cy.get('.subheader') }
    horizontalSlider() { return cy.get('.sliderContainer > input') }
}
export default HorizontalSliderPage