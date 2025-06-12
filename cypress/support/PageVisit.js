
class PageVisit 
{	
	VisitPage(visitUrl)
	{
		let visitUrl = url || 'https://bookcart.azurewebsites.net/';

		cy.visit(visitUrl);
	}

}export default new PageVisit();

