---
Date: 2026-11-24
tags:
  - tecnologia/autodidata/csharp
---

# Explicação dos tópicos:

### C# e orientação a objetos

1. Qual é a diferença entre uma variável local, um campo e uma propriedade?
variável local existe dentro de um método; campo guarda estado dentro da classe; propriedade controla o acesso a um campo ou valor, geralmente com `get` e `set`.

2. O que são encapsulamento, herança e polimorfismo?
encapsulamento protege os detalhes internos da classe; herança permite reutilizar ou especializar uma classe; polimorfismo permite tratar objetos diferentes por uma interface ou classe base comum.

3. Qual é a diferença entre uma classe e uma interface?
uma classe pode guardar dados e implementar comportamento. Uma interface define um contrato que outras classes podem implementar.
4. Para que servem `public`, `private`, `protected` e `internal`?
public em qualquer lugar do mesmo projeto
private apenas dentro da mesma classe  ou struct
protected apenas na própria classe ou em classes filhas
internal dentro do mesmo assembly .dll ou .exe


5. Qual é a diferença entre == e `Equals()`?
== usado para tipos primitivos e validação segura de nullable
Equals() usado para validar o objetos e validações mais detalhadas de string como case sensitive

6. O que são métodos sobrecarregados?
não métodos com mesmo nome que divergem na quantidade ou nome dos parâmetros, usados para que o usuário da classe  possa variar o uso de acordo com a necessidade dele.

7. Para que servem `virtual`, `override` e `abstract`?
- virtual:
permite que classes filhas sobrescrevam esse método com override, ela já tem uma implementação padrão
- override
sobrescreve um método que tem virtual ou abstract
- abstract 
obriga classes filhas a sobrescreverem o método criado, não possui implementação predefinida para o método

8. Qual é a diferença entre tipos por valor e tipos por referência?


9. O que são `null`, `Nullable<T>` e o operador `??`?
10. Como funciona o tratamento de exceções com `try`, `catch` e `finally`?
o try catch finally é uma forma de tratar erros, normalmente você pode trazer erros de outras camadas inferiores através do throw, sendo normalmente recomendado pelo clean code levantar o erro usando erros personalizados para simplificar a leitura. o try inicial a intenção de passar por essa estrutura, o catch captura err  
11. quando usar record?
use o quando estiver tipando dados que não vão sofrer mudança ao longo da vida da request, por exemplo, um dto, um schema, um objeto de valor, entre outros, normalmente dados imutáveis ao longo da vida da request


### .NET e programação

11. O que é o .NET e qual é a diferença entre .NET e C#?
12. O que são `List<T>` e `Dictionary<TKey, TValue>`? Quando usaria cada um?
13. Qual é a diferença entre um array e uma `List<T>`?
14. Para que servem `async` e `await`?
15. O que é LINQ? Escreva um exemplo simples para filtrar uma lista.
16. Qual é a diferença entre `IEnumerable<T>` e `List<T>`?
17. O que são testes unitários e por que são úteis?
18. Como você investigaria um erro que aparece ao executar o programa?

### Banco de dados e APIs

19. O que é uma chave primária? E uma chave estrangeira?
20. Qual é a diferença entre `INNER JOIN` e `LEFT JOIN`?
21. O que é uma API REST?
22. Para que servem os métodos HTTP `GET`, `POST`, `PUT` e `DELETE`?
23. Como você trataria dados inválidos recebidos por uma API?

### Perguntas práticas e comportamentais

24. Como você organizaria uma classe que ficou grande e difícil de manter?
25. Conte sobre um projeto em que você usou C# — qual foi sua contribuição?
26. O que faria se não soubesse resolver uma tarefa?
27. Como você recebe feedback sobre seu código?
28. Como explicaria uma decisão técnica para alguém que está começando?