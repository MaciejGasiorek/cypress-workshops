import { baseData } from 'cypress/fixtures/base.json'
import { controllers } from 'cypress/fixtures/controllers.json'
import { Helpers } from 'cypress/support/helpers'

describe('Register / login / logout users', () => {
    const helpers = new Helpers();
    const testUserName = `TestName_${Math.random().toString().slice(2,12)}` 
    const testUserEmail= `TestName_${Math.random().toString().slice(2,12)}@op.pl` 

    beforeEach(() => {
        // runs once before all tests
    })

    // -- Start: Cypress Tests --
    it('Register user test', () => {
        

        cy.visit(baseData.defaultUrl)
        helpers.getElement(controllers.static.logo).should('be.visible');
        //cy.xpath('//img[contains(@src,\'logo.png\')]').should('be.visible');
        helpers.getElement(controllers.button.loginLink).click();
        helpers.getElement(controllers.text.newUserSignUp).should('be.visible');

        helpers.getElement(controllers.input.name).type(testUserName);
        helpers.getElement(controllers.input.email).type(testUserEmail);
        helpers.getElement(controllers.button.signUp).click();

        

        // const cssSelector: string = '#myElement';
        // const xpathSelector: string = '//div[@class="example"]';
        // const unknownSelector: string = 'someSelector';

        // cy.log(`Type of "${cssSelector}": ${helpers.getElement(cssSelector)}`)
        // cy.log(`Type of "${xpathSelector}": ${helpers.getElement(xpathSelector)}`)
        //cy.log(`Type of "${unknownSelector}": ${helpers.getElement(unknownSelector)}`)
    })


})

