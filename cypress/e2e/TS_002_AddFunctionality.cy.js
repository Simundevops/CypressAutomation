describe('GoogleCalculatorTest_Addition', () => {
  beforeEach(() => {
    cy.OpenGoogle();
  });

  afterEach(() => {
    cy.get('[aria-label="all clear"]').click({force: true});
    cy.get('[aria-label="clear entry"]').click({force: true});
  });

  it('TC_001:Perform Add Operation using Google calculator: 1 + 2 =3 ', () => {
    const selectors = ['[jsname="N10B9"]','[jsname="XSr6wc"]','[jsname="lVjWed"]','[jsname="Pt8tGc"]'];
    // Loop through the array and click each element
    selectors.forEach(selector => {
      cy.get(selector).click();
    });
    // Verify the result is 3
    cy.get('#cwos').should('have.text', '3');
    // Addition test completed
    cy.logSuccess('TC_001: Completed!!');

  });

  it('TC_002:Addition of 0 : 1 + 0 = 1 ', () => {
    const selectors = ['[jsname="N10B9"]','[jsname="XSr6wc"]','[jsname="bkEvMb"]','[jsname="Pt8tGc"]'];
    // Loop through the array and click each element
    selectors.forEach(selector => {
      cy.get(selector).click();
    });
    // Verify the result is 1
    cy.get('#cwos').should('have.text', '1');
    // Addition test completed
    cy.logSuccess('TC_002: Completed!!');
  });

  it('TC_003:Addition of two negative number : -2 -3 = -5', () => {
    const selectors = ['[jsname="pPHzQc"]','[jsname="lVjWed"]','[jsname="XSr6wc"]','[jsname="pPHzQc"]','[jsname="KN1kY"]'];
    // Loop through the array and click each element
    selectors.forEach(selector => {
      cy.get(selector).click();
    });
    //check entry as "-2-3"
    cy.get('#cwos').should('have.text', '-2 - 3');
    //Press Enter
    cy.get('[jsname="Pt8tGc"]').click();//=
    // Verify the result is -5
    cy.get('#cwos').should('have.text', '-5');
    // Addition test completed
    cy.logSuccess('TC_003: Completed!!');

  });

  it('TC_004:Addition of one negative number and positive number : -6 + 3 = -3', () => {
    const selectors = ['[jsname="pPHzQc"]','[jsname="abcgof"]','[jsname="XSr6wc"]','[jsname="KN1kY"]'];
    // Loop through the array and click each element
    selectors.forEach(selector => {
      cy.get(selector).click();
    });
    // check entry as "-6+3"
    cy.get('#cwos').should('have.text', '-6 + 3');
    // Press Enter
    cy.get('[jsname="Pt8tGc"]').click();//=
    // Verify the result is -3
    cy.get('#cwos').should('have.text', '-3');
    // Addition test completed
    cy.logSuccess('TC_004: Completed!!');
  });

});
