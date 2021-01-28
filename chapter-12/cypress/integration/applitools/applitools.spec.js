describe('Applitools Visual Tests', () => {
  beforeEach(() => {
    cy.visit('signin');
    cy.eyesOpen({
      appName: 'SignIn Page',
      browser: { width: 1200, height: 720 },
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('applitools: can signin on login page  - first build snapshot', () => {
    cy.get('#username').type('Kathe');
    cy.get('#password').type('passwor');
    cy.eyesCheckWindow('loginPage');
  });

  it('applitools: can signin on login page  - second build snapshot', () => {
    cy.get('#username').type('Kath');
    cy.get('#password').type('passwd');
    cy.eyesCheckWindow('loginPage');
  });

});



/**
* N.B
* Rememeber to export your APPLITOOLS_API_KEY variable obtained from the Applitools project dashboard
*/
