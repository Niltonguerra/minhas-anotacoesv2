---
Date: 2026-06-16T08:41:00
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
## definição do que é dominio:
- e aquilo que não muda, que não tem nada a ver com tecnologia, é aquilo existe fora da tecnologia, que é o objetivo de implementar a tecnologia:
- Exemplo concreto: 
	- um campo `email` no DTO valida se é um email válido sintaticamente. A entidade pode ter regras adicionais — email não pode ser de domínio bloqueado, não pode já existir no sistema, etc.

> [!NOTE]
>  Domínio é o conjunto das regras de negócio puras da aplicação — o que o sistema faz independente de qualquer tecnologia.
> 
> Exemplo concreto: se você está construindo um sistema de empréstimos, a regra "cliente com score abaixo de 500 não pode tomar empréstimo acima de R$10.000" é domínio. Essa regra existe independente de ser uma API REST, um banco PostgreSQL ou um frontend React. Se amanhã você trocar tudo isso, a regra continua a mesma.
> 
> Na Arquitetura Limpa do Uncle Bob, o domínio fica nas camadas mais internas — Entities e Use Cases — e a regra central é que essas camadas não dependem de nada externo. O banco de dados, o framework web, o sistema de filas — tudo isso depende do domínio, nunca o contrário. É a chamada **Regra de Dependência**: as setas de dependência sempre apontam para dentro.
> 
> O que **não** é domínio: como você persiste os dados, qual framework usa, como expõe a API, autenticação, logging. Isso é infraestrutura.


## na arquitetura hexagonal, como separar o que é entidade e caso de uso?
a forma mais fácil de responder isso é com um exemplo prático:
ex:
- senha do usuário não pode ter menos de 16 caracteres 
	-  faz parte da entidade, por que é uma regra do que é um usuário valido

- ao cadastrar, verificar se o email já existe no banco de dados
	- é um caso de uso, uma regra do processo de cadastro específico desse sistema

### regra geral:
a entidade não é um processo que acontece com o usuário mas uma afirmação que se constata do usuário
- como: o email do usuário deve ser empresarial
o caso de um é um processo que acontece com uma informação de uma ou mais entidades
- ex: ao liberar crédito para o usuário, valide seu score de crédito


## arquitetura limpa vs arquitetura hexagonal
- são bem parecidas

### arquitetura hexagonal

![[Pasted image 20260616180737.png|1225]]

- porta/port -> definição do que algo recebe/precisa para funcionar
> [!NOTE]
> sim, é redundante é idiota essa etapa, a validação é responsável do adapter, a port só recebe do adapter e manda para o useCase, que ridiculo.

- adapter/adapitador -> serve para adaptar o formato do dado para que possa ser aceito pela porta
	- nessa etapa é feito a validação do formato de dados, mesmo sendo contra intuitivo

### **apenas para fins de curiosidade e também atenção:**
**o controller e DTO ficam na camada de web adapter**




## exemplo de caso de uso:
![[Pasted image 20260616190114.png|500]]
 
exemplo de arquitetura hexagonal na prática:
caso de uso de cadastro de usuário
web adapter -> página web que tem um formulário web para aceitar os dados do usuário
inputPort -> é a interface que é usado para receber os dados do formulário/webAdapter
useCase-> define a jornada do usuário de acordo com a entity para resolver o problema
entity -> quem é a pessoa dentro do sistema que estamos tratando 
outputPort-> é a interface que é usado definir  o que o SGBD/Persistence Adapter vai receber
Persistence Adapter -> seria o SGBD responsável por armazenar os dados



## exemplo de backend com arquitetura hexagonal:
```
src/
  domain/
    entities/
    ports/
      input/
      output/
  application/
    use-cases/
  adapters/
    in/
      http/
    out/
      persistence/
```

### jornada da request:
```
Request HTTP (POST /usuarios)
        ↓
Web Adapter (Controller)
  - recebe o body bruto
  - valida via DTO (class-validator)
  - mapeia DTO → CadastrarUsuarioInput
        ↓
Input Port (interface)
  - execute(input: CadastrarUsuarioInput)
        ↓
Use Case
  - aplica regras de negócio
  - instancia a Entity
        ↓
Output Port (interface)
  - salvar(usuario: Usuario)
        ↓
Persistence Adapter
  - mapeia Entity → modelo do banco
  - persiste no SGBD
        ↓
Response HTTP
```

### exemplo no código em nestJS

**Input Port** → arquivo de interface, geralmente em `domain/ports/input/`
```
// src/domain/ports/input/cadastrar-usuario.port.ts
export interface CadastrarUsuarioInputPort {
  execute(dto: CadastrarUsuarioDTO): Promise<void>
}
```


**Use Case** → em `application/use-cases/`
```
// src/application/use-cases/cadastrar-usuario.use-case.ts
@Injectable()
export class CadastrarUsuarioUseCase implements CadastrarUsuarioInputPort {
  execute(dto: CadastrarUsuarioDTO): Promise<void> { ... }
}
```


**Web Adapter (Controller)** → em `adapters/in/http/`
```
// src/adapters/in/http/cadastrar-usuario.controller.ts
@Controller('usuarios')
export class CadastrarUsuarioController {
  constructor(
    @Inject('CADASTRAR_USUARIO_PORT')
    private useCase: CadastrarUsuarioInputPort
  ) {}

  @Post()
  async handle(@Body() body: CadastrarUsuarioDTO) {
    await this.useCase.execute(body)
  }
}
```


**Output Port** → em `domain/ports/output/`
```
// src/domain/ports/output/usuario.repository.port.ts 
export interface UsuarioRepositoryPort { 
	salvar(usuario: Usuario): Promise<void> 
}
```


**Persistence Adapter** → em `adapters/out/persistence/`
```
// src/adapters/out/persistence/usuario.repository.ts
@Injectable()
export class UsuarioRepository implements UsuarioRepositoryPort {
  salvar(usuario: Usuario): Promise<void> { ... }
}
```


**Entity** -> em  `src/domain/entities
```
// src/domain/entities/usuario.entity.ts
export class Usuario {
  constructor(
    private readonly id: string,
    private readonly nome: string,
    private readonly email: string,
    private readonly senha: string,
  ) {}

  getId(): string { return this.id }
  getNome(): string { return this.nome }
  getEmail(): string { return this.email }
  getSenha(): string { return this.senha }
}
```




## o que é mais comum ver na empresas de verdade é:
```
src/
  usuarios/
    usuarios.controller.ts
    usuarios.service.ts
    usuarios.repository.ts
    usuario.entity.ts
    dto/
    usuarios.module.ts
  pedidos/
  ...
```
