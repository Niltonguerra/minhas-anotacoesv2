---
Date: 2026-07-17T18:53:00
tags:
  - tecnologia/segurança
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:

> [!porcentagem de sites com problemas disso na pesquisa]
> 3,73% das aplicações testadas afetadas · 40 CWEs

## explicação do que é:
é quanto falta regras de controle de acesso a recursos no sistema.

## tipo de manifestação:
- #### IDOR (Insecure Direct Object Reference)
	- é quanto um usuário pode acessar a página de outro usuário se apenas trocando o id da página simplesmente porque o desenvolvedor não chegou a implementar no backend uma validação para que só o dono daquelas informações pode-se ter acesso aquele recurso do sistema

- #### **BOLA / BFLA** (Broken Object/Function Level Authorization):
	- dar permissão para uma função/endpoint que na verdade não deveria ter acesso

- #### usuário comum virando administrador por falta de checagem

- #### CORS
	- mal configuração do cors permitindo assim acesso não confiável

- #### manipulação de token
	- falsificação de tokens JWT
	- claims forjadas
- ##### o que é um claims?
	- são um grupo de dados de chave valor contidos dentro do token(esse token pode ser um JWT)
	- o JWT tem 3 partes, saber:
		- header
		- payload
		- signature
	- o claims ficam no payload
	- ex:
```
{
  "sub": "12345",
  "name": "João Silva",
  "role": "user",
  "iat": 1721260800,
  "exp": 1721264400
}
```


#### SSRF (Server-Side Request Forgery)
- é tipo de ataque que engana o servidor para enviar uma requisição http para outro servidor
##### por que é perigoso?
- normalmente sistema tendem a confiar em recursos internos então não tem tantas medidas de segurança, dessa forma tem o perigo de haver um ataque 






