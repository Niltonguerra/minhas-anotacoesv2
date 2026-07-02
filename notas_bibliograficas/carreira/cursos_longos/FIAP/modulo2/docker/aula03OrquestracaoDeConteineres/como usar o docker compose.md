---
Date: 2025-06-16T05:48:00
tags:
  - fiap/modulo02/docker
---
# Notas conectadas:


# Resumo da nota:
nessa aula vimos como usar o docker compose e seus principais comandos

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents



# Explicação dos tópicos:

exemplo de docker compose
```
version: '3.9'
volumes:
  mysql_data: {}
services:
    mysql:
      image: mysql:8.0
      volumes:
      - mysql_data:/var/lib/mysql
      restart: always
      environment:
        MYSQL_ROOT_PASSWORD: root
        MYSQL_DATABASE: wordpress
        MYSQL_USER: wordpress
        MYSQL_PASSWORD: wordpress
        
    wordpress:
      depends_on:
        - mysql
      image: wordpress:latest
      ports:
        - "80:80"
      restart: always
      environment:
        WORDPRESS_DB_HOST: mysql:3306
        WORDPRESS_DB_USER: wordpress
        WORDPRESS_DB_PASSWORD: wordpress
        WORDPRESS_DB_NAME: wordpress

      volumes:
        - ./wordpress:/var/www/html
```

- o restart é usado para reiniciar o container caso aconteça algum erro na inicialização do mesmo
- nas portas:
	- o primeiro numero é a porta de rede
	- o segundo numero é a porta do containers

