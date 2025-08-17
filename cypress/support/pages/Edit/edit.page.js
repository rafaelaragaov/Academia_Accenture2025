const BTN_ADD = '#addNewRecordButton'
const INP_FIRSTNAME = '#firstName'
const INP_LASTNAME = '#lastName'
const INP_EMAIL = '#userEmail'
const INP_AGE = '#age'
const INP_SALARY = '#salary'
const INP_DEPARTMENT = '#department'
const BTN_SUBMIT = '#submit'
const BTN_EDIT = '#edit-record-4'

Cypress.Commands.add('editaCadastro', () => {
    cy.get(BTN_EDIT).click()
})

Cypress.Commands.add('preencherDadosEdit', () => {
    cy.get(INP_FIRSTNAME).clear().type(Cypress.env('randomUser').firstName, { log: false })
    cy.get(INP_LASTNAME).clear().type(Cypress.env('randomUser').lastName, { log: false })
    cy.get(INP_EMAIL).clear().type(Cypress.env('randomUser').email, { log: false })
    cy.get(INP_AGE).clear().type(Cypress.env('randomUser').age)
    cy.get(INP_SALARY).clear().type(Cypress.env('randomUser').salary, { log: false })
    cy.get(INP_DEPARTMENT).clear().type(Cypress.env('randomUser').department)
})