---
Date: 2026-03-28T12:25:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBColunares
---
# Notas conectadas:


# Resumo da nota:
nessa nota vimos alguns comandos do cassandra
# Tópicos:
- [[#tipos de strategy para o cassandra:|tipos de strategy para o cassandra:]]
	- [[#tipos de strategy para o cassandra:#SimpleStrategy:|SimpleStrategy:]]
	- [[#tipos de strategy para o cassandra:#NetworkTopologyStrategy|NetworkTopologyStrategy]]
- [[#replication_factor:|replication_factor:]]
- [[#comandos:|comandos:]]

# Explicação dos tópicos:


## tipos de strategy para o cassandra:
estratégias de replicação:
### SimpleStrategy:
- quer dizer que todos os nó's vão estar na mesma máquina

### NetworkTopologyStrategy
- permite que os nó's sejam armazenados em diversas máquinas.
- melhor para  produção por conta da escalabilidade

## replication_factor:
- é o fator da replicação dos dados para permitir maior disponibilidade em detrimento de espaço

## comandos:

Entra no terminal do cassandra:
```
cqlsh
```


lista todos os keyspaces(seria os databases do sql):
```
DESC keyspaces;
```


criar um keyspace:
```
CREATE KEYSPACE <nome_do_keyspace> 
	WITH replication = {
	 'class': '<estratégia_de_replicação>', 
	 'replication_factor': <fator_de_replicação> 
 };
```

entra em um keyspace:
```
USE <nome do keyspace>
```


comando para criar a table:
```
CREATE TABLE chardes (
customer_id UUID, charge_id UUID, amount DECIMAL, created_at TIMESTAMP, status TEXT, coupon TEXT, 
PRIMARY KEY(customer_id,charge_id)
);
```


comando para listar tabelas:
```
DESC tables;
```


comandos de  criar sem validar dados no banco de dados um registro:

```
INSERT INTO nome_da_tabela (coluna1, coluna2, coluna3) VALUES (valor1, valor2, valor3);
```

comandos de  atualizar e criar registros validando dados:
```
UPDATE nome_da_tabela SET coluna = novo_valor WHERE condição;
```

comandos de  deletar registros:
```
DELETE FROM nome_da_tabela WHERE condição;
```


selecionar dados:
```
SELECT created_at FROM charges
WHERE customer_id = 'abcdefg12345' AND charge_id = '123e4567-e89b-12d3-a456-426655440000';
```




