---
Date: 2025-09-01T12:56:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados
  - fiap/modulo02/conexaoComBancoDeDados/tiposDeBancoDeDados
---
# Notas conectadas:


# Resumo da nota:
nessa toda vimos o que é um banco relacional é um banco não relacional e como eles se caracterizam, além disso vimos, vimos o que é tipos de sgbd's  e quando usar um banco de dados relacional e quando usar um banco de dados não relacional e qual foi o contexto de surgimento dos sgbd's não relacionais

# Tópicos:
- [[#banco de dados relacionais e não relacionais|banco de dados relacionais e não relacionais]]
- [[#sistemas de gerenciamento de banco de dados banco de dados é chamado de  SGBD:|sistemas de gerenciamento de banco de dados banco de dados é chamado de  SGBD:]]
- [[#diferença entre banco de dados relacional e banco de dados não relacional:|diferença entre banco de dados relacional e banco de dados não relacional:]]
- [[#quando usar cada modelo de banco de dados?|quando usar cada modelo de banco de dados?]]
	- [[#quando usar cada modelo de banco de dados?#caso de exemplo:|caso de exemplo:]]
	- [[#quando usar cada modelo de banco de dados?#caso de exemplo:|caso de exemplo:]]

# Explicação dos tópicos:
## banco de dados relacionais e não relacionais
- banco de dados relacionais são menos performáticos que os não relacionais, mas é uma diferença muito pequena
	- por que o não relacional não tem tantos processos para fazer as consultas no banco de dados quanto o relacional
- banco de dados não relacional é mais escalável
	- é mais fácil para escalonamento horizontal
![[Pasted image 20250901125738.png]]




![[Pasted image 20250901154108.png]]


## sistemas de gerenciamento de banco de dados banco de dados é chamado de  SGBD:
exemplo: 
- mongodb
- postgres
- mysql
- sql server
- maria db
- oracle
- etc.


## diferença entre banco de dados relacional e banco de dados não relacional:
- o que está mais ligado ao relacional é:
	- tabelas, linhas e colunas
	- relacionamento entre entidades
	- precisamos definir esquemas previamente
	- usa SQL
- por que surgiu o não relacional:
	- para diminuir custo 
	- facilitar o gerenciamento de mais dados


## quando usar cada modelo de banco de dados?

exemplo de definição para o banco de dados:
### caso de exemplo:
- desenvolvimento de um sistema educacional:
	- banco relacional:
		- pontos positivos:
			- permite uma maior consistência de informações
			- permite uma maior padronização dos dados
			- facilita a criação das querys
		- pontos negativos
			- baixa flexibilidade
			- menor performance
			- menor escalabilidade
- #### vale a pena usar DB relacional por que como é um sistema de educação e não vai precisar de muita escalabilidade ou de suprir milhões de requisições, mas sim apenas algumas milhares de requisições, e por oferecer varias vantagens como facilidade na criação de querys é melhor usar o banco de dados relacional

### caso de exemplo:
 - desenvolvimento de uma rede social:
	 - banco de dados não relacional:
		 - pontos positivos:
			 - flexibilidade de esquema
			 - facilidade de escalabilidade horizontal
			 - velocidade de desenvolvimento
		 - pontos negativos:
			 - mais difícil fazer um relacionamento entre diferentes entidades
			 - é mais complexo gerenciar transações e consistência  no banco de dados
- #### nesse caso vale mais apena usar o banco de dados não relacional por conta que ele é mais escalável horizontalmente e tem outros benefícios também e sendo uma rede social é essencial ter escalabilidade no sistema é essencial, mesmo que seja mais ao custo de mais complexidade.