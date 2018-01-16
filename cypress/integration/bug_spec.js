describe('Test bug', () => {

  it('should not have errors', () => {

    cy.visit('http://localhost:8080');

    cy.wait(100000);

    cy.get('#errors').should('contain', 'No Errors');

  });

});
