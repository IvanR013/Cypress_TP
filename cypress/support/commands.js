const pageLogin = require('../support/Page_objects/PageLogin')

Cypress.Commands.add('login', (username, password) => {
    pageLogin.typeUserName(username);
    pageLogin.typePassword(password);
    pageLogin.loginButton().click();

 });

 Cypress.Commands.add('VisitWebsite', (url) => 
  {
		cy.visit(url);
  }
);

Cypress.Commands.add('checkURL', (url) => 
  {
    cy.url().should('include', url);
  }
);

  Cypress.Commands.add('fillCheckoutForm', (checkoutData) => 
  {
    cy.get('input[formcontrolname="name"]').should('be.visible').type(checkoutData.name);
    cy.get('input[formcontrolname="addressLine1"]').should('be.visible').type(checkoutData.adrss1);
    cy.get('input[formcontrolname="addressLine2"]').should('be.visible').type(checkoutData.adrss2);
    cy.get('input[formcontrolname="pincode"]').should('be.visible').type(checkoutData.pincode);
    cy.get('input[formcontrolname="state"]').should('be.visible').type(checkoutData.state);
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