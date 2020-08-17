const express = require('express'); //importação
const mongoose = require('mongoose'); //yarn add mongoose, importando a depend.
const routes = require('./routes'); //. referencia a própria pasta

const server = express();

//codigo copiado do mongodb 
mongoose.conect('mongodb+srv://omnistack:bruna123@cluster0.exrsk.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    userNewUrlParser: true
});

server.use(express.json()); //dizendo ao express que será utilizado json
server.use(routes); //configuração d outro arquivo, como um plugin

server.listen(3333); //porta que o servidor vai ouvir 