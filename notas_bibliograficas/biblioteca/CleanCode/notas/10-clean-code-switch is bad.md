---
Date: 2026-05-26T08:45:00
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


- não dá para dividir em mais em seções as funções que estão fazendo só uma coisa.


## switch
- o autor não gosta de switch,kkkkkk
- deve-se evitar switch por conta de:
	- violar o SRP(principio de responsabilidade única)
	- violar o OCP(principio de aberto fechado)
- o autor propõe o uso da seguinte forma:
	- quando for um código de baixo nível(quanto estiver de baixo de varias abstrações)
	- esconder o switch dentro de uma abstract factory
exemplo errado:
![[Pasted image 20260521074448.png]]

exemplo certo:
![[Pasted image 20260521074511.png]]