const { createClient } = require('@deepgram/sdk');
const fs = require('fs');

const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

async function transcreveAudio(caminhoDoArquivo) {
  try {
    const buffer = fs.readFileSync(caminhoDoArquivo);

    const { result } = await deepgram.listen.prerecorded.transcribeFile(
      buffer,
      {
        mimetype: 'audio/ogg',
        model: 'general',
        language: 'en-US',
        smart_format: true,
      }
    );

    const transcript = result?.results?.channels[0]?.alternatives[0]?.transcript;

    return transcript || 'Transcrição vazia.';
  } catch (error) {
    console.error('❌ Erro ao chamar o Deepgram:', error.message);
    return 'Erro ao processar o áudio.';
  }
}

module.exports = { transcreveAudio };