describe('Network Requests', () => {

    beforeEach(() => {
        cy.loginUser();

        cy.route('bankAccounts').as('bankAccounts');
        cy.route('transactions/public').as('transactions');
        cy.route('transactions').as('personalTransactions');
        cy.route('notifications').as('notifications');

        cy.wait('@bankAccounts');
        cy.wait('@transactions');
        cy.wait('@notifications');
    });

    afterEach(() => {
        cy.logoutUser();
    });

    it('cy.server(): can override server configuration in a test', () => {

        cy.server({
            method: 'PUT',
            delay: 1000,
            status: 200,
            response: {
                message: "success"
            },
            headers: {
                Xtoken: 'test-token'
            }
        }).should((server) => {
            expect(server.status).to.eq(200);
            expect(server.response.message).to.eq("success");
            expect(server.method).to.eq("PUT");
            expect(server.headers.Xtoken).to.eq('test-token');
        });
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

    describe('Routes', () => {
        beforeEach(() => {
            cy.route('POST', 'login').as('userInformation');
        });

        it('cy.route(): verify login XHR is called when user logs in', () => {
            cy.wait('@userInformation').its('status').should('eq', 200)
        });
    });
});
