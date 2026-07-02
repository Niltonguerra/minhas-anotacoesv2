---
Date: 2026-06-21T15:35:00
tags:
  - fiap/modulo05/arquiteturaCloud
---
# conhecimento prévio recomendado:
todas as notas de redes, sendo a primeira:
[[aula1-termos de rede e modelo OSI]]


# Resumo da nota:
nessa nota vimos alguns requisitos para projetar um sistema com cloud partindo mais para esse lado de infraestrutura, além disso também vimos o que é uma CDN e alguns termos com nat gateway, bucket e também vimos tipos de load balance

# Tópicos:
- [[#Levantamento de requisitos para projetar o sistema|Levantamento de requisitos para projetar o sistema]]
- [[#desenho de um sistema para AWS|desenho de um sistema para AWS]]
- [[#para que serve um nat gateWay?|para que serve um nat gateWay?]]
- [[#o que é um bucket?|o que é um bucket?]]
- [[#o que significa WAF(web application firewall)?|o que significa WAF(web application firewall)?]]
- [[#o que é uma CDN(Content Delivery Network)?|o que é uma CDN(Content Delivery Network)?]]
- [[#Load Balance|Load Balance]]
	- [[#Load Balance#tipos de load balance|tipos de load balance]]
		- [[#tipos de load balance#Application LB|Application LB]]
		- [[#tipos de load balance#classic LB|classic LB]]
		- [[#tipos de load balance#Gateway LB|Gateway LB]]
		- [[#tipos de load balance#Network LB|Network LB]]
- [[#RDS|RDS]]
- [[#DaemonSet|DaemonSet]]


# Explicação dos tópicos:

## Levantamento de requisitos para projetar o sistema

**1. Área Conceitual (Requisitos e Domínio)**
- Mapeamento de entidades e casos de uso (inventário de aplicações).

**2. Avaliação de Nuvem e Infraestrutura (Arquitetura)**
- Escolha da nuvem que melhor supre o sistema, desenvolvimento da infraestrutura e mapeamento de dependências (APIs, libs, banco de dados).

**3. Plano de Recuperação de Desastres (Segurança e Operações)**
- Planos de recuperação baseados nas diretrizes de segurança em cloud.


## desenho de um sistema para AWS
![[Pasted image 20260622153327.png]]
## para que serve um nat gateWay?
- é a forma de varios IPs privados acessarem um IP pública apenas para o trafego de dados de saída de uma rede privada


## o que é um bucket?
- é um armazém de dados
- no contexto da AWS é a S3(Amazon Simple Storage Service)
 
## o que significa WAF(web application firewall)?
- como o nome fala é um firewall para aplicações web
- embora seja acoplado junto a CDN, a requisição passa primeiro pelo WAF e depois pela CDN

## o que é uma CDN(Content Delivery Network)?
- CDN são servidores de armazenamento de dados usados para otimizar a entrega de arquivos através da disposição de servidores de armazenamento de dados através do mundo, permitindo que o dado trafegado não tenha que percorrer longas distâncias.
	- um exemplo seria:
		- no contexto da AWS, a CDN usa um S3 como origem e distribui o conteúdo em nós ao redor do mundo para otimizar a entrega de arquivos
			- (decidi colocar esse aviso por aqui porque não é importante, mas vale a notação, na AWS CDN tem o mesmo significado objetivo que a CDN normalmente, mas as siglas significam outra coisa ao invés da sigla significar content delivery network na verdade significa CloudFront na AWS)

- vou falar isso aqui de novo porque é importante, o CDN é focado na entrega de arquivos.

- embora o conceito de CDN(content delivery network) não preveja a questão de segurança, a maioria das CDNs no mercado hoje já disponibiliza a questão da segurança como complemento e é recomendado pelo mercado colocar as questões de segurança como ataques DDos na camada de CDN.

- a CDN possui cache
	- e por conta disso ela permite uma otimização de entrega para arquivos estáticos




```
caminho da request para busca de arquivos mediante CDN profissionalmente:

-------------------------------------------------------------------

fluxo de chamada de arquivos dinâmicos:
Usuário --> WAF --> CDN --> Load Balancer --> Servidor da Aplicação --> SGDB


--------------------------------------------------------------------


fluxo estático(arquivos passiveis de cache,ex:imagem,vídeos, build do react e etc):
Usuário --> WAF --> CDN --> Servidor de Armazenamento (ex: S3)

```








## Load Balance
- serve para fazer a distribuição de carga entre instancias(container's) do sistema


![[Pasted image 20260622153459.png]]

### tipos de load balance

#### Application LB
- serve para fazer o roteamento(gerenciar/distribuir) HTTP e HTTPS
	- isso faz dele um ótimo load balance
		- porque permite que as requisições HTTP/HTTPS sejam distribuídas entre containers

#### classic LB
- é um load balance clássico, ele foi um dos primeiros a serem criados no AWS
- está defasado


#### Gateway LB
- serve para atuar na 3 camada de rede do modelo OSI
	- usa IPs e não entende HTTP/HTTPS
- serve para permitir que todas as requests possam passar por medidas de segurança como um (firewalls, IDS/IPS, deep packet inspection)

| Camada | Nome         | O que faz                                                 | Exemplo                      |
| ------ | ------------ | --------------------------------------------------------- | ---------------------------- |
| 7      | Aplicação    | Interface com o software, protocolo de comunicação da app | HTTP, HTTPS, FTP, DNS, SMTP  |
| 6      | Apresentação | Tradução, criptografia, compressão dos dados              | TLS/SSL, JPEG, JSON encoding |
| 5      | Sessão       | Abre, mantém e encerra sessões entre sistemas             | NetBIOS, RPC                 |
| 4      | Transporte   | Entrega confiável, controle de fluxo, portas              | TCP, UDP                     |
| 3      | Rede         | Endereçamento lógico, roteamento entre redes              | IP, ICMP                     |
| 2      | Enlace       | Endereçamento físico, comunicação entre nós da mesma rede | Ethernet, MAC address        |
| 1      | Física       | Transmissão de bits no meio físico                        | Cabo, fibra, sinal elétrico  |


#### Network LB
- trata protocolos TCP e UDP





## RDS
- banco de dados relacional na aws



## DaemonSet
- garante a criação de um pod em vários worker node sempre 
	- mas apenas isso
	- ele não atua na criação de containers dentro de um pod
	- não garante o funcionamento do prometheus a nivel de container


