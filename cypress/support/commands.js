Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')  // Acessa a página de login
  
    cy.get('input[name="username"]').type(username)  // Preenche o nome de usuário
    cy.get('input[name="password"]').type(password)  // Preenche a senha
    cy.get('button[type="submit"]').click()  // Clica no botão de login
  })

  Cypress.Commands.add('checkErrorMessage', () => {
    cy.get('.oxd-input-field-error-message').should('be.visible')
  })