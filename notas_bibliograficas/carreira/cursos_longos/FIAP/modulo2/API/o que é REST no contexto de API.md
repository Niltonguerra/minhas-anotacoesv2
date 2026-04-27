---
Date: 2026-04-09T16:11:00
tags:
  - fiap/modulo02/API
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
## O que é REST?
os níveis são acumulativos, logo: o nível 2 também inclui o nível 0,1 e 2, o nível 3 incluir o nível 0,1,2 e 3 e assim por diante
o que precisa ter:
- nível 0:
	- não tem padrão nem nada
- nível 1-Recursos:
	- começa a ter padrão
	- por exemplo:
		- organizar por rotas
			- ex: /cliente, /produto e etc
- nível 2-verbos HTTP:
	- usa agora os metodos corretos:
		- como put e patch corretamente
		- 
- nível 3-HATEOAS( _Hypermedia as the Engine of Application State_):
	- nesse nível a gente coloca dentro da resposta do endpoint todos as outras rotas que tem alguma coisa a ver com o endpoint acessado.
	
## O que é RESTful?
para ser considerado RESTful é preciso ter:
- padrão na identificação dos recursos
- uso correto dos métodos HTTP
- comunicação stateless
	- quer dizer que cada requisição para cada endpoint deve ser tratada isoladamente
- representação de recursos
	- disponibilizar os dados em diferentes formatos, ex: json,xml e etc
- hipermídia-HATEOAS( _Hypermedia as the Engine of Application State_)
- usar códigos de status HTTP
- o dado deve ser acessível em qualquer plataforma desejada(web/desktop/mobile e outros se existir...)
