import HorizontalSliderPage from "../Integration/PageObject/horizontalSliderPage";

const horizontalSliderPage = new HorizontalSliderPage()

describe('Tests Horizontal Sliders', () => {
    beforeEach(function(){
        horizontalSliderPage.visitHorizontalSliderTesting()
    })

    it('Ensures the instructions are written', () => {
        horizontalSliderPage.instructions().should('be.visible')
    })

    it('Ensures the slider can move to the right', () => {
        //Ensures all values 0-5 works on the horizontal slider
        //Moves the slider to the right
        for(let i=0; i <= 5; i++){
            horizontalSliderPage.horizontalSlider()
                .invoke('val', i)
                .trigger('change')
        }
    })
    it('Ensures the slider can move to the left', () => {
        //Ensures all values 5 to 0 works on the horizontal slider
        //Moves the slider to the left
        for(let i=5; i >= 0; i--){
            horizontalSliderPage.horizontalSlider()
                .invoke('val', i)
                .trigger('change')
        }
    })
})
