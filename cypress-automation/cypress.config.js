const {defineConfig} = require("cypress");

module.exports = defineConfig({
    projectId: '',
    watchForFileChanges: false,
    chromeWebSecurity: false,
    viewPortWidth: 800,
    viewPortHeight: 600,
    waitForAnimation: true,
    animationDistanceThreshold: 20,
    defaultCommandTimeout: 10000,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responseTimeout: 50000,
    video: true,
    failOnStatusCode: true,

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
