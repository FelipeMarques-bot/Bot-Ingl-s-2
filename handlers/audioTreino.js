const fs = require('fs');
const path = require('path');
const { transcreveAudio } = require('../utils/deepgram');
const stringSimilarity = require('string-similarity');

// Importa palavra atual do treino
let palavraAtual = '';
let filaUsuarios = {};

async function handleAudioTreino(msg, client) {
  const user = msg.from;

  if (!msg.hasMedia || (msg.type !== 'ptt' && msg.type !== 'audio')) {
    console.log("⛔ Áudio inválido ou tipo não suportado.");
    return;
  }

  const media = await msg.downloadMedia();
  if (!media || !media.mimetype.includes('audio')) {
    console.log("⛔ Mídia recebida não é áudio.");
    return;
  }

  const buffer = Buffer.from(media.data, 'base64');
  const filename = `audio_${Date.now()}.ogg`;
  const audioPath = path.join(__dirname, '..', 'audio', filename);
  fs.writeFileSync(audioPath, buffer);
  console.log(`✅ Áudio salvo: ${audioPath}`);

  await client.sendMessage(user, '🔎 Recebi seu áudio! Avaliando sua pronúncia...');

  const transcricao = await transcreveAudio(audioPath);
  console.log(`📝 Transcrição: ${transcricao}`);

  if (!transcricao || transcricao.trim().length === 0 || transcricao === 'Transcrição vazia.') {
    await client.sendMessage(user, '❌ Não consegui entender sua pronúncia. Tente falar mais pausadamente ou com menos ruído.');
    return;
  }

  const palavraEsperada = filaUsuarios[user];
  if (!palavraEsperada) {
    await client.sendMessage(user, '⚠️ Nenhuma palavra em treino foi encontrada. Envie "treinar" para começar novamente.');
    return;
  }

  const similaridade = stringSimilarity.compareTwoStrings(
    transcricao.toLowerCase(),
    palavraEsperada.toLowerCase()
  );
  const porcentagem = Math.round(similaridade * 100);

  let feedback = '';
  if (porcentagem > 85) {
    feedback = '🎉 Excelente! Sua pronúncia está ótima!';
  } else if (porcentagem > 60) {
    feedback = '👍 Boa tentativa! Um pouco mais de treino e você acerta!';
  } else {
    feedback = '⚠️ Vamos praticar mais um pouco. Tente de novo com calma!';
  }

  await client.sendMessage(user,
    `✅ Palavra esperada: *${palavraEsperada}*\n` +
    `🗣️ Transcrição detectada: _${transcricao}_\n` +
    `📊 Similaridade: *${porcentagem}%*\n\n${feedback}`
  );

  // Avança para a próxima palavra
  const palavras = JSON.parse(fs.readFileSync('palavras.json'));
  const indexAtual = palavras.findIndex(p => p.ingles === palavraEsperada);
  const proxima = palavras[indexAtual + 1];

  if (proxima) {
    filaUsuarios[user] = proxima.ingles;
    await client.sendMessage(user, `👉 Próxima palavra: *${proxima.ingles}* (${proxima.portugues})`);
  } else {
    await client.sendMessage(user, `✅ Você concluiu as 10 palavras de hoje! Parabéns! 🥳`);
    delete filaUsuarios[user];
  }
}

module.exports = { handleAudioTreino, filaUsuarios };