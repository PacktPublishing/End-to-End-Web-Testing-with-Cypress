describe('Navigation Exercise Solutions', () => {

    beforeEach(() => {
        cy.loginUser();

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

    describe('Exercise-1', () => {

        it('cy.visit(): Navigates to bank accounts page and creates new account', () => {
            cy.visit('bankaccounts');
            cy.url().should('contain', 'bankaccounts');

            cy.get('[data-test="bankaccount-new"]').click();
            cy.url().should('contain', 'bankaccounts/new');
            cy.get('[data-test="bankaccount-bankName-input"]').type('Test Bank');
            cy.get('[data-test="bankaccount-routingNumber-input"]').type('123456769');
            cy.get('[data-test="bankaccount-accountNumber-input"]').type('56789804564');

            cy.get('[data-test="bankaccount-submit"]').click();
            cy.url().should('eq', 'http://localhost:3000/bankaccounts');
        });

        it('cy.visit(): redirects to dashboard when trying to navigate a signed in user to signin page', () => {
            cy.visit('signin');
            cy.url().should('eq', 'http://localhost:3000/');
        });
    });

    describe('Exercise-2', () => {
        it('cy.go(): navigates back to friends tab', () => {
            cy.get('[data-test="nav-contacts-tab"]').click();
            cy.get('[data-test="nav-personal-tab"]').click();
            cy.go('back')
            cy.url().should('contain', 'contacts');
        });

        it('cy.go(): creates a new transaction', () => {
            cy.get('[data-test="nav-top-new-transaction"]').click();
            cy.get('[data-test="user-list-item-qywYp6hS0U"]').click();
            cy.get('[data-test="transaction-create-amount-input"]').type(200);
            cy.get('[data-test="transaction-create-description-input"]').type('Test note');
            cy.get('[data-test="transaction-create-submit-payment"]').click();
            cy.get('[data-test="new-transaction-return-to-transactions"]').click();
            cy.go('back')
            cy.url().should('contain', 'transaction/new');
        });
    });

    describe('Exercise-3', () => {
        it('cy.reload(): resets state of page', () => {
            cy.visit('user/settings');
            cy.get('[data-test="user-settings-firstName-input"]').clear().type('test fname');
            cy.get('[data-test="user-settings-lastName-input"]').clear().type('test lname');
            cy.reload();
            cy.get('[data-test="user-settings-firstName-input"]')
                .invoke('val').should('eq', 'Edgar')
            cy.get('[data-test="user-settings-lastName-input"]')
                .invoke('val').should('eq', 'Johns')
        });
    })
});
