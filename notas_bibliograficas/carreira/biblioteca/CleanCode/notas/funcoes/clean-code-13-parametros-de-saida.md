---
Date: 2026-05-30T11:01:00
tags:
  - Livros/CleanCode
Livro: CleanCode
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

## parametros de saida
são os parâmetros retornados das funções
## o que são fazer com parametros de saída:
### Dica 1:
- não use um parâmetro de entrada para alterar uma informação de escopo geral e não retornar nada
- ex:
```
public void appendFooter(StringBuffer report)
```
- aqui ele usa a função para alterar a variável report, isso não é recomendado, porque não é claro.



### Dica 2:
- sempre que possível, crie classes para controlar as variáveis referentes ao contexto daquele classe.
- exemplo:
```
	report.appendFooter();
```
- aqui é uma correção do exemplo acima, se antes usávamos um parâmetro de entrada para fazer uma alteração numa variável, que é errado. Agora estamos usando uma classe para instanciar o contexto da variável que é uma prática melhor. 


### Dica 3:
- quando der, e o retorno não for de uma entidade clara, mas sim só um tratamento de concatenação de informação ou processamento de uma informação, tudo bem usar o retorno da função
```
public num appendFooter(Int firstNum,Int secondNum)
```




