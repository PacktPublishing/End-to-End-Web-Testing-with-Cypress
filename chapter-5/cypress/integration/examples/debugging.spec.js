/// <reference types="cypress" />

context('TODO MVC Debugging Tests', () => {
  beforeEach(() => {
    cy.visit('http://todomvc.com/examples/react/#/')
  });

  describe('Todo app tests', () => {
    it('can add a todo', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".todo-list").find('li').should('have.length', 1)
    });
  });
});
