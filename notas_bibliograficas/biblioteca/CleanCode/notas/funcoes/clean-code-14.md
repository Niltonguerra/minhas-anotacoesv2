---
Date: 2026-07-03T10:30:00
tags:
  - Livros/CleanCode
Livro: CleanCode
---
# Resumo da nota:
nessa nota vimos que funções não devem fazer mais coisas do que falam que fazem e também vimos nessa nota que uma função deve ou alterar o estado de algo ou retornar uma informação, não se deve fazer os dois.



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




##### Separação comando-consulta
as funções fazem duas coisas:
- alterar o estado de um objeto
- retorna informações sobre ele



