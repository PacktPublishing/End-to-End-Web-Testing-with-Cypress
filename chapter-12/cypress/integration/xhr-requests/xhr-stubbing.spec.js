describe('XHR Stubbed Requests', () => {

    beforeEach(() => {
        cy.loginUser();
    });

    afterEach(() => {
        cy.logoutUser();
    });
    
    it('Stubs bank Account XHR server response', () => {
        cy.server();
        cy.route('GET', 'bankAccounts',
        {results: [{id :"RskoB7r4Bic", userId :"t45AiwidW", bankName: "Test Bank Account", accountNumber :"6123387981", routingNumber :"851823229", isDeleted: false}]})
        .as('bankAccounts');
        cy.route('GET', 'transactions/public').as('transactions');
        cy.route('notifications').as('notifications');

        cy.wait('@transactions').its('status').should('eq', 200);
        cy.wait('@notifications').its('status').should('eq', 200);
        cy.wait('@bankAccounts').then((xhr) => {
            expect(xhr.response.body.results[0].bankName).to.eq('Test Bank Account')
            expect(xhr.response.body.results[0].accountNumber).to.eq('6123387981')
        });
    });
});
