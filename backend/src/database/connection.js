const knex = require('knex');
const configuration = require('../../knexfile');

//Criando conexão de desenvolvimento
const connection = knex(configuration.development);

module.exports = connection;