---
Date: 2025-06-16T07:25:00
tags:
  - fiap/modulo02/docker
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

- essa forma não é a mais recomendada para declarar variáveis❌
```
From node:20-slim

ENV NODE_ENV=production

ENV URL_BD=rds-fiap.saarea.us-east-1.com

WORKDIR /app

COPY package.json .

RUN npm install

RUN apt-get update && apt-get install -y nano

COPY . . 

expose 3000 

CMD ["node", "app.js"]
```

- a forma mais aconselhada é essa: ✅
```
From node:20-slim

ARG NODE_ENV_ARG

ENV NODE_ENV= $NODE_ENV_ARG


WORKDIR /app

COPY package.json .

RUN npm install

RUN apt-get update && apt-get install -y nano

COPY . . 

expose 3000 

CMD ["node", "app.js"]
```
- e para passar o valor do arg, basta passar assim:
	- exemplo: `docker build -t node-app:arg --build-arg NODE_ENV_ARG=production .`
	  
	- para visualizar o valor da variável pode-se usar fazer o seguinte:
	- rode o container
	- dentro do container exporte a variavel:
		- ex: `EXPORT NODE_ENV`
	- Imprima no console a variavel:
		- `printenv NODE_ENV`



- rodar local é uma boa prática
