---
Date: 2025-04-19T23:09:00
tags:
  - tecnologia/DDD
---
# Notas conectadas:
matéria de apoio:
[[DDD - Aula 3 - PÓS-GRADUAÇÃO ON.pdf]]
# Resumo da nota:
nessa nota entendemos o que é um contexto delimitado e até onde ele se estende e como delimita-lo, assim como dicas de como desenvolve-lo

# Tópicos:
- [[#resumo do que foi vista para entender 'contextos delimitados'|resumo do que foi vista para entender 'contextos delimitados']]
- [[#contexto delimitado e regras para defini-lo|contexto delimitado e regras para defini-lo]]

# Explicação dos tópicos:

## resumo do que foi vista para entender 'contextos delimitados'
![[Pasted image 20250419230957.png]]


![[Pasted image 20250420000630.png]]


![[Pasted image 20250420000701.png]]


![[Pasted image 20250420001016.png]]


## contexto delimitado e regras para defini-lo

### regras para definir um contexto delimitado:
- um contexto delimitado tem uma linguagem ubíqua certa
	- os termos dentro da linguagem ubíqua significam sempre a mesma coisa para todo mundo
	- se a linguagem ubíqua não está funcionando para todo mundo então tem alto errado com o esse bounded context
- necessidade de consistência transacional forte
	- por exemplo, precisa só se uma tabela para fazer o controle daquela entidade, exemplo transação e conta em um sistema bancário
		- o saldo, é uma propriedade de conta, mas gerenciada pela transação, assim essa propriedade super importante força que os dois bouded context sejam um só e não dois embora segundo o domínio do negócio sejam super importantes
- coesão de invariantes/regras de negócio
	- se dois conjuntos de ações compartilham muitas regras de negócio, por exemplo scrapping de noticias e busca de informações via SMTP através de newsletter, compartilhando 

![[Pasted image 20250420001706.png]]

 ![[Pasted image 20250420002000.png]]

![[Pasted image 20250420002050.png]]


 ![[Pasted image 20250420002609.png]]

![[Pasted image 20250420002620.png]]


