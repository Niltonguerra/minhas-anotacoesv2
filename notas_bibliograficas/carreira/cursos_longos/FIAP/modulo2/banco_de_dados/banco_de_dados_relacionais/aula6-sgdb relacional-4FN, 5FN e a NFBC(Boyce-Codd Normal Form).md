---
Date: 2025-12-24T16:24:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBRelacional
repositório:
---
# Notas conectadas:


# Resumo da nota:
nessa aula vimos conceitos importantes de banco de dados para depois podermos entender mais fácilmente a FNBC e a 4FN e a 5FN, sendo a FNBC define que todo determinante deve ser uma chave candidata, a 4FN define que não deve ter repetição de dados entre as tabelas e a 5FN é mais voltada para quando se faz o JOIN INNER, sendo que ela pede para separar as tabelas desde que quando for fazer o join dos dados não venha a aparecer dados fantasmas. 
# Tópicos:

- [[#Conceitos prévios:|Conceitos prévios:]]
	- [[#Conceitos prévios:#o que é a chave candidata?|o que é a chave candidata?]]
	- [[#Conceitos prévios:#O que é um Determinante?|O que é um Determinante?]]
	- [[#Conceitos prévios:#O que é uma Super Chave?|O que é uma Super Chave?]]
	- [[#Conceitos prévios:#Super chave vs Chave candidata:|Super chave vs Chave candidata:]]
	- [[#Conceitos prévios:#determinante vs chave primária:|determinante vs chave primária:]]
- [[#BCNF  (Boyce-Codd Normal Form)|BCNF  (Boyce-Codd Normal Form)]]
	- [[#BCNF  (Boyce-Codd Normal Form)#considerando a seguinte situação:|considerando a seguinte situação:]]
	- [[#BCNF  (Boyce-Codd Normal Form)#não está na FNBC|não está na FNBC]]
		- [[#não está na FNBC#por que essa tabela está errada:|por que essa tabela está errada:]]
	- [[#BCNF  (Boyce-Codd Normal Form)#anomalias geradas:|anomalias geradas:]]
	- [[#BCNF  (Boyce-Codd Normal Form)#está na FNBC|está na FNBC]]
- [[#4FN- 4 forma normal|4FN- 4 forma normal]]
- [[#5FN - 5 forma normal:|5FN - 5 forma normal:]]
	- [[#5FN - 5 forma normal:#está na 5FN|está na 5FN]]
# Explicação dos tópicos:

## Conceitos prévios:

### o que é a chave candidata?
É uma chave que identifica o usuário mas não é usada para chave primária por exemplo:
- id_usuario
- cpf
- nome
- email

normalmente escolhe apenas uma e as outras viram chaves candidatas


### O que é um Determinante?

Em uma **Dependência Funcional**, representada matematicamente como $X \to Y$ (lê-se: "$X$ determina $Y$"), o **determinante** é o atributo (ou conjunto de atributos) que fica do lado esquerdo da seta ($X$).

- **Definição simples:** O determinante é o campo que "manda" na informação. Se eu souber o valor do determinante, eu consigo descobrir exatamente qual é o valor do atributo dependente.
- **Exemplo:** considerando as seguintes regras de negócio:
	- *Um Aluno pode ter vários Mentores (para assuntos diferentes).*
	- *Cada Mentor é especialista em apenas **um** Assunto.*
	- *Para um determinado Assunto, o Aluno tem apenas **um** Mentor.*  

se tivermos $Matricula \to Nome\_Aluno$, o campo `Matricula` é o **determinante**. Ele determina quem é o aluno.


### O que é uma Super Chave?
é uma chave candidata mas só que inchada, exemplos abaixo:
 - considerando a tabela:
	 - `ID_Aluno` (Matrícula)
	- `CPF`
	- `Nome`
	- `Email`

pode-se afirmar que:
1. `{ID_Aluno}` (Identifica o aluno sozinho).
2. `{CPF}` (Também identifica o aluno sozinho).
3. **`{ID_Aluno, Nome}`** (Identifica o aluno? Sim. O nome é necessário? Não, mas o conjunto ainda é uma superchave).
4. **`{ID_Aluno, CPF, Email}`** (Identifica o aluno? Sim. Tem muita informação sobrando? Sim, mas continua sendo uma superchave).
5. **`{ID_Aluno, CPF, Nome, Email}`** (A tabela inteira também é, tecnicamente, uma superchave).

### Super chave vs Chave candidata:
- **Superchave:** É qualquer conjunto que garanta a unicidade (pode ser "inchada").
- **Chave Candidata:** É uma **Superchave Mínima**. Ou seja, é um conjunto que identifica a linha e que, se você remover qualquer coluna dele, ele deixa de ser único.

### determinante vs chave primária:
- o determinante define um outro campo não a linha
- a chave primária define a linha


## BCNF  (Boyce-Codd Normal Form)
Todo **determinante** deve ser uma **chave candidata**. Se $A \rightarrow B$ (A determina B), então $A$ deve ser uma superchave.
 
### considerando a seguinte situação:
- Um Aluno pode ter vários Mentores (para assuntos diferentes).
- Cada Mentor é especialista em apenas **um** Assunto.
- Para um determinado Assunto, o Aluno tem apenas **um** Mentor.

### não está na FNBC
![[Pasted image 20260101064751.png|412]]
#### por que essa tabela está errada:
- **Chave Candidata 1:** `{Aluno_ID, Assunto}` identifica o Mentor.
- **Chave Candidata 2:** `{Aluno_ID, Mentor_ID}` identifica o Assunto (já que o mentor só tem um assunto).
- **O Problema:** Existe a dependência $Mentor\_ID \rightarrow Assunto$.
**A regra da FNBC diz:** Para toda dependência $X \rightarrow Y$, $X$ **deve** ser uma chave candidata.
### anomalias geradas:
- **Redundância:** Toda vez que o Bruno (M01) aparecer, temos que escrever "React".
- **Anomalia de Atualização:** Se o Bruno mudar de especialidade para "Next.js", temos que atualizar várias linhas.
- **Anomalia de Inserção:** Não conseguimos cadastrar que o "Mentor M04 é especialista em Java" até que ele tenha pelo menos um aluno.

### está na FNBC

![[Pasted image 20260101065128.png|455]]
![[Pasted image 20260101065140.png|500]]





## 4FN- 4 forma normal
Uma tabela não deve possuir mais de uma dependência multivalorada
é feito isso para evitar repetição dos valores, permite que seja otimizado o espaço evitando duplicidade de dados e evitando duplicidade e inscrições erradas e inconsistência dos dados
![[Pasted image 20260101054628.png|500]]


## 5FN - 5 forma normal:
condição: Não puder ser decomposta em tabelas menores que, quando juntadas (JOIN), resultem em dados "fantasmas" ou percam informações originais.
- essa FN é para ser usada quando se estiver fazendo JOIN's no SGBD
- basicamente a 5FN prevê que se você quebrar uma tabela em tabelas menores, que é uma boa prática de se fazer, as tabelas menores  não devem trazer dados fantasmas quando for feito a reconstrução da tabela original via inner join 
![[Pasted image 20260101055747.png|469]]


### está na 5FN

![[Pasted image 20260101055813.png|122]]
![[Pasted image 20260101055823.png|122]] 
![[Pasted image 20260101055849.png|122]]