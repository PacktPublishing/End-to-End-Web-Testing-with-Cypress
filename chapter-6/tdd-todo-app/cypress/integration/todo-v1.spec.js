/// <reference types="cypress" />

context('TODO App Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  describe('Todo Items with TDD', () => {
    it('can create and display new todo', () => {
      cy.get('[data-testid="todo-item-input"]')
        .type('New todo');
      cy.get('[data-testid="add-todo-button"]')
        .click();
      cy.contains('New Todo');
    });

    it('can delete an added todo item', () => {
      cy.get('[data-testid="todo-item-input"]')
        .type('New todo');
      cy.get('[data-testid="add-todo-button"]')
        .click();
      cy.get('[data-testid="delete-todo-1-button"]')
        .click();
      expect('[data-testid="todolist"]').not.to.contain('New Todo')
    });

    it('can view an added todo item', () => {
      cy.get('[data-testid="todo-item-input"]')
        .type('New todo');
      cy.get('[data-testid="add-todo-button"]')
        .click();
      expect('[data-testid="todolist"]').to.contain('New Todo')
    });

    it('can view number of added todo items', () => {
      cy.get('[data-testid="todo-item-input"]')
        .type('New todo');
      cy.get('[data-testid="add-todo-button"]')
        .click();
      cy.get('[data-testid="todo-item-input"]')
        .type('New todo');
      cy.get('[data-testid="add-todo-button"]')
        .click();
      expect('[data-testid="todo-item-number"]').to.eq('2')
      cy.get('[data-testid="delete-todo-1-button"]')
      .click();
      expect('[data-testid="todo-item-number"]').to.eq('2')
    });
    
  });
});
