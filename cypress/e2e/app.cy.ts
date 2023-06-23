describe('Adding Client', () => {
  it('It should click add client button and fill the form and refresh latest data', () => {
    cy.visit('http://localhost:3000/');

    cy.wait(3000);

    cy.get('button').contains('+ New Client').click();

    cy.get('.name').type('Amin').should('have.value', 'Amin');

    cy.get('.contact')
      .type('012-3242-232')
      .should('have.value', '012-3242-232');

    cy.get('.org').type('Harry Inc').should('have.value', 'Harry Inc');

    cy.get('.assigned').type('Jones').should('have.value', 'Jones');

    cy.get('button').contains('Save changes').click();

    cy.get('#close-button').click();

    cy.get('#refresh').click();

    cy.get('table').get('#action').should('be.visible').click();

    cy.get('a').contains('Client Detail').click();

    cy.get('a').contains('Back').click();

    cy.get('table').get('#action').should('be.visible').click();

    cy.get('.inactive').contains('Inactive').click();

    cy.get('a').contains('Client Detail').click();

    cy.get('a').contains('Back').click();

    cy.get('#refresh').click();
  });
});
