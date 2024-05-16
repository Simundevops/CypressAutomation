describe('GoogleCalculatorTest_Division', () => {
    beforeEach(() => {
        cy.OpenGoogle();
    });

    afterEach(() => {
        cy.get('[aria-label="all clear"]').click({force: true});
        cy.get('[aria-label="clear entry"]').click({force: true});
    });
    it('TC_001:Perform Division Operation using Google calculator: 8 / 2 = 4', () => {
        const selectors = ['[jsname="T7PMFe"]','[jsname="WxTTNd"]','[jsname="lVjWed"]','[jsname="Pt8tGc"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
            cy.get(selector).click();
        });
        // Verify the result is 4
        cy.get('#cwos').should('have.text', '4');
        // Division test completed
        cy.logSuccess('TC_001:Completed!!');
    });

    it('TC_002: Division by 0: 8 / 0 = Infinity', () => {
        const selectors = ['[jsname="T7PMFe"]','[jsname="WxTTNd"]','[jsname="bkEvMb"]','[jsname="Pt8tGc"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
            cy.get(selector).click();
        });
        // Verify the result is Infinity
        cy.get('#cwos').should('have.text', 'Infinity');
        // Division test completed
        cy.logSuccess('TC_002:Completed!!');

    });

    it('TC_003: Division with 0: 0 / 2 = 0', () => {
            const selectors = ['[jsname="bkEvMb"]','[jsname="WxTTNd"]','[jsname="lVjWed"]','[jsname="Pt8tGc"]'];
            // Loop through the array and click each element
            selectors.forEach(selector => {
                cy.get(selector).click();
            });
            // Verify the result is 4
            cy.get('#cwos').should('have.text', '0');
            // Division test completed
            cy.logSuccess('TC_003:Completed!!');

    });

    it('TC_004:Division of two negative number : -4 ÷ -2 = 2', () => {
            const selectors = ['[jsname="pPHzQc"]','[jsname="xAP7E"]','[jsname="WxTTNd"]','[jsname="pPHzQc"]','[jsname="lVjWed"]'];
            // Loop through the array and click each element
            selectors.forEach(selector => {
                cy.get(selector).click();
            });
            // Verify the result is -4 ÷ -2
            cy.get('#cwos').should('have.text', '-4 ÷ -2');
            // Press =
            cy.get('[jsname="Pt8tGc"]').click();//=
            // Verify the result is 2
            cy.get('#cwos').should('have.text', '2');
            // Division test completed
            cy.logSuccess('TC_004:Completed!!');
    
    });
    
    it('TC_005:Diivision of one negative number and one positive number: -9 ÷ 3 = -3', () => {
            const selectors = ['[jsname="pPHzQc"]','[jsname="XoxYJ"]','[jsname="WxTTNd"]','[jsname="KN1kY"]'];
            // Loop through the array and click each element
            selectors.forEach(selector => {
                cy.get(selector).click();
            });
            // Verify the result is -9 ÷ 3
            cy.get('#cwos').should('have.text', '-9 ÷ 3');
            // Press =
            cy.get('[jsname="Pt8tGc"]').click();//=
            // Verify the result is -3
            cy.get('#cwos').should('have.text', '-3');
            // Division test completed
            cy.logSuccess('TC_005:Completed!!');
    });

});

