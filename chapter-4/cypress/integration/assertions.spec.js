describe('Cypress Assertions', () => {
    it('Using Implicit subjects - should', () => {
        cy.visit('http://todomvc.com/examples/react/#/')

        // Check if todo input element has expected placeholder value
        cy.get(".new-todo").should('have.attr', 'placeholder', 'What needs to be done?')
    });

    it('Using Implicit subjects - and()', () => {
        cy.visit('http://todomvc.com/examples/react/#/')

        // Check if todo input element has expected placeholder value
        cy.get(".new-todo").should('have.attr', 'placeholder', 'What needs to be done?')
        .and('have.class', 'new-todo')
    });

    it('Using Explicit subjects', () => {
        cy.visit('http://todomvc.com/examples/react/#/')

        cy.get(".new-todo").should( ($elem) => {
        expect($elem).to.have.class('new-todo')
        expect($elem).to.have.attr('placeholder','What needs to be done?')
        })
    });
});
