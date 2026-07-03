---
Date: 2026-05-21T16:26:00
tags:
  - fiap/modulo03/react
  - fiap/modulo03
---
# Notas conectadas:


# Resumo da nota:
nessa nova vimos algumas noções sobre o react e como usar o hook useState e como importar componentes dentro de outros componentes
# Tópicos:
- [[#significados de algumas coisas|significados de algumas coisas]]
				- [[#o react usa o virtual DOM|o react usa o virtual DOM]]
- [[#hook useState|hook useState]]
- [[#exemplo de importar um componente|exemplo de importar um componente]]


# Explicação dos tópicos:
## significados de algumas coisas
- coloque arquivos estáticos na ***pasta assets***
- o arquivo de inicialização é o ***main.jsx***
- .eslintrc
	- faz a validação ortográfica, padroniza a ortografia do código
- .gitignore
	- não permite subir para o github/gitlab
- index.html
	- html da landing page
- readme.md
	- resumo e alguns informações principais do projeto

- .jsx -> é um tipo de arquivo que aceita html e js

###### o react usa o virtual DOM


## hook useState
permite gerenciar um estado em tempo de execução
exemplo:
```
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}

export default Contador;
```


## exemplo de importar um componente
```
import Botao from "./Contador";

function App() {
  return (
    <div>
      <h1>Meu App</h1>
      <Contador />
    </div>
  );
}

export default App;
```



