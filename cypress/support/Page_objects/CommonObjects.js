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