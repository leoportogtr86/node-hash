const bcrypt = require('bcrypt');
const salt = 10;
const senha = "senha123";
const hash = "$2b$10$jkhDPw3UMfCZK9cAetaPaeZCjOkkBJ/eBkuNp5KNPpbe5XWCZt1sG";

//gerando hash
bcrypt.hash(senha, salt, (err, hash) => {
    if (err) {
        return console.error(`Erro ao gerar hash: ${err}`);
    }
    console.log(hash);
});


bcrypt.compare(senha, hash, (err, res) => {
    if (err){
        return console.error(`Erro: ${err}`);
    }
    console.log(res);
})




