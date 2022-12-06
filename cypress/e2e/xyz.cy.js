/// <reference types="cypress"/>

describe('Criando cenários para testar o site XYZ Bank', () => {
  it('Verificando que há transações na conta da Hermoine', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#')
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select('Hermoine Granger')
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get('#anchor0 > :nth-child(1)').should('be.visible')
  })

  it('Verificando que não é possível criar uma conta sem preencher o nome do cliente', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(2) > .form-control').type('White')
    cy.get(':nth-child(3) > .form-control').type('40028922')
    cy.get('.ng-invalid.ng-dirty > .btn').click()
    cy.get('.ng-invalid.ng-dirty > .btn').should('be.visible')
  })

  it('Deletando a conta de um cliente', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', 'Hermoine')
    cy.get(':nth-child(1) > :nth-child(5) > button').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('not.have.text', 'Hermoine')
  })
})