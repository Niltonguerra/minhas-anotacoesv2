---
Date: 2026-05-21T19:18:00
tags:
  - fiap/modulo03/react
---
# Notas conectadas:


# Resumo da nota:
nessa aula vimos como usar o props no react para permitir SRP em projetos react

# Tópicos:
- [[#props|props]]



# Explicação dos tópicos:

## props
exemplo de props:

componente pai:
```
import Saudacao from "./Saudacao";

function App() {
  return (
    <div>
      <Saudacao nome="Nilton" />
      <Saudacao nome="Maria" />
    </div>
  );
}

export default App;
```

componente filho:
```
function Saudacao(props) {
  return (
    <h1>Olá, {props.nome}</h1>
  );
}

export default Saudacao;
```


exemplo um pouco mais complexo:
![[Pasted image 20260521192453.png]]