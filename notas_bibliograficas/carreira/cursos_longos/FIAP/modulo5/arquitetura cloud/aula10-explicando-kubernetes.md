---
Date: ""
tags:
  - template
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:

## tipos de kubernetes:
### On Premises
- kind
- minikube

### Cloud
- EKS (AWS)
- AKS(Azure)
- OKE(Oracle)
- GKE(Google)



## estrutura organizacional do Kubernetes
### Master Node/Control Plane
- faz o controle do cluster
#### instancias dentro do master node e suas responsabilidades:
##### API Server
- é basicamente uma api faz chamadas para o cluster
- é gerenciada pelo prefixo ``kubectl``
	- ex: 
		- kubectl get node
		- kubectl get pod
		- kubectl apply -f
		- kubectl apply -f deployment.yaml
		- e etc


##### ETCD
- banco de dados do cluster
- armazena todas as informações sobre o cluster:
	- ex:
		- estado
		- configuração
		- e etc



##### Controller Manager
- é o controlador do sistema
- valida se os workers node estão funcionando 
- controla se vai excluir, editar, criar as coisas dentro, como worker node, pods e containers
- criar auto scalling e etc



##### Scheduler
- agendador de tarefas
- define em qual worker node o pod vai ser criado





### Worker Node
- gerencia os pods
	- os pods gerenciam um ou mais containers
#### coisas que tem dentro:
- ##### deployments
	- estratégias de deploy
	- quantidade de réplicas dos pods
	- mantém uma quantidade determinada de containers rodando
	- controla a vida e a morte dos pods
	- controle de deploy
		- tipo o rolling update
	- é o mesmo que o services ECS
	 
	- ###### nele está as configurações de(mais precisamente da spec do pod):
		- CPU usada
		- RAM usada
		- Storage usado
		- Portas expostas
		- logs armazenados
		-  imagem do container



- ##### services
	- é uma abstração de rede
	- ele dá um IP/DNS estável para acessar os pods
	- faz a integração com o LB(load balance)


- ##### pods
	- menor unidade computacional do kubernetes
	- é tipo um container
		-  mas pode ter mais de um container em um pod
		- mas normalmente tem apenas 1 container dentro do pod
	- ![[Pasted image 20260628163645.png|450]]





- ##### ingress
	- é uma API que gerencia o acesso externo ao cluster
	- faz o roteamento de rotas para services
	- ele serve para quando você tem muitos microserviços e cada um faz uma coisa e você não quer ter um load balance para cada um, então você usa o ingress para criar rotas para cada microserviço dentro do dominio que e passa eles pelo load balance
		- é mais barato que usar um load balance para cada microserviço
###### qual é a diferença entre ingress e load balance?
- o load balance faz a distribuição de cargas entre pods do mesmo serviço
- o ingress faz a distribuição de cargas entre serviços diferentes baseados na requisição
	- é um router para serviços, sabe o router do react, é tipo isso, mas ao invés de páginas, o router gerencia acesso a podsserviços/ com base na rota
- os dois coexistem juntos



- ##### replicaSet
	- são os clones dos pods





- ##### HPA
	- é o autoScalling dos pods da aplicação



- ##### Secrets
	- seriam os .env de uma aplicação 
	- eles são encriptados


- ##### ConfigMaps
	- são mapas de configurações
	- ex:
		- Nginx
		- grafana
		- datadog


- ##### Namespace
- é o que permite que o seu container rode isolado da VM
- [[aula8-namespaces-cgroups]]


- ##### PV
	- persistente volume
	- faz o armazenamento de dados de pod
		- mesmo que o pod morra e renasça os dados persistem


- ##### PVC
	- persistente volume claim
	- faz o anexo do volume criado ao seu pod

##### DaemonSet
- são pods padrão que devem estar em todos os nodes 
- por exemplo:
	- prometheus

##### StatefulSet
- pods que precisam de persistência de dados




## qual é a diferença entre pod e service?
- pod é a menor unidade computacional no kubernetes
- o service é uma abstração de rede que permite que mesmo que um pod morra e renasça, a conexão continue valida pois o service gera um DNS fixo.
