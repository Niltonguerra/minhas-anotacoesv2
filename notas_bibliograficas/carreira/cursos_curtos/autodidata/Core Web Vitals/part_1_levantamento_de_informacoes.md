---
Date: 2025-05-27T20:46:00
tags:
  - tecnologia/CoreWebVitals
  - tecnologia
---
# Resumo da nota:
nessa nota vimos quais são as principais fontes sobre core webvitals para permitir posteriormente um estudo mais aprofundado sobre o mesmo

# Tópicos:
- [[#Pré-Requisitos e Contexto|Pré-Requisitos e Contexto]]
	- [[#Pré-Requisitos e Contexto#Quais conhecimentos prévios são _essenciais_ para entender este tópico?|Quais conhecimentos prévios são _essenciais_ para entender este tópico?]]
	- [[#Pré-Requisitos e Contexto#Em que contexto este tópico se insere?|Em que contexto este tópico se insere?]]
- [[#Fontes Primárias e Autoridades|Fontes Primárias e Autoridades]]
	- [[#Fontes Primárias e Autoridades#Quem são os principais autores/criadores/referências deste conteúdo?|Quem são os principais autores/criadores/referências deste conteúdo?]]
	- [[#Fontes Primárias e Autoridades#Quais são as principais fontes de conteúdo sobre esse assunto?|Quais são as principais fontes de conteúdo sobre esse assunto?]]
	- [[#Fontes Primárias e Autoridades#quais são as 3 ou 5 fontes mais autoritárias e completas sobre esse assunto|quais são as 3 ou 5 fontes mais autoritárias e completas sobre esse assunto]]
	- [[#Fontes Primárias e Autoridades#por que eu deveria usar o mesmo ou não devo usar?|por que eu deveria usar o mesmo ou não devo usar?]]
	- [[#Fontes Primárias e Autoridades#quais são as principais ferramentas para usar para auxiliar no controle de core web vitals?|quais são as principais ferramentas para usar para auxiliar no controle de core web vitals?]]

# Explicação dos tópicos:

## Pré-Requisitos e Contexto

### Quais conhecimentos prévios são _essenciais_ para entender este tópico? 
- conhecimentos HTML,CSSS e JS
- conhecimentos em React ou Vue
- saber fazer chamadas a api do frontend

### Em que contexto este tópico se insere?
- ele se insere nos quesitos de qualidade de uma aplicação web

---

## Fontes Primárias e Autoridades

### Quem são os principais autores/criadores/referências deste conteúdo? 
- **Addy Osmani** — Engenheiro do Google Chrome.
- **Philip Walton** — Trabalhou diretamente na definição das CWV.
- **Barry Pollard** — Autor do capítulo de Performance no Web Almanac.
- **Paul Irish** — Contribuidor de ferramentas como Lighthouse e devtools.

### Quais são as principais fontes de conteúdo sobre esse assunto?

1. **Google Web.dev**
- **Descrição**: Documentação oficial da equipe do Chrome, com guias e tutoriais detalhados sobre cada métrica.
- **Links úteis**:
    - Visão geral das Core Web Vitals
    - Performance Fundamentals
    - Guia sobre INP (Interaction to Next Paint)
2. **Google Search Central**
- **Descrição**: Fonte oficial sobre como Core Web Vitals afetam o ranqueamento no Google e atualizações relacionadas ao algoritmo de busca.
- **Links úteis**:
    - Page Experience Update
    - Relatório de Experiência na Página
3. **Chrome UX Report (CrUX)**
- **Descrição**: Base de dados pública e gratuita com métricas reais de experiência de usuários sobre CWV.
- **Como acessar**:
    - CrUX Data Studio Dashboard
    - CrUX via BigQuery
4. **PageSpeed Insights**
- **Descrição**: Ferramenta oficial que analisa páginas web e fornece dados sobre as Core Web Vitals com recomendações.
- **Link**: https://pagespeed.web.dev/
5. **Lighthouse**
- **Descrição**: Ferramenta de auditoria automatizada que mede as métricas CWV e outras práticas recomendadas de performance, acessibilidade, etc.
- **Link**: [Lighthouse no GitHub](https://github.com/GoogleChrome/lighthouse)



 ✅ **Relatórios e Análises de Mercado**
1. **HTTP Archive e Web Almanac**
- **Descrição**: Base de dados de performance web com milhões de sites analisados. O **Web Almanac** é o relatório anual com tendências e análises profundas.
- **Link**:
    - Web Almanac - Performance
    - [HTTP Archive](https://httparchive.org/)


✅ **Documentação Técnica Complementar**
1. **MDN Web Docs**
- **Descrição**: Referência para as APIs e conceitos técnicos usados para medir CWV, como `LargestContentfulPaint` ou `PerformanceObserver`.
- **Link**: [MDN Performance APIs](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API)
- 
2. **W3C Web Performance Working Group**
- **Descrição**: Local onde são desenvolvidos os padrões e especificações das APIs relacionadas a medição de performance web.
- **Link**: [W3C Web Performance Working Group](https://www.w3.org/webperf/)


 ✅ **Blogs e Comunidades de Prática**
1. **Smashing Magazine**
- **Descrição**: Publica artigos práticos e guias técnicos sobre como melhorar cada uma das Core Web Vitals.
- **Link**: [https://www.smashingmagazine.com/](https://www.smashingmagazine.com/)
2. **PerfPlanet**
- **Descrição**: Blog coletivo de especialistas em performance web. O **Perf Calendar** é uma série de posts altamente recomendada.
- **Link**: https://calendar.perfplanet.com/


### quais são as 3 ou 5 fontes mais autoritárias e completas sobre esse assunto
- https://web.dev/articles/vitals?hl=pt-br
- https://web.dev/articles/inp?hl=pt-br
- https://support.google.com/webmasters/answer/9205520


### por que eu deveria usar o mesmo ou não devo usar?
- você deve usar ele por que se não, o seu site não vai aparecer na pesquisa do google e se não aparecer nela, você não vai ter muitos acessos e sem acesso, você vai ter muita dificuldade para monetizar o seu negócio

### quais são as principais ferramentas para usar para auxiliar no controle de core web vitals?
- https://pagespeed.web.dev/
- ferramenta do browser do chrome lighthouse
-  [Core Web Vitals: Verifique Mobile e Desktop](https://chromewebstore.google.com/detail/core-web-vitals-verifique/aaldphpndekiaclbcmfgbghngcmeeeaf?hl=pt-br)
 
- por que usar essas ferramentas?
	- por que elas geram feedback com sugestões do que melhorar no sistema web