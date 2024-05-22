describe('GoogleCalculatorTest_CheckButtons(0123456789.=+-*÷AC/CE)', () => {
    beforeEach(() => {
      cy.OpenGoogle();
    });

    afterEach(() => {
      cy.get('[aria-label="all clear"]').click({force: true});
      cy.get('[aria-label="clear entry"]').click({force: true});
    });

    it('TC_001_Check Buttons on Google: 0123456789.=+-*÷AC/CE', () => {
      //AC - Button
      cy.get('[aria-label="all clear"]').should('be.visible');
      cy.get('[aria-label="all clear"]').click();
      //CE - Button
      cy.get('[aria-label="clear entry"]').should('be.visible');
      cy.get('[aria-label="clear entry"]').click();
      const selectors = ['[jsname="bkEvMb"]','[jsname="N10B9"]','[jsname="lVjWed"]','[jsname="KN1kY"]',
      '[jsname="xAP7E"]','[jsname="Ax5wH"]','[jsname="abcgof"]','[jsname="rk7bOd"]','[jsname="T7PMFe"]',
      '[jsname="XoxYJ"]','[jsname="YrdHyf"]','[jsname="Pt8tGc"]','[jsname="XSr6wc"]','[jsname="pPHzQc"]',
      '[jsname="YovRWb"]','[jsname="WxTTNd"]'];
      selectors.forEach(selector => {
        cy.get(selector).should('be.visible');
        cy.logSuccess(cy.get(selector) + "is visible!!");
      });      
      cy.logSuccess('TC_001:0,1,2,3,4,5,6,7,8,9,.,=,+,-,*,÷,AC,CE Buttons are visible !!'); 
	  cy.logSuccess('Testing !!');	  
  
  });
  
});