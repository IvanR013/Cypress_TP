import user from '../fixtures/user.json';


class PageLogin
{
	TypeUsername(username)
	{
		// O le pasás un argumento username o usás el de user.json por defecto
		let user = username || user.username;
		cy.get('input[formcontrolname="username"]').should('be.visible').type(user.username);
	}


	TypePassword(password)
	{
		let pass = password || user.password;
		cy.get('input[formcontrolname="password"]').should('be.visible').type(pass);
	}

}export default new PageLogin();

