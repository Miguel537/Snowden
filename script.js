// Fecha o modal ao clicar em "Concordo"
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Bloqueia salvamento no localStorage (demonstração)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Dados enviados com segurança. Nenhum dado sensível será armazenado localmente.");
});
