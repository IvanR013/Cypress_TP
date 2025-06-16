import user from '../../fixtures/user.json';


class PageLogin
{
	TypeUsername()
	{
		cy.get('input[formcontrolname="username"]').should('be.visible').type(user.username);
	}

	clickLoginButton()
	{
		cy.get('button[mat-raised-button]').should('be.visible').and('not.be.disabled').contains('Login').click();
	}

	TypePassword()
	{
		cy.get('input[formcontrolname="password"]').should('be.visible').type(user.password);
	}
	
}export default new PageLogin();

