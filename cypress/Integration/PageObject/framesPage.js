import base from "./base";

class FramesPage extends base{
    topLeftFrame() { return cy.frameLoaded('frame[name="frame-left"]') }
    topMiddleFrame() { return cy.get('frame[name="frame-middle"]')}
    topRightFrame() { return cy.get('frame[name="frame-right"]') }

}
export default FramesPage