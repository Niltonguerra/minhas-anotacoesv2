---
Date: 2025-06-15T19:47:00
tags:
  - fiap/modulo02/docker
---
# Notas conectadas:


# Resumo da nota:
nessa aula vimos como gerir redes no docker
# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents



# Explicação dos tópicos:
docker network ls
- esse comando mostra todas as redes disponíveis para o docker acessar


explicando os parâmetros trazidos pelo ``docker network ls``
![[Pasted image 20250615195342.png]]
- o driver:
	- bridge:
		- é uma rede que permite que o container tenha todas as permissões que a maquina tem de rede, por exemplo, o container pode acessar a internet
	- host:
		- se comunica com a nossa máquina, mas apenas com acesso a recursos locais
	- null:
		- isola a comunicação entre o container e o computador
	- overline:
		- permite a comunicação entre os containers

docker network instpect (id da network)
- permite inspecionar informações da rede


docker network create --driver bridge (nome da rede criada)
- comando usado para criar uma nova rede

docker network ls
- ve todas as redes

docker network connect (nome da rede) (id do container)