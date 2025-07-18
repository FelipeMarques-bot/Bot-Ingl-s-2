// utils/palavras.js
const palavrasDoDia = [
  'challenge',
  'before',
  'through',
  'thought',
  'enough',
  'though',
  'schedule',
  'comfortable',
  'develop',
  'language',
];

const progressoUsuarios = new Map();

function getProximaPalavra(userId) {
  const hoje = new Date().toISOString().split('T')[0];
  const progresso = progressoUsuarios.get(userId) || { data: hoje, indice: 0 };

  if (progresso.data !== hoje) {
    progresso.data = hoje;
    progresso.indice = 0;
  }

  if (progresso.indice >= palavrasDoDia.length) {
    return null;
  }

  const palavra = palavrasDoDia[progresso.indice];
  progressoUsuarios.set(userId, { ...progresso, indice: progresso.indice + 1 });
  return palavra;
}

function getPalavraAtual(userId) {
  const progresso = progressoUsuarios.get(userId);
  if (!progresso) return null;
  return palavrasDoDia[progresso.indice - 1];
}

module.exports = { getProximaPalavra, getPalavraAtual };
