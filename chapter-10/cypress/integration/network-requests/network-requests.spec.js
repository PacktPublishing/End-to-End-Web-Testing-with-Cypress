describe('Network Requests', () => {

    beforeEach(() => {
        cy.loginUser();

        cy.intercept('bankAccounts').as('bankAccounts');
        cy.intercept('transactions/public').as('transactions');
        cy.intercept('transactions').as('personalTransactions');
        cy.intercept('notifications').as('notifications');

        cy.wait('@bankAccounts');
        cy.wait('@transactions');
        cy.wait('@notifications');
    });

    afterEach(() => {
        cy.logoutUser();
    });

    it('cy.request(): fetch all transactions from our JSON database', () => {
        cy.request({
            url: 'http://localhost:3001/transactions',
            method: 'GET',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.results).to.be.an('array');
        });
    });
});

describe('Network request routes', () => {
    beforeEach(() => {
        cy.intercept('POST', 'login').as('userInformation');
    });

    it('cy.intercept(): verify login XHR is called when user logs in', () => {
        cy.loginUser();
        cy.wait('@userInformation').its('response.statusCode').should('eq', 200)
    });
});
