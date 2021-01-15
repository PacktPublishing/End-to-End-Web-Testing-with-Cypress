describe('XHR Stubbed Requests', () => {

    beforeEach(() => {
        cy.loginUser();
    });

    afterEach(() => {
        cy.logoutUser();
    });
    
    it('Stubs bank Account XHR server response', () => {
        cy.intercept('GET', 'bankAccounts',
        {results: [{id :"RskoB7r4Bic", userId :"t45AiwidW", bankName: "Test Bank Account", accountNumber :"6123387981", routingNumber :"851823229", isDeleted: false}]})
        .as('bankAccounts');
        cy.intercept('GET', 'transactions/public').as('transactions');
        cy.intercept('notifications').as('notifications');

        cy.wait('@transactions').its('response.statusCode').should('eq', 304);
        cy.wait('@notifications').its('response.statusCode').should('eq', 304);
        cy.wait('@bankAccounts').then((xhr) => {
            expect(xhr.response.body.results[0].bankName).to.eq('Test Bank Account')
            expect(xhr.response.body.results[0].accountNumber).to.eq('6123387981')
        });
    });
});
