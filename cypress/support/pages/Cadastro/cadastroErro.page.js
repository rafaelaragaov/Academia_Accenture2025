const BTN_ADD = '#addNewRecordButton'
const INP_FIRSTNAME = '#firstName'
const INP_LASTNAME = '#lastName'
const INP_EMAIL = '#userEmail'
const INP_AGE = '#age'
const INP_SALARY = '#salary'
const INP_DEPARTMENT = '#department'
const BTN_SUBMIT = '#submit'

Cypress.Commands.add('emailInvalido', () => {
    cy.get(INP_FIRSTNAME).type(Cypress.env('randomUser').firstName, { log: false })
    cy.get(INP_LASTNAME).type(Cypress.env('randomUser').lastName, { log: false })
    cy.get(INP_EMAIL).type('!')
    cy.get(INP_AGE).type(Cypress.env('randomUser').age)
    cy.get(INP_SALARY).type(Cypress.env('randomUser').salary, { log: false })
    cy.get(INP_DEPARTMENT).type(Cypress.env('randomUser').department)
})

Cypress.Commands.add('dadosVazios', () => {
    cy.get(INP_FIRSTNAME).clear()
    cy.get(INP_LASTNAME).clear()
    cy.get(INP_EMAIL).clear()
    cy.get(INP_AGE).clear()
    cy.get(INP_SALARY).clear()
    cy.get(INP_DEPARTMENT).clear()
})

Cypress.Commands.add('idadeInvalida', () => {
    cy.get(INP_FIRSTNAME).type(Cypress.env('randomUser').firstName, { log: false })
    cy.get(INP_LASTNAME).type(Cypress.env('randomUser').lastName, { log: false })
    cy.get(INP_EMAIL).type(Cypress.env('randomUser').email, { log: false })
    cy.get(INP_AGE).type(-10)
    cy.get(INP_SALARY).type(Cypress.env('randomUser').salary, { log: false })
    cy.get(INP_DEPARTMENT).type(Cypress.env('randomUser').department)
})

Cypress.Commands.add('salaryInvalido', () => {
    cy.get(INP_FIRSTNAME).type(Cypress.env('randomUser').firstName, { log: false })
    cy.get(INP_LASTNAME).type(Cypress.env('randomUser').lastName, { log: false })
    cy.get(INP_EMAIL).type(Cypress.env('randomUser').email, { log: false })
    cy.get(INP_AGE).type(Cypress.env('randomUser').age)
    cy.get(INP_SALARY).type(-1000)
    cy.get(INP_DEPARTMENT).type(Cypress.env('randomUser').department)
})
