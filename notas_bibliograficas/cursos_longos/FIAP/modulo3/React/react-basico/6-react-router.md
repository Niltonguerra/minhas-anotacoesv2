---
Date: 2026-05-21T20:30:00
tags:
  - fiap/modulo03/react
---

# Tópicos:
- [[#o que é o react router?|o que é o react router?]]
- [[#exemplo de uso:|exemplo de uso:]]
	- [[#exemplo de uso:#Home.jsx|Home.jsx]]
	- [[#exemplo de uso:#Sobre.jsx|Sobre.jsx]]
	- [[#exemplo de uso:#App.jsx|App.jsx]]

# Explicação dos tópicos:

## o que é o react router?
- o react router permite criar páginas em um SPA(single page aplication)


comando para instalar:
```
npm install react-router-dom
```

## exemplo de uso:
estrutura do projeto:
```
src/
 ├─ App.jsx
 ├─ Home.jsx
 └─ Sobre.jsx


```
### Home.jsx

```
function Home() {

return <h1>Página Home</h1>;

}

export default Home;
```

---

### Sobre.jsx

```
function Sobre() {  
return <h1>Página Sobre</h1>;  
}  
  
export default Sobre;
```

---

### App.jsx

```
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/sobre">Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/sobre"
          element={<Sobre />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
```




