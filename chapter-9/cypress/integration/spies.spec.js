/// <reference types="cypress" />

context('TODO MVC - Spy Tests', () => {

  describe('Spies a method', () => {
    it('can spy a method', () => {
      let obj = {
        foo () {},
      }
      const spy = cy.spy(obj, 'foo').as('foo')
      obj.foo('foo', 'bar')
      expect(spy).to.be.called
    })
  });
});
