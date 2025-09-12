import os
from elevenlabs import generate, play, set_api_key

set_api_key(os.environ.get("ELEVENLABS_API_KEY", ""))

audio = generate(
    text="Hello! This is a test using ElevenLabs.",
    voice="Rachel",  # Você pode escolher outras vozes disponíveis
    model="eleven_monolingual_v1"
)

play(audio)
