---
Date: 2025-06-21T21:02:00
tags:
  - fiap/modulo02/conexaoComBancoDeDados
repositório: https://github.com/Niltonguerra/fiap/tree/main/modulo_2/comunicacao_banco_de_dados
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

comando para baixar  libs para usar o eslint: 
```
npm i -D @typescript-eslint/eslint-plugin@6.21.0 @typescript-eslint/parser@6.21.0 eslint@8.57.0 eslint-config-prettier@9.1.0 eslint-config-standard@17.1.0 eslint-plugin-import@2.29.1 eslint-plugin-n@16.6.2 eslint-plugin-prettier@5.1.3 eslint-plugin-promise@6.1.1 prettier@3.2.5
```


- comando para instalar o ts no projeto:
```
npx tsc --init
```

## Repositório
![[Pasted image 20250622113427.png]]

- repository pattern
	- cria camadas para abstrair a lógica 
	- camada para o banco de dados


## Caso de uso
![[Pasted image 20250622114005.png]]

- é o escopo de uma interação do usuário com o sistema, por exemplo:
	- ex:
		- fazer login
		- fazer uma compra
		- fazer uma comunicação com um serviço externo
		- etc.
	- é uma jornada de interação 


## SOLID
![[Pasted image 20250622114432.png]]
- princípios para programar bem

![[Pasted image 20250622114455.png]]
- uma classe só deve fazer uma única coisa

![[Pasted image 20250622114621.png]]




![[Pasted image 20250622130023.png]]
- é tipo o PostgreSQL


![[Pasted image 20250622130049.png]]
- é tipo o typeORM
- serve para usar typescript para se comunicar com o banco ao invés de usar SQL para isso






![[Pasted image 20250623100304.png]]
- delega a outras class a responsabilidade de instânciação de objetospara subclasses