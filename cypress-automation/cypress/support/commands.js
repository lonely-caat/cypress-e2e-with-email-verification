const {MailSlurp} = require('mailslurp-client');
import {apiKey} from "../../config"


Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible');
})
Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist');
})

Cypress.Commands.add('setResolution', size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
})

// TODO: add API login funciton
Cypress.Commands.add('logInWithApi', (username, password) => {
})

// set your api key with an environment variable `CYPRESS_API_KEY` or configure using `env` property in config file
const mailslurp = new MailSlurp({apiKey});

Cypress.Commands.add("createInbox", () => {
    return mailslurp.createInbox();
});

Cypress.Commands.add("waitForLatestEmail", (inboxId) => {
    // how long we should hold connection waiting for an email to arrive
    const timeoutMillis = 30_000;
    return mailslurp.waitForLatestEmail(inboxId, timeoutMillis)
});
