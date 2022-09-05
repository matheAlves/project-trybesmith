Introdução 
----------

Projeto de API RESTful para gerenciamento de uma loja com temática medieval, conectado a um banco de dados MySQL e escrito em TypeScript.

Este foi meu primeiro projeto desenvolvido com uso de TypeScript (e tipagem) e o mesmo se mostrou extremamente útil na prevenção de erros e na harmonização do código. 
Também se trata de meu primeiro projeto inteiramente desenvolvido com o uso de classes, aplicando o conceito de programação orientada a objetos.

A estruturação da aplicação também foi atenciosamente pensada para maximizar a eficiência e a legibilidade do código, e aplica a arquitetura em camadas Model, Service e Controller.

A aplicação utiliza o padrão JSON Web Token para autenticação do usuário e a biblioteca Joi para verificações.

Todos os commits estão no padrão Conventional Commits.

Este projeto foi desenvolvido durante a formação Web Full Stack da Trybe.

Instalação
----------

Instalar as dependências:

```bash
npm install
```
O banco de dados MySQL deve ter a seguinte estrutura:

![database schema](./database.png)

O arquivo Trybesmith.sql contém queries que criam o banco e o povoam com items de exemplo. (Este arquivo é de autoria da Trybe)

Para fazer a conexão com o banco, crie um arquivo .env na pasta raíz do projeto no seguinte modelo, substituindo os valores pelos seus dados:

```
MYSQL_HOST=seuhost
MYSQL_USER=seuusuario
MYSQL_PASSWORD=suasenha
```


Funcionalidades
---------------

### Para iniciar a aplicação:

```bash
npm start
```
* Para listar todos os produtos faça uma requisição do tipo **GET** para o endpoint `/products`.

* Para listar todos os pedidos faça uma requisição do tipo **GET** para o endpoint `/orders`.

* Para criar um usuário faça uma requisição do tipo **POST** para o endpoint `/users` no seguinte formato:

```json
{ 
  "username": "Bilbo",
  "classe": "Thief",
  "level": 50,
  "password": "rivendell"
}
```

* Para fazer login faça uma requisição do tipo **POST** para o endpoint `/login` no seguinte formato:

```json
{ 
  "username": "Bilbo",
  "password": "rivendell"
}
```

Em caso de sucesso, o servidor retornará um token:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlNhbSIsImNsYXNzZSI6InN3b3Jkc21hbiIsImxldmVsIjoxMCwicGFzc3dvcmQiOiJTZGZnaGZnaGZnaGRmZ2EifQ.LHsrnJyY4hGyimFae-rH4phvSiK98AMjzI7m2I6cW3U"
}
```

Ele é necessário sob o header `Auth` nas requisições do tipo **POST** para os endpoints `/products` e `/orders` para a adição de novos produtos e pedidos, respectivamente.

* Para tais requisições, os modelos JSON são:

```json
// novo produto
{
  "name": "Master Sword",
  "amount": "40 gold"
}
```

```json
// novo pedido
{
  "productsIds": [1, 2]
}
```
