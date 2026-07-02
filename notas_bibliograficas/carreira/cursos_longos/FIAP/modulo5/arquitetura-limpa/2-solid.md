---
Date: ""
tags:
  - fiap/modulo05/cleanArchitecture
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
## SOLID
Cinco princípios para design de classes/módulos, formulados pelo Robert Martin (Uncle Bob).

---

### **S — Single Responsibility Principle**  
Uma classe deve ter apenas um motivo para mudar. Se ela muda por duas razões diferentes, ela tem duas responsabilidades e deve ser separada.
- por exemplo: segue algumas camadas de uma aplicação vistas no design patterns
	-  Controller
		- orquestra as operações acessadas pela rota
	- Route
		- aceita as requisições vindas ao servidor através de rotas disponibilizadas também nesse arquivo
	- DTO
		- interface para validar os dados entre as camadas
	- Services
		- responsavel por fazer um 'serviço' uma ação definida, por exemplo fazer a chamada de um repository para salvar os dados
	- Repository
		- responsável por fazer a comunicação com o banco de dados
	- strategy
		- responsavel por contralizar estratégias de especificas de como controlar determinada parte do sistema, por exemplo, a estratégia de controle de login no sistema
	- use case:
		- responsavel por orquestrar as operações da rota quando são mais complexas e estrapolam o que deve ficar no controller
---

### **O — Open/Closed Principle**  
Uma classe deve ser aberta para extensão e fechada para modificação. 
Você adiciona comportamento novo sem alterar o código existente — geralmente via herança ou composição.

- isso quer dizer que deve-se usar herança quando o sistema dá suporte para POO(orientação a objetivo)
- deve-se evitar de mexer em código legado(kkkk, a gente odeia tanto isso que a gente até criou uma regra para isso 😂)
	- piadas a parte, realmente deve-se evitar mexer em código legal, mas existe exceções, como por exemplo, colocar observabilidade na app
	- 

---

### **L — Liskov Substitution Principle**  
Uma subclasse deve poder substituir sua classe pai sem quebrar o comportamento esperado. Se você precisa verificar o tipo concreto para saber como tratar o objeto, o princípio foi violado.
- esse é meio difícil de explicar, mas quer dizer que você não deve estender uma classe pai e nessa classe filha que você está gerando, você não deve pegar os métodos já criados no pai e colocar um  throw error ou coisa do tipo que altere o retorno que o pai dava previamente, não se deve fazer isso 
##### Exemplo: 

###### errado:
```typescript
class Bird {
  fly(): void {
    console.log('voando')
  }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error('pinguins não voam')
  }
}

function makeBirdFly(bird: Bird) {
  bird.fly() // quebra se receber um Penguin
}
```

`Penguin` é uma `Bird` biologicamente, mas não no contrato do código. Substituir `Bird` por `Penguin` quebra o comportamento esperado — viola o LSP.

###### Corrigido
```typescript
class Bird {
  move(): void {}
}

class FlyingBird extends Bird {
  fly(): void {
    console.log('voando')
  }
}

class Penguin extends Bird {
  move(): void {
    console.log('nadando')
  }
}

function makeFlyingBirdFly(bird: FlyingBird) {
  bird.fly() // seguro, só aceita quem realmente voa
}
```

---

### **I — Interface Segregation Principle**  
O que você já viu na prática: não force um cliente a depender de métodos que ele não usa. Interfaces menores e específicas são preferíveis a uma interface genérica e grande.
- use interfaces
- não use cadeias de interfaces muito grandes

---

### **D — Dependency Inversion Principle**  
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Na prática: Service não instancia o Repository diretamente, depende de uma interface — quem injeta a implementação concreta é o container de DI.
- isso quer dizer que camadas superiores não devem depender de camadas inferiores.
	- a camada superior precisa permanecer igual entanto a inferior é alterada
		-  isso quer dizer que não pode alterar um controller por alterar um service
		- ou
		- não pode alterar o service de trocar o banco de dados, se trocar o banco de dados você deve alterar o repository.
		- 
---

Na prática os cinco andam juntos. Violar um geralmente leva a violar outro em cadeia.



