---
Date: 2026-03-28T11:52:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBColunares
  - fiap/modulo02/conexaoComBancoDeDados
---
# Notas conectadas:


# Resumo da nota:
nessa aula vimos algumas caracteristicas de SGBD's colunares, em especial o CassandraDB, vimos qual é o seu tipo de arquitetura, como os dados são armazenados fisicamente,  e alguns padrões mínimos para modelar um banco de dados com o Cassandra
# Tópicos:
- [[#Cassandra:|Cassandra:]]
	- [[#Cassandra:#criador:|criador:]]
	- [[#Cassandra:#características no Cassandra|características no Cassandra]]
- [[#arquiteturas de dados:|arquiteturas de dados:]]
- [[#como modelar um SGBD colunar?|como modelar um SGBD colunar?]]
- [[#Curiosidade: como é feito o particionamento dos dados?|Curiosidade: como é feito o particionamento dos dados?]]


# Explicação dos tópicos:

## Cassandra:
### criador:
- Facebook
- 2008

### características no Cassandra

- escalabilidade linear "(por conta de ser no sql)"
- alta disponibilidade
	- por conta da forma como foi feito, não sei descrever, mas se algum dia alguém te perguntar, fale que ele tem duplicidade de dados (mesmo que ele não tenha), por que embora ele não mostre para a gente que tem duplicidade, a forma como foi construído faz com que ele tenha duplicidade de dados, mas seja otimizado para não ocupar tanto espaço, sei que é estranho, mas é isso que acontece
- tolerância a falhas
- modelo de dados flexível
- suporte a consultas distribuídas


## arquiteturas de dados:
![[Pasted image 20260328114127.png]]
- ### centralized system (sistemas centralizados)
	- se o nó maior cair, tudo cai

- ### decentralizes system (sistemas descentralizados)
	- tem nós de centralização, mas não é só um

- ### distributed system (sistemas distribuídos)
	- todos os nós tem visão uns dos outros.
	- #### essa é a arquitetura do cassandra 


## como modelar um SGBD colunar?
- tabelas devem seguir as consultas desejadas, e não o contrário
- não existe join, integridade referencial ou chaves estrangeiras
	- ainda mais por conta da forma como foi criado o banco de dados
- Denormalização
	- é o ato de aplicar as formas normais(NF) e depois remover elas para a melhoria de performance de dados.
	- caso deseje referencias:
		- [[aula5- SGDB relacional- 3 formas normais (3FN)]]
		- [[aula6-sgdb relacional-4FN, 5FN e a NFBC(Boyce-Codd Normal Form)]]
- existe chave primária composta
- não existe FK
- existe PK simples, mas não é recomendado usar



## Curiosidade: como é feito o particionamento dos dados?
- curiosidade, talvez possa ser útil de alguma forma:
  os dados dentro do cassandra DB são divididos de acordo com a sua chave primária, mais precisamente falando, considerando a imagem acima sobre sistemas distribuídos, os dados são organizados fisicamente(usei essa palavra por falta de palavra melhor) nos nó's de acordo com a chave primária.
- esse gerenciamento é feito automaticamente pelo  próprio Cassandra
- o primeiro campo da PK composta é quem define a partition
![[Pasted image 20260328121859.png]]




