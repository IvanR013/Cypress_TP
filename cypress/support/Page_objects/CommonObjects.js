class CommonObjects 
{

    Contains(content)
    {
        // let _content = _content || Contents.Content1;
        cy.contains(content).should('be.visible');
    }

	OnClickButton(buttonText)
	{
		return	cy.get('button').contains(buttonText).should('be.visible');
	}
	

}module.exports = new CommonObjects();
