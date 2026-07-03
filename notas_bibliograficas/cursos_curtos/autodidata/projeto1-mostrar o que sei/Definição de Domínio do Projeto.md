## Propósito do Projeto

O projeto tem como finalidade servir como vitrine de conhecimento técnico, mostrando o máximo possível do que foi estudado e aplicado. Por conta disso, decisões que normalmente seriam guiadas por performance, custo ou facilidade de gestão em um projeto real **não** serão o critério principal aqui. Exemplos:

- Uso de múltiplas linguagens ao longo do projeto (não apenas uma).
- Arquitetura de microsserviços desenhada e configurada (Terraform, Ansible, etc.), mas sem deploy real em produção, para evitar custo monetário.

Objetivo final: maximizar empregabilidade presente e futura, através de um projeto prático que substitua o formato tradicional de estudo por vídeo-aula.

## Domínio

**Financeiro.**

Motivos:

- Domínio grande, comporta modelagem DDD de forma significativa.
- Interesse pessoal no tema.

## Subdomínio Principal (Core)

**Objetivo do sistema:** criar um sistema bancário simplificado.

- **Core:** servir ao cliente serviços bancários através da Gestão de Contas e Transações (Ledger).

## Subdomínio de Suporte

- Validação de crédito da pessoa dentro do sistema (score, concessão de crédito, cálculo de juros).
- Sugestões personalizadas de investimento com explicação.

## Subdomínio Genérico

- Criação de notícias sobre temas de empresas.
- Coleta de índices de bolsa de valores.
- Recomendação de notícias de investimento (implementação genérica, não é foco do sistema).
- Criptomoeda para ser transacionada no sistema (protocolo próprio/completo).

---










## o que vai ser desenvolvido:
| Serviço                          | Responsabilidade                                                                                                                          | Complexidade que demonstra                                  |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Ledger/Conta**                 | Saldo, transferência, consistência, moeda interna (token próprio, sem blockchain real)                                                    | Agregados, invariantes, concorrência                        |
| **Pagamentos**                   | Máquina de estados de transação, idempotência, estorno                                                                                    | Saga, orquestração assíncrona                               |
| **Bureau de Crédito (simulado)** | API própria com dados fictícios gerados, simula um provedor externo real                                                                  | Contrato externo, resiliência, circuit breaker              |
| **Score/Análise de Crédito**     | Consome o Bureau simulado, aplica política de elegibilidade                                                                               | Regras de negócio, orquestração entre serviços              |
| **Relatórios Financeiros**       | Coleta dados de fontes públicas não-pessoais (cotação de moeda, índices econômicos — BACEN tem API pública aberta, sem CNPJ nem contrato) | Scraping/consumo de API real, ETL, agregação para relatório |
| **Gateway/BFF**                  | Ponto de entrada, agregação de chamadas                                                                                                   | API Gateway, composição de serviços                         |
