# Bot-Inglês

Este projeto é um bot do WhatsApp para treinar pronúncia em inglês por áudio. Ele utiliza a biblioteca `whatsapp-web.js` para interagir com o WhatsApp e a API do Deepgram para transcrever os áudios recebidos.

## Pré-requisitos

- Node.js 16 ou superior
- Uma conta na Deepgram para gerar a chave `DEEPGRAM_API_KEY`
- (Opcional) Uma conta na ElevenLabs para testes com `teste_audio.py`, usando `ELEVENLABS_API_KEY`

## Instalação

1. Clone o repositório e instale as dependências:
   ```bash
   npm install
   ```
2. Crie um arquivo `.env` definindo as variáveis de ambiente necessárias:
   ```bash
   DEEPGRAM_API_KEY=seu_token_aqui
   ELEVENLABS_API_KEY=opcional_para_testes
   ```

## Uso

Para iniciar o bot localmente execute:

```bash
npm start
```

Será exibido um QR Code no terminal. Escaneie com o WhatsApp para autenticar.

## Implantação

Você pode implantar este bot em plataformas gratuitas como Railway ou Heroku. Certifique-se de definir as variáveis de ambiente no painel da plataforma e utilizar `npm start` como comando de inicialização.



