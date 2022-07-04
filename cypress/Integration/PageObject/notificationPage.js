class NotificationPage{
    clickHereBttn() { return cy.get('a[href="/notification_message"]') }
    notificationMessage() { return cy.get('#flash') }
}
export default NotificationPage