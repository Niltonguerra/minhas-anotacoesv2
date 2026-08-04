---
Date: ""
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

## o que é: 
- é quando você falha identificar corretamente o usuário ao ele fazer login


## exemplo de como ele se manifesta:
- credential stuffing/brute force sem controle
	- não colocar um limite de tentativas de login, isso permite que o atacante tente varias credenciais
- senhas fracas permitidas
	- ex: 123456,password
- recuperação de senha insegura
	- perguntar o nome do pet da pessoa ao invés de enviar um código para o email
- armazenamento incorreto de senhas
	- armazenar a senha sem criptografar ela(sem usar por exemplo MD5/SHA1 sem bcrypt/argon2)
- Ausência ou implementação fraca de MFA
	- MFA(Autenticação Multifator) inexistente em fluxos críticos, ou implementado de forma bypassável (ex: OTP não validado no servidor).
- Gerenciamento de sessão fraco
	- session id exposto na url
	- session id não rotacionado após login(session fixation)
	- session não invalidada no logout
	- Tokens JWT sem expiração ou com algoritmo `none`


### Exemplo concreto de JWT mal implementado

Você já estudou JWT/HMAC-SHA256, então isso vai ser direto:

```
Header: { "alg": "none" }
```

Algumas bibliotecas antigas aceitavam `alg: none`, ignorando a assinatura. O atacante simplesmente forja o payload e remove a assinatura. Falha de implementação, mas originada em design de biblioteca.
Outro caso comum: JWT sem validação de `exp` no servidor — o token expira no papel, mas o backend não checa.


## o que o OWASP recomenda:
- MFA onde possível
- não implantar credenciais default
- colocar filtros para evitar senhas fracas
- token com expiração curta
- rate limiting + lockout
	- tentativa máximas de login
- invalidar sessões 
	- no logout fazer o cancelamento do token gerado no lado do cliente e no lado do servidor
- rotacionar session ID
	- após login com sucesso sempre rotacionar o token gerado, que ele nunca seja igual ao da última sessão








