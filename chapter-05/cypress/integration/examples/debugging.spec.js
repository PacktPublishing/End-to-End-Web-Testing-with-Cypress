/// <reference types="cypress" />

context('TODO MVC Debugging Tests', () => {
  beforeEach(() => {
    cy.visit('http://todomvc.com/examples/react/#/')
  });

  describe('Todo app tests', () => {
    it('Page Events Test: can add a todo', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".todo-list").find('li').should('have.length', 1)
    });
    it('Error Test: can add a todo', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".todo-list").find('li').should('have.length', 2)
    });
    it('Time travel & Snapshots: can mark a todo as completed', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todo {Enter}");
      cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
      cy.get('.todo-list>li:nth-child(2)').find('.toggle').click();
    });
    it('Special commands - Debug: can mark a todo as completed', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todo {Enter}").debug();
      cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
      cy.get('.todo-list>li:nth-child(2)').find('.toggle').click();
    });
     it('Special commands - Pause: can mark a todo as completed', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.pause();
      cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
    });
  });
});
