const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router(); //função utilizada para criar um objeto especifico para rotas

/*passa o endereço que será ouvido
routes.get('/', (req, res) => {
    return res.json({message:`Olá ${req.query.name}`}); 
}); 
*/

//criando novo desenvolvedor
routes.post('/devs', DevController.store);

module.exports = routes; //exportando 