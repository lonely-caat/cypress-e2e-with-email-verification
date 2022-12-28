import {appUrl, defaultPassword, defaultUsername} from '../../config'
import Sidebar from '../page-objects/components/Sidebar'
import LoginPage from '../page-objects/pages/LoginPage'


describe('Positive login tests', () => {
    beforeEach(() => {
        cy.visit(appUrl)
    });

    it.only('Valid credentials: login', function () {
        LoginPage.logIn(defaultUsername, defaultPassword)
        Sidebar.checkUserLoggedIn()
    })
})

describe('Negative login tests', () => {
    beforeEach(() => {
        cy.visit(appUrl)
    });
    it('invalid credentials: invalid format', () => {
        cy.logIn('invalid', 'invalid')
        LoginPage.checkEmailErrorText('Invalid email address')
    })
    it('invalid credentials: empty credentials', () => {
        cy.logIn(' ', ' ')
        LoginPage.checkErrorText('Wrong email or password')
    })
    it('invalid credentials: unexisting user', () => {
        cy.logIn('valid@format.but', 'no such user')
        LoginPage.checkErrorText('Wrong email or password')
    })
})
