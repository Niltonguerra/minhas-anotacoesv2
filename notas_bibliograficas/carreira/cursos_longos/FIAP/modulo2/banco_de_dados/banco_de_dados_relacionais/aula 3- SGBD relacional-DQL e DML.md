---
Date: 2025-12-24T12:46:00
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




## comandos de pesquisa no banco de dados:
```
SELECT  * FROM cliente;
```



## comando para inserir um dado na tabela:
```
INSERT INTO cliente (id,nome, dt_nasc, cpf) values (1,'Lucas Ferreira', '1993-07-22', '12233344455');
```

inserindo vários dados de uma vez:
![[Pasted image 20251224131456.png|500]]


## comando para atualizar:
```
UPDATE cliente SET nome = 'João Pedro' where  id=2;
```


## comando para excluir:
```
DELETE FROM cliente WHERE id=1
```



## script para inserir os dados:
```
INSERT INTO cliente (nome, dt_nasc, cpf) VALUES 
('Ana Silva', '1995-05-15', '12345678901'),
('Bruno Oliveira', '1988-10-22', '23456789012'),
('Carla Souza', '2001-01-30', '34567890123'),
('Diego Santos', '1992-07-08', '45678901234'),
('Elena Martins', '1997-12-12', '56789012345');


INSERT INTO evento (nome, dt_evento, valor) VALUES 
('Festival de Verão', '2025-01-20', 250.00),
('Stand-up Comedy Noite Riso', '2025-02-10', 80.00),
('Workshop Node.js Avançado', '2025-03-05', 150.00);


INSERT INTO ingresso (id_cliente, id_evento, dt_compra, valor, meia) VALUES 
(1, 1, '2024-12-01', 125.00, TRUE), 
(2, 1, '2024-12-05', 250.00, FALSE),
(3, 2, '2024-12-10', 40.00, TRUE),   
(1, 3, '2024-12-15', 150.00, FALSE), 
(4, 2, '2024-12-20', 80.00, FALSE),  
(5, 3, '2024-12-24', 75.00, TRUE);   
```
