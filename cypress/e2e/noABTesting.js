import noABTestingPage from "../Integration/PageObject/noABTestingPage";
import Base from "../Integration/PageObject/base"

const noABTesting = noABTestingPage()
const base = new Base()

describe('blah', () =>{
    it('Goes to the ABTestingPage', () =>{
        base.visitABTesting()
    })
    it('This Webpage seems to be broke, skipping', () =>{

    })
})

