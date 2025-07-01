# 📝 AI Transcription App

Um app simples em Flask com front-end web que permite **enviar vídeos**, **transcrevê-los com o modelo Whisper da OpenAI** e **traduzir o resultado para português**.

---

## ✨ Funcionalidades

✅ Upload de vídeos pelo navegador  
✅ Transcrição de áudio em inglês usando Whisper (modelo `medium` ou `base`)  
✅ Tradução automática para o português com Google Translate  
✅ Geração de arquivo `.txt` com o resultado  

---

## 🚀Como rodar localmente

## 🐧 **Linux (Ubuntu/Debian)**
### 1️⃣ Pré-requisitos
```bash
sudo apt update
sudo apt install python3 python3-pip ffmpeg -y
```
Instale o venv se não tiver:
```bash
sudo apt install python3-venv
```
### 2️⃣ Clone o repositório
```bash
git clone https://github.com/SEU-USUARIO/ai-transcription-app.git
cd ai-transcription-app/backend
```
### 3️⃣ Crie e ative o ambiente virtual
```bash
python3 -m venv venv
source venv/bin/activate
```

### 4️⃣ Instale as dependências
```bash
pip install -r requirements.txt
```

### 5️⃣ Ajuste o modelo no transcriber.py (opcional)
Para computadores com pouca RAM ou sem GPU, abra backend/transcriber.py e altere:
```bash
model = whisper.load_model("base", device="cpu")
```

### 6️⃣ Rode o servidor Flask
```bash
python app.py
```

## 🪟 **Windows**\
### 1️⃣ Pré-requisitos
- Python 3.8+
- Git
- ffmpeg
  ⚠️ Adicione o Python e o ffmpeg ao PATH durante a instalação.

### 2️⃣ Clone o repositório
Abra o Prompt de Comando ou PowerShell:
```bash
git clone https://github.com/SEU-USUARIO/ai-transcription-app.git
cd ai-transcription-app\backend
```

### 3️⃣ Crie e ative o ambiente virtual
```bash
python -m venv venv
venv\Scripts\activate
```

### 4️⃣ Instale as dependências
```bash
pip install -r requirements.txt
```

### 5️⃣ Ajuste o modelo no transcriber.py (opcional)
Para PCs com pouca RAM ou sem GPU:
```bash
model = whisper.load_model("base", device="cpu")
```

### 6️⃣ Rode o servidor Flask
```bash
python app.py
```

## 🛠️ Tecnologias
- Python 3
- Flask
- OpenAI Whisper
- Google Translate
- HTML/CSS/Javascript simples
