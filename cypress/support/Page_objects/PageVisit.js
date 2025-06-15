import { urls } from '../../fixtures/urls.json';


class PageVisit 
{	
	//El visit esta abstraído en el pageVisit
	VisitPage(visitUrl)
	{
		let _visitUrl = _visitUrl || urls.url;

		cy.visit(visitUrl);
	}

}export default new PageVisit();

