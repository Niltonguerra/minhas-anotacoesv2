---
Date: 2025-04-20T17:07:00
tags:
  - tecnologia/DDD
---
# Notas conectadas:
matéria de apoio:
[[DDD -Aula4-posgraduacao.pdf]]
# Resumo da nota:
nessa nota vimos o que é o OHS e o que é PL, assim como quando é recomendado seguir por uma abordagem em que se duplica o mesmo código, além de também entender o que é o BBM e entender como é formado o mapa de contexto 

# Tópicos:
- [[#Serviço de Host Aberto (OHS) (Open Host Services)|Serviço de Host Aberto (OHS) (Open Host Services)]]
- [[#Empreas de VAN (value-added network(rede de valor agregado))|Empreas de VAN (value-added network(rede de valor agregado))]]
- [[#caminhos separados|caminhos separados]]
- [[#grande bola de lama(BBM)|grande bola de lama(BBM)]]
- [[#mapa de contexto|mapa de contexto]]

# Explicação dos tópicos:

## Serviço de Host Aberto (OHS) (Open Host Services)
-  o seu sistema deixa uma API aberta para o mundo inteiro 😱
![[Pasted image 20250420171738.png]]

- dúvida, já que normalmente os provedores de OHS já usam essa interface para que o cliente possa acessar, ainda assim seria necessário, criar uma camada de ACL no lado do cliente para garantir a estabilidade da integração? ou poderia ser desconsiderado em certos casos apenas?
Resposta: sim, é preciso ter uma ACL mesmo já tendo uma OHS
- dúvida,  um OHS tem autenticação para acessar os dados? como um token de acesso? ou se coloca-se um token de acesso deixaria de ser um OHS
Resposta: Não, uma OHS pode ter token, na verdade é recomendável exigir um token


![[Pasted image 20250420173023.png]]

- a linguagem Publicada(PL) é quando o fornecedor cria instancias customizadas aos seus clientes, ou seja, um serviço no lado do cliente na linguagem que o cliente preferir para ajudar ele na integração

- os gateway de pagamento, como o stripe ou mercado pago são considerados 'PL' 
	- no caso eles criam ACL e proveem como essa integração como 'PL'

## Empreas de VAN (value-added network(rede de valor agregado))
- são empresas que criam 'ACL' e 'PL' por você para você integrar em seu sistema
- Neogrid
- Accesstage
- OpenText
- Elemica
- Informatica
- Nexxera


## caminhos separados
![[Pasted image 20250420175630.png]]

- duplica a implementação
- serve para quando os times não se integram bem (querem usar ferramentas diferentes ou outra coisa)
- não tem sentido em expor o serviço a outros contextos


## grande bola de lama(BBM)
![[Pasted image 20250420180450.png]]

- se o sistema não está bem formado, simplesmente delimite até onde está se estendendo essa 'bola de lama' e não mexa nela, exponha o que tiver que expor, mas evite mexer muito pela, se está funcionando não mexa, é aquela famosa frase: ' quando fiz esse código só Deus e eu sabíamos o que tinha lá, agora só ele sabe, kkkk 😂😂😂'


## mapa de contexto
![[Pasted image 20250420181136.png]]

![[Pasted image 20250420181146.png]]

- o mapa de contexto serve para visualizar todos os contexto delimitados juntamente
- permite uma visão estratégica do todo
