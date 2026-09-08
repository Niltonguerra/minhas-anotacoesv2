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
**O Protocolo TCP (Transmission Control Protocol)**

- É um protocolo específico de transporte de dados.
    
- Opera garantindo a entrega dos pacotes de forma ordenada e confiável (orientado a conexão).
    
- Trabalha lado a lado com o UDP (User Datagram Protocol), que é uma alternativa de transporte mais rápida, porém sem garantia de entrega (não orientado a conexão).
    

**O Modelo TCP/IP**

- É uma estrutura conceitual e prática, semelhante ao modelo OSI, que padroniza como os dados devem ser formatados, endereçados, transmitidos, roteados e recebidos em uma rede.
    
- Recebeu o nome "TCP/IP" apenas porque o TCP e o IP (Internet Protocol) foram os protocolos fundamentais e mais importantes desenvolvidos para ele. No entanto, o modelo abriga dezenas de outros protocolos (HTTP, SSH, DNS, UDP, etc.).
    
- Geralmente é descrito em 4 camadas, que condensam as 7 camadas teóricas do modelo OSI:
    

**Comparativo de Camadas (TCP/IP vs OSI)**

| **Camada OSI (7 camadas)** | **Camada TCP/IP (4 camadas)**            | **Função Principal (Resumo)**                                                 |
| -------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| 7. Aplicação               | **Aplicação**                            | Interação com o usuário e softwares (HTTP, HTTPS, FTP, DNS, SMTP).            |
| 6. Apresentação            | **Aplicação**                            | Formatação, criptografia e compressão de dados(TLS/SSL, JPEG, JSON encoding). |
| 5. Sessão                  | **Aplicação**                            | Estabelecimento e controle de sessões de comunicação(NetBIOS, RPC).           |
| 4. Transporte              | **Transporte**                           | Entrega de dados fim a fim (ponto a ponto), ordenação (TCP, UDP).             |
| 3. Rede                    | **Internet** (ou Inter-rede)             | Roteamento de pacotes e endereçamento lógico (IP, ICMP).                      |
| 2. Enlace de Dados         | **Acesso à Rede** (ou Interface de Rede) | Entrega nó a nó, controle de acesso ao meio físico (MAC, Ethernet).           |
| 1. Física                  | **Acesso à Rede** (ou Interface de Rede) | Transmissão física de bits (cabos, sinais elétricos, rádio,fibra).            |

