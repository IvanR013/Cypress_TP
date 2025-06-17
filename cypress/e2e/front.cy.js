import user from '../fixtures/user.json';
import checkoutData from '../fixtures/Checkout.json';

const pageHome = require('../support/Page_objects/PageHome');
const commonObjects = require('../support/Page_objects/CommonObjects');
const pageLogin = require('../support/Page_objects/PageLogin');
let PageOrder = require('../support/Page_objects/PageOrder');



describe('Pruebas de Front-End', () => {
  it('Comprar carrito exitosamente y visualizar orden de compra', () => {

    //Precondicion
    cy.deleteCartAPI(user.userid);

    //Accion Paso 1: Iniciar sesion en la web
    cy.VisitWebsite('https://bookcart.azurewebsites.net/login');
    pageLogin.TypeUsername();
    pageLogin.TypePassword();
    pageLogin.clickLoginButton();

    // Resultado esperado Paso 1:
    cy.checkURL('https://bookcart.azurewebsites.net/login');


    // Paso 2: Click en 'Add to cart' sobre el primer libro de la lista
    pageHome.containerHome().contains('Harry Potter and the Chamber of Secrets').should('be.visible');
    pageHome.cartBadge().contains('0').should('be.visible');
    cy.contains('Add to Cart', { timeout: 10000 }).should('exist');
    pageHome.addToCartButton(0);


    //Resultados esperados Paso 2:
    cy.contains('One Item added to cart');
    pageHome.cartBadge().contains('1');

    // Paso 3: Click en el icono del carrito
    cy.get('app-nav-bar button').contains('shopping_cart').click();

    // Resultado esperado Paso 3:
    cy.get('app-nav-bar button').contains('shopping_cart').should('be.visible');
    cy.url().should('include', '/shopping-cart');
    cy.get('app-shoppingcart').contains('Harry Potter and the Chamber of Secrets');

    // Paso 4: Click en checkout
    PageOrder.clickCheckoutButton();

    // Resultado esperado Paso 4:
    cy.url().should('include', '/checkout');
    cy.get('form').should('be.visible');

    // Paso 5: Completar form
    cy.fillCheckoutForm({
      name: checkoutData.name,
      adrss1: checkoutData.adrss1,
      adrss2: checkoutData.adrss2,
      pincode: checkoutData.pincode,
      state: checkoutData.state
    });



    // Resultado esperado Paso 5:
    cy.get('input[formcontrolname="name"]').should('have.value', checkoutData.name);

    // Paso 6: Click en Place Order
    commonObjects.OnClickButton('Place Order').click();

    // Resultado esperado Paso 6:
    cy.url().should('include', '/myorders');

    // Paso 7: Click en el link de la orden
    PageOrder.clickPrimerLinkDeOrden();

    // Paso 8: Validar que la orden contiene el libro
    PageOrder.validarPrimeraOrdenContiene('Harry Potter and the Chamber of Secrets');

    // Resultado esperado Paso 8:
    cy.url().should('include', '/myorders');
  });

//Front 1
  it('Filtrar libros al buscar por título', () => {
    // Paso 1: Login
    cy.VisitWebsite('https://bookcart.azurewebsites.net/login');
    pageLogin.TypeUsername();
    pageLogin.TypePassword();
    pageLogin.clickLoginButton();

    // Resultado esperado Paso 1
    cy.url().should('include', '/');

    // Paso 2: Buscar libro específico
    cy.searchBook('Harry Potter and the Chamber of Secrets');

    // Resultado esperado Paso 2
    cy.get('app-book-card').should('have.length.at.least', 1);
    cy.contains('Harry Potter and the Chamber of Secrets').should('be.visible');
    cy.contains('The Lord of the Rings').should('not.exist');

    // Paso 3: Limpiar búsqueda
    cy.get('input[type="search"]').clear();

    // Resultado esperado Paso 3
    cy.contains('Harry Potter and the Chamber of Secrets').should('be.visible');
  });



//Front 2
  it('Visualizar detalle de un libro desde la lista', () => {
    // Paso 1: Login
    cy.VisitWebsite('https://bookcart.azurewebsites.net/login');
    pageLogin.TypeUsername();
    pageLogin.TypePassword();
    pageLogin.clickLoginButton();

    // Resultado esperado Paso 1
    cy.url().should('include', '/');

    cy.searchBook('Harry Potter and the Chamber of Secrets');

    cy.contains('a', 'Harry Potter and the Chamber of Secrets')
      .should('be.visible')
      .click();

    cy.url().should('include', 'books/details/2');

    cy.contains('Harry Potter and the Chamber of Secrets').should('be.visible');
    cy.contains('JKR').should('be.visible');
    cy.contains('₹236.00').should('be.visible');
  });


  //API 1:
  it('Error al comprar carrito sin token (401)', () => {
    cy.request({
      method: 'POST',
      url: `https://bookcart.azurewebsites.net/api/CheckOut/${user.userid}`,
      failOnStatusCode: false,
      body: {
        orderDetails: [
          {
            book: {
              bookid: 2,
              title: 'Harry Potter and the Chamber of Secrets',
              author: 'JKR'
            }
          }
        ]
      }
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  //API 2: (Hay una mala validacion en el back, pq no maneja el payload con cortes de seguridad)
  it('body inválido responde 500', () => {
  cy.request({
    method: 'POST',
    url: `https://bookcart.azurewebsites.net/api/CheckOut/${user.userid}`,
    failOnStatusCode: false,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    body: {
      orderDetails: "payload inválido" 
    }
  }).then((res) => {
    expect(res.status).to.eq(500);
  });
});

  //API 3: Se envìa un payload correcto esperando una respuesta 200x
  it('Deberia funcionar bien (200x)', () => {
  cy.request({
    method: 'POST',
    url: `https://bookcart.azurewebsites.net/api/CheckOut/${user.userid}`,
    failOnStatusCode: false,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
       body: {
        orderDetails: [
          {
            book: {
              bookid: 2,
              title: 'Harry Potter and the Chamber of Secrets',
              author: 'JKR'
            }
          }
        ]
      }
  }).then((res) => {
    expect(res.status).to.eq(200);
  });
});
});





