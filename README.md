# WhatsApp English Pronunciation Bot

This project provides a WhatsApp bot for practicing English pronunciation. Users send voice messages and receive feedback comparing their pronunciation to the expected phrase. Transcription uses Deepgram and audio synthesis can be powered by ElevenLabs.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root and set the following variables:

- `DEEPGRAM_API_KEY` – API key for Deepgram speech-to-text.
- `ELEVENLABS_API_KEY` – API key for ElevenLabs text-to-speech (if using synthesized voices).
- `SESSION_FOLDER` – optional path for whatsapp-web.js authentication files.

```
DEEPGRAM_API_KEY=your_deepgram_key_here
ELEVENLABS_API_KEY=your_elevenlabs_key_here
SESSION_FOLDER=.wwebjs_auth
```

## Running Locally

After installing dependencies and setting environment variables, start the bot with:

```bash
npm start
```

On first run, a QR code appears in the terminal. Scan it with WhatsApp to connect the bot.

## Deployment Notes

This bot can run on free cloud platforms such as Heroku or Railway. Ensure that environment variables are configured in the platform dashboard. Persistent storage is required for WhatsApp session files; configure a volume or use the platform’s persistent storage features.


