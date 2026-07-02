---
Date: 2026-04-09T08:21:00
tags:
  - Livros/CleanCode
Livro: CleanCode
---
# Notas conectadas:


# Resumo da nota:
nessa nota vimos algumas dicas de como nomear as coisas na programação, sendo elas, não crie nomes ambíguos ou sem significado determinado, além disso também vimos que os nomes devem ser pronunciáveis, além de não precisarem de prefixos ou sufixos e também que devem ter um significado.
# Tópicos:

- [[#nomeação de variáveis|nomeação de variáveis]]
	- [[#nomeação de variáveis#não deve ser ambíguo|não deve ser ambíguo]]
	- [[#nomeação de variáveis#deve ser pronunciável|deve ser pronunciável]]
	- [[#nomeação de variáveis#deve ter significado|deve ter significado]]
	- [[#nomeação de variáveis#não precisa ter prefixo e sufixo|não precisa ter prefixo e sufixo]]

# Explicação dos tópicos:
## nomeação de variáveis
### não deve ser ambíguo
- não use palavras vagas como info e data
ex:
ProductData/ProductInfo


exemplo de função ambígua:
❌
```
getActicveAccount(); 
getActiveAccounts();
getActiveAccountInfo();
```
- difícil de entender o uso das funções
- nomes parecidos


✅
```
getActiveAccount(); 
getAllActiveAccounts();
getActiveAccountMetadata();
```
- mas claro para que cada função serve



### deve ser pronunciável
- crie variáveis que sejam nomeáveis
❌
![[Pasted image 20260409085149.png]]

✅
![[Pasted image 20260409085158.png]]


### deve ter significado
- para regra geral não use variáveis não declarativas(que não declaram nada)
	- variáveis de uma letra
		- ex: j,i, e etc



### não precisa ter prefixo e sufixo
- hoje em dia, não é mais necessário colocar prefixos e sufixo nas variáveis:
✅
![[Pasted image 20260409090445.png]]

❌
![[Pasted image 20260409090456.png]]
