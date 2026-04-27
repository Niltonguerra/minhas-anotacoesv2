---
Date: 2025-12-24T13:25:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/DBRelacional
repositório:
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

## pesquisa com limite:

```
SELECT * FROM ingresso LIMIT 5;
```

## pesquisa onde os dados são diferentes:
![[Pasted image 20251224134037.png]]

```
SELECT DISTINCT nome FROM cliente
```



##  filtrar os dados:
![[Pasted image 20251224134224.png|500]]

### operadores do WHERE
![[Pasted image 20251224134237.png|500]]
![[Pasted image 20251224134556.png|500]]

### exemplos:

selecione todos os valores que na coluna valor na tabela ingresso onde são maiores que 100
```
SELECT * FROM ingresso WHERE valor > 100
```


todos os eventos com o id 17
```
SELECT * FROM ingresso WHERE id_evento=17 
```

todos os ingressos por menos de 100 
```
SELEC * FROM ingresso WHERE valor < 100;
```

todos os ingressos comprados exceto pelo cliente com id 1
```
SELEC * FROM ingresso WHERE id_cliente != 1;
```


todos os ingressos comprados pelo cliente um e 2
```
SELEC * FROM ingresso WHERE id_cliente IN (1,2)
```

todos os ingressos com preço entre 150 e 400 reais
```
SELEC * FROM ingresso WHERE valor BETWEEN 150 and 400;
```

todos os clientes que tem nome que começa com 'J'
```
SELEC * FROM cliente WHERE nome LIKE 'J%'
```

todos o que tem i no  nome
```
SELEC * FROM ingresso WHERE nome like '%i%';
```

todos os que tem o nome que termina com a  letra 'a'

```
SELEC * FROM ingresso WHERE nome lije '%a';
```

quanto o nome não é um valor null
```
SELEC * FROM ingresso WHERE nome NOT NULL;
```


todos os ingressos que **não** tem o valor entre 150 e 400
```
SELEC * FROM ingresso WHERE valor NOT BETWEEN 150 and 400
```




## ordenação dos resultados:
![[Pasted image 20251224143425.png|500]]
###  ex:

ordenado pelo nome de forma crescente
```
SELEC * FROM ingresso ORDER BY nome;
```


ordenando pelo nome de forma decrescente
```
SELEC * FROM ingresso ORDER BY nome DESC;
```



ordenado pelo nome de forma crescente e busca apenas o primeiro
```
SELEC * FROM ingresso ORDER BY nome limit 1;
```


traga todos os preços dos ingressos existentes sem repetir os valores
```
SELECT valor FROM ingresso GROUP BY valor
```


traga todos os preços dos ingressos existentes sem repetir os valores que sejam maiores que 100
```
SELECT valor FROM ingresso GROUP BY valor HAVING valor > 100;
```



## funções de agrupamento:
![[Pasted image 20251224144213.png]]

### ex:
```
SELEC AVG(valor) from ingresso;
```

```
SELEC SUM(valor) from ingresso WHERE id_evento=17;
```

etc...



## Junções:
### INNER JOIN:
 ![[Pasted image 20251224144928.png|500]]



### LEFT JOIN & RIGHT JOIN
![[Pasted image 20251224144958.png]] 



### CROSS JOIN
![[Pasted image 20251224145024.png]]

#### exemplo de CROSS JOIN:
trata a junção da tabela ingresso com a tabela cliente  onde o id_cliente na tabela ingresso for igual ao ao campo id na tabela cliente e também me trata a junção da tabela ingresso com a tabela evento onde  o id_evento na tabela ingresso for igual ao id na tabela evento
```
SELECT * 
	FROM ingresso i
	INNER JOIN cliente c ON i.id_cliente = c.id
	INNER JOIN evento e ON i.id_evento = e.id;
```
- resumidamente esse comando traz a junção das tabelas cliente, evento e ingresso, tendo como base a tabela ingresso



a mesma coisa do comando a cima, mas deixei para me referir aqui em baixo por conta que a aqui ele faz a exibição de apenas alguns campos selecionados, sendo eles: id do ingresso, nome do evento, nome do cliente, data do evento, valor do ingresso e se o ingresso é meia ou completa
```
SELECT i.id, e.nome,c.nome, e.dt_evento,i.valor,i.meia
	FROM ingresso i
	INNER JOIN cliente c ON i.id_cliente = c.id
	INNER JOIN evento e ON i.id_evento = e.id;
```


a mesma coisa do comando a cima, mas deixei para me referir aqui em baixo por conta que a aqui  ele faz também um WHERE para valores de ingresso maiores que 100 e pede também para ordenar os resultados em ordem decrescente apartir do campo dt_evento da tabela evento.
```
SELECT i.id, e.nome,c.nome, e.dt_evento,i.valor,i.meia
	FROM ingresso i
	INNER JOIN cliente c ON i.id_cliente = c.id
	INNER JOIN evento e ON i.id_evento = e.id
	WHERE i.valor> 100
	ORDER BY e.dt_evento DESC;
```

