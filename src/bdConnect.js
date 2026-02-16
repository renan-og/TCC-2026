const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('TCC_2026', 'root', 'aluno123', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => console.log('conectado ao Mysql com sucesso!!!')).catch(error => console.log(`erro: ${err}`));
//tem q autenticar o banco de dados pra ele sincronizar os models do código com as tabelas lá no workbench. por isso .authenticate, se der certo, vai pro .then(), se não, vai pro .catch() 

module.exports = sequelize;