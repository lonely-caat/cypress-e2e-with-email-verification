import BasePage from '../pages/BasePage'
import {appUrl} from "../../../config";

export default class LoginPage extends BasePage {
    static checkErrorText(expectedText) {
        cy.get('.AuthPage_formError__2aifA').should('have.text', expectedText)
    }

    static checkEmailErrorText(expectedText) {
        cy.get('#email-error-message').should('have.text', expectedText)
    }

    static logIn(username, password) {
        cy.visit(appUrl)
        cy.contains('Sign in').should('be.visible');
        cy.get('#email').type(username)
        cy.get('#password').type(password)
        cy.get('#progress-status').click();
    }
}