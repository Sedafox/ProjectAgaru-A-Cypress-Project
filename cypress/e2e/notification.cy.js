import Base from "../Integration/PageObject/base"
import NotificationPage from "../Integration/PageObject/notificationPage";

const base = new Base()
const notificationPage = new NotificationPage()

describe('Tests notifications appearing on the page', () => {
    beforeEach('Refresh page', () => { base.visitNotificationMessageTesting() })

    it('Clicks the "Click Here" button and ensures the notification message exists', () => {
        notificationPage.clickHereBttn().click()
        notificationPage.notificationMessage().should('be.visible')
    })
})