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

And('clica no botão Edit', () => {
    cy.editaCadastro()
})

And('edita os dados da conta', () => {
    cy.preencherDadosEdit()
})

And('clica no botão "Submit"', () => {
    cy.clicaSubmit()
})

And('visualiza a atualização realizada com sucesso', () => {

})



