---
Date: ""
tags:
  - fiap/modulo05/microserviços
---
# Notas conectadas:


# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:
## event sourcing
- é aquele histórico de deploy que tem nas vms dos servidores, sabe, para fazer rollback
![[Pasted image 20260614142228.png|475]]

### vantangens
![[Pasted image 20260614142359.png|475]]

### desvantagens
![[Pasted image 20260614142436.png|500]]




## CQRS(Command Query Responsibility Segregation)
o que é?
- e a ação de criar dois schemas para um mesmo banco de dados, um para leitura e outro para a escrita
- não é a otimização dos campos de cada request ao banco de dados

### por exemplo:
tendo como base a afirmação absoluta de que: um SGBD não deve ter mais de um microserviço conectado, como se aplica a CQRS? 
Resposta:
- temos um banco de dados A, para aplicar o CQRS seria preciso replicar o banco de dados A, assim o banco de dados A normal fica responsável por escrita e sua replica fica responsável pela leitura



![[Pasted image 20260614142507.png|500]]
### vantagens
![[Pasted image 20260614143813.png|500]]
![[Pasted image 20260614150838.png|500]]


### desvantagens
![[Pasted image 20260614150903.png|500]]





banco de dados SQL
- eles usam a linguagem SQL 


banco de dados noSQL
- eles não usam a linguagem SQL 
	- ![[Pasted image 20260614151108.png|300]]



## como usar e o que é o Teorema CAP(Consistency, Availability e partition Tolerance)
- **Consistency (Consistência)** — toda leitura recebe o dado mais recente. Se você escreveu X, qualquer nó do sistema retorna X.
- **Availability (Disponibilidade)** — toda requisição recebe uma resposta, mesmo que não seja o dado mais recente.
- **Partition Tolerance (Tolerância a Partição)** — o sistema continua funcionando mesmo se a comunicação entre nós falhar.
ele fala que todo sistema só pode ser 2 desses 3 simultaneamente, ele basicamente prova  porque um sistema só pode ser dois de cada vez e não pode ser os três sempre.
- é basicamente o que podemos usar para explicar esses trade-off:
	- por que Cassandra abre mão de consistência forte?
	- resposta: por conta do teorema CAP
	- por que em microsserviços aceita consistência eventual?
	- resposta: por conta do teorema CAP





















