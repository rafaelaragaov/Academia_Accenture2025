#utf-8
#language: pt

Funcionalidade: Realizar cadastro

Contexto:
Dado que o usuário acessa o portal "webtables"


Cenário: Cadastrar com dados válidos

  Quando clica no botão Add
  E insere credenciais válidos para criar a conta 
  E clica no botão "Submit"
  Então a conta é criada com sucesso

Cenário: Cadastrar com dados válidos e depois editar

  Quando clica no botão Add
  E insere credenciais válidos para criar a conta 
  E clica no botão "Submit"
  Então a conta é criada com sucesso
  E clica no botão Edit
  E edita os dados da conta
  E clica no botão "Submit"
  E visualiza a atualização realizada com sucesso

Cenário: Cadastrar com dados válidos e depois excluir

  Quando clica no botão Add
  E insere credenciais válidos para criar a conta 
  E clica no botão "Submit"
  Então a conta é criada com sucesso
  E clica no botão Delete
  E confirma a exclusão da conta
  E a conta é excluída com sucesso




