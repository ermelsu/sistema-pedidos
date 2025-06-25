const API_URL = "https://script.google.com/a/macros/faculdadececape.edu.br/s/AKfycbzgQyknBpnzz7X-sdVpg2nc6_b_zJRouENAJx-XgKR2VmLnzdy_cO_VTfPXsSJKE2XtQg/exec";

function loginUser() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  fetch(`${API_URL}?action=login&email=${encodeURIComponent(email)}`, { method: "POST" })
    .then(res => res.text())
    .then(tipo => {
      if (tipo === "usuario") {
        window.location.href = "user.html";
      } else if (tipo === "admin") {
        window.location.href = "admin.html";
      } else {
        alert("E-mail não autorizado.");
      }
    });
}