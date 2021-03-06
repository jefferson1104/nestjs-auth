<div align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  <p align="center">Autenticação de usuário utilizando  JWT (Json Web Token) e NestJS</p>
  <p align="center">
    <img alt="technology" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    <img alt="technology" src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white">
    <img alt="technology" src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens">
  </p>
</div>

## About this project
An API developed with the Nest.js framework and typescript, a basic example of an authentication system using JWT.

![screenshot](./.github/screenshot/screenshot.png)

## Run the project
```bash
# Clone this repository
$ git clone https://github.com/jefferson1104/nestjs-auth.git

# Running this API
$ npm run start:dev
```

## Generate a password with bcrypt
```bash
# Run the command below in the project terminal
node generate-password.js PASSWORD

## E X A M P L E
# comand: node generate-password.js 123456
# output: $2b$10$2QHAEW0XFWmCrxeJGBKa2eSXXvPcsWp.WWsohEfqzn1LWs/4NLvrS
```