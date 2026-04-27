---
Date: 2025-05-03T16:15:00
tags:
  - tecnologia/DDD
---
# Notas conectadas:
matéria de apoio:
[[DDD - Aula 5 - PÓS-GRADUAÇÃO ON.pdf]]

# Resumo da nota:
nessa aula vimos o que é um objeto de valor, sendo ele um registro que não sobre alteração ,e se for preciso altera-lo, você simplesmente cria um novo, também vimos que é importante não gerar regras de negócio duplicadas por que isso pode gerar inconsistências no sistema no futuro do sistema
# Tópicos:
- [[#Objetos de valor|Objetos de valor]]

# Explicação dos tópicos:


![[Pasted image 20250422161904.png]]


![[Pasted image 20250422162030.png]]
- as regras de negócio não devem ter duplicação
- por exemplo:
	- duas ou mais regras de negócio para a geração do endereço, por exemplo, uma para cada entidade

## Objetos de valor
![[Pasted image 20250422163157.png]]
- objetos de valor não tem identificados, eles em si são os próprios identificadores
- exemplo:
	- endereço
- nunca se atualiza, mas sim, se cria um novo sempre

exemplo:
![[Pasted image 20250422163627.png]]



