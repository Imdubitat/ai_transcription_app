async function uploadFile() {
    const input = document.getElementById("videoFile");
    const file = input.files[0];
    if (!file) return alert("Selecione um vídeo primeiro.");
  
    const formData = new FormData();
    formData.append("file", file);
  
    const res = await fetch("http://localhost:5000/transcribe", {
      method: "POST",
      body: formData,
    });
  
    const data = await res.json();
    document.getElementById("result").textContent = data.text || data.error;
  }
  