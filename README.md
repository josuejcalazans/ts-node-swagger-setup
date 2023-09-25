# ts-node-swagger-setup

[![LEIAME.md](https://img.shields.io/badge/-Leia%20em%20Portugu%C3%AAs-brightgreen?style=for-the-badge)](./LEIAME.md)

## Summary
- [🧾 About](#-about)
- [🚀 Main technologies](#-main-technologies)
- [💻 Usage](#-usage)
- [👌 Requests](#-requests)

## 🧾 About
This is an example of how to use swagger in a Node/Express application

## 🚀 Main technologies
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/) (_using the [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express) dependency_)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Husky](https://typicode.github.io/husky/) & [Lint Staged](https://github.com/okonet/lint-staged) (_commit hooks_)

_(You can see all the dependencies in the [package.json](./package.json) file)_

## 💻 Usage
1. Clone the project (you'll need a [personal access token](https://docs.github.com/pt/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)):
   ```bash
    git clone https://github.com/josuejcalazans/ts-node-swagger-setup
   ```

2. Access its directory:
   ```bash
    cd ts-node-swagger-setup
   ```

3. Install its dependencies:
   ```bash
    yarn
  
   ```

4. Start the server by running the `dev` script:
   ```bash
    yarn dev
   ```

## 👌 Requests
Now the server is ready to receive your requests. The **Swagger docs** are available on http://localhost:3000/api-docs (or localhost:{AnyOtherServerPortYouAreGoingToUse}/api-docs)! There's a [requests](./requests.http) file in the root directory so you can use (you might want to use the [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension).<br />
Here are the requests you can make:

- GET /
  ```json
  {
    "greeting": "hello world!"
  }
  
  ```
---

<p align="center">This project was created and developed with ❤ by <a href="https://github.com/josuejcalazans">Josue J Calazans</a></p>
