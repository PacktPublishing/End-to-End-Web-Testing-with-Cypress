/// <reference types="cypress" />

context('TODO MVC Application Tests', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('TransferProtocol')}://todomvc.com/examples/react/#/`)
  });

  describe('Todo app tests', () => {
    it('can add a todo', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todo {Enter}");
      cy.get(".todo-list").find('li').should('have.length', 2)
    });
    it('can mark a todo as completed', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todo {Enter}");
      cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
      cy.get('.todo-list>li:nth-child(2)').find('.toggle').click();
    });
    it('can view active todos', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todos {Enter}");
      cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
      cy.get(".new-todo").type("3rd New Todo {Enter}");
      cy.get(".filters > li:nth-child(3) > a").click();
      cy.get(".todo-list").find('li').should('have.length', 2)
    })
    it('can view completed todos', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todos {Enter}");
      cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
      cy.get(".new-todo").type("3rd New Todo {Enter}");
      cy.get(".filters > li:nth-child(5) > a").click();
      cy.get(".todo-list").find('li').should('have.length', 1)
    });
    it('can delete a todo', () => {
      cy.get('.new-todo').type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todos {Enter}");
      cy.get('.todo-list>li:nth-child(1)').find('button').click({ force: true })
      cy.get(".todo-list").find('li').should('have.length', 1);
    })
  });
});
