import base from "./base";

class FileDownloadPage extends base{
    someFileTxt() { return cy.get('[href="download/some-file.txt"]') }
    downloadFile(cssSelector){
        /*
        Workaround for Cypress expecting a page to load after download
        https://github.com/cypress-io/cypress-example-kitchensink/issues/453
         */
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 500)
            })

            /* Make sure the file exists */
            cy.intercept('/', (req) => {
                req.reply((res) => {
                    expect(res.statusCode).to.equal(200);
                });
            });

            cy.get(`${cssSelector}`).click() //Clicks the cssSelector passed in
        })
    }
}
export default FileDownloadPage