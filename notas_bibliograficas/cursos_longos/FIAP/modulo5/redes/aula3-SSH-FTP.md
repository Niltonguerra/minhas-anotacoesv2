---
Date: 2026-06-23T10:18:00
tags:
  - fiap/modulo05/redes
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
## SSH(Secure Shell)
- antes do SSH existia a telNet
	- dados trafegam puros, sem criptografia
- o SSH é basicamente o seguinte:
	- existe um cliente e um servidor, os dois precisam se comunicar. 
		- o cliente gera um par de chaves, uma chave pública e uma privada, apenas uma vez e reutiliza nas próximas conexões.
		-  o cliente disponibiliza a chave pública para o servidor 
		- o servidor acessa essa chave pública cria um desafio que só quem tem a chave privada consegue decodificar
			- esse desafio nada mais é do que pegar um numero aleatório gerado pelo servidor e criptografar com a chave pública recebida
		- o cliente recebe esse desafio e resolve ele porque tem a chave privada e retorna o valor para o servidor
		- assim se estabelece a conexão
- não vou me aprofundar por que pela LLM me falou que não preciso e considerando que isso é uma matéria inferida da necessidade de outra aula então não quero me aprofundar

## o que é FTP(File Transfer Protocol)
- é um protocolo para a comunicação de arquivos
	- usa a porta 21 para fazer o controle da comunicação
		- é basicamente a central de controle
		- ex: listar arquivos, navegar em diretórios, iniciar transferência
	- usa a porta 20 para a transferência de dados em si

### ADENDO, não é usado como meio para a comunicação entre browser e servidor no download de arquivos, o download de arquivos entre browser e servidor é feito via comunicação HTTPS, Tudo que envolve browser é HTTPS.

### FTPS
- é basicamente o FTP+TLS
- é basicamente a comunicação de dados de forma segura

### SFTP
- é basicamente FTP+SSH
- é o mais usado hoje em produção
	- acredito porque não necessite de comprar um certificado através de uma CA para usar o SSH
- usa uma única porta(22), diferente do FTP
	- tira problemas de comunicação com o firewall
- ele é usado no servidor de arquivos
	- esse servidor normalmente armazena:
		- imagens
		- musicas
		- vídeos
		- logs de aplicações
		- backups
		- e etc


### vantagens do FTP:
- permite retomada de download de arquivos
- menor overhead por arquivo em comparação com http
- suporte a SSH


### Desvantagens do SFTP/FTPS
- **Não escala bem** — cada conexão é uma sessão SSH persistente, diferente do HTTP que é stateless. Em volume alto de transferências simultâneas o gerenciamento de sessões vira problema
- **Monitoramento mais difícil** — ferramentas de observabilidade são pensadas pra HTTP. SFTP tem menos tooling nativo de logging e rastreamento
- **Não tem conceito de API** — sem versionamento, sem contrato, sem documentação padronizada. A integração é frágil e depende de convenção manual entre as partes
- **Gerenciamento de usuários** — cada integração geralmente exige um usuário SFTP dedicado no servidor, o que vira problema operacional em escala
- **Transferência síncrona** — você envia o arquivo e espera. Sem fila, sem retry nativo, sem dead letter queue. Falha no meio? Você implementa a resiliência manualmente
- **Object storage é superior na maioria dos casos modernos** — S3 tem versionamento, lifecycle policies, permissões granulares via IAM, CDN integrada, e acesso via HTTPS/SDK sem sessão persistente


### quando usar FTP:
- quando está mexendo com sistema legado
- quando envolve a soberania de um país
- quando é sistema de banco e as pessoas não querem correr o risco de migrar

