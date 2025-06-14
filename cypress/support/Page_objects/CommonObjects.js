<<<<<<< HEAD
class CommonObjects {
  
	Visit()
	{
		cy.visit('https://bookcart.azurewebsites.net/');
	}

	CheckURL(expectedUrl)
 	{
  		cy.url().should('include', expectedUrl);
 	}

}export default new CommonObjects();
=======
import { urls } from "../../fixtures/urls.json";
import { Contents } from "../../fixtures/Contents.json";


class CommonObjects 
{
    checkUrl(URL) 
    {
        let URL = URL || urls.url;
        cy.url().should('include', URL);
    }

    Contains(content)
    {
        let content = content || Contents.Content1;
        cy.contains().should('be.visible');
    }

} module.exports = new CommonObjects();
>>>>>>> d1729819acfcc6ee6b73455bbccfba68f3a4ae1a
