---
Date: 2025-04-12T19:23:00
tags:
  - tecnologia/DDD
repositório: https://github.com/Niltonguerra/fiap
---
# Notas conectadas:
matéria de apoio:
[[DDD - Aula 1 - PÓS-GRADUAÇÃO ON.pdf]]

# Resumo da nota:
nessa nota estudados o que é um domínio e o que é um subdomínio e os tipos do mesmo, além disso o por que deles serem importantes.

# Tópicos:
- [[#O que é domínio?|O que é domínio?]]
	- [[#O que é domínio?#Exemplo de domínios:|Exemplo de domínios:]]
- [[#o que é o subdomínio Principal?|o que é o subdomínio Principal?]]
- [[#o que é o subdomínio genérico?|o que é o subdomínio genérico?]]
- [[#subdomínio de suporte|subdomínio de suporte]]
- [[#um jeito de se pensar é que o subdomínio genérico é algo que uma empresa normalmente terceiriza e o de suporte o que ela não terceiriza|um jeito de se pensar é que o subdomínio genérico é algo que uma empresa normalmente terceiriza e o de suporte o que ela não terceiriza]]
- [[#como identificar um subdomínio:|como identificar um subdomínio:]]
- [[#por que é importante saber disso?|por que é importante saber disso?]]

# Explicação dos tópicos:
## O que é domínio?
Resposta: É o negócio em si, aquilo que a empresa faz, é o motivo da empresa existir
### Exemplo de domínios:
![[Pasted image 20250412212433.png|300]]
- domínio da Netflix:
	- Distribuição e consumo de conteúdo audiovisual sob demanda.

![[Pasted image 20250412212720.png|300]]
- Domínio da DHL:
	- logística de produtos

![[Pasted image 20250412212846.png|300]]
- Domínio da Azul:
	- transporte aéreo



![[Pasted image 20250412213005.png|300]]
- domínio dessa escola:
	- Educar as pessoas




## o que é o subdomínio Principal?
Resposta: É o negócio que o diferencia dos outros no mercado; possui lógica complexa
- é o que torna o negócio diferente
- o motivo de um cliente preferir uma coisa ao invés da outra


## o que é o subdomínio genérico?
Resposta: è o conjunto de processos que são comuns no mercado, por exemplo, o Portal da empresa, a Loja online, funções de autenticação e afins. Sua lógica é complexa.
- é o que todo mundo faz, mas ainda assim é importante, claro dentro de um contexto, como por exemplo:
	- contabilidade 
	- folha de pagamento
	- tecnologia
	- jurídico
	- RH
	- logística
	- #### (vale destacar que nenhum desses pontos é considerando uma empresa que atua exatamente naquele mercado, por exemplo, em uma empresa de contabilidade o setor de contabilidade não seria o subdomínio, mas sim o domínio do negócio)

- no contexto de TI
	- Autenticação/autorização (login, controle de acesso)
	- Sistema de envio de e-mails
	- Upload de arquivos
	- Gerador de relatórios genéricos
	- Bibliotecas de logs
	- Gateway de pagamento de terceiros (como Stripe, PayPal)
	- Sistema de notificações

## subdomínio de suporte
Resposta: Apoia o negócio da empresa, esse não dá nenhuma vantagem estratégica para o negócio e sim complementa o que o subdomínio principal faz
- marketing
- vendas
- produção
- #### (vale a mesma anotação de cima, depende do caso)

- no contexto de TI
	- Sistema de cobrança customizado (por exemplo: faturas mensais, descontos)
	- Gerenciamento de usuários e permissões com regras específicas
	- Ferramentas internas de CRM ou help desk
	- Painel administrativo
	- Gestão de contratos com regras específicas da empresa
	- Processos internos de RH ou compras

## um jeito de se pensar é que o subdomínio genérico é algo que uma empresa normalmente terceiriza e o de suporte o que ela não terceiriza


## como identificar um subdomínio:
![[Pasted image 20250412221013.png]]

## por que é importante saber disso?
Resposta: facilita saber onde você deve se focar primeiro