import { faker } from '@faker-js/faker';

Cypress.Commands.add('randomData', () => {

    const randomName = faker.person.firstName()
    Cypress.env('randomUser').firstName = randomName

    const randomLastName = faker.person.lastName()
    Cypress.env('randomUser').lastName = randomLastName

    const randomEmail = faker.internet.email(randomName, randomLastName)
    Cypress.env('randomUser').email = randomEmail

    const randomAge = faker.number.int({ min: 18, max: 65 })
    Cypress.env('randomUser').age = randomAge

    const randomSalary = faker.string.numeric(5) 
    Cypress.env('randomUser').salary = randomSalary

    const randomDepartment = faker.person.jobType()
    Cypress.env('randomUser').department = randomDepartment

    return randomName, randomLastName, randomEmail, randomAge, randomSalary, randomDepartment;

})


