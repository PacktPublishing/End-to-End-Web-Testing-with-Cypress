describe('Percy Visual Tests', () => {

    beforeEach(() => {
      cy.loginUser()
  
      cy.intercept('bankAccounts').as('bankAccounts');
      cy.intercept('transactions/public').as('transactions');
      cy.intercept('notifications').as('notifications');
  
      cy.wait('@bankAccounts');
      cy.wait('@transactions');
      cy.wait('@notifications');
  
  });
  
    afterEach(() => {
      cy.logoutUser();
    });
  
    it('Percy: can view transactions on dashboard', () => {
        cy.percySnapshot('dashboard');
        cy.get('[data-test="nav-top-new-transaction"]').click();
        cy.get('[data-test="user-list-item-qywYp6hS0U"]').click();
        cy.get('[data-test="transaction-create-amount-input"]').type(100);
        cy.get('[data-test="transaction-create-description-input"]').type('Test note');
        cy.get('[data-test="transaction-create-submit-payment"]').click();
        cy.get('[data-test="new-transaction-return-to-transactions"]').click();
        cy.wait('@transactions');
        cy.percySnapshot('dashboard-with-new-transaction');
    });
  });