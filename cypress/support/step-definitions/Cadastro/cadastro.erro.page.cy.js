import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

And('insere e-mail inválido para criar a conta', () => {
    cy.emailInvalido()
})
And('clica no botão "Submit"', () => {
    cy.clicaSubmit()
    cy.validaCampoVermelho()
})
Then('permanece na página de cadastro', () => { })

And('deixa todos os campos vazios para criar a conta', () => {
    cy.dadosVazios()
})

Then('permanece na página de cadastro', () => { })

And('insere uma idade negativa para criar a conta', () => {
    cy.idadeInvalida()
})

And('clica no botão "Submit"', () => {
    cy.clicaSubmit()
    cy.validaCampoVermelho()
})

Then('permanece na página de cadastro', () => { })

And('insere um salário negativo para criar a conta', () => {
    cy.salaryInvalido()
})

And('clica no botão "Submit"', () => {
    cy.clicaSubmit()
    cy.validaCampoVermelho()
})

Then('permanece na página de cadastro', () => { })












