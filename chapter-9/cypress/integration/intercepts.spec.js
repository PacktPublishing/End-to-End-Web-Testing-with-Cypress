/// <reference types="cypress" />

context('TODO MVC - Intercept Tests', () => {


  describe('Routing a request', () => {
    it('can wait for app initialization', () => {
      cy.intercept('POST', '**/j/**').as('initializeTodoApp');
      cy.visit('http://todomvc.com/examples/react/#/');
      cy.wait('@initializeTodoApp'); // wait for intercept response
    });

    it('can wait for app initialization with stubbed responses', () => {
      cy.intercept('POST', '**/j/**', { data: 'some random data' }).as('initializeTodoApp');
      cy.visit('http://todomvc.com/examples/react/#/');
      cy.wait('@initializeTodoApp'); // will return with stubbed data
    });
  });
});
