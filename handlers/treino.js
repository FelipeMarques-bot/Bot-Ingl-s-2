const fs = require('fs');
const { filaUsuarios } = require('./audioTreino');

async function handleTreino(msg, client) {
  const palavras = JSON.parse(fs.readFileSync('palavras.json'));

  const primeiras10 = palavras.slice(0, 10);
  const primeira = primeiras10[0];

  filaUsuarios[msg.from] = primeira.ingles;

  const mensagem = `
📘 *Modo Treino Ativado!*
Você irá praticar 10 palavras em inglês por áudio. 🎧

👉 Primeira palavra: *${primeira.ingles}* (${primeira.portugues})
Envie um áudio pronunciando essa palavra para começarmos!
`;

  await client.sendMessage(msg.from, mensagem);
}

module.exports = { handleTreino };