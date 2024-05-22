// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add('logSuccess', (message) => {
  cy.log(`✅ ${message}`);
});  

Cypress.Commands.add('OpenGoogle', () => {
    // Step 1: Open Google
    cy.visit('https://www.google.com');
    
    // Step 2: Search for "calculator"
    cy.get('[name="q"]').type('calculator{enter}');

    // Validate the calculator text area is visibleor not
    cy.get('.tyYmIf').should('be.visible');

    cy.logSuccess('Calculator Opened successfully!!');
  });

