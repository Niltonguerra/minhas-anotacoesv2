---
Date: 2025-05-03T18:02:00
tags:
  - tecnologia/DDD
---
# Notas conectadas:
matéria de apoio:
[[DDD - Aula 5 - PÓS-GRADUAÇÃO ON.pdf]]


# Resumo da nota:
Nessa aula vimos o que é uma entidade, sendo um objeto de valor mas com um id, assim como o que é um agregado que é uma entidade que meio que é objeto de ação de duas outras entidades e gerencia essas mesmas ações dentro de si, sendo a mesma uma entidade, assim como também vimos o que o que é um serviço de domínio, que é meio que uma regra de negócio que não fica na entidade, mas fica fora e gerencia as regras de negócio que pela logica não ficariam diretamente dentro da entidade. 
# Tópicos:
[[#Entidades|Entidades]]
- [[#Quando usar uma entidade e quando usar um objeto de valor|Quando usar uma entidade e quando usar um objeto de valor]]
	- [[#Quando usar uma entidade e quando usar um objeto de valor#✅ Use um Objeto de Valor quando:|✅ Use um Objeto de Valor quando:]]
	- [[#Quando usar uma entidade e quando usar um objeto de valor#✅ Use uma Entidade quando:|✅ Use uma Entidade quando:]]
	- [[#Quando usar uma entidade e quando usar um objeto de valor#🔁 Comparação rápida:|🔁 Comparação rápida:]]
	- [[#Quando usar uma entidade e quando usar um objeto de valor#🧠 Resumo Filosófico:|🧠 Resumo Filosófico:]]
		- [[#🧠 Resumo Filosófico:#Objetos de valor são definidos por seus atributos, enquanto entidades **são definidas por sua identidade**.|Objetos de valor são definidos por seus atributos, enquanto entidades **são definidas por sua identidade**.]]
- [[#Agregados|Agregados]]
- [[#Serviço de domínio|Serviço de domínio]]

# Explicação dos tópicos:
## Entidades
- quando se coloca um id em um registro ele virá uma entidade
![[Pasted image 20250503180322.png]]

![[Pasted image 20250503180348.png]]


## Quando usar uma entidade e quando usar um objeto de valor
### ✅ Use um Objeto de Valor quando:

- **A identidade não importa**: o que importa são os **atributos**.
- É **imutável**: se precisar mudar, você cria um novo.
- Pode ser comparado por **igualdade de valores**.
- É reutilizável em vários contextos do domínio.

📌 **Exemplos comuns**:
- `Endereço` (rua, cidade, estado, CEP)
- `CPF`, `CNPJ`
- `Dinheiro` (valor, moeda)
- `Email`, `Telefone`
---
### ✅ Use uma Entidade quando:
- Precisa de uma **identidade única** (geralmente um ID).
- A **identidade persiste ao longo do tempo**, mesmo que atributos mudem.
- É parte essencial do seu modelo de negócio.

📌 **Exemplos comuns**:
- `Usuário`
- `Pedido`
- `Produto`
- `Aluno`, `Funcionário`
---
### 🔁 Comparação rápida:

| Critério         | Objeto de Valor     | Entidade                   |
| ---------------- | ------------------- | -------------------------- |
| Identidade       | Não tem             | Tem (ex: ID)               |
| Comparação       | Por valor           | Por identidade             |
| Imutabilidade    | Sim                 | Geralmente mutável         |
| Persistência     | Geralmente embutido | Requer repositório próprio |
| Exemplo clássico | Dinheiro, Endereço  | Cliente, Pedido            |
### 🧠 Resumo Filosófico:
####  Objetos de valor são definidos por seus atributos, enquanto entidades **são definidas por sua identidade**.




## Agregados
- são coisas dentro de uma entidade que é a ação entre duas outras entidades  
![[Pasted image 20250503182645.png]]

![[Pasted image 20250503182223.png]]
![[Pasted image 20250503182208.png]]
![[Pasted image 20250503182447.png]]
![[Pasted image 20250503182453.png]]
![[Pasted image 20250503183356.png]]



## Serviço de domínio
![[Pasted image 20250503183920.png]]
- são regras de negócio que não ficam na entidade, e se comunicação com varias entidades e agregados, como por exemplo a regra de dedução de nota mediante atraso  

![[Pasted image 20250503185008.png]]
