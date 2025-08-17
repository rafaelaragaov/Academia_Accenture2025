#utf-8
#language: pt

Funcionalidade: Excluir cadastro existente
Cenário: Cadastrar com dados válidos e depois excluir

Dado que o usuário acessa o portal "webtables"

  Quando clica no botão Add
  E insere credenciais válidos para criar a conta 
  E clica no botão "Submit"
  Então a conta é criada com sucesso
  E clica no botão Delete
  E confirma a exclusão da conta
  E a conta é excluída com sucesso