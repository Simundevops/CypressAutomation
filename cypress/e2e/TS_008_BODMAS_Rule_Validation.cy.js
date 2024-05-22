describe('GoogleCalculatorTest_BODMAS_Rule', () => {
    beforeEach(() => {
        cy.OpenGoogle();
    });
    
    afterEach(() => {
        cy.get('[aria-label="all clear"]').click({force: true});
        cy.get('[aria-label="clear entry"]').click({force: true});
    });

    it('TC_001:Check 6 + 8 x 2 - 7 = 15 ', () => {
        const selectors = ['[jsname="abcgof"]','[jsname="XSr6wc"]','[jsname="T7PMFe"]','[jsname="YovRWb"]','[jsname="lVjWed"]','[jsname="pPHzQc"]','[jsname="rk7bOd"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
        cy.get(selector).click();
        });
        // Verify the result is 6 + 8 × 2 - 7
        cy.get('#cwos').should('have.text', '6 + 8 × 2 - 7');
        //Click on =
        cy.get('[jsname="Pt8tGc"]').click();//=
        // Verify the result is 1 -
        cy.get('#cwos').should('have.text', '15');
        // Addition test completed
        cy.logSuccess('TC_001: Completed!!');
    });

    it('TC_002:Check 6 + 8 ÷ 2 - 7 = 3', () => {
        const selectors = ['[jsname="abcgof"]','[jsname="XSr6wc"]','[jsname="T7PMFe"]','[jsname="WxTTNd"]','[jsname="lVjWed"]','[jsname="pPHzQc"]','[jsname="rk7bOd"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
        cy.get(selector).click();
        });
        // Verify the result is 6 + 8 ÷ 2 - 7
        cy.get('#cwos').should('have.text', '6 + 8 ÷ 2 - 7');
        //Click on ÷=
        cy.get('[jsname="Pt8tGc"]').click();//÷ 
        // Verify the result is 1 ÷ 
        cy.get('#cwos').should('have.text', '3');
        // Addition test completed
        cy.logSuccess('TC_002: Completed!!');
    });
});