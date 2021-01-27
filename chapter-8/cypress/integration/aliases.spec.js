/// <reference types="cypress" />

context('TODO MVC - Aliases Tests', () => {

  beforeEach(() => {
    cy.visit('http://todomvc.com/examples/react/#/')
  })

  describe('Without use of aliasing - Anti-pattern', () => {
    let text;
    beforeEach(() => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get('.todo-list>li:nth-child(1)').then(($todoItem) => {
        text = $todoItem.text()
      });
    });

    it('gets added todo item', () => {
      // todo item text is available for use
      expect(text).to.eq('New Todo')
    });
  });

  describe('Sharing Context between hooks and tests', () => {
    beforeEach(() => {
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get('.todo-list>li:nth-child(1)').invoke('text').as('todoItem')
    });

    it('gets added todo item', function () {
      // todo item text is available for use
      expect(this.todoItem).to.eq('New Todo')
    });
  });

  describe('Todo fixtures - using this.*', () => {
    beforeEach(() => {
      // alias the users fixtures
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get('.todo-list>li:nth-child(1)').invoke('text').as('todoItem')
      cy.fixture('todos.json').as('todos')
    })

    it('todo fixtures have name', function () {
      // access the todos property
      const todos = this.todos[0]

      // make sure the first todo item contains the first
      // todo item name
      expect(this.todoItem).to.contain(todos.name)
    })
  })

  describe('Todo fixtures - using cy.get("@aliasName")', () => {
    beforeEach(() => {
      // alias the users fixtures
      cy.get(".new-todo").type("New Todo {Enter}");
      cy.get('.todo-list>li:nth-child(1)').invoke('text').as('todoItem')
      cy.fixture('todos.json').as('todos')
    })

    it('todo fixtures have name', function () {
      // access the todos property
      cy.get('@todos').then((todos) => {
        const todo = todos[0]
        // make sure the first todo item contains the first
        // todo item name
        expect(this.todoItem).to.contain(todo.name)
      });
    });
  })

  describe('Adding a Todo item - DOM Element Access Reference', () => {
    it('can add a todo - DOM element access reference', () => {
      cy.get(".new-todo").as('todoInput');

      cy.get('@todoInput').type("New Todo {Enter}");
      cy.get('@todoInput').type("Another New Todo {Enter}");
      cy.get(".todo-list").find('li').should('have.length', 2)
    });
  });

  describe('Accessing route references', () => {
    // Demonstation Test woun't pass
    it('can wait for a todo response', () => {
      cy.intercept('POST', '/todos', { id: 123 }).as('todoItem')
      cy.get('form').submit()
      cy.wait('@todoItem').its('requestBody').should('have.property', 'name', 'New Todo')
      cy.contains('Successfully created item: New Todo')
    });
  })

  describe('Accessing request references', () => {
    it('can wait for a comment response', () => {
      cy.request('https://jsonplaceholder.cypress.io/comments/6').as('sixthComment');
      cy.get('@sixthComment').should((response) => {
        expect(response.body.id).to.eq(6)
      });
    });
  });
})
