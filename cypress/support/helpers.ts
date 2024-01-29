export class Helpers {



    getElement(selector: string) {
        if (selector.startsWith('//')) {
            cy.xpath(selector).should("exist",{timeout:1000});
            return cy.xpath(selector);
        } else  
        {
            cy.get(selector).should("exist",{timeout:1000});
            return cy.get(selector);
        } 
    }
}