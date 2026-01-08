
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    defaultCommandTimeout: 15000,
    baseUrl: "https://demoqa.com/",
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
    
  },
});
