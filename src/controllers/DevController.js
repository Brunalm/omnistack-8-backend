const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
       const {username} = req.body; //qual chave sera buscada, dentro de determinado objeto

       //verificando se o usuario já existe
        const userExists = await Dev.findOnde({ user: username });
        //retorna o usuario ao invés de criar outros
        if(userExists) {
            return res.json(userExists);
        }

       //await usado para que a aplicação espere o axios ser executado
        const response = await axios.get(`https://api.github.com/users/${username}`); //resposta que o axios irá retornar
        //console.log(response.data); sempre estará presente

        const { name, bio, avatar_url: avatar} = response.data;

        //importando infos 
        const dev = await Dev.create({ 
            name,
            user: username,
            bio, 
            avatar
         })

        return res.json(dev);
    }
};