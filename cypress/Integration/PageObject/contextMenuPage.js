import base from "./base";

class ContextMenuPage extends base{
    contextMenu(){ return cy.get('#hot-spot') }
}
export default ContextMenuPage