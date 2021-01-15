describe('Network Requests', () => {

    beforeEach(() => {
        cy.intercept({
            headers: {
                'x-token': 'test-token'
            }
        });

        cy.loginUser();

        cy.intercept('bankAccounts').as('bankAccounts');
        cy.intercept('transactions/public').as('transactions');
        cy.intercept('transactions').as('personalTransactions');
        cy.intercept('notifications').as('notifications');

        cy.wait('@bankAccounts');
        cy.wait('@transactions');
        cy.wait('@notifications');
        cy.intercept('GET', '/transactions/_yDP72jbb', { transaction: { receiverName: "Test Receiver", senderName: "Test Sender", likes: [], comments: [], id: "_yDP72jbb" } })
            .as('transactionDetails')
    });

    afterEach(() => {
        cy.logoutUser();
    });

    describe('Exercise 4', () => {
        it('cy.request(): fetch all contacts from our JSON database', () => {
            cy.request({
                url: 'http://localhost:3001/transactions/contacts',
                method: 'GET',
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.results).to.be.an('array');
            });
        });

        it('cy.request(): fetch all notifications from our JSON database', () => {
            cy.request({
                url: 'http://localhost:3001/notifications',
                method: 'GET',
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.results).to.be.an('array');
            });
        });
    });

    describe('Exercise 5', () => {

        beforeEach(() => {
            cy.intercept('checkAuth').as('authentication');
        });

        it('cy.intercept(): checks whether user is logged in', () => {
            cy.visit('user/settings');
            cy.get('[data-test="user-settings-firstName-input"]').clear().type('test fname');
            cy.get('[data-test="user-settings-submit"]').click();
            cy.wait('@authentication');
            // Change the name back to initial state
            cy.get('[data-test="user-settings-firstName-input"]').clear().type('Edgar');
            cy.get('[data-test="user-settings-submit"]').click();
        });
    });
});
