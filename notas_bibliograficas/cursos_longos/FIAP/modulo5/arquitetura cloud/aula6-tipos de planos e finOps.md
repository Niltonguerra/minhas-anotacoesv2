---
Date: 2026-06-25T10:21:00
tags:
  - fiap/modulo05/arquiteturaCloud
---
# Resumo da nota:
nessa nota vimos tipos de planos para aws, como spot e on demand e suas particularidades, além disso também vimos algumas estratégias de finOps.

# Tópicos:
- [[#tipos de planos de nuvem|tipos de planos de nuvem]]
	- [[#tipos de planos de nuvem#On Demand|On Demand]]
	- [[#tipos de planos de nuvem#spot|spot]]
		- [[#spot#o que acontece dentro para o spot ser mais barato que o On Demand?|o que acontece dentro para o spot ser mais barato que o On Demand?]]
- [[#exemplo de calculo considerando  um plano On Demand e um plano Spot|exemplo de calculo considerando  um plano On Demand e um plano Spot]]
- [[#FinOps|FinOps]]
	- [[#FinOps#Algumas estratégias de FinOps|Algumas estratégias de FinOps]]
# Explicação dos tópicos:
## tipos de planos de nuvem
### On Demand 
- é quando você aluga o servidor virtual e você fica com a sua aplicação rodando nele até você não requer mais

### spot
- você também aluga um servidor virtual, mas pode cair a qualquer momento o servidor, com aviso prévio de apenas 2 minutos
- é mais barato que o formato on demand

#### o que acontece dentro para o spot ser mais barato que o On Demand?
- você usa a capacidade computacional não usada pelos data centers da AWS
	- desconto pode chegar a 90%
- a AWS derruba sua aplicação caso precise do seu servidor para suprir cliente On Demand
	- aviso prévio de apenas 2 minutos

## exemplo de calculo considerando  um plano On Demand e um plano Spot
link para consultar os valores base por CPU e Memoria de uma máquina na AWS: 
- https://aws.amazon.com/pt/fargate/pricing/
![[Pasted image 20260625094500.png]]
- o Spot é bem mais barato que o On Demand


## FinOps
- FinOps são estratégias financeiras sobre infraestrutura  de computação 
### Algumas estratégias de FinOps
- dentro do load balance deixar uma instancia on Demand e as outras Spot
- deixar todas as instancias do load balance com o plano Spot
- desligar as máquinas fora de horário comercial(9h às 18h)
- criar tags para facilitar o controle de gastos e gerenciamento  das EC2(EC2 são as máquinas virtuais da AWS)
- Identificar e excluir volumes EBS desanexados
- Contratar Savings Plans ou Reserved Instances para a carga base
- Migrar aplicações para processadores AWS Graviton
- Aplicar políticas de ciclo de vida em buckets S3
- Implementar Auto Scaling baseado em demanda (Target Tracking)
	- quando o servidor no plano On Demand chegar a 70% implementar o auto scaling
- Utilizar CDN para cache de conteúdo estático
- Configurar bloqueios ou alertas preventivos de orçamento



