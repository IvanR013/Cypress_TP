// PageOrders.js
class PageOrders 
{

  clickPrimerLinkDeOrden() {


  // Opción B: Si toda la celda es clickable
  cy.get('tr.mat-mdc-row').first().find('td.mat-column-orderId').click();
}

validarPrimeraOrdenContiene() {
  // 1. Primero verifica que la tabla está cargada
  cy.get('table.details-table').should('be.visible');

  // 2. Busca exactamente en la primera fila del tbody
  cy.get('table.details-table tbody tr').first().within(() => {
    // Valida el título del libro en el enlace
    cy.get('a[href="/books/details/2"]')
      .should('contain.text', 'Harry Potter and the Chamber of Secrets');
    
  });
}


  clickCheckoutButton() {
     cy.get('button[color="warn"]')
      .contains('CheckOut')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }


  eliminarPrimeraOrden() {
    cy.get('table tbody tr').first().find('mat-icon').contains('delete').click();
  }

} export default new PageOrders();
