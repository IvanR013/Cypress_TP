import { urls } from '../../config';


class PageVisit 
{	
	VisitPage(visitUrl)
	{
		let visitUrl = visitUrl || urls.url;

		cy.visit(visitUrl);
	}

}export default new PageVisit();

