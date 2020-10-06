/// <reference types="cypress" />

describe('TODO MVC - Cypress Variables', () => {

  describe('var Keyword', () => {
    var a = 20;

    it('var scope context', () => {
      a = 30;
      expect(a).to.eq(30) // a = 30
    });

    it('var scope context - changed context ', () => {
      // Variable scope remains the same as the change affects 
      // the global scope
      expect(a).to.eq(30) // a = 30
    });
  })

  describe('let Keyword', () => {
    let a = 20;
    it('let scope context', () => {
      let a = 30;
      // Local scoped variable
      expect(a).to.eq(30) // a = 30
    });
    it('let scope context - global', () => {
      // Global scoped variable
      expect(a).to.eq(30) // a = 20
    });
  });


  describe('const Keyword', () => {
    const a = 20;
    it('let scope context', () => {
      a = 30;
      // Fails as We cannot re-assign
      // a variable declared with a const keyword
      expect(a).to.eq(30) // a = 20
    });
  });
});
