const form = document.getElementById("form-gasto");
const msg = document.getElementById("msg");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const descricao = document.getElementById("descricao").value.trim();

  const valor = parseFloat(document.getElementById("valor").value);
  const categoria = document.getElementById("categoria").value;
  if (!descricao || valor <= 0 || !categoria) {
    alert("Preencha os campos corretamente!");
    return;
  }
  adicionarGasto(descricao, valor, categoria);
  form.reset();
  msg.textContent = "Gasto adicionado com sucesso!";
  setTimeout(() => {
    msg.textContent = "";
  }, 2000);
});
