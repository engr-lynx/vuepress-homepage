describe('Projects:', function() {
  beforeEach(function() {
    cy.visit('http://localhost:8080/projects/');
  });
  describe('Title:', () => {
    it('has the correct value', () => {
      cy.get('[id="work"]').contains('Work');
    });
  });
});
  