---
Date: 2026-06-23T12:21:00
tags:
  - fiap/modulo05/redes
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:
- [[#lista de termos:|lista de termos:]]
- [[#DNS|DNS]]
	- [[#DNS#como funciona a resolução de um DNS|como funciona a resolução de um DNS]]
- [[#o que são os Public DNS Resolvers?|o que são os Public DNS Resolvers?]]
	- [[#o que são os Public DNS Resolvers?#8.8.8.8 e o secundário 8.8.4.4 (são do google)|8.8.8.8 e o secundário 8.8.4.4 (são do google)]]
	- [[#o que são os Public DNS Resolvers?#1.1.1.1 e o secundário 1.0.0.1 (são da cloudflare)|1.1.1.1 e o secundário 1.0.0.1 (são da cloudflare)]]
- [[#o que é um CNAME?|o que é um CNAME?]]
	- [[#o que é um CNAME?#como é definido um CNAME:|como é definido um CNAME:]]
- [[#SMTP(Simple Mail Transfer Protocol)|SMTP(Simple Mail Transfer Protocol)]]

# Explicação dos tópicos:
## lista de termos:
- Recursive Resolver
	- normalmente é:
		-  provedor de internet
		- ou serviços públicos como 8.8.8.8 ou 1.1.1.1
	- tem os IPs dos 13 root nameserver hardcoded em sí.


- Root nameserver
	- sabe onde ficam os TLD nameserver
	- existem 13 no mundo inteiro
	- o recursive resolver sabe o endereço desses 13 root nameserver em todo o mundo
		- esses IPs estão hardcoded no dispositivo do recursive resolver

- TLD nameserver
	- é quem gerencia em especifico uma extensão de url, como por exemplo: ``.com``,``.br``,``.org``,.``net``  e etc

- Authoritative nameserver
	- é o servidor que gerencia o IP diretamente

- TTL(Time to live)
	- é basicamente o tempo de validade de um cache de um IP em um browser/sistema operacional/recursive resolver



## DNS
- e basicamente traduzir IPs de computador para texto que é mais fácil lembrar para humanos.
- ex: 140.82.113.3 --> github.com

### como funciona a resolução de um DNS
- passo 1: consulta local(cache): o sistema operacional ou browser valida se o IP já está armazenado em seu cache local, caso esteja, retorna o IP cacheado

- passo 2:caso não esteja no cache local, ele manda para o  Recursive Resolver consultar o root nameserver pelo endereço do TLD nameserver correto

- passo 3: sabendo o endereço do TLD nameserver o recursive resolver consulta ele para saber o endereço do authoritative nameserver

- passo 4: agora, o recursive resolver com o endereço do Authoritative nameserver consulta o authoritative nameserver para saber qual é o IP do domínio pesquisado pelo usuário.

- passo 5: o recursive resolver já com o IP pego através do Authoritative nameserver, cacheia tanto no recursive resolver com uma TTL(time to live) e depois passa para o browser/sistema operacional e também cacheia com uma TTL.



## o que são os Public DNS Resolvers?
- são recursive resolver gratuitos disponibilizados por empresas privadas
- os mais famosos são:
### 8.8.8.8 e o secundário 8.8.4.4 (são do google)

### 1.1.1.1 e o secundário 1.0.0.1 (são da cloudflare) 


> [!Note] observação
> vale destacar cada um desses public dns resolvers não são apenas um servidor, mas sim vario servidores espalhados pelo mundo para diminuir a latência

## o que é um CNAME?
- é um tipo de DNS que mapeia um hostname(domínio) para outro hostname ao invés de mapear para um IP diretamente.

- ele resolve um problema de gestão da infraestrutura
	- facilita a gestão da infraestrutura
### como é definido um CNAME:
- primeiramente você vai ter um domínio gerado pelo se provedor de nuvem, esse domínio tende a alterar ao longo do tempo.
- como o seu site na internet tem que ter um domínio se não pode fazer as aplicações ficarem quebrando toda hora, você define um hostname padrão para dar mais consistência nas comunicações entre aplicações


## SMTP(Simple Mail Transfer Protocol)
- é um protocopo usado para o envio e roteamento de emails entre servidores
- não vou me aprofundar a fundo pois sinto que não preciso...

