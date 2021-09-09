const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = process.argv.slice(2)[0];

bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

/*
  para gerar uma senha execute o comando a seguir no terminal:
  > node generate-password.js senha
  
  Exemplo: node generate-password.js teste123
*/
