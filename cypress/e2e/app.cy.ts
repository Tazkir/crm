describe('Adding Client', () => {
  it('It should click add client button and fill the form and refresh latest data', () => {
    cy.visit('http://localhost:3000/');

    cy.wait(3000);

    cy.get('button').contains('+ New Client').wait(2000).click();

    cy.get('.name').type('Amin').should('have.value', 'Amin').wait(2000);

    cy.get('.contact')
      .type('012-3242-232')
      .should('have.value', '012-3242-232')
      .wait(2000);

    cy.get('.org')
      .type('Harry Inc')
      .should('have.value', 'Harry Inc')
      .wait(1000);

    cy.get('.assigned').type('Jones').should('have.value', 'Jones').wait(1000);

    cy.get('button').contains('Save changes').wait(3000).click();

    cy.get('#close-button').wait(1000).click();

    cy.get('#refresh').wait(2000).click();

    cy.get('table').get('#action').should('be.visible').wait(1000).click();

    cy.get('a').contains('Client Detail').wait(3000).click();

    cy.get('a').contains('back').wait(3000).click();

    cy.get('table').get('#action').should('be.visible').wait(1000).click();

    cy.get('.inactive').contains('Inactive').wait(3000).click();

    cy.get('a').contains('Client Detail').wait(3000).click();

    cy.get('a').contains('back').wait(3000).click();

    cy.get('#refresh').click().wait(3000);
  });
});
