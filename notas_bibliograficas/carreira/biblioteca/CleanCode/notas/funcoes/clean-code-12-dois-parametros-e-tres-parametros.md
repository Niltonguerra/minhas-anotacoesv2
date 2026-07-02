---
Date: 2026-05-30T11:00:00
tags:
  - Livros/CleanCode
Livro: CleanCode
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


- a pior coisa a se fazer é passar mais parâmetros, então evite isso sempre que possível


- se não tiver como, tudo bem usar dois parametros
	-  o altor usa o exemplo de uma função para se localizar em um plano cartesiano

- é melhor até instanciar uma função dentro de uma classe para não passar dois parâmetros
- ex:
- não recomendado:
```
		writeField(outputStream,name)
```
- recomendado:
```
	outputStream.writeField(name)
```

evite usar dois parâmetros é isso o que o autor fala
