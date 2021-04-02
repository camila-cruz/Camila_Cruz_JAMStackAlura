/// <reference types="cypress" />

import FormContatoPageObject from '../../../../src/components/patterns/FormContato/FormContato.pageObject';

describe('/pages/index', () => {
  describe('when the user fills and submits the contact form', () => {
    it('shows a message', () => {
      cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
        .as('contactSubmission');

      const contactForm = new FormContatoPageObject(cy);

      contactForm
        .acessaForm()
        .preencheForm({
          name: 'Astrogildo',
          email: 'astrogildo@nasa.com',
          message: 'Esse teste tem que passar!',
        })
        .enviaForm();

      cy.wait('@contactSubmission')
        .then(() => {
          cy.get('.lottie-container').should('exist');
        });
    });
  });
});
