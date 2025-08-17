const BTN_ADD = '#addNewRecordButton'
const INP_FIRSTNAME = '#firstName'
const INP_LASTNAME = '#lastName'
const INP_EMAIL = '#userEmail'
const INP_AGE = '#age'
const INP_SALARY = '#salary'
const INP_DEPARTMENT = '#department'
const BTN_SUBMIT = '#submit'
const BTN_EDIT = '#edit-record-4'
const LINHA = '.rt-td'
const RED_COLOR = 'rgb(220, 53, 69)'
const BORDER_COLOR = 'border-color'
const INVALID_RED = '.form-control.is-invalid, .was-validated .form-control:invalid'

Cypress.Commands.add('validaCadastro', (userData) => {
    cy.get(LINHA).should('contain', Cypress.env('randomUser').firstName, { log: false })
});

Cypress.Commands.add('validaCampoVermelho', () => {
    cy.get(INVALID_RED).should('have.css', 'border-color', RED_COLOR)
})

Cypress.Commands.add('acessaAdd', () => {
    cy.get(BTN_ADD).click();
})

Cypress.Commands.add('clicaSubmit', () => {
    cy.wait(2000)
    cy.get(BTN_SUBMIT).click()
})

Cypress.Commands.add('preencherDados', () => {
    cy.get(INP_FIRSTNAME).type(Cypress.env('randomUser').firstName, { log: false })
    cy.get(INP_LASTNAME).type(Cypress.env('randomUser').lastName, { log: false })
    cy.get(INP_EMAIL).type(Cypress.env('randomUser').email, { log: false })
    cy.get(INP_AGE).type(Cypress.env('randomUser').age)
    cy.get(INP_SALARY).type(Cypress.env('randomUser').salary, { log: false })
    cy.get(INP_DEPARTMENT).type(Cypress.env('randomUser').department)

})














