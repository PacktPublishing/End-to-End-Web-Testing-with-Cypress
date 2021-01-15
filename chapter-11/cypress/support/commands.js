
Cypress.Commands.add("loginUser", (username='Katharina_Bernier', password='s3cret') => { 
    cy.visit('signin'); 
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('[data-test="signin-submit"]').click()
}); 

Cypress.Commands.add("logoutUser", () => { 
    cy.get('[data-test="sidenav-signout"]').click()
}); 
