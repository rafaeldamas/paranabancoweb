/// <reference types="Cypress" />

describe('Challenging DOM', function() {
    beforeEach(function() {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'The Internet')
    })

    it('Clicando nos botões dinâmicos', function(){
        cy.get('a[class=button]').click()
        cy.get('a[class$=alert]').click()
        cy.get('a[class$=success]').click()
    })

    it('Clicando no botão de edit da grid', function(){
        cy.get('table tbody').find('tr').eq(0).contains('edit').click()
        cy.get('table tbody').find('tr').eq(1).contains('edit').click()
        cy.get('table tbody').find('tr').eq(2).contains('edit').click()
        cy.get('table tbody').find('tr').eq(3).contains('edit').click()
        cy.get('table tbody').find('tr').eq(4).contains('edit').click()
        cy.get('table tbody').find('tr').eq(5).contains('edit').click()
        cy.get('table tbody').find('tr').eq(6).contains('edit').click()
        cy.get('table tbody').find('tr').eq(7).contains('edit').click()
        cy.get('table tbody').find('tr').eq(8).contains('edit').click()
        cy.get('table tbody').find('tr').eq(9).contains('edit').click()
    })

    it('Clicando no botão de delete da grid', function(){
        cy.get('table tbody').find('tr').eq(0).contains('delete').click()
        cy.get('table tbody').find('tr').eq(1).contains('delete').click()
        cy.get('table tbody').find('tr').eq(2).contains('delete').click()
        cy.get('table tbody').find('tr').eq(3).contains('delete').click()
        cy.get('table tbody').find('tr').eq(4).contains('delete').click()
        cy.get('table tbody').find('tr').eq(5).contains('delete').click()
        cy.get('table tbody').find('tr').eq(6).contains('delete').click()
        cy.get('table tbody').find('tr').eq(7).contains('delete').click()
        cy.get('table tbody').find('tr').eq(8).contains('delete').click()
        cy.get('table tbody').find('tr').eq(9).contains('delete').click()
    })
  })
