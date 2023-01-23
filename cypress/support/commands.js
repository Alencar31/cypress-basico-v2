Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Alencar')
    cy.get('#lastName').type('Teixeira')
    cy.get('#email').type('alencarw@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()    
})
