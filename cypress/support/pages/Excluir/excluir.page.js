const BTN_ADD = '#addNewRecordButton'
const INP_FIRSTNAME = '#firstName'
const INP_LASTNAME = '#lastName'
const INP_EMAIL = '#userEmail'
const INP_AGE = '#age'
const INP_SALARY = '#salary'
const INP_DEPARTMENT = '#department'
const BTN_SUBMIT = '#submit'
const BTN_EDIT = '#edit-record-4'
const BTN_DELETE = '#delete-record-4'
const TABLE = '.rt-table'

Cypress.Commands.add('deleteConta', (texto) => {
    cy.wait(2000)
    cy.get(BTN_DELETE).click();
    cy.get(TABLE).should('not.contain', texto)
})

Cypress.Commands.add('deleteAll', (texto) => {
    cy.get('#delete-record-3').click()
    cy.get('#delete-record-2').click()
    cy.get('#delete-record-1').click()
    cy.get(TABLE).should('not.contain', texto)
})








