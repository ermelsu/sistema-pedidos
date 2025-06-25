const API_URL = "https://script.google.com/a/macros/faculdadececape.edu.br/s/AKfycbzgQyknBpnzz7X-sdVpg2nc6_b_zJRouENAJx-XgKR2VmLnzdy_cO_VTfPXsSJKE2XtQg/exec";

document.addEventListener('DOMContentLoaded', () => {
  fetch(`${API_URL}?action=listarPedidos`, { method: 'POST' })
    .then(res => res.text())
    .then(json => {
      const dados = JSON.parse(json);
      const tbody = document.querySelector('#tabela-pedidos tbody');
      dados.slice(1).forEach((row, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row[0]}</td>
          <td>${row[1]}</td>
          <td>${row[2]}</td>
          <td>${row[3]}</td>
          <td>${row[4]}</td>
          <td>
            <select onchange="atualizarStatus(${i + 1}, this.value)">
              <option value="pendente" ${row[4]==='pendente'?'selected':''}>Pendente</option>
              <option value="em compra" ${row[4]==='em compra'?'selected':''}>Em Compra</option>
              <option value="aprovado" ${row[4]==='aprovado'?'selected':''}>Aprovado</option>
              <option value="entregue" ${row[4]==='entregue'?'selected':''}>Entregue</option>
            </select>
          </td>
        `;
        tbody.appendChild(tr);
      });
    });
});

function atualizarStatus(linha, status) {
  const params = new URLSearchParams({
    action: 'atualizarStatus',
    linha,
    status
  });
  fetch(`${API_URL}?${params.toString()}`, { method: 'POST' })
    .then(res => res.text())
    .then(r => {
      if (r === 'ok') {
        alert('Status atualizado!');
      } else {
        alert('Erro ao atualizar.');
      }
    });
}