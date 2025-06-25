
const API_URL = "https://script.google.com/macros/s/AKfycbyPvxGbS5kbgFHgq8g0flasqwwbWjE87fhXaXRTBbm3IXq0xO7625-QRq1jEYUI0kGQ/exec;

function carregarProdutos() {
  fetch(API_URL + "?action=getProdutos", { method: "POST" })
    .then(res => res.text())
    .then(text => {
      const lista = JSON.parse(text);
      const container = document.getElementById("produtos");
      if (!container) return;
      container.innerHTML = "";
      lista.slice(1).forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
          <label>
            <input type="checkbox" name="produto" value="${item[0]}"> 🍀 ${item[0]}
          </label>`;
        container.appendChild(div);
      });
    })
    .catch(() => {
      const container = document.getElementById("produtos");
      if (container) container.innerHTML = '<p style="color:red">Erro ao carregar produtos.</p>';
    });
}

function loginUser() {
  const email = document.getElementById("email").value.trim();
  const dominio = "@faculdadececape.com";
  const admins = ["admin@faculdadececape.com", "silva@faculdadececape.com"];

  if (!email.endsWith(dominio)) {
    alert("Use um e-mail institucional.");
    return;
  }

  if (admins.includes(email.toLowerCase())) {
    localStorage.setItem("usuario", email);
    window.location.href = "admin.html";
  } else {
    localStorage.setItem("usuario", email);
    window.location.href = "user.html";
  }
}

