import {books} from '../fixtures/books.json';

class PageHome
{
	CompleteBookName(bookName)
	{
		let bookName = bookName.toLowerCase() || books.book1;
		cy.get('app-home').contains(bookName).should('be.visible');
	}
}export default new PageHome();