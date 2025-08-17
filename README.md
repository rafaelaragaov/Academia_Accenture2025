# Academia Accenture 2025 - Testes Automatizados com Cypress

Este projeto utiliza Cypress com Cucumber para automação de testes end-to-end na página de WebTables do DemoQA.

## Estrutura do Projeto

- **Features (`cypress/e2e/`)**  
  Cenários de teste escritos em Gherkin (`.feature`).

- **Step Definitions (`cypress/support/step-definitions/`)**  
  Implementação dos passos dos cenários, conectando Gherkin aos comandos Cypress.

- **Page Objects (`cypress/support/pages/`)**  
  Encapsulam seletores e comandos para interação com a interface.

- **Comandos Customizados (`cypress/support/commands.js`)**  
  Funções reutilizáveis para facilitar os testes.

- **Configuração Global (`cypress/support/e2e.js`)**  
  Importa comandos e configurações globais para todos os testes.

- **Dados Dinâmicos (`cypress.env.json` e Faker.js)**  
  Geração de dados aleatórios para os testes automatizados.

## Dependências

- [cypress](https://www.npmjs.com/package/cypress) `^14.5.4`
- [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor) `^4.3.1`
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) `^9.9.0`

Instale todas as dependências com:

```sh
npm install
```

## Como Executar

Abra o Cypress em modo interativo:

```sh
npx cypress open
```

Ou execute os testes em modo headless:

```sh
npx cypress run
```

## Autor
<p align="center">
  Feito por  Rafael Aragão ❤️ 
</p>

