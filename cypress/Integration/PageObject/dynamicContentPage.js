class DynamicContentPage{
    pageImages(){ return cy.get('div[class="large-2 columns"] > img')}
    staticMarioImage(){ return cy.get('div[class="large-2 columns"] > img[src="/img/avatars/Original-Facebook-Geek-Profile-Avatar-1.jpg"]')}
    staticTrooperImage(){ return cy.get('div[class="large-2 columns"] > img[src="/img/avatars/Original-Facebook-Geek-Profile-Avatar-2.jpg"]') }
    rowsWithText(){ return cy.get('div[class="large-10 columns large-centered"] > div > div[class="large-10 columns"]')}
}
export default DynamicContentPage