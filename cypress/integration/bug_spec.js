describe('Test bug', () => {

  it('should not have errors', () => {

    cy.visit('./dist/index.html');

    cy.wait(5000);

    cy.get('#errors').should('contain', 'No Errors');

  });

});
