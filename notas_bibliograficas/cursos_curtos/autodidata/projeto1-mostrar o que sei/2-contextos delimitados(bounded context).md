## definição de bounded context:

### contas e transações
contas e transações vão ficar juntos porque precisam de uma auta consistência, e segundo o teorema CAP(teorema que fala que um banco de dados nunca vai ser sempre nos quesitos máximos em consistência, disponibilidade e tolerância a partição) e para facilitar a vida e gestão das informações foi preferido deixar o contexto delimitado englobando os dois para evitar muitas regras de comunicação,regras de consistencia eventual e o uso de SAGA



### concessão de crédito
aqui é um contexto delimitado que define as regras para se conceder o crédito e também de juros que cada usuário vai ter acesso e também esse contexto delimitado vai absorver a questão do score de crédito do cliente uma vez que a previsão é que esse score seja usado apenas no contexto de concessão de crédito




### personalização de noticias para o usuário
aqui é um contexto delimitado para definir as regras para a personalização de dados para cada usuário do sistema

### personalização de sugestões de investimento para o usuário
aqui é um contexto delimitado para definir as regras para de personalização de sugestões de investimento para o usuário


### criptomoeda
aqui define as questões referentes a criptomoeda, não sei muito sobre então vou deixar tudo em apenas um contexto delimitado


### captura de noticias sobre investimento
aqui é o contexto delimitado dedicado para fazer scrapping das páginas com suas próprias regras de negócio sobre o que pode ou não pegar das páginas sem ser processado com relação a noticias,kkkkk


### captura de dados da bolsa de valores(B3)
aqui é o contexto delimitado dedicado para fazer scrapping das páginas com suas próprias regras de negócio sobre o que pode ou não pegar das páginas sem ser processado com relação a B3,kkkkk


