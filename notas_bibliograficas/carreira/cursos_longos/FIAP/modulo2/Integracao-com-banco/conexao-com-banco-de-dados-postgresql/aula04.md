---
Date: ""
tags: 
repositório: https://github.com/Niltonguerra/fiap/tree/main/modulo_2/comunicacao_banco_de_dados
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

como escolher qual publica usar?
- acessar o site do npm(https://www.npmjs.com/):
  - validar informações como:
    - quantidade de download por semana
    - olhar o git hub do repositório e validar 


comando para criar uma migration:
```
npx typeorm migration:create <caminho das migrations (exemplo: ./src/lib/migrations/ProductAutoGenerateUUID)>
```

comando para reverter a migration:
```
npx typeorm migration:revert -d  <caminho das migrations (exemplo: ./src/lib/migrations/ProductAutoGenerateUUID)>
```


comando para executar as migration:
```
npm run build && typeorm migration:run -d <caminho de onde está os arquivos de migrations após compilar, exempl(exemplo:./build/lib/typeorm/typeorm.js)>
```

 
 Transaction:
 é quando uma ação executa só e somente se tudo funcionar corretamente (tanto o caminho de ida quando o caminho de volta), caso ela não funcione ela irá desfazer o que foi feito

## JWT
![[Pasted image 20250629174445.png]]



## mongodb
![[Pasted image 20250629192235.png]]


## nest
![[Pasted image 20250629195005.png]]


![[Pasted image 20250629195531.png]]

![[Pasted image 20250629195545.png]]

![[Pasted image 20250629195554.png]]

![[Pasted image 20250629195614.png]]
- funcionam como filtros de exceções
	- seriam erros genéricos do sistema
	- você cria eles para gerenciar esses erros genéricos


![[Pasted image 20250629200959.png]]

![[Pasted image 20250629201135.png]]

![[Pasted image 20250629201222.png]]



![[Pasted image 20250629201310.png]]


