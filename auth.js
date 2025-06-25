
const API_URL = "https://script.google.com/macros/s/AKfycbyPvxGbS5kbgFHgq8g0flasqwwbWjE87fhXaXRTBbm3IXq0xO7625-QRq1jEYUI0kGQ/exec";

function loginUser() {
  const email = document.getElementById("email").value.trim();
  fetch(API_URL + "?action=login&email=" + encodeURIComponent(email), { method: "POST" })
    .then(res => res.text())
    .then(tipo => {
      if (tipo === "admin") {
        localStorage.setItem("usuario", email);
        window.location.href = "admin.html";
      } else if (tipo === "usuario") {
        localStorage.setItem("usuario", email);
        window.location.href = "user.html";
      } else {
        alert("Usuário não autorizado.");
      }
    });
}

function carregarProdutos() {
  fetch(API_URL + "?action=getProdutos", { method: "POST" })
    .then(res => res.json())
    .then(lista => {
      const container = document.getElementById("produtos");
      if (!container) return;
      container.innerHTML = "<p>Selecione os materiais:</p>";
      lista.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
          <label><input type="checkbox" name="produto" value="${item[0]}"> ${item[0]}</label>
        `;
        container.appendChild(div);
      });
    });
}

function carregarUltimoPedido() {
  fetch(API_URL + "?action=listarPedidos", { method: "POST" })
    .then(res => res.json())
    .then(pedidos => {
      const email = localStorage.getItem("usuario");
      const ultimos = pedidos.reverse().find(p => p[0] === email);
      const container = document.getElementById("ultimo-pedido");
      if (ultimos) {
        container.innerHTML = `<strong>Último pedido:</strong><br>Itens: ${ultimos[3]}<br>Status: ${ultimos[4]}`;
      }
    });
}
