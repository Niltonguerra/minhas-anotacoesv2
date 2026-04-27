---
Date: 2025-12-24T08:30:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBRelacional
repositório:
---


# Notas conectadas:


# Resumo da nota:
nessa aula vimos comandos DDL, ou seja como criar uma database e uma tabela e como editar e excluir os mesmos, além disso vimos também tipos de dados  que podem ser criados como texto, data e numeros, vimos também modificadores de colunas como deefault, not null auto_INCREMENT  e outros, além disso vimos também restrições de integridade como chave estrangeira e chave primária.
# Tópicos:

- [[#comandos utilitários úteis:|comandos utilitários úteis:]]
- [[#criando uma tabela:|criando uma tabela:]]
	- [[#criando uma tabela:#tipo de dados|tipo de dados]]
		- [[#tipo de dados#numero:|numero:]]
		- [[#tipo de dados#data:|data:]]
		- [[#tipo de dados#texto:|texto:]]
	- [[#criando uma tabela:#modificadores de colunas:|modificadores de colunas:]]
	- [[#criando uma tabela:#Restrições de integridade|Restrições de integridade]]
	- [[#criando uma tabela:#script de exemplo criado:|script de exemplo criado:]]
- [[#alterando uma tabela:|alterando uma tabela:]]
- [[#excluir uma tabela|excluir uma tabela]]


# Explicação dos tópicos:
## comandos utilitários úteis:
mostra os banco de dados:
```
SHOW DATABASES;
```

cria o banco de dados:
```
CREATE DATABASE <nome do banco>;
```

usa o banco de dados:
```
USE <nome do banco>;
```

mostra as tabelas criadas:
```
SHOW TABLES;
```




## criando uma tabela:
![[Pasted image 20251224120845.png|500]]

ex:
```
CREATE TABLE cliente  (
id INT AUTO_INCREMENT,
nome VARCHAR (40),
dt_nasc DATE,
cpf CHAR(11),
PRIMARY KEY (id)
);
```


### tipo de dados
#### numero:
![[Pasted image 20251224121138.png|500]]
#### data:
![[Pasted image 20251224121252.png|500]]

#### texto:
![[Pasted image 20251224121336.png|500]]

### modificadores de colunas:
![[Pasted image 20251224121453.png|500]]


### Restrições de integridade
![[Pasted image 20251224123608.png|475]]
![[Pasted image 20251224124116.png|500]]
PRIMARY KEY (<coluna(s)>)

- ex:
	- PRIMARY KEY (id)



### script de exemplo criado:
```
CREATE TABLE cliente  (
	id INT AUTO_INCREMENT,
	nome VARCHAR (40),
	dt_nasc DATE,
	cpf CHAR(11),
	PRIMARY KEY (id)
);

CREATE TABLE evento  (
	id INT AUTO_INCREMENT,
	nome VARCHAR (40),
	dt_evento DATE,
	valor DECIMAL(8,2),
	PRIMARY KEY (id)
);


CREATE TABLE ingresso(
	id INT AUTO_INCREMENT,
    id_cliente INT,
    id_evento INT,
    dt_compra  DATE,
	valor DECIMAL(8,2),
    meia BOOLEAN,
	PRIMARY KEY (id),
    FOREIGN KEY (id_cliente) REFERENCES cliente (id),
    FOREIGN KEY (id_evento) REFERENCES evento (id)
);
```



## alterando uma tabela:

![[Pasted image 20251224124223.png|500]]



## excluir uma tabela
![[Pasted image 20251224124306.png|500]]
drop table -> exclui a tabela
truncate -> exclui todos os dados