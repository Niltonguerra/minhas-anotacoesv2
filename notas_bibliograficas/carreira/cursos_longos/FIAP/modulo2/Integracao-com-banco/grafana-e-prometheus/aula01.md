---
Date: 2025-08-11T19:43:00
tags:
  - fiap/modulo02
  - fiap/modulo02/grafana-prometheus
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

![[Pasted image 20250811194437.png]]

## o que observabilidade?
- capacidade de entender o comportamento interno do sistema
- é proativa
- permite investigação aprofundada
- Ênfase em exploração
- o que eu acho:
	- é quando você ativamente tenta descobrir o por que ter dado erro
![[Pasted image 20250811194817.png]]
![[Pasted image 20250811194832.png]]
![[Pasted image 20250811194852.png]]
![[Pasted image 20250811194927.png]]



## o que é monitoramento?
 - coleta de dados para garantir o funcionamento
 - características:
	 - reativo
	 - métricas preditivas
	 - serve para tratar falhas conhecidas
- o que eu acho:
	- é quando você tem sistema prévios que te avisam quando algo da erro
![[Pasted image 20250811194607.png]]
![[Pasted image 20250811194634.png]]


## diferença chave:
![[Pasted image 20250811195512.png]]


## prometheus e grafana
### prometheus
![[Pasted image 20250811195647.png]]
- é altamente escalável
- pode usar junto de containers
- as métricas são armazenadas em pares de chave e valor
- oferece uma linguagem própria de consulta flexível(primQL) 
#### como ele funciona?
- a gente envia as métricas para o prometheus a nível de aplicação e depois ele gera os relatórios
#### tipos de métricas que o prometheus captura
- counter
	- serve para monitorar métricas que só sobem
		- ex:
			- visitas de um site
- gauge:
	- serve para monitorar métricas que aumentar e diminuem
		- ex:
			- quantidade de usuários logados
- Histogram:
	- serve para fazer um históricos das métricas para criar dashboards ou relatórios
- Summary:
	- similar ao Histogram, mas calcula por quantis
		- o que é quantis?
			- quantis é derivado da mediana, então 50p(50 quantis) equivale a uma mediana de 50%

### Grafana
![[Pasted image 20250811200148.png]]
- permite criar gráficos para as métricas que vem para ele
	- incluir, mas não se limita ao prometheus
- permite dashboards
- permite colocar alertas para o sistema sobre os recursos

### de forma prática, imagine que o prometheus é o backend e o grafana o frontend para o monitoramento

