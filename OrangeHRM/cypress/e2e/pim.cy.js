import { generateFuncionario } from '../fixtures/fake';


describe('Gestão de Funcionários - OrangeHRM', () => {
  
  let funcionario;
  funcionario = generateFuncionario()

    beforeEach(() => {
        cy.login('Admin', 'admin123')
    })

    it('Adicionar funcionário com sucesso', () => {
      cy.contains('a', 'PIM').click()
      cy.contains('button', 'Add').click()
      
      
      cy.get('input[name="firstName"]').type(funcionario.nome)
      cy.get('input[name="middleName"]').type("Silva")
      cy.get('input[name="lastName"]').type(funcionario.sobrenome)

      cy.contains('label', 'Employee Id').parents('.oxd-input-group').find('input').clear().type(funcionario.employeeId)

      cy.contains('button', 'Save').click()

      cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Saved')
      
    })

    it('Tentar adicionar funcionário sem preencher campos obrigatórios', () => {
      cy.contains('a', 'PIM').click()
      cy.contains('button', 'Add').click()
      
      cy.get('input[name="firstName"]').type(" ")
      cy.get('input[name="middleName"]').type(" ")
      cy.get('input[name="lastName"]').type(" ")

      cy.contains('button', 'Save').click()

      cy.get('.oxd-input-field-error-message').should('be.visible').and('contain', 'Required')
      //cy.contains('Required').should('be.visible')

    })

    it('Pesquisar funcionário existente', () => {
      
      cy.contains('a', 'PIM').click()
      
      cy.contains('label', 'Employee Id').parents('.oxd-input-group').find('input').type(funcionario.employeeId)

      cy.contains('button', 'Search').click()

      cy.get('.oxd-table').should('contain.text', funcionario.nome)
      cy.get('.oxd-table').should('contain.text', funcionario.employeeId)

    })
  

    it('Editar dados de um funcionário existente', () => {
      
      cy.contains('a', 'PIM').click()
      cy.get('input[placeholder="Search"]').type(funcionario.nome)
      
      cy.contains('label', 'Employee Name').parents('.oxd-input-group').find('input').type(funcionario.nome)

      cy.contains('button', 'Search').click()

      cy.get('.oxd-table').should('contain.text', funcionario.nome)

      cy.get('.oxd-table-row')
        .contains(funcionario.employeeId)
        .parents('.oxd-table-row')
        .within(() => {
          cy.get('button').first().click()
        })

        cy.contains('label', "Driver's License Number")
          .parents('.oxd-input-group')
          .find('input')
          .clear()
          .type(funcionario.licenseNumber)

        cy.contains('button', 'Save').click()

        cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Updated')
    })

    it('Excluir funcionário existente', () => {
      
      cy.contains('a', 'PIM').click()
      cy.get('input[placeholder="Search"]').type(funcionario.nome)
      
      cy.contains('label', 'Employee Name').parents('.oxd-input-group').find('input').type(funcionario.nome)

      cy.contains('button', 'Search').click()

      cy.get('.oxd-table').should('contain.text', funcionario.nome)

      cy.get('.oxd-table-row')
        .contains(funcionario.employeeId)
        .parents('.oxd-table-row')
        .within(() => {
          cy.get('button').eq(1).click() // Segundo botão = botão de deletar
    })

    cy.get('.oxd-button--label-danger')
      .contains('Yes, Delete')
      .click()

    cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Deleted')

    })


  })

