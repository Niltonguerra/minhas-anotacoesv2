---
Date: 2026-06-15T17:44:00
tags:
  - fiap/modulo05/microserviços
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

## Circuit breaker
### Retry com **Exponential** Backoff
- é quando você usa uma escala exponencial para cada tentativa de comunicação com um serviço
	- ex:
	- você tem que fazer uma chamada para uma api externa, cada requisição do cliente do microserviço  precisa bater naquele endpoint externo, para isso você faz no seu código com que armazene as solicitações que precisão ser feitas, caso a regra de negócio exija, e tenta fazer a solicitação de tempos em tempos, normalmente se faz assim: 
		- tenta, deu erro, espera 1 segundo
		- tenta de novo, deu erro, espera 2 segundo
		- tenta de novo, deu erro, espera 4 segundo
		- tenta de novo, deu erro, espera 8 segundo
		- tenta de novo, deu erro, espera 16 segundo
		- tenta de novo, deu erro, espera 32 segundo
		- tenta de novo, deu certo, para e executa todas as requisições
		- e etc até quando a regra de negócio decidir o tempo limite, mas sempre nessa escala exponencial
### onde entra o circuit breaker?
- é quando você depois de uma determinada quantidade de tentativas para de tentar, literalmente, e entra em um estado de aberto
- segue os estados:
	  - **Fechado (normal):** as chamadas passam normalmente
	- **Aberto (disparado):** depois de N falhas consecutivas, o circuito _abre_ e para de tentar chamar o serviço externo por um período. Retorna erro imediatamente, sem nem tentar
	- **Meio-aberto (testando):** depois do timeout, deixa passar uma chamada de teste. Se funcionou, fecha o circuito. Se falhou, abre de novo
é basicamente isso, para o sistema quando vê que ele está fora de ar, e ficar tentando em espaços de tempo regulares para ver se ele voltou
- normalmente é definido em nivel de planejamento e aplicado em nível de microserviços
![[Pasted image 20260615184855.png]]

### benefícios
![[Pasted image 20260615191922.png]]





## SAGA
- já foi falado então não irei me aprofundar aqui: [[4-microserviços-banco de dados]]
![[Pasted image 20260615192044.png]]

### benefícios
![[Pasted image 20260615192115.png]]




## fallback e retry
- cada, isso é tão comum que me recuso a aprofundar essa ideia
### fallback -> resposta padrão caso erro,
- ex: página 404, 
		- no microserviços não tem página 404, mas deu para entender, né?
### Retry
- entra na questão do **Exponential** Backoff que citei acima


### benefícios
![[Pasted image 20260615192459.png]]



