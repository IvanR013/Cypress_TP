class CommonObjects 
{

    Contains(content)
    {
        cy.contains(content).should('be.visible');
    }

	OnClickButton(buttonText)
	{
		return	cy.get('button').contains(buttonText).should('be.visible');
	}
	

}module.exports = new CommonObjects();
