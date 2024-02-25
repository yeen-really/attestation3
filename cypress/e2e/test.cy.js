describe('template spec', () => {
  it('tests', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.contains('Customer Login').click()
    cy.get('select').select('Harry Potter')
    cy.contains('Login').click()
    cy.contains('Deposit').click()
    cy.get('input').type('1000', {timeout: 3000})
    cy.get('.btn-default').click()
    cy.get('.ng-scope').contains('Deposit Successful')
    cy.contains('Logout').click()
  })
})