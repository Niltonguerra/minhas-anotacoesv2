---
Date: 2025-05-27T20:45:00
tags:
  - tecnologia/CoreWebVitals
---
 # Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents



# Explicação dos tópicos:

## por que foi criado?

### quais são os princípios desse assunto? 

#### Largest Contentful Paint (LCP)
- mede o tempo do maior elemento visual ser renderizado
- deve ser menor que 2.5 segundos
##### Como melhorar:
- Otimize Imagens, 
	- use a tag <Image/> do Next.js que otimiza a imagem da melhor forma possível

- Otimize imagens (compressão, formatos modernos como WebP).
	- evite de usar jpg ou png, use formatos otimizados para a web

- Use carregamento assíncrono para scripts e fontes.
	- use  `loading="lazy"` nas imagens para otimizar o seu carregamento

- Melhore o tempo de resposta do servidor.
	- gaste mais dinheiro com máquinas melhores, kkk 😂
	- ou faça um backend mais performativo
		- isso já entra em mérito de como fazer um backend bom, por conta disso não irei me aprofundar nisso

- Use um CDN.
	- o que é CDN(Content Delivery Network)?
		- é a aplicação de servidores distribuídos ao redor do mundo para melhor a comunicação entre clientes  e servidores
	- exemplos de provedores de CDN:
		- - Cloudflare
		- Amazon CloudFront
		- Akamai
		- Fastly
		- Google Cloud CDN
		- Microsoft Azure CDN

#### Cumulative Layout Shift (CLS)
- mede a quantidade de alterações na página enquanto é carregada
	- é aquele movimento inesperado quando algo sobe ou desse em uma página enquanto é carregado
- deve ser menor que 0.1
##### Como melhorar:
- reverse espaço fixo para imagens, vídeos e anúncios
- crie fallback adequados para coisas que carreguem lentamente
- evite colocar conteúdo dinâmico em cima de conteúdo fixo


#### First Input Delay (FID)
- mede o tempo da primeira interação do usuário e o site
- deve ser menor que 0.1 segundos
- em prevê vai ser substituído pelo INP
##### Como melhorar:
- Divida JavaScript em pequenos chunks (code splitting).
- Reduza o uso de JavaScript pesado.
- Adie scripts não críticos.

##### o que é um chunks?
- é a prática de dividir o código JS(TS) em pequenos arquivos 
- sabe, usar o import e export no React e JS ao invés de apenas importar um único arquivo enorme de JS
##### como dividir o código em pequenos chunks?
pode ser visto na seguinte nota:
- [[como trabalhar com trunck dentro do ecossistema JS]]


#### Interaction to Next Paint (INP)
- calcula a responsividade da página, não apenas a primeira,
- deve ser menor que 0,2 segundos
##### Como melhorar:
- Similar às dicas do FID
- Otimizar JavaScript.
	- compilar o código
- Usar web workers.
- Evitar tarefas longas no thread principal.

##### O que é web Workers?
- e uma funcionalidade do js que permite rodar theads em segundo plano, assim não bloqueando a thead principal

##### Como trabalhar com theads no frontend? e Como usar web Workers?
- esse vai ser um estudo posterior 

##### boas práticas de programação web:
- usar `loading="lazy"` nas imagens e iframes
- usar fontes nativas ou bem otimizadas
- minimize e comprima arquivos html,css e js(ts)
- evite bloqueios de renderização com scripts síncronos
- monitore com ferramentas como:
	- [Core Web Vitals: Verifique Mobile e Desktop](https://chromewebstore.google.com/detail/core-web-vitals-verifique/aaldphpndekiaclbcmfgbghngcmeeeaf?hl=pt-br)
	- Lighthouse do chrome
	- https://pagespeed.web.dev/

### o que norteou o desenvolvimento do mesmo?
- melhorar a experiencia do usuário em aplicações web

---
## quais são suas propriedades inerentes?

### pontos positivos 
- indexa sua página no google mais facilmente
- dá uma melhor experiencia do usuário
- viabiliza um maior retorno financeiro para o negócio

### pontos negativos
- da mais trabalho se atentar para esses pontos durante o desenvolvimento das aplicações
- meios de desenvolvimento mais rápidos não conseguem um bom resultado com core Web Vitals
- é preciso mais tem e esforço para poder implementar o core Web vitals

### quando é recomendável usar/aplicar?
- Sempre que for fazer uma aplicação web

---
## definição oficial do assunto estudado

### Em uma frase, qual é o propósito ou a ideia central deste conteúdo?
- tornar as aplicações web melhor para o usuário final

### como você explicaria isso para um amigo de forma simples?
- meu chapa, é simples, sempre se atente para usar em suas aplicações web core web vitals
	- se tá com pressa usa um lighthouse e arruma o que for mais fácil, tenta deixar tudo acima de 80
	- 80 passa, kkkkk
- mas seria se atente para isso, hoje em dia tem muitos sistemas com AI que permitem desenvolver aplicações muito rapidamente, se você ainda quer ser competitivo nesse mercado recomendo fortemente que se atente para isso, hoje não é mais diferencial, mas sim exigência que se saiba disso

### como você explicaria isso para um amigo de forma mais completa?
estou com preguiça agora, depois faço isso...