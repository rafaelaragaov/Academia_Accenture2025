import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário acessa o portal "webtables"', () => {
    cy.randomData()
    cy.visit("/")
})

When('clica no botão Add', () => {
    cy.acessaAdd()
})



