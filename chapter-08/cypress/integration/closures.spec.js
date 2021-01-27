/// <reference types="cypress" />

context('TODO MVC - Cypress Closures', () => {

  it.skip('creates a closure', () => {
    // { This is the external environment for the test }
    cy.get('#submit-button').then(($submitBtn) => {
      // $submitBtn is the Object of the yielded cy.get()
      // response

      // { This is the lexical environment for the test }

    })
    // Code written here will not execute until .then()  
    //finishes execution
  });

  it('can Add todo item - (Closures)', () => {
    cy.visit('http://todomvc.com/examples/react/#/')
    cy.get(".new-todo").type("New Todo {Enter}");
    cy.get('.todo-list>li:nth-child(1)').then(($todoItem) => {

      // Storing our todo item Name 
      const txt = $todoItem.text()
      expect(txt).to.eq('New Todo')
    });
    // This command will run after all the above commands  
    // have finished their execution.  
    cy.get(".new-todo").type("Another New Todo {Enter}");
  });
});
