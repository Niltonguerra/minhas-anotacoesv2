---
Date: 2026-06-23T21:07:00
tags:
  - fiap/modulo05/redes
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:
- [[#o que é UDP?|o que é UDP?]]
	- [[#o que é UDP?#características:|características:]]
	- [[#o que é UDP?#propriedades:|propriedades:]]
		- [[#propriedades:#o que significa overhead?|o que significa overhead?]]
- [[#o que é TCP?|o que é TCP?]]
	- [[#o que é TCP?#características:|características:]]
	- [[#o que é TCP?#propriedades:|propriedades:]]
	- [[#o que é TCP?#handshake que o TCP faz:|handshake que o TCP faz:]]

# Explicação dos tópicos:

## o que é UDP?
- é um tipo de comunicação que não garante a entrega dos dados nem a ordem que os dados vão ser entregues
- os dados são só enviados
	- o protocolo não faz nenhum tipo de tratamento para garantir que os dados chegaram ou se todos os dados chegaram
### características:
- sem conexão, manda o dado para o cliente e não se preocupa se chegou
- não faz validação de todos os dados chegaram
- não faz validação da ordem de que os dados chegaram

### propriedades:
por não fazer essas validações ele é:
- + rápido que o TCP
- - overhead de comunicação 

#### o que significa overhead?
- basicamente overhead é tudo que permite que a request chegue corretamente no destinatário, podendo ser: handshake, ACKs, controle de ordem, retransmissões.

## o que é TCP?
- o protocolo tem o cuidado de garantir que os dados que chegaram no destino chegam na ordem certa e se todos os dados chegaram.


### características:
- orientado a conexão
	- tem um handshake para transmitir as informações
- garante a entrega
	- faz validação se tudo chegou no cliente
- faz validação de ondem
	- valida se a informação chegou na ordem correta
- tem controle de fluxo 
	- o remetente controla a velocidade de fluxo de envio de dados de acordo com que o destinatário consegue processar
- tem controle de congestionamento
	- o remetente diminui a a velocidade de envio se validar que a rede está sobrecarregada

### propriedades:
- +lento que o UDP
- +overhead de comunicação




### handshake que o TCP faz:
```
Cliente                    Servidor
   |                           |
   |-------- SYN ------------->|   "quero conectar"
   |                           |
   |<------- SYN-ACK ----------|   "ok, pode conectar"
   |                           |
   |-------- ACK ------------->|   "confirmado"
   |                           |
   |   conexão estabelecida    |
```

essa comunicação é importante segunda o claude porque permite distinguir o porque o tipo de erro connect timeout e read timeout.
- connect timeout- tempo máximo esperando o handshake completar
	- exemplo de erro: 
		- se o servidor estiver sobrecarregado ou inacessível o handshake nunca completa e o connect timeout estoura.

- read timeout - tempo máximo esperando dados após conexão estabelecida
- exemplo de erro: 
	- você faz uma request para o servidor mas o banco demora demais e estoura o timeout definido pelo servidor na configuração escrita em nginx (ou qualquer outra ferramenta que queira) assim gerasse o erro de gateway timeout
