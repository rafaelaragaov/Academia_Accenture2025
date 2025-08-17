import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('o usuário acessa o portal "webtables"', () => {
    cy.visit('/')   
})

And('insere e-mail inválido para criar a conta', () => {
    cy.emailInvalido()
})

And('valida o erro', () => { 
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

Then('permanece na página de cadastro', () => { })

And('insere um salário negativo para criar a conta', () => {
    cy.salarioInvalido()
})

Then('permanece na página de cadastro', () => { })












