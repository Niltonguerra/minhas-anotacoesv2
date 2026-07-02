---
Date: 2026-06-24T01:32:00
tags:
  - fiap/modulo05/redes
---
# Resumo da nota:
nessa nota vimos o que é IP, redes publicas, redes privadas e sub redes assim como os blocos do RFC 1918 e como ainda hoje são usados em redes privadas, além disso vimos como dimensionar de forma amadora redes privadas usado CIDR e VLSM
# Tópicos:
- [[#o que é um IP?|o que é um IP?]]
- [[#rede pública:|rede pública:]]
- [[#rede privada:|rede privada:]]
	- [[#rede privada:#blocos da RFC(Request for Comments) 1918|blocos da RFC(Request for Comments) 1918]]
- [[#o que é VLSM(Máscara de subrede de tamanho variável)|o que é VLSM(Máscara de subrede de tamanho variável)]]
- [[#o que é CIDR(Classless Inter-Domain Routing)?|o que é CIDR(Classless Inter-Domain Routing)?]]
- [[#porque usar o VLSM e CIDR?|porque usar o VLSM e CIDR?]]
	- [[#porque usar o VLSM e CIDR?#como usar o CIDR?|como usar o CIDR?]]
	- [[#porque usar o VLSM e CIDR?#como usar o VLSM?|como usar o VLSM?]]

# Explicação dos tópicos:

## o que é um IP?
- é o endereço de rede de uma máquina

## rede pública:
- a rede pública é a rede da internet
	- o limite de endereços IPs no IPV4 é 4,3 bilhões
	- o limite de endereços IPs no IPV6 é 340 undecilhões

## rede privada:
- a rede privada é a rede interna da empresa
	- normalmente você pega 1 IP público e roteia para a empresa inteira
	- 1 IP público na **teoria suporta** até 64.500
	- normalmente é usado blocos de rede advindos do padrão RFC 1918 para poder gerar a base de quantos endereços vão ter as redes privadas e dentro dessa rede privada se define as sub redes via **VLSM** e via o **CIDR**

### blocos da RFC(Request for Comments) 1918
os blocos são chamados de classes, sendo divididas nas classes A,B e C:
- **Bloco de 8 bits (Antiga Classe A):** 10.0.0.0 até 10.255.255.255
	- contém 1 redes de classe a distintas
	- uma rede de classe A tem uma mascara de /8
- **Bloco de 12 bits (Antiga Classe B):** 172.16.0.0 até 172.31.255.255
	- contém 16 redes de classe B distintas
	- uma rede de classe B tem uma mascara de /16
- **Bloco de 16 bits (Antiga Classe C):** 192.168.0.0 até 192.168.255.255
	- contém 256 redes de classe C distintas
	- uma rede de classe C tem uma máscara de /24


## o que é VLSM(Máscara de subrede de tamanho variável)
- é uma técnica que permite a divisão de uma rede em varias subsedes de tamanho variável

## o que é CIDR(Classless Inter-Domain Routing)?
- é o padrão de como endereços IP são representados na internet
- serve para definir blocos  de rede de tamanho arbitrário com a notação ``/``
	- ex: ``10.0.0.0/24``

## porque usar o VLSM e CIDR?
- dá mais controle e segurança para a rede
	- permite colocar firewalls
	- permite que determine uma rede especifica para:
		- o pessoal do financeiro
		- o pessoal de TI
		- o pessoa de produção


### como usar o CIDR?
- ele serve para você poder escrever uma sub rede
um IP tem 32 bits
a notação CIDR implementa a ``/`` ao IP
- ele serve para definir quantos bits vão ser usados para a rede localizar o computador
- e quantos bits vão ser usados para definir a máquina em sí dentro da rede
- por exemplo:
considerando um /22, temos que:
1 1 1 1 1 1 1 1    1 1 1 1 1 1 1 1    1 1 1 1 1 1 0 0    0 0 0 0 0 0 0 0
22 bits vão ser usado pela rede e os outros 10 vão ser usados para localizar a máquina dentro da rede

agora é um pouco complexo de explicar, mas com o pré conhecimento de transformar binário em decimal, que não vou explicar por que isso é notas próprias e já sei isso, temos que 2 elevado a 10 é 1024, logo essa rede suporta 1022 computadores, pois 2 endereços sempre são usado como o inicio e o final da subrede.

e basicamente é isso CIDR, é saber como dividir a quantidade de bits contidos dentro de IP para definir o quanto a rede vai usar dos bits e o quantos bits vão ser usados para definir os IPs privados da sua rede dentro do escopo de classes de rede A,B ou C definido pelo RFC 1918.



### como usar o VLSM?
vou explicar com um exemplo prático pois acho mais fácil para contextualizar e explicar:

- você tem uma empresa, essa empresa precisa de 800 endereços IP para o setor financeiro e 500 para o setor comercial. o que você faz? como você dimensiona a rede?
- Resposta: simples faz o seguinte:
- passo 1: escolhe a classe do padrão RFC 1918 que mais se aproxima do que você precisa com o mínimo de desperdício
	- o que mais se aproxima é o Bloco de 16 bits, que é um agrupamento de 256 redes de classe C distintas 
- com o bloco de 16 bits na mão você faz a separação da rede

> [!vale destacar]
> para exemplo prático vou definir números mais próximos do escopo pedido e não comtemplando todo o espaço de IPs privados disponíveis

considerando que o numero mais próximo que é sobre o valor de 800 é 2 elevado a 10 que é 1024 para o financeiro iremos definir a ``mascara 22``, porque 32(quantidade de bits no IP) - 10(bits necessários para mapear todos os computadores do financeiro) = 22

para o comercial iremos fazer um calculo semelhante o numero mais próximo que é sobre o valor de 500 quando consideramos log de 2 é o 9 porque 2 elevado a 9 é 512, dessa forma iremos fazer o mesmo calculo 32-9= 23, assim iremos usar a ``mascara de /23``

sabendo que o IP é dividido em 4 blocos, sendo que cada bloco tem 8 bits cada, ou seja tem um tamanho de 256 se convertido para decimal, sabemos que se precisarmos definir uma rede maior que 256 IPs privados precisamos subdividi-las em redes menores "pegando emprestado" um bit de outro bloco.



com essas informações em mãos o desenho da rede ficaria:
financeiro(subnet 192.168.0.0/22):
192.168.0.0 até 192.168.0.255
192.168.1.0 até 192.168.1.255
192.168.2.0 até 192.168.2.255
192.168.3.0 até 192.168.3.255

comercial(subnet 192.168.4.0/23):
192.168.4.0 até 192.168.4.255
192.168.5.0 até 192.168.5.255


> [!NOTE] 
> ainda se perderia algumas endereços privadas, mas mesmo assim é melhor do que perder tantas quanto era perdido antigamente, vou além kkkkk, fica como consideração para caso o sistema crescer,kkkkk já pensando no futuro kkkk



