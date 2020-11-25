
describe('Percy Login Snapshots', () => {
    it('percy: sign in page snapshot - first build', () => {
        cy.visit('signin'); 
        cy.get('#username').type('Kathe');
        cy.get('#password').type('passwor');
        cy.percySnapshot('first');
    });

    it('percy: sign in page snapshot - second build', () => {
        cy.visit('signin'); 
        cy.get('#username').type('Kat');
        cy.get('#password').type('passd');
        cy.percySnapshot('second');
    });  
});


