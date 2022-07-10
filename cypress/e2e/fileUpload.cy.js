import FileUploadPage from "../Integration/PageObject/fileUploadPage";

const fileUploadPage = new FileUploadPage()

describe('Uploads an file', () => {
    beforeEach('refreshes page', () => {
        fileUploadPage.visitFileUploadTesting()
    })

    it('Chooses a file and uploads it', () => {
        //File upload capabilities are imported from
        //https://www.npmjs.com/package/cypress-file-upload

        cy.get('#file-upload') //Choose file button
            .attachFile('example.json') //The file has to be in "cypress/fixtures"

        cy.get('#file-submit') //Submit button
            .click()
    })
})