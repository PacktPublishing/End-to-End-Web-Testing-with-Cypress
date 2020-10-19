/// <reference types="cypress" />

context('TODO MVC - Stub Tests', () => {

  describe.only('Stubs a method', () => {
    it('can stub a method', () => {
      let obj = {
        foo () {},
      }
      const stub = cy.stub(obj, 'foo').as('foo')
      obj.foo('foo', 'bar')
      expect(stub).to.be.called
    })
  });
});
