# Projeto teste para desenvolvedor backend utilizando NodeJS, MongoDB e Express

## Qual o objetivo da API?

A API foi totalmente escrita utilizando apenas a linguagem javascript, utilizando o NodeJS, com o Express e um Banco de dados não-relacional, MongoDB. A API foi escrita de maneira a ter sua integração e implementação de maneira mais simples e prática.

Apesar de ser utilizar o banco de dados MongoDB ela é totalmente aberta para futuras alterações e até mesmo para inserção de um outro banco de dados, seja ele relacional ou não.

A API simula um ambiente de Aulas (Classes) e Comentários (Comments)

O sistema possui 8 diferentes rotas para cada função que foi solicitada a ela. Logo abaixo é possível observar o que cada uma faz e até mesmo como clonar o repositório.

## Como clonar o código?

Primeiramente, voce deve ter o git instalado em sua máquina para poder clonar este e qualquer outro repositório. Uma vez com o git instalado, abra o seu terminal em um diretório do seu gosto e digite os seguintes commandos:

``` sh
git clone https://github.com/hahuma/teste_tindin
cd teste_tindin 
```

## Rotas

### ```GET:  /classes```

Esta rota não necessita de nenhum ```body params``` e retorna uma lista paginada (máximp de 50 classes por requisicão), porém pode receber um ```query params``` opcional que vai ser correspondente à paginação de comentários. ou seja, caso sua aplicação tenha 75 aulas cadastradas, por exemplo, na primeira requisição( inclusive as requisições sem a presença de nenhum ```query params``` ) irá sempre retornar as 50 primeiras que foram pegas pelo banco de dados e caso deseje um retorno das aulas restante é necessário passar um query params do tipo ```page``` simbolizando qual página você está em busca. **Obs: O padrão é sempre 1**

**Exemplo:**

Requisitando as primeiras 50 aulas (com e sem o query params):

``` xml
/classes ou
/classes/?page=1
```

Requisitando aulas subsequentes (sempre de 50 em 50):

```xml
/classes/?page=2
/classes/?page=3
/classes/?page=4
```

O retorno será um array de aulas como o exemplo abaixo:

``` js
[
    {
        "total_comments": 10, // total de comentários
        "_id": "a232rfe33284dsa23", // _id da aula que é criado pelo banco de dados 
        "name": "Aula x", // nome da aula
        "description": "Estudo sobre implementação de...", // descrição da aula
        "video": "http://somevideourl.com/video", // url para o vídeo 
        "data_init": 20201208, // data que a aula estará disponível
        "data_end": 20211212, // data que a aula estará disponível
        "createdAt": "2020-12-07T14:22:33.717Z", // dados de criação criados pelo banco de dados
        "updatedAt": "2020-12-07T19:45:11.227Z", // dados de atualização criados pelo banco de dados
        "date_created": 20201207, // data em que a aula foi criada 
        "date_updated": 20201207, // data em que a aula foi alterada
        "__v": 0,
        "last_comment": "Melhor professor!",  // último comentário que aquela aula recebeu, caso não haja nenhum comentário, esses dois campos não retornarão
        "last_comment_date": "2020-12-07T22:26:40.532Z" // data em que foi feito esse comentário

    },
    ...
]

```

Essa rota também ira retornar no response header  um atributo ```X-Total-Count``` contendo o total de aulas cadastradas no banco de dados.

### ```POST: /classes```

Este método necessita de um ```request.body``` como no exemplo abaixo contendo todas as informações necessárias para o cadastro de uma nova aula.

**Url:**

```xml
/classes
```

**Body da requisição:**

```js
{
    "name": "Aula y", // nome da aula
    "description": "Tirando suas dúvidas sobre...", // descrição da aula
    "video": "http://somevideourl.com/tirando_duvidas", // url para o vídeo 
    "data_init": 20201216, // data que a aula estará disponível, no formato YYYYMMDD
    "data_end": 20211212 // data que a aula estará disponível, no formato YYYYMMDD
}
```

