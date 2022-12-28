export default class Sidebar {

    static clickPaymentsSection() {
        cy.get('[data-test="payments/orders-sidebarLink"]').click()
        cy.get('h1').contains('Payments')
    }

    static clickSettlementsSection() {
        cy.get('[data-test="settlements-sidebarLink"]').click()
    }

    static clickIntegrationsSection() {
        cy.get('[data-test="integrations/api_keys-sidebarLink"]').click()
    }

    static clickSettingsSection() {
        cy.get('[data-test="settings/personal-sidebarLink"]').click()
    }

    static checkUserLoggedIn() {
        cy.get('[aria-label="Sign out icon"]')
    }
}
