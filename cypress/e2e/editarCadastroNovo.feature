#utf-8
#language: pt

Funcionalidade: Editar cadastro existente
Cenário: Cadastrar com dados válidos e depois editar

Dado que o usuário acessa o portal "webtables"
  Quando clica no botão Add
  E insere credenciais válidos para criar a conta 
  E clica no botão "Submit"
  Então a conta é criada com sucesso
  E clica no botão Edit
  E edita os dados da conta
  E clica no botão "Submit"
  