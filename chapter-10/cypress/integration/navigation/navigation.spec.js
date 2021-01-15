describe('Navigation Tests', () => {

    beforeEach(() => {
        cy.loginUser();

        cy.intercept('bankAccounts').as('bankAccounts');
        cy.intercept('transactions/public').as('transactions');
        cy.intercept('notifications').as('notifications');

        cy.wait('@bankAccounts');
        cy.wait('@transactions');
        cy.wait('@notifications');
    });

    it('cy.visit(): Navigates to notifications page', () => {
        cy.visit('notifications', { timeout: 30000 });
        cy.url().should('contain', 'notifications');
    });

    it('cy.go(): Navigates front and back browser pages', () => {
        cy.visit('bankaccounts');
        cy.url().should('contain', '/bankaccounts');
        cy.go('back');
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('cy.reload(): Navigates to notifications page', () => {
        cy.reload(true);
    });
});
