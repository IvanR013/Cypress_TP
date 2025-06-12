import user from '../fixtures/user.json';

const pageHome = require('../support/Page_objects/PageHome');
const commonObjects = require('../support/Page_objects/CommonObjects');
const pageLogin = require('../support/Page_objects/PageLogin');
const pageVisit = require('../support/Page_objects/PageVisit');



describe('Pruebas de Front-End', () => {
  it.only('Comprar carrito exitosamente y visualizar orden de compra', () => {

    //Precondicion
    cy.deleteCartAPI(user.userid);

    //Accion Paso 1: Iniciar sesion en la web
    pageVisit.Visit();
    pageLogin.TypeUsername();
    pageLogin.TypePassword();
    
    commonObjects.checkURL('https://bookcart.azurewebsites.net/');
    
    pageHome.containerHome().contains('Harry Potter and the Chamber of Secrets').should('be.visible');
    pageHome.cartBadge().contains('0').should('be.visible');
    pageHome.addToCartButton();

    //Resultados esperados Paso 2:
    cy.contains('One Item added to cart').should('be.visible');
    pageHome.cartBadge().contains('1').should('be.visible');

    //Accion Paso 3: Click en el icono del carrito
    cy.get('app-nav-bar button').contains('shopping_cart').click();
    
    //Resultados esperados Paso 3:
    
    //Verificar que la url sea la del carrito
    cy.url().should('include', 'https://bookcart.azurewebsites.net/shopping-cart');
    
    //Visualizar el libro que añadimos en el carrito
    cy.get('app-shoppingcart').contains('Harry Potter and the Chamber of Secrets').should('be.visible');

    //Responsabilidad de los alumnos, completar pasos faltantes, 4 al 7

  })

  it('Nombre del caso de prueba 2 - responsabilidad de los alumnos', () => 
  {
    
  });

  it('Nombre del caso de prueba 3 - responsabilidad de los alumnos', () => 
  {

  });
})