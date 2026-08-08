---
Date: 2026-08-03T11:43:00
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
é quando um atacante tenta executar um código dentro do seu servidor, isso pode acontecer através de injeção de dependências como no caso do .xyz no SSH ou via dado serializado que pode surgir por cookies, cache no lado do servidor, ou dado não tratado como por exemplo por DTO assim que chega no servidor.  



## exemplo de como ele se manifesta:

- O código que você deploya ou as dependências que você instala foram adulterados?
	- **Supply chain attack** — atacante compromete um pacote npm/pip/maven upstream. Seu `package.json` aponta para `lodash@4.x`, mas o pacote no registry foi substituído por uma versão maliciosa.
	- **CI/CD sem verificação** — pipeline baixa dependências sem checar hash/checksum, ou tem permissões excessivas que permitem injetar código no build.
	- **Updates automáticas sem assinatura** — sistema aplica atualização sem verificar que veio do fornecedor legítimo.
	  
	- Caso real conhecido: **event-stream (npm, 2018)** — pacote com milhões de downloads recebeu um maintainer malicioso que injetou código para roubar carteiras de Bitcoin.


- O sistema descerializa dados que vieram de fonte não confiável sem validar.
	- Se o atacante controla o payload serializado, pode forçar execução de código arbitrário durante a deserialização — dependendo da linguagem e das classes disponíveis no classpath (**gadget chains**).
	- isso Também vale para **cookies serializados sem assinatura**, tokens manipuláveis, ou qualquer dado que o sistema trata como confiável por ter vindo do próprio sistema anteriormente.





## o que o OWASP recomenda:

- **Verificar assinatura digital** de pacotes e atualizações
- **Fixar versões e checar hashes** das dependências (`package-lock.json`, `pip freeze` com hashes)
- **Pipeline com permissões mínimas** — CI/CD não deve ter acesso irrestrito a produção
- **Não deserializar dados não confiáveis** em formatos como Java serialization nativa, Python pickle
- **Preferir formatos sem execução implícita** — JSON com validação de schema é mais seguro que serialização nativa
- **Monitorar dependências** com ferramentas como Dependabot, Snyk, OWASP Dependency-Check



