const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, '..', 'progresso.json');

// Garante que o arquivo existe
if (!fs.existsSync(caminho)) fs.writeFileSync(caminho, '{}');

function obterProgresso(numero) {
  const dados = JSON.parse(fs.readFileSync(caminho));
  return dados[numero] || 0;
}

function atualizarProgresso(numero, indice) {
  const dados = JSON.parse(fs.readFileSync(caminho));
  dados[numero] = indice;
  fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
}

module.exports = { obterProgresso, atualizarProgresso };
