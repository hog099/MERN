<h2  align="center">
<img  alt="cover-alt"  src=".github/cover.png" />
</h2>

  
<p  align="center">
<a  href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-info">Informações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-build">Build</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-licença">Licença</a>
</p>

  

## 💻 Projeto
  

Este projeto é uma aplicação MERN M(Mongo) E(Express) R(React) N(Nodejs) com typescript, este é um monorepo com um client para o projeto em front-end.
  

## 🧪 Tecnologias

  
  

O projeto foi desenvolvido usando as seguintes tecnologias:

  

- [Mongodb](https://www.mongodb.com)



- [ExpressJS](https://expressjs.com/pt-br/)



- [React](https://pt-br.reactjs.org/)



- [Next.JS](https://nextjs.org/)



- [Node.js](https://nodejs.org/)

    

- [TypeScript](https://www.typescriptlang.org/)

  

- [Swagger](https://swagger.io/)

  

## 📝 Informações

O projeto é um monorepo com back-end e front-end, possuimos uma api com nodejs e typescript e um front-end com nextjs, para executarmos é necessário irmos na pasta **/client** que é do front-end, realizarmos os respectivos ajustes e alterações desejadas e retornando na pasta raiz possuimos um script que irá buildar tanto o front-end quanto o back-end.

  
## 🚀 Build

Para realizar o build, crie um script no arquivo **package.json** e basta executa-lo e será feito o build

```js
 "scripts": {
    "dev": "nodemon --watch src/ --exec ts-node src/server.ts --trace-warnings -e ts",
    "build": "rm -rf dist && tsc",
    "build-full": "cd client && yarn export && cd .. && gulp copyclient && rm -rf dist && tsc",
    "run-prod": "node dist/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```bash
$ yarn build-full
```

    

## 📝 Licença 
 

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

  ---


<p  align="center">Made with 💜 by <a  href="https://github.com/hog099"  target="_blank">Hudson Oliveira</a></p>