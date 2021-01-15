
describe('spy requests: functional - part 1 ', () => {

    it('cy.spy(): calls sum method with arguments', () => {
        const obj = {
            sum(a, b) {
                return a + b
            }
        }
        const spyRequest = cy.spy(obj, 'sum').as('sumSpy');
        const spyRequestWithArgs = spyRequest.withArgs(1, 2).as('sumSpyWithArgs');

        obj.sum(1, 2);
        expect(spyRequest).to.be.called;
        expect(spyRequestWithArgs).to.be.called;
        expect(spyRequest.returnValues[0]).to.eq(3);
    });

});

describe('Spy requests: API - part 2', () => {

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


    it('cy.spy(): fetches all transactions from our JSON database', () => {
        const obj = {
            fetch(url, method) {
                return cy.request({
                    url,
                    method
                }).then((response) => response);
            }
        }

        const spyRequest = cy.spy(obj, 'fetch').as('reqSpy');
        obj.fetch('http://localhost:3001/transactions', 'GET');
        expect(spyRequest).to.be.called
        expect(spyRequest.args[0][0]).to.eq('http://localhost:3001/transactions')
        expect(spyRequest.args[0][1]).to.eq('GET'); 
    });
});