---
Date: 2025-11-18T06:46:00
tags:
  - tecnologia
repositório:
---


# Notas conectadas:


# Resumo da nota:
nessa nota vimos as principais diferenças entre banco de dados relacional e não relacional e tipos de banco de dados
# Tópicos:

- [[#comparação entre banco relacional e não relacional|comparação entre banco relacional e não relacional]]
	- [[#comparação entre banco relacional e não relacional#sgbd estrutural:|sgbd estrutural:]]
	- [[#comparação entre banco relacional e não relacional#sgbd não estrutural:|sgbd não estrutural:]]
- [[#Banco de dados de Documentos:|Banco de dados de Documentos:]]
- [[#Banco de Dados de chave-valor|Banco de Dados de chave-valor]]
- [[#banco de dados de colunares|banco de dados de colunares]]
- [[#banco de dados orientadoa grafos|banco de dados orientadoa grafos]]
- [[#banco de dados de séries temporais|banco de dados de séries temporais]]

# Explicação dos tópicos:

## comparação entre banco relacional e não relacional
### sgbd estrutural:
- mais rígido
- mais consistência nos dados
- menos sujeitos a erros
- os dados são estruturados
- é mais lento por conta que ele tem mais verificações e validações que o não estruturado, justamente por seu modelo mais rígido e seguro
- menos escalável horizontalmente, é preciso escalar verticalmente(mais CPU, RAM, mais memória e etc) assim sendo mais difícil de escalar
![[Pasted image 20251118065101.png|155]]


### sgbd não estrutural:
- menos rígido
- mais rápido para desenvolver
- menos consistência nos dados
- mais sujeitos a erros
- os dados são semi estruturados ou não-estruturados
- é mais rápido por conta que não tem tantas validações que o sgbd estruturado
- é mais fácil de escalar horizontalmente(aumentar o numero de contêineres, vms e etc cria varias máquinas menores )
- ![[Pasted image 20251118065041.png|350]]




## Banco de dados de Documentos:
- mongoDB
- couchDB relax
- amazon DocumentDB



## Banco de Dados de chave-valor
- redis
- amazon dynamoDB
- riak

## banco de dados de colunares
- cassandra(eu pesquisei e não é mais usado)
- google bigtable
- apache hbase 

## banco de dados orientadoa grafos
- neo4j
- amazon neptune
- janus graph

## banco de dados de séries temporais
- influxdb
- prometheus
- timescale

