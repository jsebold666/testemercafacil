# backend_mercafacil_integracao

API para insercao e listagem de contatos de clientes, conforme orientando no documento.

## Necessários

- [npm](https://www.npmjs.com/get-npm)
- [Node](https://nodejs.org/) (v10.16)
- [Docker Compose](https://docs.docker.com/compose/install/)


## Dependencias

    - body-parser 1.19.0
    - cors 2.8.5
    - dotenv 8.3.0
    - express 4.17.1
    - jsonwebtoken8.5.1
    - mysql2 2.2.5
    - newman 5.2.3
    - pg 8.6.0
    - sequelize 6.6.2
    - validatorjs 3.22.1```

### Instalação da Aplicação

Instalar os pacotes: 

```npm install```

Subir a instância do  docker-compose (deve ter permissão root ou administrador no caso windows.):

```docker-compose up```

Para baixar a instância  do docker-compose.

```docker-compose down```

Para dar iniciar a aplicação: 

```npm start```

### Testes de rota da Aplicação

Dentro da pasta da app/collectionPostman, temos o 'teste_endPointsApp.postman_collection', para dentro do postman, após rodar a aplicação e testar os endpoint.
Temos dois tipos de teste, usando o Postman e usando newman, que vai testar os endpoint via terminal.

Para testar via newman, basta navegar até a pasta raiz do projeto e rodar o comando a baixo.

```newman run collectionPostman/teste_endPointsApp.postman_collection.json```

