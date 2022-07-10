import base from "./base";

class NotificationPage extends base{
    clickHereBttn() { return cy.get('a[href="/notification_message"]') }
    notificationMessage() { return cy.get('#flash') }
}
export default NotificationPage