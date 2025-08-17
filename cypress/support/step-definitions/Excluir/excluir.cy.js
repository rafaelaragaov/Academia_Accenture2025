import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

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

And('clica no botão Delete', () => {
    cy.deleteConta()
})

And('confirma a exclusão da conta', () => {

})

And('a conta é excluída com sucesso', () => {

})

Given('o usuário acessa o portal "webtables"', () => {
    cy.visit('/')
})

When('clica no botão delete em todas as linhas', () => {
    cy.deleteAll()
})

Then('todas as contas são excluídas com sucesso', () => { })  