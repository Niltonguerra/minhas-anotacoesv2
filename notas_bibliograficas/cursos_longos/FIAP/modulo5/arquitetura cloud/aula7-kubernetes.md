---
Date: 2026-06-25T21:53:00
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
## tipos de gerenciadores de VMs(máquina virtual)
 - EC2
 - VMWare
 - VirtualBox

## Kubernetes
- o kubenetes é um orquestrador de contêineres

### o que é um nó?
- é a VM/poder computacional em sí.

#### tipos de nós:
##### Control Plane(antigamente chamada de master)
- é a central de controle do cluster
- 

##### Worker node
- onde efetivamente roda seus pods
	- a definição de pods está abaixo,kkkk
```
Cluster
├── Control Plane  →  gerencia tudo
├── Worker Node 1  →  roda Pod1,Pod2,Pod3,Pod4,Pod5
├── Worker Node 2  →  roda Pod6,Pod1(redundância)
└── Worker Node 3  →  roda Pod8,Pod9,Pod10
└── Worker Node 4  →  roda Pod8,Pod9,Pod10(redundância)
```

#### Por que ter vários nós?
- **Disponibilidade** — se um nó cai, os Pods migram para outros
- **Capacidade** — distribui a carga entre máquinas


### o que é um Pod?
- Pod é a menor unidade gerenciada pelo kubernetes
- ele não é exatamente um container
	- um pod pode ter mais de um container
	- mas normalmente ele comporta apenas 1 container 
	- ex:
```
Pod
├── container: api (aplicação principal)
└── container: log-collector (coleta logs da api e envia pro servidor)
```


#### vantagens do Pod
- permite que os containers dentro de sí:
	- rodem no mesmo nó
	- compartilhem rede
	- compartilhem volumes(armazenamento)


#### características:
- se morrer, o kubernetes cria um novo
- tem um IP próprio dentro do cluster, mas pode alterar conforme for morrendo e revivendo
- não se comunicam entre sí
	- para se comunicar usam services
		- vou falar no tópico abaixo o que é services, kkkkk



### Services
- é o meio de comunicação entre os Pods

#### problema que resolve
- como os pods são efêmeros(morrem e são criados toda hora) os services surgem para mesmo que o IP do pod altere o service consegue conectar dois pods
```
Pod A  →  Service B (IP fixo / DNS fixo)  →  Pod B
```

##### como ele faz isso?
- dentro do manifest.yml(arquivo de configuração do kubenetes) 
	- é definido via labels o nome de cada pod, 
		- gerando um DNS para cada pod
			- **assim preserva a consistência da comunicação mesmo se o pod morrer.**
```
# Pod
metadata:
  labels:
    app: api

# Service
selector:
  app: api  # manda tráfego para todo Pod com essa label
```



> [!observação]
> nesse caso o DNS serve para ser usado internamente pelo Kubernetes para armazenar um nome próprio para o pod
> (ex: Service chamado "api"  →  DNS: api.default.svc.cluster.local) 
> para facilitar a comunicação entre os pods

#### tipos de services
ClusterIP
- é o tipo de service que só funciona dentro do mesmo cluster

NodePort 
- permite expor para fora do cluster a partir da uma porta de um nó 


LoadBalancer 
- permite criar um load balance externo(GCP,AWS,Azure)
- é tipo um load balance
- padrão de mercado usado para expor aplicações para a internet





