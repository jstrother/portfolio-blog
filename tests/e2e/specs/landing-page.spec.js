/* eslint-disable no-undef */
describe('Landing Page', () => {
  it('should have header', () => {
    cy.server({ force404: true });

    cy.visit('http://localhost:3000/');

    cy.contains('Jim Strother')
    cy.contains('Skills');
    cy.contains('Projects');
    cy.contains('About');
    cy.contains('Blog');
  });
});