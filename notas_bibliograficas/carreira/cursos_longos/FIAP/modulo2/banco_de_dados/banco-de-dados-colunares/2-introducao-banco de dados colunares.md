---
Date: 2026-03-28T11:53:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBColunares
---

# Notas conectadas:


# Resumo da nota:
nessa nota é visto uma visão geral sobre os bancos de dados colunares, vale destacar que eles não são muito bons em performance para a leitura de registros, mas são bons com a leitura de operações(MIN,MAX,AVG,SUM) com muitos registrosm, além disso não existem tabelas nos SGBD's colunares, tudo são apenas colunas permitindo assim que ele tenha peculiaridades, como por exemplo, eles são fáceis de alterar o shema, permitem uma menor redundância de dados, e como comentado acima, melhor leitura em leitura em análise de dados(MIN,MAX,AVG,SUM).


# Tópicos:

- [[#principais características dos bancos de dados colunares|principais características dos bancos de dados colunares]]
- [[#não existes tabelas, existem colunas que são organizadas para formar "tabelas"|não existes tabelas, existem colunas que são organizadas para formar "tabelas"]]
- [[#banco de dados colunares:|banco de dados colunares:]]
- [[#comando para acessar o banco de dados:|comando para acessar o banco de dados:]]

# Explicação dos tópicos:

## principais características dos bancos de dados colunares
- alta disponibilidade
- tolerância à falha
- melhor para leituras de dados "analíticas"(SUM, AVG,MIN,MAX e etc)
- facilidade na alteração no schema da tabela por conta de não existir tabelas, apenas colunas.
- ocupa muito espaço em disco por conta da quantidade de redundância.

## não existes tabelas, existem colunas que são organizadas para formar "tabelas" 

![[Pasted image 20260328105109.png]]


## funcionamento do cassandra em produção:
O kubernetes vai por cima, ele gerencia os containers que tem docker  e usam uma imagem do Cassandra, através das configurações de rede entre eles, eles se comunicam, existe um cassandra pai que gerencia tudo? não, são sistemas distribuídos?

## banco de dados colunares:
- Cassandra


## comando para acessar o banco de dados:
```
docker exec -it cassandra_dev cqlsh
```

