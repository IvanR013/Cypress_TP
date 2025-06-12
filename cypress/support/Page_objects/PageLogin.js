import user from '../../fixtures/user.json';


class PageLogin
{
	TypeUsername(username)
	{
		// Podés opcionalmente pasarle un username custom o usar el de user.json por defecto
		let user = username || user.username;
		cy.get('input[formcontrolname="username"]').should('be.visible').type(user.username);
	}


	TypePassword(password)
	{
		let pass = password || user.password;
		cy.get('input[formcontrolname="password"]').should('be.visible').type(pass);
	}

	OnClickLoginButton()
	{
		cy.get('app-login button').contains('Login').should('be.visible').click();
	}
	
}export default new PageLogin();

