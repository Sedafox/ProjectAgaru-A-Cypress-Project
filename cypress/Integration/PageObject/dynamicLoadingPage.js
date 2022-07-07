class DynamicLoadingPage{
    exampleOne() { return cy.get('[href="/dynamic_loading/1"]') }
    exampleTwo() { return cy.get('[href="/dynamic_loading/2"]') }

    exampleStart() { return cy.get('button') }
    exampleHelloWorld() { return cy.get('#finish > h4') }

}
export default DynamicLoadingPage