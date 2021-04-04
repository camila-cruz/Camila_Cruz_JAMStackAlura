export default class HomeScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/');
  }

  acessaFormContato() {
    this.cy.get('#btnContato').click();
    return this;
  }

  preencheFormContato({ name, email, message }) {
    this.cy.get('input[name="name"]').type(name);
    this.cy.get('input[name="email"]').type(email);
    this.cy.get('textarea[name="message"]').type(message);

    return this;
  }

  enviaFormContato() {
    this.cy.get('button[type="submit"]').click();
    return this;
  }
}
