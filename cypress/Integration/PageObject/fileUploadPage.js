import base from "./base";

class FileUploadPage extends base{
    chooseFile() { return cy.get('#file-upload') }
}
export default FileUploadPage