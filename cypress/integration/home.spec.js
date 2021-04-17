describe('Home:', function() {
  beforeEach(function() {
    cy.visit('http://localhost:8080/');
  });
  describe('Name:', () => {
    it('has the correct value', () => {
      cy.get('[class="name"]').contains('Harry Potter');
    });
  });
});
