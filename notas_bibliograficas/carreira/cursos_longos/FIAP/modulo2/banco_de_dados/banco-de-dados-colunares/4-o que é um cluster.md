---
Date: 2026-03-28T15:52:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBColunares
---
# Notas conectadas:


# Resumo da nota:
nessa nota vimos o que é um cluster, que basicamente, é um conjunto de nó's que seguem um conjunto de regras com a finalidade de facilitar a gestão desses recursos
# Tópicos:
- [[#o que é um cluster?|o que é um cluster?]]
	- [[#o que é um cluster?#Resposta:|Resposta:]]
	- [[#o que é um cluster?#definição politizada:|definição politizada:]]
- [[#tipos de cluster:|tipos de cluster:]]
	- [[#tipos de cluster:#1.Master-Slave (Replicação)|1.Master-Slave (Replicação)]]
	- [[#tipos de cluster:#2.Multi-Master (Active-Active)|2.Multi-Master (Active-Active)]]
	- [[#tipos de cluster:#3.Sharding (Particionamento)|3.Sharding (Particionamento)]]

# Explicação dos tópicos:

## o que é um cluster?
### Resposta: 
	o cluster é um conjunto de nó's que seguem um conjunto de regras,com o objetivo de facilitar a gestão de sistemas enormes.

### definição politizada: 
	Um cluster é um sistema distribuído onde um grupo de nós (containers, VMs ou físicos) coordena suas ações através de protocolos de consenso para se comportar como uma única unidade lógica.

## tipos de cluster:

### 1.Master-Slave (Replicação)
O modelo mais comum (muito usado em MySQL e Postgres).

Master (Líder): É o único que aceita Escritas (INSERT, UPDATE). Ele replica as mudanças para os Slaves.
Slaves (Seguidores): Aceitam apenas Leituras.

Uso: Ótimo para sites com muita leitura (como um blog ou e-commerce), mas se o Master cair, você precisa de um software extra para promover um Slave a novo Master.

### 2.Multi-Master (Active-Active)
Todos os nós do cluster podem ler e escrever ao mesmo tempo.

Vantagem: Se qualquer nó cair, o sistema continua 100% funcional.
Problema: Sincronizar os dados é um pesadelo técnico. Se dois nós alterarem o mesmo dado ao mesmo tempo, o cluster precisa de algoritmos complexos para resolver o conflito.

###  3.Sharding (Particionamento)
Em vez de cada nó ter uma cópia de tudo, o banco é "fatiado".

Exemplo: O Nó 1 guarda clientes de A-M, e o Nó 2 guarda clientes de N-Z.
Uso: Quando o volume de dados é tão absurdo que não cabe em um disco só (muito comum em MongoDB e Cassandra).

