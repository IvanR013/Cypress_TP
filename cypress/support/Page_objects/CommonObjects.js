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