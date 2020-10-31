describe('XHR Requests', () => {

    afterEach(() => {
        cy.logoutUser();
    });
    
    it('logs in a user', () => {
        cy.server();
        cy.route('bankAccounts').as('bankAccounts');
        cy.route('transactions/public').as('transactions');
        cy.route('notifications').as('notifications');

        cy.visit('signin'); 
        cy.get('#username').type('Katharina_Bernier');
        cy.get('#password').type('s3cret');
        cy.get('[data-test="signin-submit"]').click()

        cy.wait('@bankAccounts').its('status').should('eq', 200);
        cy.wait('@transactions').its('status').should('eq', 200);
        cy.wait('@notifications').its('status').should('eq', 200);
    });
});
