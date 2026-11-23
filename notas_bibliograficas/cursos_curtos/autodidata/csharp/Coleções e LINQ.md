---
Date: 2026-11-23
tags:
  - tecnologia/autodidata/csharp
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:
## o que é LINKQ no csharp?
- significado: LINKQ(_Language Integrated Query_)
- é uma forma de consultar, filtrar e transformar dados em **coleções** usando uma sintaxe uniforme e expressiva diretamente no código.

### coleções
- 📋 **`List<T>`:** Funciona como um array dinâmico que cresce ou diminui conforme necessário. Mantém a ordem de inserção, permite elementos duplicados e oferece acesso rápido por índice (`lista[0]`), mas buscar um valor específico sem saber o índice exige percorrer a lista.

```C#
var carrinhoIds = new List<int> { 101, 205, 101 };
carrinhoIds.Add(309);
int primeiroItem = carrinhoIds[0]; // 101
```




- 🔑 **`Dictionary<TKey, TValue>`:** Armazena pares de chave e valor. Usa uma tabela de hash para localizar rapidamente um `TValue` a partir de uma `TKey`, exigindo que cada chave seja única.

```C#
var precosPorSku = new Dictionary<string, decimal>
{
    ["SKU-01"] = 49.90m,
    ["SKU-02"] = 120.00m
};
decimal preco = precosPorSku["SKU-01"];
```



- 🧩 **`HashSet<T>`:** Representa um conjunto de elementos únicos, sem ordem garantida e sem índice posicional. É otimizado para verificar rapidamente se um item já existe (`Contains`) e para operações de conjunto (união, interseção, diferença).

```C#
var tagsUnicas = new HashSet<string> { "csharp", "dotnet", "csharp" };
bool adicionou = tagsUnicas.Add("linq"); // true; "csharp" já existe e não duplica
```

 

