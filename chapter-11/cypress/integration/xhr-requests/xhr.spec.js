describe('XHR Requests', () => {

    afterEach(() => {
        cy.logoutUser();
    });
    
    it('logs in a user', () => {
        cy.intercept('bankAccounts').as('bankAccounts');
        cy.intercept('transactions/public').as('transactions');
        cy.intercept('notifications').as('notifications');

        cy.visit('signin'); 
        cy.get('#username').type('Katharina_Bernier');
        cy.get('#password').type('s3cret');
        cy.get('[data-test="signin-submit"]').click()

        cy.wait('@bankAccounts').its('response.statusCode').should('eq', 200);
        cy.wait('@transactions').its('response.statusCode').should('eq', 304);
        cy.wait('@notifications').its('response.statusCode').should('eq', 304);
    });
});
