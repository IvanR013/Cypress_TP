import books from '../../fixtures/books.json';

class PageHome {
	containerHome() {
		return cy.get('app-home');
	}

	cartBadge() {
		return cy.get('.mat-badge-content');
	}

	addToCartButton(indexBook) 
	{
		cy.get('.book-card')
			.eq(indexBook)
			.within(() => {
				cy.contains('button', 'Add to Cart').should('be.visible').click();
			});
	}


	CompleteBookName(bookName) {
		let _bookName = _bookName.toLowerCase() || books.book1;
		cy.get('app-home').contains(bookName).should('be.visible');
	}
} export default new PageHome();