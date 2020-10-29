describe('Login Tests', () => {

    beforeEach(() => {
        cy.loginUser(); // option to change application user with params
    })

    afterEach(() => {
        cy.logoutUser();
    })
    it('Logs a user in', () => {
        cy.url().should('eq', 'http://localhost:3000/')
    });
});
