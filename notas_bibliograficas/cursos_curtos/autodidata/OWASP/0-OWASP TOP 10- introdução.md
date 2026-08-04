---
Date: 2026-08-03T18:53:00
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
### explicação do que é:
descrição: é quanto falta regras de controle de acesso a recursos no sistema. basicamente ele engloba os ataques que acontecem depois de usuário ter uma conta no sistema ou já estar logado no sistema 

aprofundamento: [[A01-2025 Broken Access Control]]

Lição: nunca confie, sempre valide as credenciais


## A02:2025 — Security Misconfiguration
explicação do que é:o próprio nome fala, erro de configuração, mais precisamente erro de configuração de infraestrutura(ex:kubernetes,containers, security groups abertos e etc)

aprofundamento:[[A02-2025 Security Misconfiguration]]

Lição:tenha mais cuidado ao fazer a configuração e tente sempre usar infraestrutura como código(terraform,kubernetes, ansible) para facilitar a auditação


## A03:2025 — Software Supply Chain Failures
explicação do que é: sempre manter seu ecossistema atualizado, ou seja, dependências, sistemas de build e infraestrutura de distribuição
Lição: sempre atualize suas dependências




## A04:2025 — Cryptographic Failures
explicação do que é: esse ponto fala para implementar com mais cuidado a criptografia de dados
aprofundamento:[[A04-2025 — Cryptographic Failures]]
Lição: cuidado ao configurar a criptografia


## A05:2025 — Injection
explicação do que é: é quando um dado não confiável é interpretado como comando ou código pelo seu sistema
aprofundamento:[[A05-2025 — Injection]]
Lição: faça uma tratativa nos seus campos para no frontend para evitar a injeção de dados maliciosos



## A06:2025 — Insecure Design
explicação do que é: é insegurança por arquitetura
aprofundamento:[[A06-2025 — Insecure Design]]
Lição: tenha cuidado na fase de planejamento 



## A07:2025 — Authentication Failures
explicação do que é: é basicamente problemas de segurança referentes a quando o usuário vai acessar o sistema
aprofundamento:[[A07-2025 — Authentication Failures]]
Lição: tenha cuidado ao implementar a lógica de login



## A08:2025 — Software or Data Integrity Failures
explicação do que é: é basicamente você confiar em código de terceiros... como posso dizer isso, lembra o ataque ao .xyz que poderia comprometer o ssh, então isso é um tipo de ataque Software or Data Integrity Failures e também engloba a questão da serialização dos dados, pois pode ser que se o atacante poder controlar o payload da requisição pode ser que ele consiga te atacar, isso acontece principalmente em linguagens como 
aprofundamento:[[A08-2025 — Software or Data Integrity Failures]]
Lição:

## A09:2025 — Security Logging and Alerting Failures
explicação do que é:
aprofundamento:[[A09-2025 — Security Logging and Alerting Failures]]
Lição:


## A10:2025 — Mishandling of Exceptional Conditions
explicação do que é:
aprofundamento:[[A10-2025 — Mishandling of Exceptional Conditions]]
Lição:













