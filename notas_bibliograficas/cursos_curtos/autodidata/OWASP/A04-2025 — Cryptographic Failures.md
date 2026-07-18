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

## explicação do que é: 
esse ponto fala para implementar com mais cuidado a criptografia de dados



## tipo de manifestação:
- TLS mal configurado ou ausente em trânsito.
- Hash de senha fraco (MD5, SHA1 sem salt) em vez de bcrypt/Argon2.
- Chaves de assinatura hardcoded no código.
- JWT com `alg: none` aceito, ou assinado com chave fraca/previsível.




