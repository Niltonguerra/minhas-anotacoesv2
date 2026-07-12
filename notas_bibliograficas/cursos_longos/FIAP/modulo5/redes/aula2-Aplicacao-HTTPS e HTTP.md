---
Date: 2026-06-23T10:17:00
tags:
  - fiap/modulo05/redes
---
# Resumo da nota:
nessa nota vimos o que é HTTP e HTTPS, sendo esse segundo nada mais que HTTP com SSL que na verdade é TLS, e também vimos como funciona o handshake do TLS, que nada mais é do que o processo tornar os dados seguros na trafegação de dados na rede, além disso também vimos como é feito a chave de sessão e sobre a entidades que emitem o certificado(chamadas CA)

# Tópicos:
- [[#HTTP(Hyper Text Transfer Protocol)|HTTP(Hyper Text Transfer Protocol)]]
- [[#HTTPS( HyperText Transfer Protocol Secure)|HTTPS( HyperText Transfer Protocol Secure)]]
	- [[#HTTPS( HyperText Transfer Protocol Secure)#mas aí surge a dúvida o que é TLS(Transport Layer Security)?kkkkk|mas aí surge a dúvida o que é TLS(Transport Layer Security)?kkkkk]]
	- [[#HTTPS( HyperText Transfer Protocol Secure)#mais uma vez, surge a dúvida o que é SSL(Secure Sockets Layer)?kkkk|mais uma vez, surge a dúvida o que é SSL(Secure Sockets Layer)?kkkk]]
	- [[#HTTPS( HyperText Transfer Protocol Secure)#para continuar antes de prosseguir, preciso falar o que é a CA e o que é o certificado gerado por ela|para continuar antes de prosseguir, preciso falar o que é a CA e o que é o certificado gerado por ela]]
			- [[#passo 1: o desenvolvedor do sistema precisa provar que ele não é uma entidade má intencionada, como faz isso?|passo 1: o desenvolvedor do sistema precisa provar que ele não é uma entidade má intencionada, como faz isso?]]
			- [[#passo 2: o desenvolvedor pega a certificação e a chave privada e a implementa junto ao seu sistema que tem o domínio referente a certificação.|passo 2: o desenvolvedor pega a certificação e a chave privada e a implementa junto ao seu sistema que tem o domínio referente a certificação.]]
	- [[#HTTPS( HyperText Transfer Protocol Secure)#o que é handshake?|o que é handshake?]]
		- [[#o que é handshake?#processo de como funciona o handshake:|processo de como funciona o handshake:]]
			- [[#processo de como funciona o handshake:#passo 1: cliente inicia a conexão|passo 1: cliente inicia a conexão]]
			- [[#processo de como funciona o handshake:#passo 2: servidor recebe e responde|passo 2: servidor recebe e responde]]
			- [[#processo de como funciona o handshake:#passo 3: o cliente aceita a request valida e valida a CA|passo 3: o cliente aceita a request valida e valida a CA]]
			- [[#processo de como funciona o handshake:#passo 4: geração da Pre-Master Secret|passo 4: geração da Pre-Master Secret]]
			- [[#processo de como funciona o handshake:#passo 5: envio da Pre-Master Secret e geração da chave de sessão|passo 5: envio da Pre-Master Secret e geração da chave de sessão]]
			- [[#processo de como funciona o handshake:#passo 6: os dois estabelecem canal|passo 6: os dois estabelecem canal]]
			- [[#processo de como funciona o handshake:#benefícios desse processo:|benefícios desse processo:]]


# Explicação dos tópicos:

| Camada | Nome         | O que faz                                                 | Exemplo                      |
| ------ | ------------ | --------------------------------------------------------- | ---------------------------- |
| 7      | Aplicação    | Interface com o software, protocolo de comunicação da app | HTTP, HTTPS, FTP, DNS, SMTP  |

## HTTP(Hyper Text Transfer Protocol)
- é basicamente um protocolo("padrão") que define o formato e o comportamento da comunicação entre cliente e servidor.
- ex:
  cliente
```
GET /produtos HTTP/1.1
Host: loja.com.br
Accept: application/json
```
servidor:
```
HTTP/1.1 200 OK
Content-Type: application/json

{"produtos": [...]}
```


## HTTPS( HyperText Transfer Protocol Secure)
- é basicamente HTTP+TLS

### mas aí surge a dúvida o que é TLS(Transport Layer Security)?kkkkk
- é o novo SSL, tem mais medidas de segurança

- quais são essas medidas de segurança?
	- Algoritmos mais seguros
	- Correção de vulnerabilidades encontradas no SSL
	- Alguns detalhes do handshake
		- essa questão do handshake é importante, vou abordar mais abaixo


### mais uma vez, surge a dúvida o que é SSL(Secure Sockets Layer)?kkkk
- criado pela netScape em 1995
	- problema que resolve:
		- HTTP trafega dado puro sem criptografia
			- qualquer um que capture a request no meio do caminho tem acesso a informação
		- SSL codifica o dado entre cliente e servidor através de uma Chave de sessão definida entre o servidor e o cliente

### para continuar antes de prosseguir, preciso falar o que é a CA e o que é o certificado gerado por ela
para explicar o que são, vou explicar o porque se precisa dela.
##### passo 1: o desenvolvedor do sistema precisa provar que ele não é uma entidade má intencionada, como faz isso?
- simples, pede para um terceiro validar a sua legitimidade
	- quem é esse terceiro?
		- Resposta: ele é chamado de CA( **Certificate Authority** ) 
	- a CA valida se o domínio do sistema que o desenvolvedor está fazendo é seguro, e se sim, gera um certificado que está vinculado ao domínio da aplicação(domínio é a url base, ex: www.google.com.br) e também uma chave pública(essa fica no browser) e uma chave privada(essa fica no servidor) para servir para decodificar as requisições.
##### passo 2: o desenvolvedor pega a certificação e a chave privada e a implementa junto ao seu sistema que tem o domínio referente a certificação.

### o que é handshake?
- é o processo de o servidor e o cliente se validarem e se identificarem, é o processo feito para o que o cliente valida o certificado emitido pela CA e também o processo da geração da chave de sessão(token usado para codificar dados trafegados dentro da rede)
#### processo de como funciona o handshake:
- dev é muito sem noção mesmo, tipo, dar o nome de uma questão tão importante para a segurança de handshake, que loucura absurda, só tem doido na tecnologia, kkkkk

##### passo 1: cliente inicia a conexão
o cliente acessa seu site, nesse momento ele manda as seguintes informações:
- lista de opções  de algoritmos de criptografia que ele suporta
	- (no caso lista de algoritmos de criptografia que o browser suporta)
- Client Random
	- é um numero aleatório gerado pelo cliente

##### passo 2: servidor recebe e responde
o servidor recebe as informações, escolhe um algoritmo do client e retorna:
- o algoritmo escolhido da lista disponibilizada 
- o certificado emitido pela CA
- Server Random
	- um numero aleatório gerado pelo servidor

##### passo 3: o cliente aceita a request valida e valida a CA
o cliente pega as informações do servidor e faz o seguinte:
- consulta se a CA é valida
	- isso quer dizer que valida o seguinte:
	- valida se o certificado emitido pela  CA informada está no banco de dados do  browser
		- sim, a CA faz essa atualização de sua certificação junto ao browser
	- além disso também valida:
		- se já expirou a certificação
		- se o domínio atrelado ao certificado é o mesmo domínio acessado



##### passo 4: geração da Pre-Master Secret
- usando a chave pública do servidor(que está contida no certificado emitido dela CA que é referente ao domínio referente ao servidor) gera um novo numero chamado **Pre-Master Secret** 
	- vale destacar que só o servidor consegue descriptografar essa informação por que só o servidor tem a chave privada.
> [!NOTE]
> vale destacar que o real valor da Pre-Master Secret não é o valor dela em si, mas o valor que o cliente gerou e que está codificado pela chave pública da certificação da CA

##### passo 5: envio da Pre-Master Secret e geração da chave de sessão
- depois de fazer a criação da Pre-Master Secret o cliente envia para o servidor a Pre-Master Secret e se segue os seguintes eventos:
  - o servidor e o cliente com as 3 informações:
    - Server Random
    - Client Random 
    - Pre-Master Secret
  - geram a chave de sessão
    - um em cada lado
      - sem nunca ter sido trafegado o token de sessão entre a rede

##### passo 6: os dois estabelecem canal
- agora os dois confirmam que estão prontos e todo HTTP trafega criptografado com a chave de sessão.

##### benefícios desse processo:
- chave de sessão nunca trafega pela rede
- criptografia simétrica(chave de sessão)
	- usada porque é mais barata
- criptografia assimétrica(chave pública/privada)
	- é usada só no handshake porque é computacionalmente cara





