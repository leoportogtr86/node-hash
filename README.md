## Como Usar a Biblioteca Bcrypt com Node.js

A segurança é uma das principais preocupações no desenvolvimento de aplicações web, especialmente quando se trata de
armazenamento de senhas. Utilizar uma técnica robusta de hashing é essencial para proteger as informações dos usuários.
Uma das bibliotecas mais populares para este propósito em Node.js é o `bcrypt`. Este artigo fornecerá um guia completo
sobre como usar a biblioteca `bcrypt` com Node.js.

### O que é Bcrypt?

O `bcrypt` é uma função de hashing de senhas baseada no Blowfish, desenvolvida para ser um método seguro e escalável
para armazenar senhas. O principal objetivo do `bcrypt` é tornar o processo de quebra de senha computacionalmente
inviável, aumentando o tempo necessário para gerar hashes conforme necessário.

### Instalando o Bcrypt

Para começar a usar o `bcrypt` em sua aplicação Node.js, você precisa instalá-lo. Você pode fazer isso usando o npm (
Node Package Manager). Execute o seguinte comando no terminal:

```bash
npm install bcrypt
```

### Usando o Bcrypt

Depois de instalar a biblioteca, você pode começar a usá-la para hash e verificação de senhas. Aqui está um guia passo a
passo:

#### 1. Importando a Biblioteca

Primeiro, importe o `bcrypt` no seu arquivo JavaScript:

```javascript
const bcrypt = require('bcrypt');
```

#### 2. Gerando um Hash

Para hash de uma senha, você pode usar o método `bcrypt.hash()`. Este método requer a senha e um número de salt rounds.
Salt rounds determinam a complexidade do hash gerado. Um valor comum é 10, mas você pode ajustá-lo conforme necessário
para equilibrar segurança e performance.

```javascript
const saltRounds = 10;
const plainTextPassword = 'senhaSegura123';

bcrypt.hash(plainTextPassword, saltRounds, (err, hash) => {
    if (err) {
        return console.error(err);
    }
    console.log('Hash gerado:', hash);
});
```

#### 3. Comparando Senhas

Para verificar se uma senha fornecida corresponde ao hash armazenado, use o método `bcrypt.compare()`. Este método
compara uma senha em texto simples com um hash armazenado e retorna um booleano indicando se elas correspondem.

```javascript
const storedHash = '$2b$10$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Hash armazenado

bcrypt.compare(plainTextPassword, storedHash, (err, result) => {
    if (err) {
        return console.error(err);
    }
    console.log('Senhas correspondem:', result); // true ou false
});
```

### Exemplo Completo

Aqui está um exemplo completo de uma aplicação Node.js que utiliza `bcrypt` para hash e verificação de senhas:

```javascript
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = async (password) => {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        console.log('Senha hash:', hash);
        return hash;
    } catch (err) {
        console.error(err);
    }
};

const loginUser = async (password, storedHash) => {
    try {
        const result = await bcrypt.compare(password, storedHash);
        if (result) {
            console.log('Login bem-sucedido!');
        } else {
            console.log('Senha incorreta.');
        }
    } catch (err) {
        console.error(err);
    }
};

// Exemplo de uso
const runExample = async () => {
    const password = 'senhaSegura123';
    const storedHash = await registerUser(password);

    // Simula uma tentativa de login
    await loginUser(password, storedHash);
};

runExample();
```

### Considerações Finais

- **Segurança**: Sempre use um número adequado de salt rounds para garantir que o processo de hashing seja seguro.
- **Performance**: O aumento dos salt rounds aumenta a segurança, mas também o tempo de processamento. Ajuste conforme
  necessário.
- **Armazenamento**: Sempre armazene apenas os hashes das senhas, nunca as senhas em texto simples.

Usar `bcrypt` para hash de senhas em Node.js é uma maneira eficaz de proteger as credenciais dos usuários em sua
aplicação. Seguindo as melhores práticas e utilizando bibliotecas comprovadas como `bcrypt`, você pode melhorar
significativamente a segurança do seu sistema.

### Referências

- [Documentação do bcrypt](https://www.npmjs.com/package/bcrypt)
- [Segurança em Hashing de Senhas](https://owasp.org/www-project-cheat-sheets/cheatsheets/Password_Storage_Cheat_Sheet.html)

Este artigo abordou o básico de como utilizar o `bcrypt` com Node.js. Implementar essas técnicas corretamente ajudará a
garantir que suas senhas sejam armazenadas de forma segura e estejam protegidas contra acessos não autorizados.