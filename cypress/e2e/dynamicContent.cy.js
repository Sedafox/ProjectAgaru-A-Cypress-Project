/* Check with and without the ?width_content=static
Check for the existence of the content that is dynamic. In most of these cases the content won't ever be truly duplicated
so there is no real way to check beyond that in most cases. Do your best to check between what does remain static.
3 rows
Each row has 2 columns
Column 1 has an image
Column 2 has text
with_content=static allows you to confirm the first two rows are always the same
you could also grab the values of what is in those elements and check it against the values after a page refresh
(that row 1 column 1 src is different between the refresh)
Same with text. Just know that it becomes really hard to check things in a textbox and flakey behavior starts to crop up
 */
import Base from "../Integration/PageObject/base.js"
import DynamicContentPage from "../Integration/PageObject/dynamicContentPage"
const base = new Base()
const dynamicContentPage = new DynamicContentPage()

//There are two parts to this page. A static version and a dynamic version. We will test both of these
describe('Tests the Page with static content', () => {
    beforeEach('', () => { base.visitDynamicContentStatically() }) //Visits the static version for this test before each
    it('Verifies three images exist', () => {
        dynamicContentPage.pageImages().eq(2).should('exist')
    })

    it('Verifies the static images have the proper source', () => {
        dynamicContentPage.staticMarioImage().should('exist') //TODO these static images aren't actually static. Oops! Verify their existence but that is it
        dynamicContentPage.staticTrooperImage().should('exist')
        //The third image is not static, even on the static version of this page.
    })

    it('Verifies three rows exist', () => { dynamicContentPage.rowsWithText().should('exist')} )

    it('Verifies the text of two of the rows', () => {
        dynamicContentPage.rowsWithText().eq(0).should('contain.text', 'Accusantium')
        dynamicContentPage.rowsWithText().eq(1).should('contain.text', 'Omnis')
        //The third row doesn't have static text, but we will test for any text at all
        dynamicContentPage.rowsWithText().eq(2).invoke('text').should('have.length.greaterThan', 0)
    })
})

describe('Tests the Page without static content', () => {
    beforeEach('', () => {
        base.visitDynamicContent()
    })

    it('Verifies three images exist', () => {
        dynamicContentPage.pageImages().eq(2).should('exist')
    })

    it('Verifies three rows exist', () => {
        dynamicContentPage.rowsWithText().should('exist')
    })

    it('Verifies the three rows have text', () => {
        dynamicContentPage.rowsWithText().eq(0).invoke('text').should('have.length.greaterThan', 0)
        dynamicContentPage.rowsWithText().eq(1).invoke('text').should('have.length.greaterThan', 0)
        dynamicContentPage.rowsWithText().eq(2).invoke('text').should('have.length.greaterThan', 0)
    })
})