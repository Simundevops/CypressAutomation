describe('GoogleCalculatorTest_Operator Overloading', () => {
    beforeEach(() => {
        cy.OpenGoogle();
    });
    
    afterEach(() => {
        cy.get('[aria-label="all clear"]').click({force: true});
        cy.get('[aria-label="clear entry"]').click({force: true});
    });

    it('TC_001:Check "-" on "+"', () => {
        // Type: 1 + , then press  - , Check value 1 -
        cy.get('[jsname="N10B9"]').click();//1
        cy.get('[jsname="XSr6wc"]').click();//+
        // Verify the result is 1 +
        cy.get('#cwos').should('include.text', '1 +');
        //Click on -
        cy.get('[jsname="pPHzQc"]').click();//-
        // Verify the result is 1 -
        cy.get('#cwos').should('include.text', '1 -');
        // Addition test completed
        cy.logSuccess('TC_001: Completed!!');
    });

    it('TC_002:Check "x" on "÷ "', () => {
        // Type: 1 X , then press  ÷  , Check value 1 ÷ 
        cy.get('[jsname="N10B9"]').click();//1
        cy.get('[jsname="YovRWb"]').click();//x
        // Verify the result is 1 x
        cy.get('#cwos').should('include.text', '1 ×');
        //Click on ÷ 
        cy.get('[jsname="WxTTNd"]').click();//÷ 
        // Verify the result is 1 ÷ 
        cy.get('#cwos').should('include.text', '1 ÷');
        // Addition test completed
        cy.logSuccess('TC_002: Completed!!');
    });
});