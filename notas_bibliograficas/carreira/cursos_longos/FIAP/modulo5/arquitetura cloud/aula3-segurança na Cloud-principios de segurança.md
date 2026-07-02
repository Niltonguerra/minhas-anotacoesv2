---
Date: 2026-06-21T13:37:00
tags:
  - fiap/modulo05/arquiteturaCloud
---
# Notas conectadas:


# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:
- [[#medidas de segurança|medidas de segurança]]
- [[#princípios de segurança|princípios de segurança]]
	- [[#princípios de segurança#menor privilégio|menor privilégio]]
	- [[#princípios de segurança#Separação de privilégios|Separação de privilégios]]
	- [[#princípios de segurança#mecanismo mínimo|mecanismo mínimo]]
	- [[#princípios de segurança#mediação completa|mediação completa]]
	- [[#princípios de segurança#Design aberto|Design aberto]]
	- [[#princípios de segurança#privilégio padrão negado|privilégio padrão negado]]
	- [[#princípios de segurança#Separação de responsabilidades|Separação de responsabilidades]]
	- [[#princípios de segurança#Menor surpresa|Menor surpresa]]
	- [[#princípios de segurança#Defesa em profundidade|Defesa em profundidade]]
	- [[#princípios de segurança#CIA Triad|CIA Triad]]
	- [[#princípios de segurança#Fail secure|Fail secure]]
	- [[#princípios de segurança#Zero trust|Zero trust]]
	- [[#princípios de segurança#Segurança por design|Segurança por design]]
	- [[#princípios de segurança#não repúdio|não repúdio]]
	- [[#princípios de segurança#superfície de ataque mínima|superfície de ataque mínima]]

# Explicação dos tópicos:

## medidas de segurança
- usuário root
	- o usuário mais forte 
	- usado para criar o admin

- usuário admin
	- quem gerencia o sistema


## princípios de segurança
### menor privilégio
- é o princípio que fala que o usuário deve ter o menor acesso possível
	- ex: você começa sem acesso e só vai recebendo os acesso conforme a necessidade

### Separação de privilégios
- operações críticas exigem mais de um condição/aprovação
	- ex: excluir o banco de dados precisa de aprovação de 2 pessoas

### mecanismo mínimo
- quanto menos código/superfície de ataque, melhor
- ex: proxy reverso, manter a segurança

### mediação completa
- toda requisição é verificada e sem cache de permissão
	- sem cache, validação de cada requisição separadamente

### Design aberto
- segurança não depende de segredo de implementação, só das chaves
	- ex: validação via JWT (json web token)

### privilégio padrão negado
- por padrão você não tem acesso ao sistema
	- só libera explicitamente
	- ex: politica de controle de acesso DAC [[aula2.1-tipos de controle de acesso]]

### Separação de responsabilidades
- não existe um super usuário/admin que controla tudo, o que deve acontecer é um usuário ter permissões referentes ao contexto que ele atua, seja redes, banco de dados, aplicação em si

### Menor surpresa
- é você não ser preguiçoso na implementação de segurança, você tem que ser proativo,kkkkk
- ex:
	- quando você exclui um usuário mas esse usuário tem um token ainda valido para acesso, você deve não só apagar o usuário do SGBD, mas também invalidar o token do usuário em questão.
- basicamente se o objetivo é remover o usuário do sistema, deve-se fechar qualquer tipo de porta para acesso ao sistema que o usuário possa ter.

### Defesa em profundidade
- normalmente um sistema tem varias camadas
- normalmente, o ideal é aplicar a segurança em mais de uma camada, não só no proxy(camada de contato com a rede/"usuário")

### CIA Triad
- confidencialidade
- disponibilidade
- integridade
- já falei desse na nota [[aula2-CloudxOnPremise]]


### Fail secure
- se algo falhar, falha de forma segura
- ex: 
	- nega o acesso 

### Zero trust
- nunca confiar, sempre verificar
- ex: verificar credenciais mesmo em rede interna

### Segurança por design
- é desenhar o sistema desde o começo pensando na segurança, através de frameworks de segurança, politicas de acesso e politicas se segurança

### não repúdio
- registrar o que o que cada usuário fez, para que eles não possam negar o que eles fizeram
	- evita que se alguém fizer uma coisa que não deveria ele não posso negar que fez aquilo
		- ajuda a encontrar problemas de segurança

### superfície de ataque mínima 
- evitar se comunicar com o mundo externo(internet) de forma desnecessária
	-  isso implica em:
		- menos endpoints
		- menos portas abertas
		- menos dependências externas(ex:npm)




