describe('This spec will be used to test the ATM search functionality', () => {
 
  beforeEach(() => {
    cy.visit('https://www.hsbc.co.in/')
  })
 
  it('Validated the ATM search', () => {
     //1. Open https://www.hsbc.co.in/
   
    //2. Click on Find your nearest branch or ATM link in footer section
    cy.xpath("//footer//a[contains(text(),'Find your')]").click()


  //3. Validate in new page the URL has String = ‘/ways-to-bank/branches/’
    cy.url().should('include', '/ways-to-bank/branches/')




  })
})
