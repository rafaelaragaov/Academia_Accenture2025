import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('o usuário acessa o portal "webtables"', () => {
    cy.visit('/')   
})

And('clica no botão Edit', () => {
    cy.editaCadastroExistente()
})

And('edita os dados da conta', () => {
    cy.preencherDadosEdit()
})

And('clica no botão "Submit"', () => {
    cy.clicaSubmit()
})

And('visualiza a atualização realizada com sucesso', () => {

})