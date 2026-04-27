---
Date: 2025-12-24T15:25:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBRelacional
repositório:
---


# Notas conectadas:


# Resumo da nota:
nessa nota vimos as 3 formas normais sendo que elas falam resumidamente de: não dados compostos, como dois telefones, em uma única coluna, não coloque colunas em uma tabela que dependam apenas de apenas uma chave e a terceira FN fala para não colocar uma coluna que dependa de outra coluna além das chaves.
# Tópicos:
- [[#1 forma normal:|1 forma normal:]]
- [[#2 forma normal:|2 forma normal:]]
- [[#3 forma normal:|3 forma normal:]]


# Explicação dos tópicos:
## 1 forma normal:
não deve se armazenar valores compostos dentro de um campo de uma tabela, quando se tem mais de um numero de telefone o ideal é criar um novo campo para o telefone ao invés de armazenar dentro do mesmo campo no banco de dados colocando apenas uma virgula para separar eles:

![[Pasted image 20251224153507.png|500]]


## 2 forma normal:
nenhum atributo não chave pode depender de apenas parte de uma chave primária composta
![[Pasted image 20251224160223.png|500]]


## 3 forma normal:
ocorre quando uma coluna, além de depender da chave primária de uma tabela, depende de outra coluna ou conjunto de colunas da tabela
![[Pasted image 20251224162254.png|500]]


