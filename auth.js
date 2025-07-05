const API_URL = "https://script.google.com/macros/s/AKfycbyPvxGbS5kbgFHgq8g0flasqwwbWjE87fhXaXRTBbm3IXq0xO7625-QRq1jEYUI0kGQ/exec";

async function loginUser() {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!email || !senha) {
    alert('Preencha todos os campos.');
    return;
  }

  try {
    const response = await fetch(`${API_URL}?action=login&email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`);
    const result = await response.json();

    if (result.success) {
      localStorage.setItem("userEmail", email);
      if (result.tipo === "admin") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "user.html";
      }
    } else {
      alert("E-mail ou senha incorretos.");
    }
  } catch (error) {
    alert("Erro ao fazer login.");
    console.error(error);
  }
}
