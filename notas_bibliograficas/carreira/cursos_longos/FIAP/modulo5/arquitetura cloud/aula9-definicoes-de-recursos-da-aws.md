---
Date: 2026-06-26T17:39:00
tags:
  - fiap/modulo05/arquiteturaCloud
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:

## ECR(Amazon Elastic Container Registry)
- docker hub da aws
- armazena as imagens que rodam dentro da AWS


## ECS(elastic container service)
- é tipo um docker destop da aws


## IAM
- faz o controle de acesso para os usuários



## rolling update
- e a estratégia para permitir deploy sem que a aplicação saía do ar em nenhum momento
	- você tem containers rodando a aplicação, 
		- o deploy é feito em novos containers
		- o ALB(application load balance) muda o foco dos containers antigos para os novos depois do deploy
		- descarta os antigos e fica com os novos containers
		- repete o processo para seja preciso fazer novos deploys


## circuit breaker
- é o mecanismo de segurança para quando uma parte do sistema cair todo o sistema não cair
- ex: 
	- tipo um disjuntor de uma casa



## EKS
- é a orquestração de containers via Kubernetes

