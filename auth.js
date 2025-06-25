
function loginUser() {
  const email = document.getElementById('email').value.trim().toLowerCase();
  if (!email) {
    alert('Digite um e-mail válido');
    return;
  }

  // Simulação (substituir com chamada à API do Google Apps Script)
  if (email === 'admin@email.com') {
    window.location.href = 'admin.html';
  } else if (email === 'usuario@email.com') {
    window.location.href = 'user.html';
  } else {
    alert('E-mail não autorizado.');
  }
}
