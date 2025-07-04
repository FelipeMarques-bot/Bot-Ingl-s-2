require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { handleAudioTreino } = require('./handlers/audioTreino');

console.log("🟢 Inicializando o bot...");

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true }
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log("✅ Bot conectado com sucesso ao WhatsApp!");
});

client.on('message', async (msg) => {
  console.log(`📨 Mensagem recebida de ${msg.from} [tipo: ${msg.type}]`);

  if (msg.type === 'ptt' && msg.hasMedia) {
    await handleAudioTreino(msg, client);
  } else {
    console.log("⛔ Mensagem ignorada (não é áudio válido)");
  }
});

client.initialize();
