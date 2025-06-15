const pageLogin = require('../support/Page_objects/PageLogin')

Cypress.Commands.add('login', (username, password) => {
    pageLogin.typeUserName(username);
    pageLogin.typePassword(password);
    pageLogin.loginButton().click();

 });

 Cypress.Commands.add('deleteCartAPI', (userId) => {
    cy.request({
      method: 'DELETE',
      url: `https://bookcart.azurewebsites.net/api/shoppingcart/${userId}`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: ''
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    }
  );

 });