import whisper
from googletrans import Translator
import os

def transcribe_and_translate(file_path):
    print(f"🔁 Iniciando transcrição de: {file_path}")
    model = whisper.load_model("base")
    result = model.transcribe(file_path)

    transcribed_text = result["text"]
    print(f"📝 Transcrição: {transcribed_text[:100]}")

    translator = Translator()
    translated = translator.translate(transcribed_text, src='en', dest='pt').text
    print(f"🌍 Tradução: {translated[:100]}")

    # Salvar em um arquivo .txt com mesmo nome do vídeo
    base_name = os.path.splitext(os.path.basename(file_path))[0]
    output_path = f"outputs/{base_name}_transcricao.txt"

    # Criar pasta se não existir
    os.makedirs("outputs", exist_ok=True)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(translated)

    print(f"📄 Transcrição salva em: {output_path}")
    return translated
