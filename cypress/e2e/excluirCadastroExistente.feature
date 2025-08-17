#utf-8
#language: pt

Funcionalidade: Teste - Excluir cadastro existente
Cenário: Excluir cadastro existente

Dado que o usuário acessa o portal "webtables"

  Quando o usuário clica no botão "Delete" para excluir o cadastro existente
  Então o cadastro é excluído com sucesso
  E confirma a exclusão da conta
