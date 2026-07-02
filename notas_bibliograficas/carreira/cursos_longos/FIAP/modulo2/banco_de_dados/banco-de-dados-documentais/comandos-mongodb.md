---
Date: 2026-03-28T09:35:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados/bancoDeDadosDocumental
---
# Notas conectadas:


# Resumo da nota:
essa aula fala sobre comando no mongo, só comecei a ver a aula mas não terminei por que não vale a pena, por conta que eu não vou ficar executando toda hora comandos do mongo, se eu quiser saber desses comandos eu simplesmente vou e dou uma olhada na documentação, é um desperdício de tempo ficar vendo comandos de mongo na época da AI...
# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:

mostrar databases:

```
show databases
```


criar e usar database:
```
use <nome_da_base_de_dados>
```

comparação:
coleções (no mongo) === tabelas(no sql)
documento(no mongo) === registro(no sql)

criar coleção:
```
db.createCollection("<nome_da_coleção>")
```


criar documento:
```
	db.<nome da coleção >.insertOne(<documento(ex:{
  "customer": "John Doe",
  "due_date": "2023-05-15",
  "payment_date": "2023-05-14",
  "amount_paid": 250.75,
  "status": "Paid",
  "invoice_number": "INV-123456",
  "description": "Monthly subscription",
  "issuer": "Banco A",
  "items": [
    {
      "product": "Subscription",
      "quantity": 1,
      "unit_price": 250.75
    }
  ]
})>)
```



