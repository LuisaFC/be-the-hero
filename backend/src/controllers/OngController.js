const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs)
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;
        //criando id de 4 bytes aleatorios em hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');
    
        //inserindo os dados na tabela
        await connection('ongs').insert({
            id, 
            name,
            email,
            whatsapp, 
            city, 
            uf
        });
        //O isnert pode demorar um pouco então a requisição ten q ser assincrona
    
        return response.json({id}); //A ong só precisa saber seu proprio id, pois é isso q utiliza para fazer o login
    }
}