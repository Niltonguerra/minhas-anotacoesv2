---
Date: 2026-05-21T19:55:00
tags:
  - fiap/modulo03/react
---
# Notas conectadas:


# Resumo da nota:
nessa nota vimos o que é um hook e vimos 3 hooks, sendo eles, useState,useEffect e useReducer

# Tópicos:
- [[#vantagens|vantagens]]
- [[#alguns Hook's:|alguns Hook's:]]
	- [[#alguns Hook's:#useState|useState]]
		- [[#useState#exemplo de uso:|exemplo de uso:]]
	- [[#alguns Hook's:#useEffect|useEffect]]
		- [[#useEffect#exemplo de uso:|exemplo de uso:]]
	- [[#alguns Hook's:#useReducer|useReducer]]
		- [[#useReducer#exemplo de uso:|exemplo de uso:]]



# Explicação dos tópicos:
- facilita a vida usar hook
- não funções que o react disponibiliza para facilitar a vida dos desenvolvedores

## vantagens
- permite usar estado 
- reduz duplicação de código
- facilita a manutenção de códigos
- agiliza o desenvolvimento






## alguns Hook's:

### useState
para que serve?
R:controlar o estado de um dado
#### exemplo de uso:
```
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>{contador}</h1>

      <button onClick={aumentar}>
        Aumentar
      </button>
    </div>
  );
}

export default Contador;
```

### useEffect
para que serve?
R:permite executar algo sempre que a página carregar ou quando uma tarefa em especifico for executada
#### exemplo de uso:
```
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Executou uma vez");
  }, []);

  return <h1>Olá</h1>;
}
```

```
import { useEffect, useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Contador mudou:", contador);
  }, [contador]);

  return (
    <button onClick={() => setContador(contador + 1)}>
      {contador}
    </button>
  );
}
```




### useReducer
para que serve?
R:serve para gerenciar estados complexos

- é para casos onde o useState é pouco e o redux é muito


#### exemplo de uso:
```
import { useReducer } from "react";

function reducer(state, action) {

  switch (action.type) {

    case "incrementar":
      return { contador: state.contador + 1 };

    case "diminuir":
      return { contador: state.contador - 1 };

    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {
    contador: 0
  });

  return (
    <div>
      <h1>{state.contador}</h1>

      <button onClick={() => dispatch({ type: "incrementar" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "diminuir" })}>
        -
      </button>
    </div>
  );
}

export default App;
```


usando 2 reducer's em um componente:
*não é recomendado o uso do exemplo a baixo porque viola o SRP nesse exemplo abaixo, mas cada caso é um caso.*
```
import { useReducer } from "react";

/* Reducer do contador */
function contadorReducer(state, action) {

  switch (action.type) {

    case "incrementar":
      return { contador: state.contador + 1 };

    default:
      return state;
  }
}

/* Reducer do tema */
function temaReducer(state, action) {

  switch (action.type) {

    case "toggle":
      return {
        dark: !state.dark
      };

    default:
      return state;
  }
}

function App() {

  const [contadorState, contadorDispatch] = useReducer(
    contadorReducer,
    { contador: 0 }
  );

  const [temaState, temaDispatch] = useReducer(
    temaReducer,
    { dark: false }
  );

  return (
    <div>
      <h1>{contadorState.contador}</h1>

      <button
        onClick={() =>
          contadorDispatch({ type: "incrementar" })
        }
      >
        +
      </button>

      <hr />

      <p>
        Tema: {temaState.dark ? "Dark" : "Light"}
      </p>

      <button
        onClick={() =>
          temaDispatch({ type: "toggle" })
        }
      >
        Alterar tema
      </button>
    </div>
  );
}

export default App;
```

p.s: acho estranho o uso do useReducer