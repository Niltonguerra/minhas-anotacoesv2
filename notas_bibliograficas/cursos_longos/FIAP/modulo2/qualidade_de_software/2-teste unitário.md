---
Date: 2026-04-09T18:15:00
tags:
  - fiap/modulo02/qualidadeDeSoftware/testes
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
## padrão dos 3 A's para testes unitários:
### 1.Arrange:
- preparar o ambiente para os testes:
- uma explicação mais completa seria:
	- nesta fase inicial, configuramos o ambiente de teste. Isso inclui a criação dee objetos necessários configurações de mocks (simulações), definição de inputs (entradas) e preparação contexto em que o teste será executado. O objetivo é criar um cenário controlado onde todos os pré- requisitos para executar o teste estão prontamente disponíveis, garantindo um ponto de partida claro e definido. 

### 2. Ação
- aqui você realizada o teste simulados usando os recursos gerados no passo 1

- Após a preparação está etapa envolve  a execução da ação ou função que está sob teste, usando os inputs e o contexto definido anteriormente. O foco é no processo de interação com o código para gerar um resultado, permitindo-nos observar o comportamento do código em condições específicas.

### 3.Assert
- valida o resultado do teste do passo 2 com o que esperávamos receber do sistema:

- explicação mais completa:
- Por fim,  avaliamos os resultados do passo 2, comparando o que foi obtido com o que era esperado. Utilizamos assertivas para verificar esses resultados, estas declarações que falham caso o resultado não corresponda ao esperado. Esta face é crucial para confirmar se o código testado atua conforme as expectativas, validando seu comportamento e garantindo que as funcionalidades atendam às especificações desejadas.


exemplo na prática com o Jest:
![[Pasted image 20260329183040.png]]


