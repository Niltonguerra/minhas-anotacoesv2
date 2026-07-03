---
Date: 2026-07-03T10:30:00
tags:
  - Livros/CleanCode
Livro:
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:

- evite que as suas funções façam coisas que não falam que fazem
- ex: função que valida a senha do usuário e inicializa a sessão ser chamada de checkPassword ao invés de checkPasswordAndinitializeSession
	- embora o mais ideal é separar as responsabilidades colocando o checkPassword em uma função e o initializeSession em outra função para aumentar a re-usabilidade do código



##### parametros de saída
- o autor defende que ao invés de mudar o estado de algo através de funções que referenciam aquele objetivo deve-se forçar o estado a estar em uma classe e essa classe ser responsável por alterar o estado internamente
	- basicamente ele recomenda a usar programação OO(orientada a objeto) ao invés de programação funcional
- ex:
- public void appendFooter(StringBuffer report) ❌
- report.appendFootter()✔️




##### Separação comando-cosulta