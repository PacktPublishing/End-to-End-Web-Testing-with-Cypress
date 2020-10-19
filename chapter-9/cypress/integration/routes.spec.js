/// <reference types="cypress" />

context('TODO MVC - Routes Tests', () => {
  beforeEach(() => {
    // run before each test execution
  });
  describe('Routing a request', () => {
    it('can wait for app initialization', () => {
      cy.server() 
      cy.route('**/learn.json').as('initializeTodoApp');
      cy.visit('http://todomvc.com/examples/react/#/');
      cy.wait('@initializeTodoApp'); // wait for route response
    });

    it('can wait for app initialization with stubbed responses', () => {
      cy.server() 
      cy.route('**/learn.json', 'sucacessful response received').as('initializeTodoApp');
      cy.visit('http://todomvc.com/examples/react/#/');
      cy.wait('@initializeTodoApp') // will return stubbed response
    })
  });
});