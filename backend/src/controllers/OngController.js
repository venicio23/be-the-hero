// pacote responsavel pelo método que ira criar um numero "aleatório" para o ID.
const crypto = require('crypto'); 

const connection =  require('../database/connection');

module.exports = {
  async index(request, response){
    const ongs =  await connection('ongs').select('*');
  
    return response.json(ongs);
  },
  
  async create( request, response){
    const {name, email, whatsapp, city, uf} = request.body;

    //Método que ira gerar 4 bytes de caracter aleatorio e converter em uma string Hexadecimal.
    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
  
    return response.json({ id });
  }

  
}