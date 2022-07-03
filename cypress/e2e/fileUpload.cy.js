import Base from "../Integration/PageObject/base"
import FileUploadPage from "../Integration/PageObject/fileUploadPage";

const base = new Base()
const fileUploadPage = new FileUploadPage()

describe('Uploads an file', () => {
    beforeEach('refreshes page', () => {
        base.visitFileUploadTesting()
    })
    it('Chooses a file and uploads it', () => {
        //File upload capabilities are imported from
        //https://www.npmjs.com/package/cypress-file-upload

        cy.get('#file-upload') //Choose file button
            .attachFile('example.json')

        cy.get('#file-submit') //Submit button
            .click()
    })
})