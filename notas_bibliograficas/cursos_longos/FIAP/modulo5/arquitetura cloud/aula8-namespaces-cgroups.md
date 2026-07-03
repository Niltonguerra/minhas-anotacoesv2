---
Date: 2026-06-26T17:39:00
tags:
  - fiap/modulo05/arquiteturaCloud
---
# Resumo da nota:
nessa nota vimos o que é namespace e tipos do mesmo, como PID que faz o controle da criação do ID de cada container quando criado automaticamente, net que faz a conexão entre containers via definindo uma 'rede privada' entre os container, mnt que permite que reservar um espaço em memória para o container, o UTS que permite que os containers tenham nome, o User que permite que os containers tenham acesso root dentro se seus contextos, mas fora não tenham acesso administrativo, e o IPC namespace que faz o controle de acesso em espaços de memória comuns entre containers em uma mesma VM.
e também vimos o que é cgroups que de forma básica é colocar limites de recursos nos processos que estão rodando

# Tópicos:
- [[#visão geral|visão geral]]
	- [[#visão geral#relação  cgroup e namespace:|relação  cgroup e namespace:]]
- [[#explicando o que é nameSpaces:|explicando o que é nameSpaces:]]
- [[#tipos de namespaces|tipos de namespaces]]
	- [[#tipos de namespaces#PID|PID]]
	- [[#tipos de namespaces#NET|NET]]
		- [[#NET#o que ele permite?|o que ele permite?]]
		- [[#NET#o que efetivamente ele faz?|o que efetivamente ele faz?]]
	- [[#tipos de namespaces#MNT|MNT]]
		- [[#MNT#o que ele permite?|o que ele permite?]]
		- [[#MNT#o que efetivamente ele faz?|o que efetivamente ele faz?]]
	- [[#tipos de namespaces#UTS|UTS]]
	- [[#tipos de namespaces#USER|USER]]
	- [[#tipos de namespaces#IPC|IPC]]
		- [[#IPC#tipos de namespace IPC:|tipos de namespace IPC:]]
			- [[#tipos de namespace IPC:#Message queues|Message queues]]
			- [[#tipos de namespace IPC:#Semaplhores|Semaplhores]]
			- [[#tipos de namespace IPC:#shared memory|shared memory]]
- [[#explicando o que é cgroups(control groups):|explicando o que é cgroups(control groups):]]


# Explicação dos tópicos:

## visão geral
- a AI estava insistindo que eu coloca-se então coloquei mesmo não achando tão necessário
### relação  cgroup e namespace:
- namespace = controla o que o processo enxerga
- cgroup = controla o que o processo consome
- container= encapsula os dois


## explicando o que é nameSpaces:
servem para permitir que um determinado recurso/processo rode isoladamente do sistema operacional rodando da VM em questão
- dessa definição é que surgiu o container e o docker e posteriormente o kubernetes e etc

## tipos de namespaces

###  PID
- é o id que é gerado automaticamente ao ser criado um container docker
- ex:
```
# Dentro do container        # No host
PID 1  → node server.js      PID 3847 → node server.js
PID 12 → worker              PID 3859 → worker
```


### NET
#### o que ele permite?
- serve para mapear a rede
- serve para permitir que dois container estejam ou não dentro e uma mesma rede
	- conectar dois containers colocando na mesma rede
#### o que efetivamente ele faz?
- isola um container da VM usada com relação a:
	- interface de rede
	- IP
	- portas

### MNT
#### o que ele permite?
- serve para armazenar/persistir dados dentro dentro do container

#### o que efetivamente ele faz?
- isola um sistema de arquivos


### UTS
- permite que os containers tenham seus próprios nomes ao invés de usar o nome da VM/EC2

### USER
- faz o controle de acesso
- permite que dentro do container o processo rode como root
	- mas fora do container não tenha nenhum acesso



### IPC
- permite que dentro de um mesmo IPC namespace haja o compartilhamento de memoria
- é focado em comunicação dentro de um mesmo host
- por padrão, dentro de um pod é compartilhado pelos containers o mesmo namespace IPC

#### tipos de namespace IPC:
##### Message queues
- gerencia filas de mensagens entre processos

#####  Semaplhores
- controle de acesso a recursos compartilhados


##### shared memory
- região de memoria utilizado por múltiplos processos simultaneamente 
- o mais rápido





## explicando o que é cgroups(control groups):
- ele é uma forma do linux controlar o quanto um processo pode consumir de recursos da máquina em questão

tipos de recursos que podem ser controlados:
- memória
- disco 
- rede
- CPU

- permite definir limites por grupos
	- o kubernetes usa o cgroups
	- ex:
		- limite para um worker node
		- limite para um pod
		- limite para um container

exemplo de código de cgroups:
```
limits.memory: 512Mi
```




