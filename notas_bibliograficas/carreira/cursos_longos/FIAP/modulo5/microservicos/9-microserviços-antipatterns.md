---
Date: 2026-06-16T17:47:00
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

## Antipatterns
- são praticas ruins para o desenvolvimento, nesse contexto mais precisamente, praticas ruins para o desenvolvimento de sistema com microserviços





## FAT Services
- microserviços muito grandes
![[Pasted image 20260616175101.png]]


## CHATTY APIS
- microserviços muito pequenos
![[Pasted image 20260616175213.png]]



##### banco de dados compartilhados entre duas máquinas no microserviços é um erro! só existe um banco de dados para cada máquina, mas isso não quer dizer que uma replica do banco de dados precise estar relacionada a aquele microserviço, entra na questão de definir um microserviço só para escrita e outro para só leitura.