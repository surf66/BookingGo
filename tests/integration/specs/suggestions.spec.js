/// <reference types="Cypress" />

context('Suggestions', () => {

  beforeEach(() => cy.visit('http://localhost:8080'));

  it('should return 6 suggestions when search is success', () => {
    cy.get('#pickup-location').type('Manchester')
    cy.get('.list').should('be.visible')
    cy.get('.list .item').should('have.length', 6)
  });

  it('should return not found when search returns 0 suggestions', () => {
    cy.get('#pickup-location').type('67235423')
    cy.get('.list').should('be.visible')
    cy.get('.list .item').should('have.length', 1)
    cy.get('.list .item .title').invoke('text').should('equal', 'No results found')
  });

  it('should not show suggestions when search term is less than 2 characters', () => {
    cy.get('#pickup-location').type('M')
    cy.get('.list .item').should('not.exist');
  });

  it('should hide suggestions box when search term has been cleared', () => {
    cy.get('#pickup-location').type('Manchester')
    cy.get('.list').should('be.visible')
    cy.get('.list .item').should('have.length', 6)
    cy.get('#pickup-location').clear()
    cy.get('.list .item').should('not.exist');
  });

});