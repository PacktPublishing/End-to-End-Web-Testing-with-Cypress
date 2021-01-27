/// <reference types="cypress" />

context('TODO MVC - Selector Playground Tests', () => {
    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react/#/');
    
    });
    describe('Selector Playground Tests', () => {
        it('can add two todo items', () => {
            cy.get(".new-todo").as('newTodo');
            cy.get('@newTodo').type("New Todo {Enter}");
            cy.get('@newTodo').type("Another Todo {Enter}");
            cy.get(".todo-list").find('li').should('have.length', 2)
        });
    });
  });
  