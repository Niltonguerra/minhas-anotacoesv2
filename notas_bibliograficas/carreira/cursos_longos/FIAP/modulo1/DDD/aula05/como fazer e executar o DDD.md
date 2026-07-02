---
Date: 2025-04-20T22:52:00
tags:
  - tecnologia/DDD
---
# Notas conectadas:
matéria de apoio:
[[DDD - Aula 5 - PÓS-GRADUAÇÃO ON.pdf]]

# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents



# Explicação dos tópicos:



![[Pasted image 20250420225255.png]]




![[Pasted image 20250420225457.png]]

![[Pasted image 20250420225522.png]]

![[Pasted image 20250420225639.png]]

![[Pasted image 20250420225657.png]]


![[Pasted image 20250420225822.png]]


![[Pasted image 20250420230115.png]]
- nessa camada é responsável pela comunicação com o seu cliente
- aqui fica a apresentação do sistema


![[Pasted image 20250420230231.png]]
- ela faz o controle entre a interface que o cliente vai ter acesso e a do domínio
- aqui fica o controller do mvc



![[Pasted image 20250420230430.png]]
- é onde tem as regras de negócio, é o **coração do software**
- aqui fica os casos de uso e os serviços


![[Pasted image 20250420230702.png]]

- essa é a camada de infraestrutura, ela facilita a comunicação entre as camadas superiores e os recursos externos, ela é essencial para permitir que recursos externos como banco de dados, serviço de email e etc possam se comunicar com outras camadas da aplicação




![[Pasted image 20250420231105.png]]

-  ponto importante para se comentar, no caso a camada do DDD de infraestrutura é responsável por comunicar-se com o mundo externo, como acesso ao banco de dados, envio de e-mails, logs, sistemas de arquivos, comunicação com APIs externas e etc, mas a camada de dados/ persistência é outra coisa, no caso essa é realmente o banco de dados, onde é armazenado os dados