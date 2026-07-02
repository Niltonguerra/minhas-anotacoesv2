---
Date: 2026-06-15T17:44:00
tags:
  - fiap/modulo05/microserviços
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
## service discovery
- permite que os microserviços encontrem e se comuniquem uns com os outros dinamicamente
### porque não se preocupar com ele?
- esse recurso pode ser usado através de dependencias locais, todavia em sistema de produção esse patterns já é provido por serviços de nuvem ou quando usa-se kubernetes, dessa forma, se torna só relevante para testes locais, assim se tornando algo não tão relevante para se manter na cabeça.
![[Pasted image 20260615145340.png|500]]
![[Pasted image 20260615145518.png|500]]



## API GATEWAY 
- principal tecnologia usada para isso: Kong(https://konghq.com/products/kong-gateway)
	- doc:https://docs.konghq.com/
ele serve como um porteiro
- usa JWT

1. você define uma politica de acesso, cria o microserviço para controlar o login dentro do sistema e gera a chave privada/secret
2. você passa esse secret para o Kong e tempo de expiração e ele gerencia o acesso aos endpoint via url base injetada nos clientes
	- como o JWT não precisa ficar consultando a validade do token a cada request, apenas compara com o secret, não vou entrar nesse mérito por conta que não é o foco
3. assim, quando você precisar acessar um recurso do microserviço, você precisa passar primeiro pelo Kong para depois acessar a rota desejada!


### exemplo de código no nestJS:

configuração do container:
```
# docker-compose.yml
services:
  kong-database:
    image: postgres:13
    environment:
      POSTGRES_DB: kong
      POSTGRES_USER: kong
      POSTGRES_PASSWORD: kong

  kong-migration:
    image: kong:3.6
    command: kong migrations bootstrap
    environment:
      KONG_DATABASE: postgres
      KONG_PG_HOST: kong-database
      KONG_PG_USER: kong
      KONG_PG_PASSWORD: kong
    depends_on:
      - kong-database

  kong:
    image: kong:3.6
    environment:
      KONG_DATABASE: postgres
      KONG_PG_HOST: kong-database
      KONG_PG_USER: kong
      KONG_PG_PASSWORD: kong
      KONG_PROXY_LISTEN: 0.0.0.0:8000   # porta que o cliente bate
      KONG_ADMIN_LISTEN: 0.0.0.0:8001   # porta admin (registrar serviços)
    ports:
      - "8000:8000"
      - "8001:8001"
    depends_on:
      - kong-migration

  user-service:
    build: ./user-service
    ports:
      - "3000:3000"

  order-service:
    build: ./order-service
    ports:
      - "3001:3001"
```

configuração do modulo do kong que vai receber as requisições:
```
// kong-register.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class KongRegisterService implements OnModuleInit {
  private readonly kongAdmin = 'http://localhost:8001';

  async onModuleInit() {
    await this.registerService();
    await this.registerRoute();
  }

  private async registerService() {
    await axios.put(`${this.kongAdmin}/services/user-service`, {
      url: 'http://user-service:3000', // nome do container no docker network
    });
  }

  private async registerRoute() {
    await axios.put(`${this.kongAdmin}/services/user-service/routes/user-route`, {
      paths: ['/users'],
      strip_path: false,
    });
  }
}
```



#### exemplo de como vai ser tratado cada requisição:
o cliente bate na: GET http://localhost:8000/users/123 
→ Kong intercepta e repassa para a rota com o recurso que se deseja → 
 http://user-service:3000/users/123


configuração da rota no nestJS, muda quase nada:
```
// user.controller.ts — completamente normal
@Controller('users')
export class UserController {
  @Get(':id')
  getUser(@Param('id') id: string) {
    return { id, name: 'Nilton' };
  }
}
```

![[Pasted image 20260615165303.png]]



> [!NOTE]
> fluxo da request:
> 1. Cliente faz login → auth-service → retorna JWT
> 2. Cliente chama /users/123 com o JWT no header
> 3. Kong intercepta → valida o JWT → se válido, repassa para user-service
> 4. user-service recebe a requisição já autenticada, sem precisar validar nada
> 


![[Pasted image 20260615145557.png|500]]


