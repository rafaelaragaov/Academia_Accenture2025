import { faker } from '@faker-js/faker';

Cypress.Commands.add('randomData', () => {

    const randomName = faker.person.firstName()
    Cypress.env('randomUser').firstName = randomName

    const randomLastName = faker.person.lastName()
    Cypress.env('randomUser').lastName = randomLastName

    const randomEmail = faker.internet.email(randomName, randomLastName)
    Cypress.env('randomUser').email = randomEmail

    const randomAge = faker.string.numeric(2) // até 2 digitos
    Cypress.env('randomUser').age = randomAge

    const randomSalary = faker.string.numeric(5) // até 5 digitos
    Cypress.env('randomUser').salary = randomSalary

    const randomDepartment = faker.person.jobType()
    Cypress.env('randomUser').department = randomDepartment

    return randomName, randomLastName, randomEmail, randomAge, randomSalary, randomDepartment;

})


