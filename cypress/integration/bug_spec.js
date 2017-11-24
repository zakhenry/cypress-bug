describe('Test bug', () => {

  it('should error', () => {

    cy.visit('http://localhost:3000');

    cy.get('button').click();

  });

});
