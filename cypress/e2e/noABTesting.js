import NoABTestingPage from "../Integration/PageObject/noABTestingPage";

const noABTestingPage = new NoABTestingPage()

//I think this page might be a little broken. I see the flashing images in the div, but nothing is actually happening. Can't trigger anything. Hmmm...
describe('ABTestingPage', () =>{
    it('Goes to the ABTestingPage', () =>{
        noABTestingPage.visitABTesting()
    })
})

