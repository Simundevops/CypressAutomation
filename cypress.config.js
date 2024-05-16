const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'jwnqk7',
  e2e: {
    baseUrl: 'https://www.google.com', // Update this to your base URL
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
