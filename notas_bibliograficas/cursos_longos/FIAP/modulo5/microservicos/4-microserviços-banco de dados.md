---
Date: ""
tags:
  - fiap/modulo05/microserviços
---

# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:

 
- cada microserviço deve ter um banco de dados próprio!
	- essa me pegou de surpresa, eu pensava que não, mas segue a lógica que tirei a dúvida com o claude:

O princípio existe exatamente para evitar o acoplamento que você descreveu. No seu exemplo, o problema não é que dois serviços precisam de dados financeiros do usuário — o problema é **como** eles acessam esses dados.

Se dois serviços acessam o mesmo banco diretamente:

- Uma mudança de schema quebra os dois
- Você não consegue escalar ou versionar os serviços independentemente
- O banco vira um ponto único de falha e acoplamento

A solução correta na arquitetura de microsserviços seria um **terceiro serviço** — tipo `payment-profile-service` ou `wallet-service` — que é o dono daqueles dados financeiros e expõe uma API. Os outros dois serviços consultam esse serviço, não o banco diretamente.

```
assinatura-service ──▶ payment-profile-service ──▶ banco
camisas-service    ──▶ payment-profile-service
```

Então a afirmação do professor está correta como princípio. O que você identificou foi um caso real de necessidade compartilhada, mas a resposta arquitetural não é compartilhar o banco — é isolar a responsabilidade num serviço dedicado.




## gerenciamento de shemas
![[Pasted image 20260614132758.png|1100]]


## consistência distribuída
é aquele momento que você está tratando um caso de uso complexo que tem uma jornada que passa por mais de um microserviço.
### consistência eventual
- é o que dá para fazer para tentar manter os casos de uso que precisam de transações que sejam ACID em contexto de microserviços em casos de uso complexos como citado acima
	- essa seria a explicação formal informal, kkk
		- o certo seria falar que é você tentar criar outras medidas caso aquela operação/caso de uso falhe
			- ex:
				- compra de um produto que passa pelo microserviço de pagamento, depois estoque e depois logistica e etc...
					- cada passo deve prever contra medidas caso a etapa anterior falhe	
					- e se falhar, deve desfazer o que os outros microserviços fizeram de acordo com  as regras de negócio.		
![[Pasted image 20260614133111.png|733]]
![[Pasted image 20260614133259.png|796]]


### transações distribuídas
#### SAGA
- **Saga é um padrão que gerencia a consistência eventual em arquiteturas de microsserviços através de transações compensatórias definidas pela regra de negócio.**
![[Pasted image 20260614131142.png|975]]

##### vantagens
![[Pasted image 20260614140815.png|500]]


##### desvantagens
![[Pasted image 20260614140842.png|500]]





## two-phaase commit 
entendi, então o two-phase commit é uma abordagem que tem um microserviço/middleware orquestrador que gerencia os microserviços, ele faz isso me duas etapas, uma pergunta se todos podem fazer e depois executa o processo se todos responderem que sim, caso não tenha problemas executa a ação, caso tenha problemas, não executa a ação, basicamente é mais uma medida de segurança sobre, né?

### vantagens:
![[Pasted image 20260614141009.png|500]]


### desvantagens
![[Pasted image 20260614141140.png|500]]