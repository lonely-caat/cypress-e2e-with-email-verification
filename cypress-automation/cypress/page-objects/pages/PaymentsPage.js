import BasePage from '../pages/BasePage'

export default class PaymentsPage extends BasePage {
    static clickInvoiceSubsectionSideMenu() {
        cy.get('[href="/payments/invoices"]').click()
    }

    static clickCreateNewInvoice() {
        cy.get('[data-test="button-new-invoice"]').click()
    }

    static verifyEmailCheckboxChecked() {
        cy.get('[data-test="checkbox-sendIssuedEmail"]').should('be.checked')
    }

    static clickConfirmGenerateNewInvoice() {
        cy.get('[data-test="generate-invoice-button"]').click();
        cy.get('[data-test="submit-new-invoice-button"]').click();
    }

    static sendAndVerifyInvoiceEmail() {
        cy.createInbox().then(inbox => {
            // verify a new inbox was created
            assert.isDefined(inbox)

            // save the inboxId for later checking the emails
            const inboxId = inbox.id

            this.fillInEmailField(inbox.emailAddress)
            this.fillNewInvoice()

            this.confirmGenerateNewInvoice()
            this.checkReceivedEmail(inboxId)
        })
    }

    static fillInEmailField(emailAddress) {
        cy.get('#customerEmail').type(emailAddress);
    }

    static checkReceivedEmail(inboxId) {
        cy.waitForLatestEmail(inboxId).then(email => {
            // verify we received an email
            assert.isDefined(email);

            const emailBody = email.body
            this.verifyFieldValueReceivedInEmail(emailBody)
        })
    }

    static verifyFieldValueReceivedInEmail(htmlEmail) {
        let parsedEmail = htmlEmail.replace(/<[^>]+>|{(.*?)}/g, '');
        parsedEmail = parsedEmail.replace(/\s\s+/g, ' ');

        const todayDate = this.generateTodayDate()

        cy.fixture('validInvoice').then(data => {
            cy.wrap(parsedEmail.match(new RegExp('Issue date' + '\\s(\\w+)'))[1]).should('eql', todayDate);
            cy.wrap(parsedEmail.match(new RegExp('Billing address' + '\\s(\\w+)'))[1]).should('eql', data.billingAddress);
            cy.wrap(parsedEmail.match(new RegExp('Customer name' + '\\s(\\w+)'))[1]).should('eql', data.name);

        })
    }

    static generateTodayDate() {
        const dt = new Date();
        // const date = `${dt.getFullYear()}.${(dt.getMonth() + 1)}.${dt.getDate()}`
        return `${dt.getFullYear()}`
    }

    static clickVerifyInvoiceReceipt() {
        cy.get('[data-test="invoice-sent-ok"]').click()


        cy.fixture('validInvoice').then(data => {
            cy.get('[data-test="Customer name"]').children('span').should('have.text', data.name)
            cy.get('#totalAmount').children('span').should('have.text', `Total amount${data.currency.split(' ')[0]} ${data.amount}`)
            cy.get('[data-test="Description "]').children('span').should('have.text', data.description)
        })
    }

    static fillNewInvoice() {
        cy.fixture('validInvoice').then(data => {
                cy.get('#customerName').type(data.name);
                cy.get('#billingAddress').type(data.billingAddress);
                cy.get('#city').type(data.city);
                cy.get('#postCode').type(data.postCode);
                cy.get('#state').type(data.state);
                cy.get('[name="dropdown-input-country"]').type(data.country);
                cy.get('div').contains(data.country).click();
                cy.get('[name="dropdown-input-currency"]').type(data.currency);
                cy.get('div').contains(data.currency).click();
                cy.get('#amount').type(data.amount);
                cy.get('#description').type(data.description);
            }
        )
    }
}
