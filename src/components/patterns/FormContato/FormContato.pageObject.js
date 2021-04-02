export default class FormContatoPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/');
  }

  acessaForm() {
    this.cy.get('#btnContato').click();
    return this;
  }

  preencheForm({ name, email, message }) {
    this.cy.get('input[name="name"]').type(name);
    this.cy.get('input[name="email"]').type(email);
    this.cy.get('textarea[name="message"]').type(message);

    return this;
  }

  enviaForm() {
    this.cy.get('button[type="submit"]').click();
    return this;
  }
}
