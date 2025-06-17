// PageOrders.js
class PageOrders {

  clickPrimerLinkDeOrden() {
    cy.get('tr.mat-mdc-row', { timeout: 10000 })
    cy.get('tr.mat-mdc-row').first().find('td.mat-column-orderId').click();
  }

  validarPrimeraOrdenContiene() {
    cy.get('table.details-table').should('be.visible');

    cy.get('table.details-table tbody tr').first().within(() => {
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
