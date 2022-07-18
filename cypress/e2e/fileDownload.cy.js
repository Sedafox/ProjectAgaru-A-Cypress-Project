import FileDownloadPage from "../Integration/PageObject/fileDownloadPage";

const fileDownloadPage = new FileDownloadPage()

describe('Downloads a file', () =>{
    beforeEach('Refresh Page', () => {
        fileDownloadPage.visitFileDownloadTesting()
    })
    it('Should show the text: some-file.txt', () =>{
        fileDownloadPage.someFileTxt().should('contain.text', 'some-file.txt')
    })
    it('Should download the file after clicking some-file.txt ', () => {
        fileDownloadPage.downloadFile('[href="download/some-file.txt"]') //assertion is made during downloadFile()
    })
})