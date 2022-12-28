export default class BasePage {
    static logInfo(message) {
        cy.log(message)
    }

    static set720MonitorViewport() {
        // run tests as if in a desktop
        // browser with a 720p monitor
        cy.setResolution([1280, 720])

    }

    static setMobileViewport() {
        cy.setResolution('iphone-x')
    }

    static setTableViewport() {
        cy.setResolution('ipad-2')
    }

    static setMacDesktopViewport() {
        cy.setResolution('macbook-13')
    }

    static setMacLargeDesktopViewport() {
        cy.setResolution('macbook-15')
    }
}
