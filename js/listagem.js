const lista = document.getElementById("lista-gastos");
const totalEl = document.getElementById("total");
function renderizar() {
  lista.innerHTML = "";
  let total = 0;
  gastos.forEach((gasto) => {
    total += gasto.valor;
    const li = document.createElement("li");
    li.innerHTML = `${gasto.descricao} - R$ ${gasto.valor.toFixed(2)} (${gasto.categoria})
<button onclick="excluir(${gasto.id})">X</button>`;
    lista.appendChild(li);
  });
  totalEl.textContent = total.toFixed(2);
}
function excluir(id) {
  if (confirm("Deseja realmente excluir este gasto?")) {
    removerGasto(id);
    renderizar();
  }
}

// Renderiza quando a página carrega
renderizar();
