const dotsElement = document.getElementById('dots');
const resultElement = document.getElementById('result');
const btnEnviar = document.getElementById('btnEnviar');

let dotCount = 0;
let dotInterval;

function startDotsAnimation() {
  dotCount = 0;
  dotsElement.textContent = '';
  dotInterval = setInterval(() => {
    dotCount = (dotCount + 1) % 4; // 0 a 3
    dotsElement.textContent = '.'.repeat(dotCount);
  }, 500);
}

function stopDotsAnimation() {
  clearInterval(dotInterval);
  dotsElement.textContent = '';
}

document.getElementById('videoFile').addEventListener('change', function () {
  const fileName = this.files[0] ? this.files[0].name : 'Nenhum arquivo selecionado';
  document.getElementById('fileName').textContent = fileName;
});

async function uploadFile() {
  const input = document.getElementById("videoFile");
  const file = input.files[0];
  if (!file) return alert("Selecione um vídeo primeiro.");

  btnEnviar.disabled = true;
  resultElement.textContent = "Arquivo enviado. Processando transcrição";
  startDotsAnimation();

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("http://localhost:5000/transcribe", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    stopDotsAnimation();

    typeWriterEffect(resultElement, data.text || data.error || "Sem texto retornado.");

  } catch (error) {
    stopDotsAnimation();
    resultElement.textContent = "Erro na transcrição: " + error.message;
  } finally {
    btnEnviar.disabled = false;
  }
}

function typeWriterEffect(element, text, speed = 40) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
