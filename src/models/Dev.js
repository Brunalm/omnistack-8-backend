const { Schema, model } = require('mongoose'); //{} uma forma mais facil de importação 

//estrutura da tabela no banco de dados para armazenar um dev dentro
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    user: {
        type: String,
        required: true,  
    },
    bio: String, //não precisa de type quando não é obrigatório
    avatar: {
        type: String,
        required: true,
    },
}, {
    timestamps: true 
    //cria uma coluna de forma automatica chamada createdAt em cada registro que foi salvo dentro do bd
    //e outra coluna chamada updatedAt
});

module.exports = model('Dev', DevSchema); //primeiro parametro é o nome