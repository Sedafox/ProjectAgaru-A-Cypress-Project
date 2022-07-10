import NotificationPage from "../Integration/PageObject/notificationPage";

const notificationPage = new NotificationPage()

describe('Tests notifications appearing on the page', () => {
    beforeEach('Refresh page', () => { notificationPage.visitNotificationMessageTesting() })

    it('Clicks the "Click Here" button and ensures the notification message exists', () => {
        notificationPage.clickHereBttn().click()
        notificationPage.notificationMessage().should('be.visible')
    })
})