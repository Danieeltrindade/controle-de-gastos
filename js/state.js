const STORAGE_KEY = "gastos";
let gastos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
function salvarDados() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gastos));
}
function adicionarGasto(descricao, valor, categoria) {
  const novoGasto = {
    id: Date.now(),
    descricao,
    valor: Number(valor),
    categoria,
  };
  gastos.push(novoGasto);
  salvarDados();
}
function removerGasto(id) {
  gastos = gastos.filter((g) => g.id !== id);
  salvarDados();
}
