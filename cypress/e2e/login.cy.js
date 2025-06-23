describe('Login - OrangeHRM', () => {

    beforeEach(() => {
        cy.visit('/?lang=en')
      })


    it('Login com sucesso', () => {
      cy.login('Admin', 'admin123')  // Utiliza o comando customizado de login
      
      // Você pode verificar a URL ou algum outro elemento após o login bem-sucedido
      cy.url().should('include', '/dashboard')  // Verifica se a URL inclui "/dashboard"
    })
  
    it('Login com senha incorreta', () => {
      cy.login('Admin', 'senha_invalida')  // Utiliza o comando customizado de login
      
      cy.contains('Invalid credentials').should('be.visible')  // Verifica a mensagem de erro
    })
      
    it('Login com campos vazios', () => {
      cy.login(' ', ' ')  // Utiliza o comando customizado de login com campos vazios
  
      cy.checkErrorMessage()  // Verifica se a mensagem de erro aparece
    })
  
  })