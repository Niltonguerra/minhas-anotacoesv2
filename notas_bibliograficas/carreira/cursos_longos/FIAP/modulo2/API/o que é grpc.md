---
Date: 2025-09-01T20:47:00
tags:
  - fiap/modulo02
  - fiap/modulo02/API
---
# Notas conectadas:


# Resumo da nota:
nessa nota vimos o que é rpc e grpc, sendo o grpc um tipo de rpc, o grpc é um protocolo de comunicação entre 'cliente' e 'servidor' muito utilizados em arquiteturas de micro serviços; já o rpc é um conceito mais amplo, representa quando uma máquina local usa recursos remotos como se estivessem localmente

# Tópicos:

- [[#o que é rpc?|o que é rpc?]]
- [[#o que é grpc?|o que é grpc?]]

# Explicação dos tópicos:

## o que é rpc?
O RPC(remote procedure call) é uma tecnologia para desenvolvimento de programas distribuídos client/server de comunicação de alto nível no sistema operacional.

## o que é grpc?
O gRPC trabalha com protobuf(protocol buffers), método criado e utilizado pelo google para serializar dados estruturados, tornando a comunicação entre serviços mais eficiente. Ele é uma forma simples e agnóstica com relação a linguagem de se definir uma estrutura de dados como XML, só que mais rápido e mais simples

- basicamente é atualmente a melhor forma de transferir dados serializados entre duas aplicações(client/server)


## exemplo de código em grpc:
repo de referência: https://github.com/Niltonguerra/nest-grpc
```
syntax = "proto3";

  

package fullcycle;

  

service OrderService{

rpc CreateOrder (CreateOrderRequest) returns (CreateOrderResponse) {};

rpc FindAllOrders (FindAllOrdersRequest) returns (FindAllOrdersResponse) {};

rpc FindOneOrder (FindOneOrderRequest) returns (FindOneOrderResponse) {};

}

  

message CreateOrderRequest {

string account_id = 1;

string asset_id = 2;

int32 quantity = 3;

}

  

message Order {

string order_id = 1;

string account_id = 2;

string asset_id = 3;

int32 quantity = 4;

string status = 5;

}

  

message CreateOrderResponse {

Order order = 1;

}

  

message FindAllOrdersRequest {

string account_id = 1;

}

  
  

message FindAllOrdersResponse {

repeated Order orders = 1;

}

  

message FindOneOrderRequest {

string order_id = 1;

}

  

message FindOneOrderResponse {

Order order = 1;

}

  
  

//stub - classes que habilitam a comunicação entre client e server, elas permiter a comunicação via grpc

```