---
Date: 2025-05-20T21:00:00
tags:
  - tecnologia/ArquiteturaDeSoftware
  - ArquiteturaDeSoftware/CleanArchitecture
---
# Notas conectadas:


# Resumo da nota:
aqui falamos um pouco sobre o que é clean architecture

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents



# Explicação dos tópicos:

![[Pasted image 20250520210151.png]]

- as camadas mais internas não devem conhecer as camadas mais externa

## definição dos termos:
- o que é uma entidade?
	- e um tipo de classe que tem uma identificação
		- por exemplo: uma pessoa, ou serviço
	- nela fica as regras de negócio
		- por exemplo: precisa ter +18 para se cadastrar
	- 
- o que é um use case?
	- é uma 'jornada do usuário', por exemplo uma ação que o usuário precisa fazer
		- por exemplo: a jornada para fazer uma conta, e todas as etapas para se cadastrar
			- usando o exemplo acima, se tivesse uma regra para poder se cadastrar apenas com +18 aqui ficaria informado onde ele passaria para fazer essa validação
- camada de controller, gateway, presentation
	- essa camada é ainda mais externa que o use case e gerencia a nível de código ou se preferir, a nivel de como as coisas vão acontecer. 
		- por exemplo, você tem um controller que gerencia a rota de cadastro, suponha a seguinte situação
			- a presentetion mostra o formulario para se cadastrar
			- o controlle: faz o controle da rota para se cadastrar
			- o use case faz o controle das assões para a jornada de se cadastrar
			- os services são acionados pelo use case para realizar a jornada de cadastro
			- e tudo isso de acordo com as regras de domínio definidas na entidade( ponto importante, nesse nível não é codificado, mas sim é feito uma documentação e diagramação do sistema)
- camada de devices, web, UI, DB, External interfaces 
	- aqui é a comunicação com a camada mais externa da aplicação



