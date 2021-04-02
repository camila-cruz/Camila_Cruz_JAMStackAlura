/// <reference types="cypress" />

describe('/pages/index', () => {
  describe('when the user fills and submits the contact form', () => {
    it('shows a message', () => {
      cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
        .as('contactSubmission');

      cy.visit('/');

      cy.get('#btnContato').click();

      cy.get('input[name="name"]').type('Astrogildo');
      cy.get('input[name="email"]').type('astrogildo@nasa.com');
      cy.get('textarea[name="message"]').type('Esse teste tem que passar!');

      cy.get('button[type="submit"]').click();

      cy.wait('@contactSubmission')
        .then(() => {
          cy.get('.lottie-container').should('exist');
        });
    });
  });
});
