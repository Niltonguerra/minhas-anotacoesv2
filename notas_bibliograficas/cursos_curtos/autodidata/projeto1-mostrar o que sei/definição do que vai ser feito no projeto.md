## proposito do projeto:
o projeto tem como finalidade servir como vitrine do meu conhecimento, mostrando tudo o que sei fazer, esse é o objetivo do projeto, então não vou considerar coisas que gerariam melhor performance ou facilidade de gestão em um projeto real, como o uso de apenas uma só linguagem durante todo o projeto, criação real de uma arquitetura de microserviços em prática com a finalidade de não ter gasto monetário, embora vá sim desenhar o sistema e também irei definir os arquivos de configuração como terraform,ansible e etc, o objetivo é basicamente mostrar tudo o que sei para maximizar minhas chances de empregabilidade no presente e futuro e também porque estou cansado em estudar da forma comum que é por video aula, quero criar um projeto real com todos os meus conhecimento porque parece mais divertido e prático.


## o domínio que irei usar no sistema:
o dominio vai ser o financeiro
- vai ser esse porque gosto de dinheiro,kkkkkk
- porque é um dominio grande que comporta DDD
- porque gosto de dinheiro,kkkkkk



## sub dominio principal:
o objetivo do sistema é criar um sistema bancario simplificado com o objetivo de mostrar o que sei
o core é:
- servir ao cliente serviços bancários através da Gestão de contas e transações


## sub dominio de suporte
- fazer uma validação de score de crédito da pessoa dentro do sistema para a concessão de crédito e calculo de juros a serem pagos
- sugestões personalizadas de investimentos com base em noticias que são publicadas e com base em temas que o usuário achar interressante



## sub dominio genérico
- criação de noticias sobre temas de empresas
- coleta de indices de bolsa de valores
- recomendação de notificas de investimento
	- vou fazer algo generico,esse não é o foco do sistema
- criptomoeda para ser transacionada no sistema



## o que vai ser desenvolvido:
| Serviço                          | Responsabilidade                                                                                                                          | Complexidade que demonstra                                  |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Ledger/Conta**                 | Saldo, transferência, consistência, moeda interna (token próprio, sem blockchain real)                                                    | Agregados, invariantes, concorrência                        |
| **Pagamentos**                   | Máquina de estados de transação, idempotência, estorno                                                                                    | Saga, orquestração assíncrona                               |
| **Bureau de Crédito (simulado)** | API própria com dados fictícios gerados, simula um provedor externo real                                                                  | Contrato externo, resiliência, circuit breaker              |
| **Score/Análise de Crédito**     | Consome o Bureau simulado, aplica política de elegibilidade                                                                               | Regras de negócio, orquestração entre serviços              |
| **Relatórios Financeiros**       | Coleta dados de fontes públicas não-pessoais (cotação de moeda, índices econômicos — BACEN tem API pública aberta, sem CNPJ nem contrato) | Scraping/consumo de API real, ETL, agregação para relatório |
| **Gateway/BFF**                  | Ponto de entrada, agregação de chamadas                                                                                                   | API Gateway, composição de serviços                         |
