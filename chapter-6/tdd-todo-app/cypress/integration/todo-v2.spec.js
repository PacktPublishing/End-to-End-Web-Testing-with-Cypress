/// <reference types="cypress" />

context('TODO App Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  describe('Todo Items with TDD', () => {
    it('can create and display new todo', () => {
      cy.get('[data-testid="todo-input-element"]')
        .type('New todo');
      cy.get('[data-testid="add-todo-button"]')
        .click();
      cy.get('[data-testid="todolist"]').contains('New todo');
    });

    it('can delete an added todo item', () => {
      cy.get('[data-testid="todo-input-element"]')
        .type('New todo');
      cy.get('[data-testid="add-todo-button"]')
        .click();
      cy.get('[data-testid="delete-todo-0-button"]')
        .click();
      expect('[data-testid="todolist"]').not.to.contain('New todo')
    });

    it('can view added todo items', () => {
      cy.get('[data-testid="todo-input-element"]')
      .type('New todo, {enter}')
      cy.get('[data-testid="todo-input-element"]')
      .type('Another todo, {enter}')
      cy.get('[data-testid="todolist"]').contains('New todo')
      cy.get('[data-testid="todolist"]').contains('Another todo')
    });

    it('can view number of added todo items', () => {
      cy.get('[data-testid="todo-input-element"]')
      .type('New todo, {enter}')
      cy.get('[data-testid="todo-input-element"]')
      .type('Another todo, {enter}')
      cy.get('[data-testid="todo-item-number"]').should(($header) => {
        expect($header.get(0).innerText).to.contain('2')
      })
      cy.get('[data-testid="delete-todo-1-button"]')
      .click();
      cy.get('[data-testid="todo-item-number"]').should(($header) => {
        expect($header.get(0).innerText).to.contain('1')
      })
    });
  });
});