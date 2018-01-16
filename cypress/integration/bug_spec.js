describe('Test bug', () => {

  it('should not have errors', () => {

    cy.visit('http://localhost:8000');

    cy.wait(5000);

    cy.get('#errors').should('contain', 'No Errors');

  });

});
