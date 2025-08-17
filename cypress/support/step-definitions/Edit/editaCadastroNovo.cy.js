import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('o usuário acessa o portal "webtables"', () => {
    cy.visit('/')   
})

When('clica no botão Add', () => {
    cy.acessaAdd()
})

And('insere credenciais válidos para criar a conta', () => {
    cy.preencherDados()
})

And('clica no botão "Submit"', () => {
    cy.clicaSubmit()
})

Then('a conta é criada com sucesso', () => {

})

And('clica no botão Edit', () => {
    cy.editaCadastroNovo()
})

And('edita os dados da conta', () => {
    cy.preencherDadosEdit()
})

And('clica no botão "Submit"', () => {
    cy.clicaSubmit()
})

And('visualiza a atualização realizada com sucesso', () => {

})







    



