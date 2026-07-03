---
Date: 2026-06-21T10:08:00
tags:
  - fiap/modulo05/arquiteturaCloud
---
# Notas conectadas:


# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:

## tipos de ataques:
- ### vazamento de dados
	- dados da sistema vão para um terceiro sem autorização

- ### DoS(ataques de negação de serviço)
	- é quanto faz varias requisições para o servidor com o objetivo de derrubar ele

- ### sequestro de conta
	- quando alguém invade sua conta

- ### interfaces e apis inseguras
	- é aquele famoso:
		-  vou abrir a porta dessa app apenas para testar
		- ou 
		- desenho de presentears de apis não muitos bons que expões mais do que é preciso...

## princípios de segurança na cloud:
### CID/CIA Triad
- confidencialidade
	- só quem precisa de acesso tem acesso
- integridade
	- os dados não vão corromper
	- os dados só vão ser alterados por quem pode altera-los
- disponibilidade
	- eles são acessíveis
		- tipo, você pode deixar os dados em um pendrive enterrado no polo sul, mas as pessoas não vão poder acessar então entra nesse aspecto

### Defesa em profundidade:
- é a ação de criar múltiplas camadas de segurança
	- e em cada camada implementar medidas de segurança

### Segurança por design:
- usar os designs/frameworks de segurança e um modelo de controle de acesso


## melhores práticas de segurança na cloud
- ### autenticação e autorização fortes
	- MFA(autenticação multifator)
	- senhas fortes
	- tirar acesso quando não usar um recurso que tem acesso
		- (o pesadelo do dev,kkkkk)

- ### Criptografia de dados:
	- criptografar os dados do usuário
		- ex: senha,cpf e etc

- ### Gerenciamento de Identidade e acesso(IAM)
	- aplicar o princípio de menor privilégio possível.
	- aplicar a arquitetura baseada em papeis RBAC
		- [[aula2.1-tipos de controle de acesso]]

- ### monitoramento e análise de logs
	- colocar observabilidade nas app
		- prometheus
			- recolher dados
		- grafana
			- UI para mostrar os dados
		- logs nas aplicações

- ###  testes de segurança regulares
	- testes de invasão com hackers
	- testes internos
	- testes periódicos
	- etc




