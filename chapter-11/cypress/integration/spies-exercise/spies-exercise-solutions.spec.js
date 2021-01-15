
describe('Exercise 2: spy requests: functional - part 1 ', () => {

    it('cy.spy(): calls area method with arguments', () => {
        const obj = {
            area(base, height) {
                return 0.5*(base) * height
            }
        }
        const spyRequest = cy.spy(obj, 'area').as('areaSpy');
        const spyRequestWithArgs = spyRequest.withArgs(10, 20).as('areaSpyWithArgs');
        
        obj.area(10, 20);
        expect(spyRequest).to.be.called;
        expect(spyRequestWithArgs).to.be.called;
        expect(spyRequest.args[0][0]).to.eq(10);
        expect(spyRequest.args[0][1]).to.eq(20); 
        expect(spyRequest.returnValues[0]).to.eq(100);
    });

});

describe('Exercise 2: Spy requests: API - part 2', () => {

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


    it('cy.spy(): fetches all bank accounts for a user', () => {
        const obj = {
            fetch(url, method) {
                return cy.request({
                    url,
                    method
                }).then((response) => response);
            }
        }

        const spyRequest = cy.spy(obj, 'fetch').as('reqSpy');
        obj.fetch('http://localhost:3001/bankaccounts', 'GET');
        expect(spyRequest).to.be.called
        expect(spyRequest.args[0][0]).to.eq('http://localhost:3001/bankaccounts')
        expect(spyRequest.args[0][1]).to.eq('GET'); 
    });
});