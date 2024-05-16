describe('GoogleCalculatorTest_CE Button', () => {
    beforeEach(() => {
        cy.OpenGoogle();
    });
    
    afterEach(() => {
        cy.get('[aria-label="all clear"]').click({force: true});
        cy.get('[aria-label="clear entry"]').click({force: true});
    });

    it('TC_001:Check by pressing "2" and 3" then "CE", the text area must have only "2" now ', () => {
        // Type: 2 and 3
        cy.get('[jsname="lVjWed"]').click();//2
        cy.get('[jsname="KN1kY"]').click();//3
        // Verify the result is 23
        cy.get('#cwos').should('have.text', '23');
        //Click on CE
        cy.get('[aria-label="clear entry"]').click();//-
        // Verify the result is 1 -
        cy.get('#cwos').should('have.text', '2');
        // CE test completed
        cy.logSuccess('TC_001: Completed!!');
    });

});