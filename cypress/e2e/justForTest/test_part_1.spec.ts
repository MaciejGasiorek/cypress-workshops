import { use } from 'chai'
import { baseData } from 'cypress/fixtures/base.json'
import { controllers } from 'cypress/fixtures/controllers.json'
import { Helpers } from 'cypress/support/helpers'
import {user} from 'cypress/support/registration.data.json'

describe('Register / login / logout users', () => {
    const helpers = new Helpers();
    const testUserName = `TestName_${Math.random().toString().slice(2,12)}` 
    const testUserEmail= `TestName_${Math.random().toString().slice(2,12)}@op.pl` 
    const testUserPassword= `TestName_${Math.random().toString().slice(2,12)}` 

    beforeEach(() => {
        // runs once before all tests
    })


    it('Register user test', () => {
        
        cy.visit(baseData.defaultUrl)
        helpers.getElement(controllers.static.logo).should('be.visible');
        helpers.getElement(controllers.button.loginLink).click();
        helpers.getElement(controllers.text.newUserSignUp).should('be.visible');
        helpers.getElement(controllers.input.name).type(testUserName);
        helpers.getElement(controllers.input.email).type(testUserEmail);
        helpers.getElement(controllers.button.signUp).click();

        helpers.getElement(controllers.input.title).contains(user.title).click();
        helpers.getElement(controllers.input.password).type(testUserPassword);
        helpers.getElement(controllers.select.day).select(user.day);
        helpers.getElement(controllers.select.months).select(user.month);
        helpers.getElement(controllers.select.year).select(user.year);
        helpers.getElement(controllers.input.newsletter).click();
        helpers.getElement(controllers.input.firstName).type(user.firstName);
        helpers.getElement(controllers.input.lastName).type(user.lastName);
        helpers.getElement(controllers.input.company).type(user.company);
        helpers.getElement(controllers.input.address1).type(user.address1);
        helpers.getElement(controllers.select.country).select(user.country);
        helpers.getElement(controllers.input.state).type(user.state);
        helpers.getElement(controllers.input.city).type(user.city);
        helpers.getElement(controllers.input.zipcode).type(user.zipcode);
        helpers.getElement(controllers.input.mobileNumber).type(user.mobileNumber);
        helpers.getElement(controllers.button.createAccount).click();
        helpers.getElement(controllers.text.accountCreated).should('be.visible');
        helpers.getElement(controllers.button.Continue).click();
        helpers.getElement(controllers.text.loggedInAs).should('be.visible');
        

     
    })


})

