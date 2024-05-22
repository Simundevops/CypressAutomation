describe('GoogleCalculatorTest_Subtraction', () => {
    beforeEach(() => {
    cy.OpenGoogle();
    });

    afterEach(() => {
    cy.get('[aria-label="all clear"]').click({force: true});
    cy.get('[aria-label="clear entry"]').click({force: true});
    });

    it('TC_001:Perform Subtraction Operation using Google calculator: 5 - 3 = 2', () => {
        const selectors = ['[jsname="Ax5wH"]','[jsname="pPHzQc"]','[jsname="KN1kY"]','[jsname="Pt8tGc"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
            cy.get(selector).click();
        });
        // Verify the result is 2
        cy.get('#cwos').should('have.text', '2');
        // Subtraction test completed
        cy.logSuccess('TC_001: Completed');

  });

  it('TC_002: Validate negative result with 3-5 = -2', () => {
        const selectors = ['[jsname="KN1kY"]','[jsname="pPHzQc"]','[jsname="Ax5wH"]','[jsname="Pt8tGc"]'];
        // Loop through the array and click each element
        selectors.forEach(selector => {
            cy.get(selector).click();
        });
        // Verify the result is -2
        cy.get('#cwos').should('have.text', '-2');
        // Subtraction test completed
        cy.logSuccess('TC_002: Completed!!');

});

it('TC_003: Validate Subtraction of two negative number : -7-8 = -15', () => {
    const selectors = ['[jsname="pPHzQc"]','[jsname="rk7bOd"]','[jsname="pPHzQc"]','[jsname="pPHzQc"]','[jsname="T7PMFe"]'];
    // Loop through the array and click each element
    selectors.forEach(selector => {
        cy.get(selector).click();
    });
    //check entry as "-7 -8"
    cy.get('#cwos').should('have.text', '-7 - 8');
    //Press Enter
    cy.get('[jsname="Pt8tGc"]').click();//=
    //Verify the result is -15
    cy.get('#cwos').should('have.text', '-15');
    // Subtraction test completed
    cy.logSuccess('TC_003: Completed!!');

});

it('TC_004: Validate Subtraction of one negative number and one positive number: -8-3 =-11', () => {
    const selectors = ['[jsname="pPHzQc"]','[jsname="T7PMFe"]','[jsname="pPHzQc"]','[jsname="KN1kY"]'];
    // Loop through the array and click each element
    selectors.forEach(selector => {
        cy.get(selector).click();
    });
    //check entry as "-8 - 3"
    cy.get('#cwos').should('have.text', '-8 - 3');
    //Press Enter
    cy.get('[jsname="Pt8tGc"]').click();//=
    //Verify the result is -15
    cy.get('#cwos').should('have.text', '-11');
    // Subtraction test completed
    cy.logSuccess('TC_004: Completed!!');

});

});
