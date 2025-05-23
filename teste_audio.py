from elevenlabs import generate, play, set_api_key

set_api_key("Ssk_d6c910bf0b27948ca665d7464f17bd0d4c50afe0e6cc7130")

audio = generate(
    text="Hello! This is a test using ElevenLabs.",
    voice="Rachel",  # Você pode escolher outras vozes disponíveis
    model="eleven_monolingual_v1"
)

play(audio)