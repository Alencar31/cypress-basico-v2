/// <reference types="Cypress" />

const { error } = require("cypress/types/jquery")

describe('Central de Atendimento ao Cliente TAT', function() {
  this.beforeEach(function() {
    cy.visit('./src/index.html')
  })

  it('verifica o titulo da aplicação', function() {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', function() {
    const longText = 'Muitos caracteres inseridos nesse campo para testar o comando delay,' +  
    'Muitos caracteres inseridos nesse campo para testar o comando delay, ' + 
    'Muitos caracteres inseridos nesse campo para testar o comando delay, ' +
    'Muitos caracteres inseridos nesse campo para testar o comando delay, ' +
    'Muitos caracteres inseridos nesse campo para testar o comando delay'
    cy.get('#firstName').type('Alencar')
    cy.get('#lastName').type('Teixeira')
    cy.get('#email').type('alencarw@hotmail.com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
})