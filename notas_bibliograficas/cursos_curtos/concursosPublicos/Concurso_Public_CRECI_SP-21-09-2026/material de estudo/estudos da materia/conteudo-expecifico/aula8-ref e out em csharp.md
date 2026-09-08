---
Date: 2026-09-08
tags:
  - template
---
# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:
## **`ref`** 
variável já inicializada, método pode ler e modificar:

```csharp
void Dobrar(ref int numero) {
    numero = numero * 2;
}

int x = 5;
Dobrar(ref x);
// x agora é 10
```

---

## **`out`** 
variável não precisa estar inicializada, método é obrigado a atribuir:

```csharp
void Calcular(out int resultado) {
    resultado = 42; // obrigatório atribuir
}

int y; // não inicializado
Calcular(out y);
// y agora é 42
```

ou:


```csharp
void Calcular(out int resultado) {
    resultado = 42; // obrigatório atribuir
}

int y = 5; // não inicializado
Calcular(out y);
// y agora é 42
```


## por padrão no cshpa

---

A diferença prática: se você tentar usar `ref` com uma variável não inicializada, o compilador recusa. Com `out`, não importa — o método é responsável por dar o valor.


