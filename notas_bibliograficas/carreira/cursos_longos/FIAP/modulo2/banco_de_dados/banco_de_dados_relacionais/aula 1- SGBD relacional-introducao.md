---
Date: 2025-09-02T08:43:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBRelacional
  - fiap/modulo02/conexaoComBancoDeDados
---
# Notas conectadas:


# Resumo da nota:
nessa aula vimos que vamos usar o mySQL por sua fácil utilização, leveza e suporte da comunidade, além disso vimos os tipos de comandos SQL, também vimos o que é ACID: atomicidade, consistência, Isolamento e Durabilidade assim como também vimos como criar e acessar o banco de dados.

# Tópicos:

- [[#por que vamos estudar usando o MYSQL?|por que vamos estudar usando o MYSQL?]]
- [[#Tipos de comandos SQL|Tipos de comandos SQL]]
	- [[#Tipos de comandos SQL#comandos DDL(data definition language)|comandos DDL(data definition language)]]
	- [[#Tipos de comandos SQL#comandos DML(data manipulation language)|comandos DML(data manipulation language)]]
	- [[#Tipos de comandos SQL#comandos DQL(data query language)|comandos DQL(data query language)]]
	- [[#Tipos de comandos SQL#DCL(Data Control Language)|DCL(Data Control Language)]]
	- [[#Tipos de comandos SQL#DTL(Data transaction Language)|DTL(Data transaction Language)]]
- [[#O que é ACID?|O que é ACID?]]
- [[#comandos para criar e acessar o banco de dados|comandos para criar e acessar o banco de dados]]
# Explicação dos tópicos:
## por que vamos estudar usando o MYSQL?
![[Pasted image 20250902084450.png]]


## Tipos de comandos SQL
### comandos DDL(data definition language)
- são usados para definir bases de dados,tabelas e índices 
- ex: create database,create table, drop table, alter table e etc

### comandos DML(data manipulation language)
- comandos usados para manipulação de registros do banco de dados
- ex: insert,delete e update
### comandos DQL(data query language)
- comandos usados para fazer consultas nos bancos de dados
- ex: select

### DCL(Data Control Language)
- comandos para fazer a segurança da aplicação/controle de acesso
- ex: GRANT e REVOKE

### DTL(Data transaction Language)
- comandos para controlar as transações executadas no banco de dados
	- serve para criar transações no banco de dados
## O que é ACID?
***==toda transação no banco de dados é acid!==***
- **A – Atomicidade:** ou toda a transação é concluída, ou nada é feito.
- **C – Consistência:** o banco passa de um estado válido para outro estado válido.
- **I – Isolamento:** transações concorrentes não interferem uma na outra.
- **D – Durabilidade:** uma vez confirmada (commit), a transação permanece mesmo se houver falha.
- ex de comando: commit e rollback


## comandos para criar e acessar o banco de dados
comando para criar o banco de dados:
```
docker run --name meu-mysql -e MYSQL_ROOT_PASSWORD=senha123 -p 3306:3306 -d mysql:8
```

comando para acessar o banco:
```
docker exec -it meu-mysql mysql -u root -p  
```

