---
Date: 2025-04-20T15:50:00
tags:
  - tecnologia/DDD
---
# Notas conectadas:
matéria de apoio:
[[DDD - Aula 4 - PÓS-GRADUAÇÃO ON.pdf]]

# Resumo da nota:
nessa aula vimos 3 formas que times podem se comunicar, sendo elas: parceria, kernel compartilhado e cliente fornecedor, além disso também vimos que é importante ter ACL(camada anti-corrupção)  entre os times, principalmente entre as relações cliente fornecedor, para permitir maior estabilidade do sistema a longo prazo.

# Tópicos:
- [[#cooperação entre times|cooperação entre times]]
	- [[#cooperação entre times#modelo de parceria|modelo de parceria]]
	- [[#cooperação entre times#modelo kernel compartilhado|modelo kernel compartilhado]]
	- [[#cooperação entre times#modelo cliente - fornecedor|modelo cliente - fornecedor]]
- [[#cooperação entre times#por que existe e é importante as ACL's?|por que existe e é importante as ACL's?]]

# Explicação dos tópicos:

## cooperação entre times
![[Pasted image 20250420155114.png]]



### modelo de parceria
![[Pasted image 20250420155201.png]]

- os dois times conversão entre si


### modelo kernel compartilhado
![[Pasted image 20250420155417.png]]
- exceção da regra, dois times trabalhando no mesmo contexto delimitado(evite isso, mas não é pecado fazer isso)


### modelo cliente - fornecedor
![[Pasted image 20250420162850.png]]
- os times se dividem como cliente e fornecedor, um provê o serviço e o outro consome o serviço


## por que existe e é importante as ACL's?
![[Pasted image 20250420163153.png]]

![[Pasted image 20250420163351.png]]

![[Pasted image 20250420163625.png]]

- se conforme com o que recebe e altere para se estabelecer conforme as necessidades do cliente


![[Pasted image 20250420164505.png]]

- essa camada é responsável por evitar que o sistema quebre caso o fornecedor do serviço altere o contrato sem ser realizado uma alteração no cliente
- seria tipo uma interface de meio de campo, que pega os dados do fornecedor e passa para o cliente, com o objetivo de que você não precise ter que mexer no core do seu projeto se o contrato fosse violado
- poderia por exemplo ser uma api que pega os dados do fornecedor e depois passa para o cliente


