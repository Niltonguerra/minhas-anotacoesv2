---
Date: ""
tags:
  - fiap/modulo05/cleanArchitecture
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
![[Pasted image 20260617092359.png]]
- esse diagrama só re afirma, o controller não é uma porta, o controller usa a porta!
- a porta seria a linha preta que separa o controller do use case para ser mais preciso
	- é uma regra que define o que entra e o que não entra

### definição de presenter:
definição formal:
- O Presenter é um adaptador de saída responsável por transformar o modelo de resposta do caso de uso em um formato adequado para a camada de apresentação, garantindo que a lógica de negócio permaneça desacoplada da representação dos dados ao consumidor.
minha definição:
- é basicamente a resposta da api, seja ela um json,xml ou o que quer que for decidido
	- e a regra que define esse formato

### definição de controller:
definição formal:
- O Controller é um adaptador de entrada responsável por receber requisições externas, converter os dados de entrada em um formato compreendido pelo caso de uso e delegar a execução para a porta de entrada correspondente.
minha definição:
- é a camada que tem o controller, é responsável por receber o dado de fonte externa e manipular o dado para deixar ele pronto para o caso de uso

### definição de gateways
definição formal:
- O Gateway é um adaptador de saída responsável por abstrair o acesso a recursos externos, como bancos de dados ou serviços de terceiros, implementando as portas de saída definidas pelo domínio e isolando os casos de uso de detalhes de infraestrutura.
minha definição:
- é a camada que tem os repositories, ela implementa a porta de saída(outputPort) e prepara para mandar para o adapter externo(tipo banco de dados)

