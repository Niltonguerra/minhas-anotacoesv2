---
Date: 2025-06-15T18:55:00
tags:
  - fiap/modulo02/docker
---
# Notas conectadas:


# Resumo da nota:
nessa aula vimos que sempre que é preciso usar --fronzen-lockfile quando se usa pnpm com docker e também aprendemos o que são as etapas do docker e sobre o ciclo de inicialização de quando se da o comando docker compose up

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents



# Explicação dos tópicos:

sempre escreva Dockerfile com o 'D' maiúsculo

no Dockerfile, sempre execute quando for instalar as dependências usando o pnpm
- sem instale assim: ``RUN pnpm install --frozen-lockfile``
	- isso permite que a instalação das dependências seja feita como sem atualizações inesperadas de dependências


o ``CMD[]`` é executado depois que o container já subiu, diferente dos outros comando do Dockerfile


- cada instrução dada no Dockerfile é uma etapa para subir o container, sabe aquele numero que aparece quando você está subindo um container, tipo [1/4], então me refiro a essas etapas
![[Pasted image 20250615192151.png]]

