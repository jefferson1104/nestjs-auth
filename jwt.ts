// Nesse arquivo vamos aprender a montar um JWT (Json Web Token) manual
const base64Url = require('base64url');
const crypt = require('crypto');

const header = {
  alg: 'HS256',
  typ: 'JWT',
};

// corpo de dados ou dados principais do token
const payload = {
  username: 'jefferson1104',
  name: 'Jefferson Soares',
  exp: new Date().getTime(), // timestamp: duração do token
};

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

console.log('HEADER ENCODED = ', headerEncoded);
console.log('PAYLOAD ENCODED = ', payloadEncoded);

// Chave secreta armazenada em uma variavel de ambiente
const key = 'abcde123456';

const signature = crypt
  .createHmac('sha256', key)
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('bin');

console.log('ASSINATURA = ', signature);

/* 
  Para testar execute o comando abaixo no terminal:
    node_modules/.bin/ts-node jwt.ts
*/

// Concatenando (juntando) todas as informações, e convertendo a assinatura para base64-url
console.log(
  `JWT = ${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`,
);

// verificar se o token funcionou no site https://jwt.io/