### ```GET: /classes/:id```

Esta rota é usada caso seja preciso retornar os dados de uma única aula cadastrada. Sua unica diferença é que dessa vez é necessário passar o id da aula desejada como parâmetro. e será retornado um objeto JSON com as seguintes propriedades.

**Exemplo de request:**

``` js
/classes/a232rfe33284dsa23 // id é referente ao _id da aula
```

**Exemplo de Response:**

``` js
{
  "total_comments": 14, // total de comentários
  "_id": "a232rfe33284dsa23", // _id da aula que é criado pelo banco de dados 
  "name": "Aula x", // nome da aula
  "description": "Estudo sobre implementação de...", // descrição da aula
  "video": "http://somevideourl.com/video", // url para o vídeo 
  "data_init": 20201208, // data que a aula estará disponível
  "data_end": 20211212, // data que a aula estará disponível
  "createdAt": "2020-12-07T14:22:33.717Z", // dados de criação criados pelo banco de dados
  "updatedAt": "2020-12-07T19:45:11.227Z", // dados de atualização criados pelo banco de dados
  "date_created": 20201207, // data em que a aula foi criada 
  "date_updated": 20201207, // data em que a aula foi alterada
  "__v": 0,
  "comments": [
    "Nao gostei",
    "Que aula espetacular",  // Os três comentários mais recentes àquela respectiva aula
    "Nossa gostei muito."
  ]
}
```

### ```PUT: /classes``` 

Através dessa requisição é feita a atualização de uma aula já existente e caso ocorra tudo bem, a resposta virá com a versão atualizada desta mesma aula, os requisitos são os mesmos que o de criação e o método de filtragem é dado por um  ```query params``` com o id da aula, que é um parâmetro único, já que não devem existir aulas diferentes com o mesmo id.

**Exemplo de Requisição:**

**Url**

```xml
/classes/?id=a232rfe33284dsa23
```

**Body:**

```js
{
    "name": "Aula y",
    "description": "nova descrição", 
    "video": "http://somevideourl.com/tirando_duvidas",
    "data_init": 20201216, 
    "data_end": 20211212 
}
```



### ```DELETE: /classes/:id```

Essa requisição deleta o comentário e retorna um status code 200 caso a operação tenha sido um sucesso.

**Exemplo:**

```xml
/classes/a232rfe33284dsa23
```

### ```GET: /class/comments```

Essa rota se comporta da mesma maneira que a rota ``` /classes ``` e utiliza do mesmo método para selecionar paginas filtradas. E assim como ``` /classes ``` ela retorna um header ```X-Total-Count``` com o total de comentários salvos no banco de dados.

**Exemplo de resposta para essa requisição:**

``` js
[
    {
        "_id": "a232rfe33284dsa23", // _id do comentário que é criado pelo banco de dados 
        "id_class": "422n32b2vuo4i498", // _id da aula ao qual esse comentário foi feito
        "comment": "Me ajudou bastante aqui, muito legal...", // descrição da aula
        "createdAt": "2020-12-07T14:22:33.717Z", // dados de criação criados pelo banco de dados
        "updatedAt": "2020-12-07T19:45:11.227Z", // dados de atualização criados pelo banco de dados
        "__v": 0

    },
    ...
]

```

### ```POST: /classes/comment```

Este método necessita de um ```request.body``` com apenas um campo, que é o comentário, e de um ```query params``` com o id da aula conrespondente. Segue o exemplo abaixo:

**Url:**

```xml
/classes/comment/?id=a232rfe33284dsa23
```

**Body da requisição:**

```js
{
    "comment": "Obrigado por essa aula"
}
```

### ```DELETE: /classes/comment/:id```

Essa classe deleta o comentário e retorna um status code 200 caso a operação tenha sido um sucesso.

**Exemplo:**

```xml
/classes/comment/a232rfe33284dsa23
```
