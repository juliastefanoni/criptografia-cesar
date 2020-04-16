import express from 'express';

const server = express();
server.use(express.json());

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let result = [];

function encrypt(request, response) {
  const { phrase, chave } = request.body;

  for(let i = 0; i < phrase.length; i++){
    for(let j = 0; j < alphabet.length; j++){
      if(phrase[i] === alphabet[j]){
        if(phrase[i] > alphabet[26]) {
          j = 0;
        }
        result[i] = alphabet[(j + chave) % alphabet.length];
      }
      if(phrase[i] === " "){
        result[i] = phrase[i];
      }
    }
  }

  return response.json({frase_criptografada: result.join("")});
}

server.post('/criptografar', encrypt)

server.listen(3000);
