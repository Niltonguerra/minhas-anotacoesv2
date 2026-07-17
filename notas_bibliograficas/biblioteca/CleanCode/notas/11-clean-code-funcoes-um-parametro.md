---
Date: 2026-05-26T10:06:00
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

## nomeando uma função
- crie nomes descritivos para as funções
	- tente criar padrões de nomenclatura das funções 
	- ex:
	- bom:
```
getUser()
createUser()
updateUser()
deleteUser()
```

- ruim:
```
fetchUser()
userCreate()
changeUserData()
remove()
```


## parâmetros em uma função
### é recomendado usar 1 ou 2, no máximo 3, acima disso deve ser evitado

- quanto menos melhor!
- um objeto passado é considerado como um parâmetro independente da quantidade de campos

#### Funções Mônades(1 parâmetro)
- quando normalmente é usado 1 parâmetros
	- validando uma informação(booleano)
	- transformando parado em outra coisa
	- função para realizar um evento
		- tipo mensageria
		- retorno void

- ##### parâmetros lógicos(booleanos)
	- são feios
	- mostra que a função faz duas coisas
		- uma quando é verdadeiro
		- uma quando é falso
	- evite usar ele
- quando normalmente é usado 2 parâmetros





