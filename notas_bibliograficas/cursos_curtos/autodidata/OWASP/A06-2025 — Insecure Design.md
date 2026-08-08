---
Date: 2026-08-04T00:00:00
tags:
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

## o que é:
- é quando você tem um planejamento ruim e passa isso para a fase de desenvolvimento



## exemplos de como se manifesta:
- ausência de threat modeling
	- a modelagem de segurança deve ser desenvolvida desde a etapa de mapeamento do domínio, ou seja, desde o DDD

- lógica de negócio sem controles adequados
	- uma loja que não implementa um controle de quantos cupons de desconto podem ser aplicados na mesma sessão

- ausência de controles no fluxo crítico
	- um fluxo de pagamento que não valida o estado da transação no servidor antes de finalizar a compra

- multi-tenancy mal modelado
	- permitir que um tenant tenha acesso a dados de outro tenant por design, é um erro de modelagem


## como resolver esse tipo de problema?
- threat modeling em toda feature de segurança crítica
- secure design patterns
	- usar padrões conhecidos para autenticação, sessão, controle de acesso
- testes de abuso de lógica de negócio
	- não só testes de unidade, mas modelar o que um atacante tentaria fazer com o fluxo
- limitar recursos por design
	- rate limiting, quotas, anti-automation desde o início
- segregação entre tenants desde a modelagem
 










