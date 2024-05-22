describe('GoogleCalculatorTest_Multiplication', () => {
    beforeEach(() => {
        cy.OpenGoogle();
    });

    afterEach(() => {
        cy.get('[aria-label="all clear"]').click({force: true});
        cy.get('[aria-label="clear entry"]').click({force: true});
    });

    it('TC_001:Perform Multiplication Operation using Google calculator: 4 x 6 = 24', () => {
        const selectors = ['[jsname="xAP7E"]','[jsname="YovRWb"]','[jsname="abcgof"]','[jsname="Pt8tGc"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
            cy.get(selector).click();
        });
        //  Verify the result is 24
        cy.get('#cwos').should('have.text', '24');
        // Multiplication test completed
        cy.logSuccess('TC_001: Completed!!');

    });

    it('TC_002:Multiplication with 0: 4 x 0 = 0 ', () => {
        const selectors = ['[jsname="xAP7E"]','[jsname="YovRWb"]','[jsname="bkEvMb"]','[jsname="Pt8tGc"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
            cy.get(selector).click();
        });
        // Verify the result is 0
        cy.get('#cwos').should('have.text', '0');
        // Multiplication test completed
        cy.logSuccess('TC_002:Completed!!');
    });

    it('TC_003:Multiplication of two negative number : -5x-2=10', () => {
        const selectors = ['[jsname="pPHzQc"]','[jsname="Ax5wH"]','[jsname="YovRWb"]','[jsname="pPHzQc"]','[jsname="lVjWed"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
            cy.get(selector).click();
        });
        // Verify the result is 0
        cy.get('#cwos').should('have.text', '-5 × -2');
        // Press Enter
        cy.get('[jsname="Pt8tGc"]').click();//=
        // Verify the result is -15
        cy.get('#cwos').should('have.text', '10');
        // Multiplication test completed
        cy.logSuccess('TC_003:Completed!!');

    });

    it('TC_004:Multiplication of one negative number and one positive number: -5x6=-30', () => {
        const selectors = ['[jsname="pPHzQc"]','[jsname="Ax5wH"]','[jsname="YovRWb"]','[jsname="abcgof"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
            cy.get(selector).click();
        });
        // Verify the result is 0
        cy.get('#cwos').should('have.text', '-5 × 6');
        // Press Enter
        cy.get('[jsname="Pt8tGc"]').click();//=
        // Verify the result is -15
        cy.get('#cwos').should('have.text', '-30');
        // Multiplication test completed
        cy.logSuccess('TC_004:Completed!!');
    });

});

