---
Date: 2026-09-10
tags:
  - concursoPublico/creci-2026/estudosDaMateria/programacao
  - template
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:
- é um estilo arquitetura sobre o padrão de requisição soap(que era o que era usado antes do rest)

(reescrever...)
SOA não está listado no edital do CRECI como tópico próprio. Aparece uma vez no `orientacoes_segundo_o_chat.md` como assunto cobrado na **Q39 de 2019** (conceito de visibilidade em SOA), e SOA consta no plano de estudos dentro do bloco "Web/API" — como item periférico, não central.

O edital cobre "integração entre sistemas via APIs", e SOA entra como contexto histórico/conceitual disso. Vale saber, mas não é prioridade alta.

---

### SOA — Arquitetura Orientada a Serviços

#### O que é

SOA (Service-Oriented Architecture) é um estilo arquitetural onde funcionalidades do sistema são expostas como **serviços independentes**, que se comunicam por protocolos padronizados (geralmente XML/SOAP, mas também HTTP/REST).

---

#### Conceitos que a AVANÇA cobrou (Q39 e Q42 de 2019)

**Serviço**: unidade funcional autônoma, com interface bem definida. Pode ser chamado por outros sistemas sem que o chamador conheça a implementação interna.

**Visibilidade**: para que um serviço seja usado, ele precisa ser _visível_ — ou seja, deve ser descoberto por quem o quer consumir. A Q42 cobrou exatamente isso: visibilidade em SOA significa que o serviço deve ser acessível e descobrível.

**Comunicação por mensagens padronizadas**: os serviços trocam mensagens em formato padrão (XML era o mais comum no contexto SOA clássico). Isso é o que permite que sistemas heterogêneos se integrem.

**Interoperabilidade**: sistemas diferentes, em linguagens diferentes, conseguem se comunicar por meio dos serviços.

**Fraco acoplamento (loose coupling)**: o consumidor do serviço depende apenas da interface, não da implementação. Mudanças internas no serviço não quebram quem o consome.

---

#### Diferença SOA × REST (contexto de concurso)

|Aspecto|SOA (clássico)|REST|
|---|---|---|
|Protocolo|SOAP sobre HTTP/outros|HTTP|
|Formato|XML|JSON (geralmente)|
|Contrato|WSDL formal|Informal (ou OpenAPI)|
|Acoplamento|Mais rígido|Mais flexível|
|Uso|Sistemas corporativos legados|APIs modernas|

---

#### O que vale saber para a prova

- Serviço = unidade independente com interface definida
- Visibilidade = capacidade de ser encontrado/acessado
- Comunicação por mensagens padronizadas (XML/SOAP no contexto SOA)
- Fraco acoplamento entre consumidor e provedor
- Interoperabilidade entre sistemas heterogêneos
- SOA é arquitetura; SOAP é protocolo; WSDL é o contrato/descrição do serviço

---

**Profundidade recomendada**: suficiente para identificar afirmações corretas/incorretas sobre os conceitos acima. Não vale gastar mais tempo do que isso, dado que SOA não está no edital explicitamente e apareceu em apenas 2 questões de uma prova de cargo diferente.





