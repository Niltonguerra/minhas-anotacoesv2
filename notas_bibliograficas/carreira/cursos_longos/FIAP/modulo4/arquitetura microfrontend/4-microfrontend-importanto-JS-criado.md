---
Date: 2026-06-12T17:46:00
tags:
  - fiap/modulo04/microFrontend
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
## como importar funções para dentro de um remote:
- fazer a criação e configuração no remote orquestrador
- depois configurar o remote com a função
- no remote que consome o remote com a função
	- no arquivo de webpack.config.js
		- importar o remote com a função

![[Pasted image 20260612174044.png]]

- ainda no remote que consome, mas no arquivo que vai usar a função, deve ser importado da seguinte forma:
- ![[Pasted image 20260612174525.png]]