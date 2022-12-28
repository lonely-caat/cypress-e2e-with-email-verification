import {defaultPassword, defaultUsername} from "../../config";
import Sidebar from "../page-objects/components/Sidebar";
import LoginPage from "../page-objects/pages/LoginPage";
import PaymentsPage from "../page-objects/pages/PaymentsPage";

describe('Positive test: generate and verify invoice', () => {
    before(() => {
        LoginPage.logIn(defaultUsername, defaultPassword)

    });
    context('720p resolution', () => {
        beforeEach(() => {
            LoginPage.set720MonitorViewport()
        });

        it('can generate invoice', () => {
            Sidebar.paymentsSection()
            PaymentsPage.invoiceSubsection()
            PaymentsPage.clickCreateNewInvoice()
            PaymentsPage.sendAndVerifyInvoiceEmail()
            PaymentsPage.verifyInvoiceReceipt()
        })
    })
})