---
Date: ""
tags:
  - tecnologia
  - tecnologia/segurança
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents



# Explicação dos tópicos:

## o que é?
- é uma lista com as maiores vulnerabilidades de segurança para uma aplicação web


## A01:2025 — Broken Access Control
- 3,73% das aplicações testadas afetadas · 40 CWEs
### explicação do que é:
é quanto falta regras de controle de acesso a recursos no sistema.

### tipo de manifestação:
- IDOR (Insecure Direct Object Reference)
	- é quanto um usuário pode acessar a página de outro usuário se apenas trocando o id da página simplesmente porque o desenvolvedor não chegou a implementar no backend uma validação para que só o dono daquelas informações pode-se ter acesso aquele recurso do sistema

- **BOLA / BFLA** (Broken Object/Function Level Authorization):
	- dar permissão para uma função/endpoint que na verdade não deveria ter acesso

- usuário comum virando administrador por falta de checagem

- CORS
	- mal configuramento do cors permitindo assim acesso não confiável

- manipulação de token
	- falsificação de tokens JWT
	- claims forjadas



## A02:2025 — Security Misconfiguration
### explicação do que é:


### tipo de manifestação:



## A03:2025 — Software Supply Chain Failures
### explicação do que é:


### tipo de manifestação:


## A04:2025 — Cryptographic Failures
### explicação do que é:


### tipo de manifestação:

## A05:2025 — Injection
### explicação do que é:


### tipo de manifestação:


## A06:2025 — Insecure Design
### explicação do que é:


### tipo de manifestação:

## A07:2025 — Authentication Failures
### explicação do que é:


### tipo de manifestação:

## A08:2025 — Software or Data Integrity Failures
### explicação do que é:


### tipo de manifestação:


## A09:2025 — Security Logging and Alerting Failures
### explicação do que é:


### tipo de manifestação:


## A10:2025 — Mishandling of Exceptional Conditions

### explicação do que é:


### tipo de manifestação:














