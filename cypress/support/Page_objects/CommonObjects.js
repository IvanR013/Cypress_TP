import { urls } from "../../fixtures/urls.json";
import { Contents } from "../../fixtures/Contents.json";


class CommonObjects 
{
    checkUrl(url) 
    {
        let _url = URL || urls.url;
        cy.url().should('include', _url);
    }

    Contains(content)
    {
        // let _content = _content || Contents.Content1;
        cy.contains(content).should('be.visible');
    }

	OnClickButton(buttonText)
	{
		let _buttonText = _buttonText || Contents.ButtonText1;
		return	cy.get('button').contains(buttonText).should('be.visible');
	}
	

}module.exports = new CommonObjects();
