import noABTestingPage from "../Integration/PageObject/noABTestingPage";
import Base from "../Integration/PageObject/base"

const noABTestingPage = noABTestingPage()
const base = new Base()

//I think this page might be a little broken. I see the flashing images in the div, but nothing is actually happening. Can't trigger anything. Hmmm...
describe('ABTestingPage', () =>{
    it('Goes to the ABTestingPage', () =>{
        base.visitABTesting()
    })
})

