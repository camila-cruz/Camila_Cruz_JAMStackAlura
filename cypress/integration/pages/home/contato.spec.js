/// <reference types="cypress" />

import HomeScreenPageObject from '../../../../src/components/screens/HomeScreen/HomeScreen.pageObject';

describe('/pages/index', () => {
  describe('when the user fills and submits the contact form', () => {
    it('shows a message', () => {
      cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
        .as('contactSubmission');

      const homeScreen = new HomeScreenPageObject(cy);

      homeScreen
        .acessaFormContato()
        .preencheFormContato({
          name: 'Astrogildo',
          email: 'astrogildo@nasa.com',
          message: 'Esse teste tem que passar!',
        })
        .enviaFormContato();

      cy.wait('@contactSubmission')
        .then(() => {
          cy.get('.lottie-container').should('exist');
        });
    });
  });
});
