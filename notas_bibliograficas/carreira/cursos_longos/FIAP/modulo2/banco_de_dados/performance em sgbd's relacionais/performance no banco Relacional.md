---
Date: 2025-09-02T09:50:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBRelacionalPerformance
---
# Notas conectadas:


# Resumo da nota:
nessa aula vimos o que é um índice e que o SQL automaticamente já cria índices para PK's e FK's, também vimos os comandos para criar e remover um índice assim como comandos para fazer um teste de carga, além de também ver um comando para ver a  jornada da query e também as boas práticas de que se deve ter em um SGBD relacional. 

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:

## o que o índice faz?
- serve como um campo que serve para ser a base da busca do SQL, assim otimizando a pesquisa

## por padrão o sql já cria índice para PF e FK

- comando 'explain':
	- usado para a gente ver o plano de consulta de uma query
		- serve para você conseguir dados para poder estimar o custo de uma query
		- ex de uso: explain format=json select * from ingresso


## comando para criar um indice:
na criação:
```
CREATE TABLE table_name (
	colum_1 INT,
	column_2 VARCHAR(20),
	INDEX [index_name](column_1)
);
```

na atualização:
```
ALTER TABLE table_name 
	ADD INDEX[index_name](column_1);
```

remover um índice:
```
ALTER TABLE table_name DROP INDEX [index_name] (column_1);
```


## boas práticas no banco de dados relacional:
![[Pasted image 20250902104742.png|500]]
- sempre que possível, fazer consultas via índices
- colocar índices em campos mais usados para fazer querys
- evitar usar o like
	- por que ele não é muito performático
- não colocar índice em todos os campos de uma tabela



## Como utilizar o EXPLAIN
serve para a gente saber o plano de consulta usado pela query para chegar no dado
```
EXPLAIN
	SELECT *
		FROM ingresso i
		JOIN cliente c ON i.id_cliente = c.id
		JOIN evento e ON i.id_evento = e.id
		WHERE status = 'PAGO'
```

para mais informações da consulta use:
```
EXPLAIN FORMAT=JSON
	SELECT *
		FROM ingresso i
		JOIN cliente c ON i.id_cliente = c.id
		JOIN evento e ON i.id_evento = e.id
		WHERE status = 'PAGO'
```


dados importantes dados pelo EXPLAIN que vale a pena explicar:
- query cost: custo da requisição



## como fazer um teste de carga no SQL
```
mysqlap delimite=";"
	--create="CREATE TABLE a (b int); INSERT INTO a VALUES(23)"
	--query="SELECT * FROM a" --concurrency=50 --iterations=200
```