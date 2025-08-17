#utf-8
#language: pt

Funcionalidade: Realizar cadastro

Contexto:
Dado que o usuário acessa o portal "webtables"

Cenário: Retorna erro ao deixar o campo email inválido

  Quando clica no botão Add
  E insere e-mail inválido para criar a conta 
  E clica no botão "Submit"
  Então permanece na página de cadastro
  

Cenário: Retorna erro ao deixar todos os campos vazios

  Quando clica no botão Add
  E deixa todos os campos vazios para criar a conta
  E clica no botão "Submit"
  Então permanece na página de cadastro

Cenário: Retorna erro ao inserir uma idade negativa

  Quando clica no botão Add
  E insere uma idade negativa para criar a conta 
  E clica no botão "Submit"
  Então permanece na página de cadastro

  Cenário: Retorna erro ao inserir um salário negativo

  Quando clica no botão Add
  E insere um salário negativo para criar a conta 
  E clica no botão "Submit"
  Então permanece na página de cadastro
















