/// <reference types="cypress" />

context('TODO MVC Actionability Tests', () => {
  beforeEach(() => {
    cy.visit('http://todomvc.com/examples/react/#/')
  });

  describe('Actionability tests', () => {
    it('can mark a todo as completed - with changed hitbox position', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todo {Enter}");
      cy.get('.todo-list>li:nth-child(1)').find('.toggle').click({ position: 'topLeft' });
    });
    it('can mark all todo as completed - with no forced toggle option (Failure)', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todo {Enter}");
      cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
      cy.get('#toggle-all').click();
    });

    it('can mark all todo as completed - with forced toggle option (Success)', () => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get(".new-todo").type("Another New Todo {Enter}");
      cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
      cy.get('#toggle-all').click({force: true});
    });
  });
});
