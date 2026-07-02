---
Date: ""
tags:
  - fiap/modulo05/arquiteturaCloud
---
# Notas conectadas:


# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:
- [[#termos|termos]]
	- [[#termos#firewall|firewall]]
	- [[#termos#rede privada|rede privada]]
	- [[#termos#rede pública|rede pública]]
	- [[#termos#sub rede|sub rede]]
	- [[#termos#bastion host/bastian|bastion host/bastian]]
		- [[#bastion host/bastian#porque é tão forte o segurança?|porque é tão forte o segurança?]]
	- [[#termos#VPN|VPN]]
	- [[#termos#auditar|auditar]]
	- [[#termos#logs|logs]]
	- [[#termos#Backups|Backups]]
	- [[#termos#DR - disaster Recovery|DR - disaster Recovery]]


# Explicação dos tópicos:


## termos
### firewall
- é quem controla quem pode acessar
- faz o controle de quem/IP pode acessar o sistema
	- 0.0.0.0/0
		- libera para todo mundo

### rede privada
- intranet
- rede da empresa

### rede pública
- internet
- rede de internet
	- é meio que autoexplicativo o nome


### sub rede
- é uma rede dentro da rede
- serve para definir um escopo de acesso
- ex:
	- você tem uma parte do sistema que quer que se comunique, por exemplo 3 container que se comunixão
	- para definir que apenas eles possam se comunicar, você vai tomar varias medidas de segurança
		- entre elas você vai usar uma sub rede que envolve esses 3 containers


### bastion host/bastian
- é o servidor que fica na subrede publica e serve como "guarita de um condomínio" para sua aplicação, é a **única** forma do mundo externo acessar o seu sistema
- o bastion host é usado para acesso administrativo
- para acesso público é usado o proxy reverso
![[Pasted image 20260621145637.png]]

exemplo:
```
Internet → Bastion Host (subrede pública) → recursos internos (subrede privada)
```

#### porque é tão forte o segurança?
- só permite acesso via SSH, nunca senha
- é o único ponto de entrada administrativa para a rede privada
- logs de todos os acessos
- sempre que possível, acesso via IP do usuário do serviço
- atualizações de segurança sempre em dia


### VPN
- usar vpn para maior segurança

### auditar
- validar se tudo está de acordo com boas práticas de segurança
- cloudTrail console
	- basicamente um recurso da AWS para auditar a aplicação

### logs
- fala que a app está bem feita
- quem coloca é o dev durante o desenvolvimento
- os logs devem estar em um lugar seguro
	- não salve dentro da app
	- use um recurso externo como grafana loki

### Backups
- copia de segurança do sistema

### DR - disaster Recovery
- plano escrito e detalhado sobre como recriar o sistema caso aconteça um desastre natural que gere a perda de toda a infraestrutura criada










