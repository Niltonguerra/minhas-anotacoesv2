---
Date: 2026-06-21T12:36:00
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

## modelos de controle de acesso

### MAC — Mandatory Access Control
- nível militar
- um usuário não pode dar permissão para outro usuário

Controle obrigatório baseado em classificação. O sistema decide o acesso, não o usuário nem o dono do recurso. É o modelo militar — "confidencial", "secreto", "top secret". Usuário não pode dar acesso a outro mesmo que queira.


### DAC — Discretionary Access Control
- tipo linux
- lista de acesso
O dono do recurso decide quem acessa. É o modelo de lista que você mencionou — ACL (Access Control List). É o que o Linux usa com permissões de arquivo. Mais flexível, menos seguro.


### RBAC — Role Based Access Control
- é baseado em papeis
- é o controle básico de acesso via papeis, como:
	- admin
	- editor
	- viewer 
Baseado em papéis que você mencionou. Você não dá permissão pro usuário diretamente — dá pro papel (admin, editor, viewer) e associa usuários a papéis. É o mais usado em sistemas corporativos hoje.


### ABAC — Attribute Based Access Control
- mais granular que o RBAC
- permite o acesso a um recurso com base em contexto, por exemplo:
	- local
	- hora
	- departamento
	- e etc
Baseado em atributos — do usuário, do recurso e do contexto. Ex: "usuário do departamento financeiro, em horário comercial, acessando documento da própria filial". Mais granular que RBAC, mais complexo de implementar.


### RBAC com contexto
- é basicamente uma fusão do RBAC normal e do ABAC
- o termo RBAC com contexto não existe no mercado
	- vale destacar que o termo 'RBAC com contexto' não existe
	- falo isso porque o RBAC comum não é o usado pelas empresas, mas sim o RBAC+ABAC
- é tão granular quanto o ABAC e permite a criação de papeis no sistema
- ex:
	- o usuário da contabilidade de nível 1 só pode acessar o recurso A entre as 8:00 da manhã e as 18:00 horas da noite, apenas dentro da VPN X, e com a máquina que possui o endereço MAC C depois de fazer a autenticação de dois fatores em seu celular através do google Authenticator que possui uma semente de acesso gerada junto a área de TI presencialmente.

### ReBAC — Relationship Based Access Control
- é acesso com base em relacionamento
	- você envia para outra pessoa
	- a outra pessoa envia para mais outra pessoa
	- e assim sucessivamente
Baseado em relacionamentos entre entidades. Google Zanzibar é a implementação mais famosa — é o que o Google Drive usa pra "fulano compartilhou com ciclano que compartilhou com beltrano


### PBAC — Policy Based Access Control
- AWS IAM usa essa esse tipo de modelo de controle de acesso
-  é baseado em declarações
	- ex:
```
package authz

default allow = false

allow {
    input.user.department == "financeiro"
    input.resource.type == "relatorio_financeiro"
    input.context.hour >= 8
    input.context.hour <= 18
    input.context.network == "interna"
}
```


> [!Como funciona na prática:]
> SE o sujeito tem atributo A
> E o recurso tem atributo B
> E o contexto satisfaz condição C
> ENTÃO permita/negue ação Z


#### qual é a diferença entre o PBAC para o ABAC?
- ABAC
	- descreve o que você usa para tomar a decisão
	- acontece dentro do sistema(código)
	- foca mais em descrever quem tem acesso
- PBAC
	-  acontece em uma camada separada do sistema(código) em si.
	- é mais centralizada 
	- foca mais em estruturar a lógica de quem tem acesso
##### Componentes arquiteturais padrão (vem do XACML)
- primeira mente precisamos saber sobre componentes arquiteturais padrão para controle de politicas de segurança:
###### **PEP** — Policy Enforcement Point
- intercepta a requisição e consulta o PDP
###### **PDP** — Policy Decision Point
- motor que avalia a política e decide permit/deny

###### **PIP** — Policy Information Point
- fonte de atributos externos que o PDP pode consultar

###### **PAP** — Policy Administration Point 
- onde as políticas são escritas e armazenadas

##### O fluxo de validação da requisição é o seguinte:
```
Requisição → PEP → consulta PDP → PDP busca atributos no PIP → avalia política no PAP → retorna decisão → PEP enforça
```
Isso é PBAC puro — política declarativa, separada da aplicação, avaliada pelo OPA (que é o PDP). A aplicação só chama o OPA e recebe permit ou deny.

#### vantagens da PBAC
- Auditabilidade
	- pode versionamento pelo git
		- rastreabilidade e outros benefícios que o git dá
- Desacoplamento
	- as regras de acesso ficam em um lugar só
	- mais organização
- Flexibilidade
	- não precisa fazer um redeploy, é só atualizar a politica 







