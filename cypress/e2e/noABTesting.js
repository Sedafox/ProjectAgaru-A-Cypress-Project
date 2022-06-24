import noABTestingPage from "../Integration/PageObject/noABTestingPage";
import Base from "../Integration/PageObject/base"

const noABTestingPage = noABTestingPage()
const base = new Base()

describe('ABTestingPage', () =>{
    it('Goes to the ABTestingPage', () =>{
        base.visitABTesting()
    })
})

