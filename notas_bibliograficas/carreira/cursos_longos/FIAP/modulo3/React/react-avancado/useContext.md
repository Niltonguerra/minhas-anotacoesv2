---
Date: 2026-06-08T15:56:00
tags:
  - fiap/modulo03/react
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

SSR- Server-Side Rendering



 useContext é serve para não ter aqueles componentes que ficam passando props de um componente para outro componente que é uma pessima forma de programar
 - tanto que o componente que engloba o useContext normalmente é um 'xxxProvider', por exemplo: carrinhoProvider, já que ele engloba e encapsula a distribuição de dados dentro de um contexto e prove(daí vem o nome provider) os dados que vão ser manipulados dentro daquele contexto.

muito melhor que do ficar passando varios props entre components



 exemplo de uso do useContext:
componente provider(coração do useContext):
```
// ThemeContext.tsx
import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// 1. cria o contexto com tipo correto
const ThemeContext = createContext<ThemeContextType | null>(null)

// 2. Provider que envolve a aplicação
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () =>
    setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3. hook customizado — evita verificar null em todo lugar
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme deve ser usado dentro de ThemeProvider')
  return context
}
```
 
 
 componente pai
```
 import { ThemeProvider } from './ThemeContext'
import { Navbar } from './Navbar'
import { Dashboard } from './Dashboard'

export function App() {
  return (
    // qualquer componente dentro daqui acessa o tema
    <ThemeProvider>
      <Navbar />
      <Dashboard />
    </ThemeProvider>
  )
}
```


componentes filhos:
```
// Navbar.tsx — consome o contexto diretamente
import { useTheme } from './ThemeContext'

export function Navbar() {
  // acessa tema e toggle sem receber nenhuma prop
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={`navbar navbar--${theme}`}>
      <span>meu app</span>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

// Dashboard.tsx — mesmo padrão, componente diferente
export function Dashboard() {
  const { theme } = useTheme()

  return <main className={`dashboard--${theme}`}>...</main>
}
```
