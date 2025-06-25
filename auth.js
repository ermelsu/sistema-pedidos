
const API_URL = "https://script.google.com/macros/s/AKfycbzgQyknBpnzz7X-sdVpg2nc6_b_zJRouENAJx-XgKR2VmLnzdy_cO_VTfPXsSJKE2XtQg/exec";

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
