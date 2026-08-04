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
## o que é?
é falta de observabilidade, sem observabilidade você pode receber um ataque e nem saber disso e só descobrir bem depois






## exemplo de como ele se manifesta:
- **Ausência de log em eventos críticos**
	- Tentativas de login falhas não registradas
	- Login bem-sucedido após múltiplas falhas não registrado
	- Transações de alto valor sem audit trail
	- Alterações em permissões ou dados sensíveis sem registro

- **Log existente mas inútil**
	- Sem timestamp padronizado
	- Sem contexto suficiente (qual usuário, qual IP, qual recurso)
	- Log só em arquivo local — se o servidor for comprometido, o atacante apaga
	- Dados sensíveis dentro do log (senha, token, PII)

- **Ausência de alertas**
	- Ninguém é notificado quando padrões anômalos ocorrem
	- Alertas existem mas não são monitorados ativamente

- **Logs não testados**
	- A aplicação gera log em desenvolvimento mas a config de produção está errada e não gera nada







## o que o OWASP recomenda: