import { HomePage } from "../page-objects/HomePage";



describe('demoqa scenarios', () => {
    beforeEach(() => {
      HomePage.visit();
    });

        it('Go to grid', () => {
            HomePage.gridButton.click();

        });
  
        it('Click Two, Four, Six, Eight', () => {
            HomePage.gridButton.click();
            cy.contains('li.list-group-item-action', "Two")
            .should('be.visible')
            .click();

            cy.contains('li.list-group-item-action', "Four")
            .should('be.visible')
            .click();

            cy.contains('li.list-group-item-action', "Six")
            .should('be.visible')
            .click();

            cy.contains('li.list-group-item-action', "Eight")
            .should('be.visible')
            .click();
        });

        it('Validate Highlighted numbers', () => {
            //Actions
            HomePage.gridButton.click();

            cy.contains('li.list-group-item-action', "Two")
            .should('be.visible')
            .click();

            cy.contains('li.list-group-item-action', "Four")
            .should('be.visible')
            .click();

            cy.contains('li.list-group-item-action', "Six")
            .should('be.visible')
            .click();

            cy.contains('li.list-group-item-action', "Eight")
            .should('be.visible')
            .click();

            //Validation for highlighted numbers
            cy.contains('li.list-group-item-action', "Two")
            .should('have.class', 'active')
            .should('be.visible')

            cy.contains('li.list-group-item-action', "Four")
            .should('have.class', 'active')
            .should('be.visible')

            cy.contains('li.list-group-item-action', "Six")
            .should('have.class', 'active')
            .should('be.visible')

            cy.contains('li.list-group-item-action', "Eight")
            .should('have.class', 'active')
            .should('be.visible')


        });

        it('Validate Non-Highlighted numbers', () => {
        //Actions
            HomePage.gridButton.click();

            cy.contains('li.list-group-item-action', "Two")
            .should('be.visible')
            .click();

            cy.contains('li.list-group-item-action', "Four")
            .should('be.visible')
            .click();

            cy.contains('li.list-group-item-action', "Six")
            .should('be.visible')
            .click();

            cy.contains('li.list-group-item-action', "Eight")
            .should('be.visible')
            .click();


        //Validation for non highlighted numbers
            cy.contains('li.list-group-item-action', "One")
            .should('not.have.class', 'active')
            .should('be.visible')

            cy.contains('li.list-group-item-action', "Three")
            .should('not.have.class', 'active')
            .should('be.visible')

            cy.contains('li.list-group-item-action', "Five")
            .should('not.have.class', 'active')
            .should('be.visible')

            cy.contains('li.list-group-item-action', "Seven")
            .should('not.have.class', 'active')
            .should('be.visible')

            cy.contains('li.list-group-item-action', "Nine")
            .should('not.have.class', 'active')
            .should('be.visible')
        });
});
