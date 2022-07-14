import base from "./base";

class FramesPage extends base{
    topFrame() { return cy.get('frame[name="frame-top"').its('0.contentDocument.body').then(cy.wrap)  }

    topMiddleFrameSet() { return this.topFrame().get('frameset') }

    topLeftFrame() { return this.topMiddleFrameSet()
        .get('frame').
        its('0.contentDocument.body').then(cy.wrap)
    }






    topMiddleFrame() { return cy.get('frame[name="frame-middle"]')}
    topRightFrame() { return cy.get('frame[name="frame-right"]') }

}
export default FramesPage