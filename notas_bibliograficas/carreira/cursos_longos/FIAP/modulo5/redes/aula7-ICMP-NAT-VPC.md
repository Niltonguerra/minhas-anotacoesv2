---
Date: 2026-06-24T11:31:00
tags:
  - fiap/modulo05/redes
---
# Resumo da nota:
nessa nota vimos que o é ICMP que basicamente é um conjunto de comando que serve para validar o status da jornada da request, assim como também o que é NAT que é basicamente é a forma de varios IPs privados acessarem um IP público, assim como também vimos o que é uma VPC que é basicamente a rede privada de uma cloud que você pode gerenciar.

# Tópicos:
- [[#o que ICMP(Internet Control Message Protocol)?|o que ICMP(Internet Control Message Protocol)?]]
	- [[#o que ICMP(Internet Control Message Protocol)?#para que serve?|para que serve?]]
	- [[#o que ICMP(Internet Control Message Protocol)?#como usar o ICMP?|como usar o ICMP?]]
		- [[#como usar o ICMP?#PING|PING]]
		- [[#como usar o ICMP?#TRACEROUTE|TRACEROUTE]]
		- [[#como usar o ICMP?#mensagens comuns de erro:|mensagens comuns de erro:]]
- [[#o que é VPC(Virtual Private Cloud) da aws?|o que é VPC(Virtual Private Cloud) da aws?]]
- [[#o que é EC2(Elastic Compute Cloud)?|o que é EC2(Elastic Compute Cloud)?]]
- [[#o que é NAT?|o que é NAT?]]
	- [[#o que é NAT?#o que é NAT gateway?|o que é NAT gateway?]]
		- [[#o que é NAT gateway?#embora possa se implementar o NAT na entrada de trafego, não se deve fazer isso, porque é uma melhor prática implementar o Load balance e o Bastian Host do que o NAT, que funciona mais no papel de NAT Gateway|embora possa se implementar o NAT na entrada de trafego, não se deve fazer isso, porque é uma melhor prática implementar o Load balance e o Bastian Host do que o NAT, que funciona mais no papel de NAT Gateway]]
# Explicação dos tópicos:
## o que ICMP(Internet Control Message Protocol)?
- protocolo da camada 3 do modelo OSI

### para que serve?
- comunicar erros
- diagnósticos de rede
- não serve para trafego de dados entre sistemas


### como usar o ICMP?
#### PING
- para que serve?
	- verifica se um servidor está acessivel
	- mede a latência
- exemplo de uso:
```
ping google.com
```


#### TRACEROUTE
- para que serve?
	- mostra todo o caminho de infraestrutura que uma request passa
		- isso é útil para identificar onde está acontecendo o gargalo de rede que está causando falha/lentidão na comunicação
- exemplo de uso:
```
traceroute google.com
```


#### mensagens comuns de erro:
- Destination Unreachable
	- host ou rede inacessível
- time Exceeded
	- pacote descartado poruqe passou por roteadores demais
		- TTL terminou antes do fim da jornada do request
- Redirect
	- aviso do roteador que existe um caminho melhor para a request
		- jornada da request mais curta




## o que é VPC(Virtual Private Cloud) da aws?
- é a rede privada da AWS
- que a gente pode fazer dentro dela?
	- definir sub redes
	- definir regras de tráfego
- exemplo de uma VPC na AWS:
```
VPC (10.0.0.0/16) 
├── Subnet pública (10.0.1.0/24) → Load Balancer, NAT Gateway, Bastion 
└── Subnet privada (10.0.2.0/24) → EC2, RDS, serviços internos
```


## o que é EC2(Elastic Compute Cloud)?
- é basicamente o "servidor" que você contrata na AWS
	- coloquei entre aspas porque tecnicamente você não aluga o servidor, você aluga poder computacional


## o que é NAT?
- é basicamente a forma de permitir que vários IPs privados acessem 1 IP público com a finalidade de que eles possam acessar a internet
- ele pode ser implementado tanto para entrada de dados como para saída de dados(bidirecional)
### o que é NAT gateway?
- é basicamente o mesmo que o NAT, mas ele só trata trafego de saída

#### embora possa se implementar o NAT na entrada de trafego, não se deve fazer isso, porque é uma melhor prática implementar o Load balance e o Bastian Host do que o NAT, que funciona mais no papel de NAT Gateway
