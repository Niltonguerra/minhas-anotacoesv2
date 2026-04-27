---
Date: 2026-03-18T11:44:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados
  - fiap/modulo02/conexaoComBancoDeDados/bancoDeDadosDocumental
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

comando para acessar o banco de dados:
```
docker exec -it mongodb_dev mongosh -u admin -p password123
```
## benefícios do bando de dados no sql
- é o melhor quando você tem um schema que pode alterar através do tempo e precisa de uma grande flexibilidade, como projetos grandes e high technology
- não é bom quando precisa colocar regras no banco de dados, como: restrições de campos e join's
- facilidade de escalabilidade horizontal
- melhor performance
- alta disponibilidade
	- permite configuração fácil para redundância
- suporte a transações
- integração com várias linguagens
- comunidade ativa
- tem suporte a transações

## custos do mongoDB
- community server
	- versão gratuita
	- mais usada no geral
- Enterprise server
	- menos usada
	- você tem alguns benefícios

## benefícios do banco de dados sql
é o melhor quando o schema não varia tanto ao longo do tempo e é para um projeto menor ou que precisão de muita garantia e segurança nos processos...