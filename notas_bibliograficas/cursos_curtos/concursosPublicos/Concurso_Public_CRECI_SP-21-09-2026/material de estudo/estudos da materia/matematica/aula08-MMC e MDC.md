---
Date: 2026-09-06
tags:
  - concursoPublico/creci-2026/estudosDaMateria/Matematica
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:
## MDC — Máximo Divisor Comum

É o **maior número que divide todos os valores** ao mesmo tempo.

**Como calcular — fatoração:**

> MDC de 12 e 18

Fatorar os dois:

> 12 = 2 × 2 × 3  
> 18 = 2 × 3 × 3

Pega os fatores **comuns** com o **menor expoente:**

> 2 × 3 = **6**

MDC(12, 18) = 6




---

## MMC — Mínimo Múltiplo Comum

É o **menor número que é múltiplo de todos os valores** ao mesmo tempo.

**Como calcular — fatoração:**

> MMC de 12 e 18

Fatorar os dois:

> 12 = 2² × 3  
> 18 = 2 × 3²


Pega os fatores **comuns e não comuns** com o **maior expoente:**

> 2² × 3² = 4 × 9 = **36**

MMC(12, 18) = 36



### exemplo:
descubra o mmc dessa conta:
x = 2²*3³*13^4*5² 
y=42²*7²*11^3


Primeiro precisa refatorar o 42².

> 42 = 2 × 3 × 7  
> 42² = (2 × 3 × 7)² = 2² × 3² × 7²

Então y corretamente fatorado fica:

> y = 2² × 3² × 7² × 7² × 11³

Espera, vou refazer com calma:

> y = 42² × 7² × 11³  
> y = (2² × 3² × 7²) × 7² × 11³  
> y = 2² × 3² × 7⁴ × 11³

---

Agora sim, com x e y corretamente fatorados:

> x = 2² × 3³ × 5² × 13⁴  
> y = 2² × 3² × 7⁴ × 11³

**MMC — pega o maior expoente de cada primo:**

|Primo|Em x|Em y|Maior|
|---|---|---|---|
|2|2²|2²|**2²**|
|3|3³|3²|**3³**|
|5|5²|—|**5²**|
|7|—|7⁴|**7⁴**|
|11|—|11³|**11³**|
|13|13⁴|—|**13⁴**|

> MMC = 2² × 3³ × 5² × 7⁴ × 11³ × 13⁴


---

## Resumo da diferença

|               | mdc                        | mmc                        |
| ------------- | -------------------------- | -------------------------- |
| o que pega    | menor                      | maior                      |
| qual expoente | menor                      | maior                      |
| resultado     | menor ou igual aos valores | maior ou igual aos valores |

---

## Como a banca contextualiza

A banca raramente pergunta _"calcule o MMC de 12 e 18"_ diretamente. Ela coloca um problema e você precisa identificar se é MMC ou MDC.

**Quando usar MDC:**  
Situações de **divisão** — repartir em partes iguais, maior medida possível.

> _"Qual o maior quadrado que pode ladrilhar um piso de 12m por 18m sem cortar?"_  
> MDC(12, 18) = 6 → quadrado de 6m

**Quando usar MMC:**  
Situações de **encontro** — quando dois eventos voltam a coincidir.

> _"Um ônibus passa a cada 12 minutos e outro a cada 18 minutos. De quanto em quanto tempo os dois passam juntos?"_  
> MMC(12, 18) = 36 → a cada 36 minutos

---

## Pegadinha da banca

Ela descreve o problema de forma que parece MMC mas é MDC ou vice versa. A palavra chave é:

- **Maior, repartir, dividir** → MDC
- **Encontro, coincidir, junto** → MMC




